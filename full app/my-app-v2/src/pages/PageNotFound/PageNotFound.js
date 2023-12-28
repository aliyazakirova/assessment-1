import React from "react";
import { Button, Result } from "antd";

const PageNotFound = () => {
  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" href="/">
            Back to About Page
          </Button>
        }
      />
    </>
  );
};

export default PageNotFound;
