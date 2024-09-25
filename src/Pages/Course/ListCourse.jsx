import React, { useContext } from "react";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { CourseDataContext } from "../../Db/Data";
import Edit from "./Edit";

const ListCourse = ({ filteredList }) => {
  const { CourseData, setCourseData } = useContext(CourseDataContext);
  const onDeleteHandler = (key) => {
    setCourseData(CourseData.filter((element) => element.id !== key));
  };
  return (
    <div className="sport-list">
      {filteredList.map((element) => (
        <div className="item-container" key={element.id}>
          <h6 className="item-label">Course Name </h6>
          <h4> {element.text}</h4>
          <Rating name="read-only" value={element.rating} readOnly />
          <h4> {element.rating}</h4>
          <Edit keyValue={element.id} />
          <button
            className="delete-btn"
            onClick={() => onDeleteHandler(element.id)}
          >
            Delete
          </button>
          <Link
            className="text-decoration-none text-dark"
            to={`/course/${element.id}`}
          >
            <Button>View more</Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ListCourse;
