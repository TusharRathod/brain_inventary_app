import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className={"footerContain"}>
          <p className={"para"}>Ady Production,LLC</p>
          <p className={"para"}>|</p>
          <p className={"para"}>Copyright 2020</p>
          <p className={"para"}>|</p>
          <p className={"para"}>All Rights Reserved</p>
        </div>
      </div>
    );
  }
}

export default Footer;
