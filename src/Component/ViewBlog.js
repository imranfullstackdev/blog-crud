import React from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import NavbarEqaim from './NavbarEqaim'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ViewBlog = () => {
  const showBlog = useLocation();
  return (
    <>
    {/* navbar */}
      <NavbarEqaim />
      <div id="dialog">
        <div
          className="w-50 mt-5"
          style={{
            border: "2px solid #3058a7",
            borderRadius: "12px",
            padding: "71px",
          }}
          id="dialog-content"
        >
          <h5 className=" mt-3" id="empdeslabel1">
              View Blog
            </h5>
          <Container>
            <Row>
              <Col>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Label>
                    <b>Blog Title:</b>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Enter Your Blog Title"
                    name="blogtitle"
                    value={showBlog.state.blogtitle}
                    required
                  />
                </Form.Group>
              </Col>
              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>
                  <b>Blog:</b>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Describe your Blog"
                  name="Blog"
                  value={showBlog.state.blogtitle}
                  required
                />
              </Form.Group>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default ViewBlog;
