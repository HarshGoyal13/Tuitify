import React from "react"
import Home from "./Pages/Home"
import Error from "./Pages/Error"
import Cursor from "./Components/Cursor"
import Navbar from "./Components/Navbar"
import { Route, Routes } from "react-router-dom"
import About from "./Pages/About"
import CourseId from "./Pages/CourseId"
import Footer from "./Components/Footer"
import DiscountBAr from "./Components/Home/DiscountBAr"
import ContactUs from "./Pages/ContactUs"
import Courses from "./Pages/Course"
import PrivacyPolicy from "./Pages/PrivacyPolicy"

function App() {


  return (
    <div className="robot_font">

    <DiscountBAr/>
  
  <DiscountBAr />

<div className="mt-10">      
  <Navbar />
</div>

<Cursor />


    <Cursor/>

    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="*" element={<Error/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<ContactUs/>} />
      <Route path="/Courses" element={<Courses/>} />
      <Route path="/course/:id" element={<CourseId/>} />
      <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
      
    </Routes>

    <Footer/>
    

    </div>
  )
}

export default App
