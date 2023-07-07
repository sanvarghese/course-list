import React, { useState } from "react";
import "./addcourse.css";
import { Container, Col, Row } from "react-bootstrap";

const AddCourse = () => {
  const [addcoursetext, setAddCoursetext] = useState("");
  const handleChange = (event) => {
    setAddCoursetext(event.target.value);
  };

  const addHandler = (event) => {
    event.preventDefault();
    const newCourseData = {
      id: Math.random(),
      text: addcoursetext,
    };
    addNewGoalHandler(newCourseData);
    setAddCoursetext("");
  };
  const addNewGoalHandler = (event) => {
    // [...addcoursetext,AddCourse{
    //     id:Math.random(),
    //     text: {name},
    // }];
  };

  return (
    <div className="add-course-section text-center">
      <Container>
        <Row>
          <h2>Add Course</h2>
          <form className="new-goal" onClick={addHandler}>
            <input type="text"  onChange={handleChange} />
            <input type="text"  onChange={handleChange} />
            <button type="submit">Add</button>
          </form>
        </Row>
      </Container>

      <div className="listing">
        {/* {setAddCoursetext.map((data) => {
          return <h2>{data.text}</h2>;
        })} */}
      </div>
    </div>
  );
};

export default AddCourse;
