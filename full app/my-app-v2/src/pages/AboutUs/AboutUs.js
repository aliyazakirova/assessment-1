import React, { useState, useEffect } from "react";
import { Row, Col, Typography, Button } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

const AboutUs = () => {
  const [weatherImage, setWeatherImage] = useState("");

  useEffect(() => {
    const fetchWeatherImage = async () => {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/photos/random",
          {
            params: {
              query: "weather",
              orientation: "landscape",
              client_id: "dcxm-HYyQCwmrC1oKaH0XLPJY2J_gmInTbdeNhLWpSY",
            },
          }
        );

        setWeatherImage(response.data.urls.regular);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchWeatherImage();
  }, []);

  return (
    <div style={{ padding: "50px", background: "#f0f0f0" }}>
      <Row justify="center" align="top">
        <Col span={24} style={{ textAlign: "center" }}>
          <Title level={1} style={{ fontSize: "32px", marginBottom: "10px", color: "#1890ff" }}>
            Welcome to Our Weather Service
          </Title>
          <Paragraph
            style={{
              fontSize: "18px",
              color: "#001628",
            }}
          >
           You can{" "}
            <Link to="/login">
              <Button type="primary">Login</Button>
            </Link>{" "}
            or{" "}
            <Link to="/reg_page">
              <Button>Register</Button>
            </Link>{" "}
            to the service
          </Paragraph>
        </Col>
      </Row>
      <Row justify="center" align="middle">
        <Col span={12}>
          <Paragraph
            style={{
              fontSize: "16px",
              color: "#001628",
              fontFamily: "Raleway, sans-serif",
            }}
          >
            Это проект промежуточной аттестации Алии Закировой на курсе
            программной инженерии.
            <br />
            В проекте содержатся 4 страницы: страницы логин и регистрации,
            страница с полем ввода местоположения и результатами, страница О
            сервисе и страница 404.
            <br />
            Страница о сервисе встречает вас как только вы переходите на
            localhost:3000/. На странице Location and Results вы сможете выбрать
            город и посмотреть погоду в нем. <br />
            Необходимо правильно внести данные пользователя относительно правил
            в задании.
            <br />
            Данные пользователя идут на сервер, где записываются в массив и
            происходит отправка сообщения о статусе регистрации.
            
          </Paragraph>
        </Col>
        <Col span={12}>
          {weatherImage && (
            <img
              src={weatherImage}
              alt="Weather"
              style={{
                maxWidth: "100%",
                marginTop: "20px",
                borderRadius: "8px",
              }}
            />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
