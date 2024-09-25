import './App.css';
import Header from './Componets/Header/Header';
import Footer from './Componets/Footer/Footer';
import { CourseDataProvider } from './Db/Data';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from './Pages/Home';
import Course from './Pages/Course';
import Aboutus from './Componets/Aboutus/Aboutus';
import ShowCourse from './Pages/Showcourse'
function App() {
  return (
    <>
      <BrowserRouter>
        <CourseDataProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/course" element={<Course />} /> */}
            <Route path="/course" element={<Course />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/course/:id" element={<ShowCourse />} />
          </Routes>
          <Footer />
        </CourseDataProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
