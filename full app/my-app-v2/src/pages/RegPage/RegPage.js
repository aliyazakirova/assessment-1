import React from "react";
import { Button, Form, Input, Typography, Row, Col } from "antd";

const { Title } = Typography;

const RegPage = ({ setLoggedIn }) => {
  const addUser = (user) => {
    fetch("http://localhost:3001/registration", {
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

  const validateEmail = (_, value) => {
    const emailRegex =
      /^[a-zA-Z0-9]*[a-zA-Z][a-zA-Z0-9]*@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (!emailRegex.test(value)) {
      return Promise.reject("Email should contain @ sign");
    }
    return Promise.resolve();
  };

  const validateUserName = (_, value) => {
    const userNameRegex = /^[a-zA-Z][a-zA-Z0-9]*$/;
    if (!userNameRegex.test(value)) {
      return Promise.reject(
        "Username should contain only English words and numbers"
      );
    }
    return Promise.resolve();
  };

  const validatePassword = (_, value) => {
    const lowercaseRegex = /^[a-z]+$/;
    if (!lowercaseRegex.test(value)) {
      return Promise.reject(
        "Password should contain only lowercase English letters"
      );
    }
    return Promise.resolve();
  };

  const validateConfirmPassword = ({ getFieldValue, value }) => {
    return new Promise((resolve, reject) => {
      if (!value || getFieldValue("password") === value) {
        resolve();
      } else {
        reject("Passwords do not match!");
      }
    });
  };

  const onFinishRegister = (values) => {
    const valid =
      validateEmail(null, values.email) &&
      validatePassword(null, values.password) &&
      validatePassword(null, values.ConfirmPassword) &&
      validateUserName(null, values.username) &&
      values.ConfirmPassword === values.password;

    if (valid) {
      addUser(values);
      setLoggedIn(true);
    }
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col span={24} md={12} lg={10}>
        <div
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            overflow: "hidden",
            background: "#f5f5f5",
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
              Welcome to the registration page!
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
            onFinish={onFinishRegister}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
                {
                  validator: validateEmail,
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
                  message: "Please input your username!",
                },
                {
                  validator: validateUserName,
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
                {
                  validator: validatePassword,
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="ConfirmPassword"
              rules={[
                {
                  required: true,
                  message: "Please input your Confirmed password!",
                },
                {
                  validator: validateConfirmPassword,
                },
              ]}
            >
              <Input.Password />
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

export default RegPage;
