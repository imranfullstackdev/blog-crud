import React, { useState, useEffect } from "react";
// packages
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import ViewBlog from "./ViewBlog";
import { AiTwotoneDelete } from "react-icons/ai";
import { MdPostAdd } from "react-icons/md";

const AllBlogs = () => {
  const [viewBlog, SetviewBlog] = useState([]);

  // for getting All the data from Backend
  const getBlog = async () => {
    const Blogdata = await fetch(`http://localhost:8000/api/v1/get`);
    const jsonData = await Blogdata.json();
    SetviewBlog(jsonData);
  };
  // For Deleting Blog
  const DeleteBlog = async (id) => {
    const datadlt = await fetch(`http://localhost:8000/deleteUser/${id}`, {
      method: "delete",
    });
    alert("Deleted Sucessfully");
    window.location.reload();
  };
 
  useEffect(() => {
    getBlog();
  }, []);

  // for navigating to viewblog and send values using react-router dom
  const navigate = useNavigate();
  const navReadBlog = (userBlog) => {
    navigate("/ViewBlog", { state: userBlog });
  };
  // for navigating to AddBlog page
  const navAddBlog = () => {
    navigate("/AddBlog");
  };

  // JSX
  return (
    <>
      <div className="text-center mb-3">
        <h5 className=" mt-3" id="empdeslabel1">
          View Blog
        </h5>
      </div>
      <div
        className="d-flex mt-3"
        style={{ flexWrap: "wrap", paddingLeft: "136px" }}
      >
        {viewBlog
          //  for making reverse chornological order and displaying the values to backend
          .slice(0)
          .reverse()
          .map((userBlog) => {
            return (
              <div>
                <Container key={userBlog.id}>
                  <Row>
                    <Col>
                      <Card className="mb-3"
                        style={{
                          width: "18rem",
                          cursor: "grab",
                        }}
                      >
                        <Card.Body onClick={() => navReadBlog(userBlog)}>
                          <Card.Title>
                            <b>{userBlog.blogtitle}</b>
                            <br />
                            {/* <h6>{userBlog.id}</h6> */}
                            <h6>{userBlog.blog}</h6>
                          </Card.Title>

                          <div gap={3}>
                            <button style={{ border: "none" }} className="ms-3">
                              {/* */}
                            </button>
                          </div>
                        </Card.Body>
                        <span className="p-3">
                          <Button
                            className="w-100"
                            onClick={() => DeleteBlog(userBlog.id)}
                          >
                            <AiTwotoneDelete />
                          </Button>
                        </span>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </div>
            );
          })}
        {/* for anvigating to AddBlog page */}
        <div>
          <Button style={{ marginTop: "141px" }} onClick={navAddBlog}>
            <MdPostAdd />
          </Button>
        </div>
      </div>
    </>
  );
};

export default AllBlogs;
