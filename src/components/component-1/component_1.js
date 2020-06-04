import React, { Component } from "react";
import creativity from "../../assests/CREATIVITY.svg";
import marketing from "../../assests/MARKETING.svg";
import content from "../../assests/CONTENT.svg";
import "./component_1.css";

class HeadComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className={"backgroundImg"}>
          <div className={"content_on_img"}>
            <div>
              <div>
                <img
                  src={creativity}
                  alt={"creativity"}
                  style={{ height: "auto", width: "200px" }}
                />
              </div>
              <div>
                <img
                  src={marketing}
                  alt={"marketing"}
                  style={{ height: "auto", width: "200px" }}
                />
              </div>
              <div>
                <img
                  src={content}
                  alt={"content"}
                  style={{ height: "auto", width: "200px" }}
                />
              </div>
            </div>
            <div className={"yellow_label"}>
              <p className={"paragraph"}>Evoluto.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeadComponent;
