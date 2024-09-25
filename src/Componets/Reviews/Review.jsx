import React, { useContext } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./reviews.css";
import { Rating } from "@mui/material";
import { CourseDataContext } from "../../Db/Data";

const Review = () => {
  const { ReviewData } = useContext(CourseDataContext);

  return (
    <div className="reviews-sect">
      <h2 className="text-center">Student Reviews</h2>
      <Container>
        <Row>
          {ReviewData.map((datareview) => {
            return (
              <Col>
                <div className="item">
                  <h6>{datareview.user} </h6>
                  <Rating name="read-only" value={datareview.rating} readOnly />

                  <p>{datareview.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Review;
