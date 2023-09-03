import React from 'react'
import { Carousel} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import departments from '../constants/departments';


const HomePage = () => {
    return (
        <div>
          <Carousel>
            <Carousel.Item>
              <div className="jumbotron jumbotron-fluid jumbo-index">
                <div className="container">
                  <div className="hero-text py-5">
                    <h1 className="display-4 my-5">Notes and Resources</h1>
                    <h3 className="my-4">Get help from Seniors</h3>
                    <p>
                      This postal provides you with the books, notes and other resources put
                      up by your seniors
                    </p>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="jumbotron jumbotron-fluid jumbo-index">
                <div className="container">
                  <div className="py-5 text-white">
                    <h1 className="display-4 my-1">3 Steps</h1>
                    <h3 className="my-4">To Download a Resource</h3>
                    <ul className="list-unstyled mt-5">
                      <h5 className="my-3">Navigate to Respective Department</h5>
                      <h5 className="my-3">Select the Course</h5>
                      <h5 className="my-3">Click download button of the interested Resource</h5>
                    </ul>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="jumbotron jumbotron-fluid jumbo-index">
                <div className="container">
                  <div className="py-5 text-white">
                    <h1 className="display-4 my-1">4 Steps</h1>
                    <h3 className="my-4">To Upload a Resource</h3>
                    <ul className="list-unstyled mt-5">
                      <h5 className="my-3">Sign Up and Login</h5>
                      <h5 className="my-3">Navigate to Respective Department</h5>
                      <h5 className="my-3">Select the Course</h5>
                      <h5 className="my-3">Fill the Resource Upload Form</h5>
                    </ul>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>


          <div className="container" style={{marginTop: "150px", marginBottom: "100px"}}>
            <div className=" row row-section1">
              <div className="col">
                <h1 style={{fontSize: "45px"}}>Departments</h1>
              </div>
            </div>
            <div className="row row-section1">
              <div className="col">
                <p>Browse through your Department</p>
              </div>
            </div>
            <div className="row justify-content-center">
              {departments.map((item, index) => {
                return (
                  <div className="col-12 col-md-6" key={index}>
                    <Link to={`/department/${item.id}`}>
                      <div className="card-section1" id="card-section1">
                        <img src={item.imgLink} alt="img"/>
                        <h4 className="mt-3">{item.name}</h4>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>


        </div>
    )
}

export default HomePage
