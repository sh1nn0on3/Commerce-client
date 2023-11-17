import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import Logo from "~/assets/logo.png";

const Register = () => {
  const navitage = useNavigate();
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className=" w-full flex justify-center  min-h-[100vh] pt-[200px] ">
      <div className="flex flex-col">
        <div className="bg-white w-[400px] px-5 py-3 ">
          <img src={Logo} alt="Logo" className="w-[300px] mx-auto" />
        </div>
        <div className="mt-4">
          <h1 className="text-center mb-4">Đăng Ký</h1>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input></Input>
            </Form.Item>
            <Form.Item
              label="Phone"
              name="mobile"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input></Input>
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input.Password></Input.Password>
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input></Input>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button htmlType="submit">Submit</Button>
              <Button onClick={() => navitage("/login")}>Đăng Nhập</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
