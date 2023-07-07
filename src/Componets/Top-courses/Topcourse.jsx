import React, { useState } from "react";
import { CourseData } from "../../Db/Data";
import { Container, Col, Row } from "react-bootstrap";
import "./top-course.css";
import { Rating } from "@mui/material";

const Topcourse = () => {
  // console.log(Data);
  const newcoursedata = [...CourseData].sort((a, b) => b.rating - a.rating);
  const topTwoData = newcoursedata.slice(0, 2);

  console.log(topTwoData);
  // console.log(numAscending);

  return (
    <div className="course-wrapper">
      <h2 className="text-center">Top course</h2>
      <Container>
        <Row>
          {topTwoData.map((datacourse) => {
            return (
              <Col>
                <div className="item">
                  <h3>{datacourse.text}</h3>
                  <h6 className="text-center">Rating {datacourse.rating}</h6>
                  <Rating name="read-only" value={datacourse.rating} readOnly />
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Topcourse;
