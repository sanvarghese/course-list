import React, { createContext, useState } from "react";
export const CourseDataContext = createContext();
export const CourseDataProvider = ({ children }) => {

  const [CourseData, setCourseData] = useState([
    { id: 5, text: "React Development", rating: 5 },
    { id: 4, text: "Php Development", rating: 4 },
    { id: 3, text: "FrontPnd Development", rating: 3 },
    { id: 2, text: "Mern Development", rating: 2 },
    { id: 1, text: "Node Development", rating: 1 },
  ])
  const [ReviewData, setReviewData] = useState([
    { user: "Basil", rating: 3, content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry" },
    { user: "Sarath", rating: 5, content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry" },
    { user: "Rima", rating: 3, content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry" },
    { user: "Ajith", rating: 2, content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry" },
    { user: "Akshay", rating: 1, content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry" },

  ])
  return (
    <CourseDataContext.Provider value={{ ReviewData, setReviewData, CourseData, setCourseData }}>
      {children}
    </CourseDataContext.Provider>
  )
}

