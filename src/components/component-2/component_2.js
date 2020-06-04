import React, { Component } from "react";
import "./component_2.css";

class SecondComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className={"backgroundImg_2"}>
          <div>
            <div className={"subtitle_1"}>
              <i>YOU ARE BIGGER AND MORE CAPABLE THAN YOU KNOW.</i>
            </div>
            <div className={"paragraph_1"}>
              <p>
                <i>
                  At vero eos et accusamus iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                </i>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SecondComponent;
