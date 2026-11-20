import React, { lazy, Suspense } from 'react'
import HomePage from './HomePage'
// import AboutPage from './AboutPage'



const AboutPage = lazy(()=>import("../Pages/AboutPage"))
const Task17Nov = () => {
  return (
    // <div>
    //   <h1>Hello</h1>
    //   <HomePage/>
    //   <AboutPage/>
     
    // </div>

    <>
    <Suspense fallback = {<img src="preview.gif" style={{height : 100, width : 100}}/>}>

    <AboutPage/>
    </Suspense>
    
    
    </>
  )
}

export default Task17Nov
