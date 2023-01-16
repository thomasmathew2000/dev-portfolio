import React from 'react';
import photosnap from '../../assets/images/projects/photosnap.png';
import flydoctor from '../../assets/images/projects/flydoctor.png';

const projects = [
  {
    title: 'PhotoSnap',
    description: `This provides various photo snaps and beautiful places to
    visit.. Really nice website and interesting information can be
    found here... Check this out and provide your feedback so that
    we can constantly improve and serve you better`,
    image: 'photosnap',
    link: 'www.google.com',
  },
  {
    title: 'FlyDoctor',
    description: `  There are beautiful birds and insects in this area and its
    known for wild life too. It can be compared to South African
    Krooger national park and its wild-life experience. Check this
    out at least once in life time.`,
    image: 'flydoctor',
    link: 'www.google.com',
  },
];
export default function Portfolio() {
  return (
    <div className="portfolio-content">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <h4 className="text-uppercase text-center">Portfolio</h4>
            <br />

            {projects.map((item, index) => (
              <div className="row portfolio-item" key={index}>
                <div className="col">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid"
                  ></img>
                </div>
                <div className="col">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>
                    <a
                      href={item.link}
                      className="btn btn-warning rounded-pill"
                    >
                      Visit site
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
