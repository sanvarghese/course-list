import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Modal, Row, Form } from "react-bootstrap";
import { Rating } from "@mui/material";
import { CourseDataContext } from "../../Db/Data";

const Add = () => {
  const [courseDataList, setcourseDataList] = useState([]);
  const { CourseData, setCourseData } = useContext(CourseDataContext);
  const [showAdd, setShowAdd] = useState(false);
  const handleAddClose = () => setShowAdd(false);
  const handleAddShow = () => setShowAdd(true);
  const addNewCourseHandle = (event) => {
    event.preventDefault();
    const newCourse = {
      text: nameInput,
      rating: ratingInput,
      id: Math.floor(Math.random() * 100),
    };
    setCourseData((prev) => prev.concat(newCourse));
    handleAddClose();
    console.log(courseDataList);
    // console.log(filteredList);
  };
  const [nameInput, setNameInput] = useState("");
  const [ratingInput, setRatingInput] = useState("");
  console.log(nameInput);

  console.log(courseDataList);

  useEffect(() => {
    setcourseDataList(CourseData);
  }, []);
  const addcoursemd = (event) => {
    handleAddShow();
    console.log("modal add");
    event.preventDefault();
  };

  return (
    <div className="add-section">
      <Button onClick={addcoursemd} className="text-center">
        Add Course
      </Button>
      <Modal show={showAdd} onHide={handleAddClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <div className="add-course-wrapper">
                <Form className="new-goal">
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextEmail"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Add Course"
                      onChange={(event) => setNameInput(event.target.value)}
                      className="mb-3"
                    />
                    <Rating
                      name="Controlled"
                      onChange={(event) => setRatingInput(event.target.value)}
                      Controlled
                    />
                  </Form.Group>
                </Form>
              </div>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={addNewCourseHandle}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>{" "}
    </div>
  );
};

export default Add;
