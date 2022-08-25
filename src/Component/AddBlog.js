import React, { useState } from "react";
// Packages
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Files
import NavbarEqaim from "./NavbarEqaim";
const AddBlog = () => {
  const [data, setData] = useState({
    Blog: "",
    blogtitle:"",
  });
  //   Destructuring
  const { Blog,blogtitle} = data;

  const changehandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //   posting the  Blog values to backend
  const submithandler = async (e) => {
    e.preventDefault();
    const body = data;
    try {
      const response = await fetch(`http://localhost:8000/register`, {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      // for alerting when the new Blog  is added
      alert(`New Blog  ${blogtitle} is Added`);
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <>
      <NavbarEqaim />
      <div
        className="d-flex align-items-center justify-content-center"
        id="dialog"
        gap={3}
      >
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
              Add Blog
            </h5>
          <hr />
          <Form onSubmit={submithandler}>
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
                      value={blogtitle}
                      onChange={changehandler}
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
                      value={Blog}
                      onChange={changehandler}
                      required
                    />
                  </Form.Group>
              </Row>
            </Container>

            <div className="d-flex align-items-center justify-content-center">
              <Button
                className="w-50 mt-3"
                type="submit"
                style={{ background: "#3058a7" }}
              >
                <b>Add BLOG</b>
              </Button>
            </div>
            <br />
            <small>
              By Submitting, you agree to Eqma's Conditions of Use and
              Privacy Notice.
            </small>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddBlog;
