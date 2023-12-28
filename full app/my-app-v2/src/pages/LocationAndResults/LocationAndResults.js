import React, { useState, useEffect } from "react";
import { Select, Typography, Row, Col } from "antd";
import { Helmet } from "react-helmet";

const { Title } = Typography;

const LocationAndResults = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSelectChange = (value) => {
    getWeather(value);
    if (value === "Istanbul") {
      setSelectedLocation(2437359);
    } else if (value === "London") {
      setSelectedLocation(2801268);
    } else {
      setSelectedLocation(2145091);
    }
  };

  const getWeather = (value) => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=b552cc8468c7462c8d3205736232712&q=${value.city}&aqi=no`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {}, [selectedLocation]);

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Col span={24} md={12} lg={8}>
        <div
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            overflow: "hidden",
            background: "#ffffff",
            padding: "24px",
            textAlign: "center",
          }}
        >
          <Title level={3} style={{ marginBottom: "16px" }}>
            Select a City from the Dropdown to See the Weather
          </Title>
          <Select
            showSearch
            style={{
              width: 200,
              marginBottom: "16px",
            }}
            onChange={handleSelectChange}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              {
                value: "Istanbul",
                label: "Turkey",
              },
              {
                value: "London",
                label: "UK",
              },
              {
                value: "Moscow",
                label: "Russia",
              },
            ]}
          />
          {selectedLocation && (
            <>
              <Helmet>
                <script
                  type="text/javascript"
                  src={`https://www.weatherapi.com/weather/widget.ashx?loc=${selectedLocation}&wid=5&tu=2&div=weatherapi-weather-widget-5`}
                ></script>
              </Helmet>
              <div id="weatherapi-weather-widget-5"></div>
            </>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default LocationAndResults;
