import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav_item_container">
          <div className="image_container">
            <img
              className="logo_image"
              src="https://www.educaddkothrud.com/wp-content/uploads/2019/07/logo-new.png"
              alt="abc"
            ></img>
          </div>

          <div className="links_item">
            <Link to="/">Home</Link>
            <Link to="products">Our Products</Link>
            <Link to="contact_us">Contact US</Link>
          </div>
        </div>
      </nav>
    );
  }
}
