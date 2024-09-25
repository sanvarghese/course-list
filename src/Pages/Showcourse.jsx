import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Col, Row, Button } from "react-bootstrap";
import { Rating } from "@mui/material";
import { CourseDataContext } from "../Db/Data";
// import { CourseData } from "../Db/Data";

const Showcourse = () => {
  const { CourseData } = useContext(CourseDataContext);
  const { id } = useParams();
  const course = CourseData.find((p) => p.id == id);

  return (
    <div>
      <Container>
        <Link to="/course">
          <Button>back</Button>
        </Link>
        <h6 className="item-label">Course Name </h6>
        <h4> {course.text}</h4>
        <h6 className="item-label">Rating </h6>
        <h4> {course.rating}</h4>
        <Rating name="read-only" value={course.rating} readOnly />
      </Container>
    </div>
  );
};

export default Showcourse;
