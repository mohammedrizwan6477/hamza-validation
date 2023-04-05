import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <Card
          style={{
            width: "600px",
            height: "500px",
            marginTop: "100px",
            marginLeft: "300px",
          }}
          className="card-img"
        >
          <Card.Body>
            <Form
              style={{
                float: "right",
                marginTop: "100px",
                marginRight: "50px",
              }}
            >
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label style={{ fontSize: "28px", fontFamily: "initial" }}>
                  User Login
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  style={{ width: "220px" }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="password"
                  placeholder="Password"
                  style={{ width: "220px" }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Button variant="primary" style={{ width: "220px" }}>
                  Primary
                </Button>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <p>Enter User Name and Password?</p>
                <a href="">Create Your Account</a>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Login;
