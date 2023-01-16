import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="md-col-4">
              <h4 className="text-uppercase text-center">Contact</h4>
              <p className="text-center">
                Want to work for a project together?
              </p>
              <br />

              <form className="row g-3" onSubmit={this.handleSubmit}>
                <div className="form-group col-md-6">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="name"
                    className="form-control"
                    id="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                    name="message"
                    value={this.state.message}
                    onChange={this.handleChange}
                  ></textarea>
                </div>

                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-warning rounded-pill"
                  >
                    Contact Me
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
