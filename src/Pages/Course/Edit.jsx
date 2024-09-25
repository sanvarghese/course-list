import React, { useContext, useState } from "react";
import { CourseDataContext } from "../../Db/Data";
import { Button, Modal } from "react-bootstrap";

const Edit = ({ keyValue }) => {
  const { CourseData, setCourseData } = useContext(CourseDataContext);
  const handleOnEdit = (key) => {
    handleShow(true);
    console.log(key);
    setCurrentId(key);
    const selectedDataName = CourseData.filter((item) => item.id == key).map(
      (item) => item.text
    );
    const selectedDataRate = CourseData.filter((item) => item.id == key).map(
      (item) => item.rating
    );
    setEditedCourseName(selectedDataName[0]);
    setEditedCourseRate(selectedDataRate[0]);
  };
  const [currentId, setCurrentId] = useState("");
  const [EditedCourseName, setEditedCourseName] = useState("");
  const [EditedCourseRate, setEditedCourseRate] = useState("");
  const editNewCourseData = (event) => {
    event.preventDefault();
    const updatedCourseList = CourseData.filter((item) => {
      if (item.id == currentId) {
        item.text = EditedCourseName;
        item.rating = EditedCourseRate;
      }
      return item;
    });
    console.log(updatedCourseList);
    setCourseData(updatedCourseList);
    handleClose();
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="update-section">
      <button className="edit-btn" onClick={(key) => handleOnEdit(keyValue)}>
        Edit
      </button>
      <div className="add-course-section text-center py-2">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Course Editing</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="new-goal" onSubmit={editNewCourseData}>
              <input
                type="text"
                value={EditedCourseName}
                onChange={(event) => setEditedCourseName(event.target.value)}
              />
              <input
                type="number"
                value={EditedCourseRate}
                onChange={(event) => setEditedCourseRate(event.target.value)}
              />
              <Button type="submit">update</Button>
            </form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Edit;
