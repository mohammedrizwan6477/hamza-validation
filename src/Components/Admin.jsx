import React from "react";
import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Form } from "react-bootstrap";
import "./admin.css";
class Admin extends React.Component {
  render() {
    return (
      <div className="container-admin">
        <Nav defaultActiveKey="/home" className="flex-column">
          <div className="welcome-admin">
            <img
              src="user-icon.png"
              width={100}
              alt=""
              style={{ border: "3px solid white", borderRadius: "50%" }}
            />
            <p>Welcome,Admin</p>
          </div>
          <div className="admin">
            <p>Admin</p>
            <p>Hr</p>
            <p>Reports</p>
          </div>
          <div className="login-button">
            <Button variant="primary" size="lg" active>
              Logout
            </Button>
          </div>
        </Nav>
        <Form className="form">
          <Row>
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="Enter First Name" />
            </Col>
            <Col>
              <Form.Label>Total Experiance</Form.Label>
              <Form.Control type="number" placeholder="in years" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Enter Last Name" />
            </Col>
            <Col>
              <Form.Label>Relevent Experiance</Form.Label>
              <Form.Control type="number" placeholder="in years" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Qualification</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Choose One</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Label>Notice Period</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Choose One</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Email</Form.Label>
              <Form.Control type="mail" placeholder="Enter valid Mail id" />
            </Col>
            <Col>
              <Form.Label>Applied Position</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Choose One</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter 10-digit valid mobile No."
              />
            </Col>
            <Col>
              <Form.Label>Current Location</Form.Label>
              <Form.Control placeholder="Enter your city name" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" />
            </Col>
            <Col>
              <Form.Label>Current Location</Form.Label>
              <Button variant="primary">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Admin;
