import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
// import Portfolio from './components/portfolio/Port'
// import Testimonials from './components/testimonials/Testimonial'
import Contact from './components/contacts/Contact'
import Footer from './components/footer/Footer'
// import SEO from './components/head/Head'


const App = () => {
    return(
       <>
       {/* <SEO/> */}
         <Header />
         <Nav />
         <About />
         <Experience />
         {/* <Portfolio /> */}
         {/* <Testimonials /> */}
         <Contact />
         <Footer />
       </>
    )
}

export default App