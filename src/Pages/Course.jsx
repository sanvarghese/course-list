import React, { useContext, useEffect, useMemo, useState } from "react";
import { CourseDataContext } from "../Db/Data";
import { Container, Col, Row } from "react-bootstrap";
import "reactjs-popup/dist/index.css";
import ListCourse from "./Course/ListCourse";
import Add from "./Course/Add";

const Course = () => {
  const { CourseData } = useContext(CourseDataContext);
  const [selectedCategory, setSelectedCategory] = useState();
  useEffect(() => {
    getFilteredList();
  }, [CourseData, selectedCategory]);
  // filer course listing
  function getFilteredList() {
    if (!selectedCategory) {
      return CourseData;
    }
    return CourseData.filter(
      (CourseData) => CourseData.rating.toString() === selectedCategory
    );
  }
  const filteredList = useMemo(getFilteredList, [selectedCategory, CourseData]);
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <div className="course-page-box">
      <Container>
        <Row>
          <div className="course-box py-5 ">
            <h2>Our Course</h2>
            <Add />
            <div className="filter-container">
              <div>Our Course</div>
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
              </select>
            </div>
            <ListCourse filteredList={filteredList} />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Course;
