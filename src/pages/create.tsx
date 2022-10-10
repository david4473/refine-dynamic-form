import React from "react";
import { Button, Form, Input, Space } from "@pankod/refine-antd";
import {
  CheckOutlined,
  DeleteOutlined,
  MessageFilled,
  PlusOutlined,
} from "@ant-design/icons";

interface IFormValue {
  name: string;
  occupation: string;
  skill: string;
}

const handleSubmission = (values: IFormValue) => {
  console.log(values);
};

export default function create(Props: any) {
  return (
    <div>
      <Form layout="vertical" size={"large"} onFinish={handleSubmission}>
        <Form.Item
          name={"Name"}
          label="Name"
          style={{ maxWidth: "600px" }}
          rules={[
            { required: true, message: "please enter your name" },
            {
              whitespace: true,
            },
            {
              min: 3,
              message: "field must be at least 3 characters",
            },
          ]}
          hasFeedback
        >
          <Input placeholder="e.g John" />
        </Form.Item>
        <Form.Item
          name={"Occupation"}
          label="Occupation"
          style={{ maxWidth: "600px" }}
          rules={[
            {
              required: true,
              message: "please enter your occupation: e.g data scientist",
            },
            {
              whitespace: true,
            },
            {
              min: 3,
              message: "field must be at least 3 characters",
            },
          ]}
          hasFeedback
        >
          <Input placeholder="e.g developer" />
        </Form.Item>
        <Form.List name={"skills"}>
          {(fields, { add, remove }) => {
            return (
              <>
                {fields.map((field, index) => {
                  return (
                    <Space
                      key={field.key}
                      direction="horizontal"
                      style={{ display: "flex", position: "relative" }}
                    >
                      <Form.Item
                        name={field.name}
                        label={`skill - ${index + 1}`}
                        style={{ width: "400px" }}
                        rules={[
                          { required: true, message: "please enter a skill" },
                          {
                            whitespace: true,
                          },
                          {
                            min: 3,
                            message: "field must be at least 3 characters",
                          },
                        ]}
                        hasFeedback
                      >
                        <Input placeholder="e.g javascript" />
                      </Form.Item>
                      <Button
                        danger
                        onClick={() => remove(field.name)}
                        style={{ position: "absolute", top: "47px" }}
                        icon={<DeleteOutlined />}
                      ></Button>
                    </Space>
                  );
                })}
                <Form.Item>
                  <Button
                    icon={<PlusOutlined />}
                    type="dashed"
                    block
                    style={{ maxWidth: "600px" }}
                    onClick={() => add()}
                  >
                    Add a skill
                  </Button>
                </Form.Item>
              </>
            );
          }}
        </Form.List>
        <Form.Item>
          <Button
            type="primary"
            icon={<CheckOutlined />}
            htmlType="submit"
            style={{ width: "600px" }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
