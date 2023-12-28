import React from "react";
import { Button, Checkbox, Form, Input, Row, Col, Typography } from "antd";
const { Title } = Typography;

const onFinish = (values) => {
  console.log("Success:", values);
  LogIn(values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const LogIn = (user) => {
  fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user }),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data.msg);
      if (data.status === 200) {
        window.location.replace("/location_and_results");
      }
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const LogInPage = () => {
  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col span={24} md={12} lg={8}>
        <div
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              background: "#1890ff",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <Title level={1} style={{ fontSize: "32px", color: "white" }}>
              Please log in:
            </Title>
          </div>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              padding: "20px",
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="UserName"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="unchecked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LogInPage;
