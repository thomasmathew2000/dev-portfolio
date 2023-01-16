import React from 'react';
import './Projects.css';
import photosnap from '../../assets/images/projects/photosnap.png';
import flydoctor from '../../assets/images/projects/flydoctor.png';
import casibus from '../../assets/images/projects/casibus.png';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="project-content">
              <h4 className="text-uppercase text-center">Projects</h4>
              <br></br>

              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card h-100">
                    <img
                      src={photosnap}
                      className="card-img-top"
                      alt="PhotoSnap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">PhotoSnap</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img
                      src={flydoctor}
                      className="card-img-top"
                      alt="FlyDoctor"
                    />
                    <div className="card-body">
                      <h5 className="card-title">FlyDoctor</h5>
                      <p className="card-text">
                        This card has supporting text below as a natural lead-in
                        to additional content.
                      </p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img src={casibus} className="card-img-top" alt="Casibus" />
                    <div className="card-body">
                      <h5 className="card-title">Casibus</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This card has
                        even longer content than the first to show that equal
                        height action.
                      </p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </div>
                  </div>
                </div>
                <Link to="/portfolio">
                  <div className="col">
                    <div className="card h-40">
                      <div className="card-final-body">
                        <h5 className="card-title">Contact Me</h5>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
