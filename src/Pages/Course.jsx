import React, { useEffect, useMemo, useState } from "react";
import { CourseData } from "../Db/Data";
import { Container, Col, Row } from "react-bootstrap";
import { Rating } from "@mui/material";
import AddCourse from "../Componets/AddeCourse/AddCourse";

const Course = () => {
  console.log("coursedata testing", CourseData);

  const [courseDataList, setcourseDataList] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    setcourseDataList(CourseData);
  }, []);

  function getFilteredList() {
    if (!selectedCategory) {
      return courseDataList;
    }
    return courseDataList.filter(
      (CourseData) => CourseData.rating.toString() === selectedCategory
    );
  }

  var filteredList = useMemo(getFilteredList, [
    selectedCategory,
    courseDataList,
  ]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <div className="course-page-box">
      <Container>
        <Row>
          <h2>Our Course</h2>
          <div className="course-box ">
            <div className="filter-container">
              <div>Filter by Our Course</div>
              <select
                name=""
                id="category-list"
                onChange={handleCategoryChange}
              >
                <option value="">All</option>
                <option value="1">1 Star</option>
                <option value="2"> 2 Star</option>
                <option value="3">3 Star</option>
                <option value="4">4 Star</option>
                <option value="5">5 Star</option>
                <option value="6">6 Star</option>
              </select>
            </div>
            <div className="sport-list">
              {filteredList.map((element) => (
                <div className="item-container">
                  <div>
                    <h6 className="item-label">Course Name </h6>
                    <h4> {element.text}</h4>
                    {console.log("text course dtat", element.text)}
                  </div>
                  <div>
                    <h6 className="item-label">Rating </h6>
                    <h4> {element.rating}</h4>
                    <Rating name="read-only" value={element.rating} readOnly />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Row>
      </Container>
      <AddCourse />
    </div>
  );
};

export default Course;
