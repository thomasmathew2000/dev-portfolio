import React from 'react';
import './Hero.css';
import heroImg from '../../assets/images/sincerely.jpg';

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">Hero</div>
          <div className="row">
            <div className="col-md-3">
              <img
                src={heroImg}
                alt="Hero Image"
                className="img-fluid rounded-circle"
              />
            </div>
            <div className="col">
              <h3 className="text-upperCase">
                Hello, this is my hero image text printed on the right hand side
                of the image...
              </h3>
              <br></br>
              <p>This is a learning exericse and POC project</p>
              <p>
                <a href="#contact" className="btn btn-warning rounded-pill">
                  Contact Me
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
