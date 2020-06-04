import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import "./component_3.css";

class ThirdComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className={"getMotivated"}>
              <div className={"textContent"}>
                <div className={"getMotivatedText"}>DO NOT WAIT TO</div>
                <div className={"getMotivatedHead"}>Get Motivated</div>
                <div className={"butttonDiv"}>
                  <button className={"readMoreButtton"}>READ MORE</button>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className={"hardDaysWontWin"}>
              <div style={{ padding: "24px" }}>
                <div className={"hardDaysText"}>
                  <i>HARD DAYS WON'T WIN.</i>
                </div>
                <div style={{ paddingTop: "30px" }}>
                  <button className={"readMoreButtton"}>READ MORE</button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        {/* 2 nd grid */}
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className={"laughSmile"}>
              <div className={"textContent"}>
                <div className={"laughSmileHead"}>
                  <i>LAUGH.SMILE. LOVE</i>
                </div>
                <div className={"laughSmileSubtitle"}>
                  FOCUS ON YOUR PURPOSE
                </div>
                {/* <div className={"getMotivatedHead"}>Get Motivated</div> */}
                <div className={"butttonDiv"}>
                  <button className={"readMoreButtton"}>READ MORE</button>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className={"whatWeLove"}>
              <div style={{ padding: "125px 0px 0px 75px" }}>
                <div className={"whatWeLoveText"}>LET'S DO WHAT WE</div>
                <div className={"whatWeLoveHead"}>LOVE</div>
                <div style={{ paddingTop: "30px" }}>
                  <button className={"readMoreButtton"}>READ MORE</button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        {/*this is textfeild content*/}
        <div className={"textfeildDiv"}>
          <Grid container>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <div className={"textfeildText"}>
                GET IN TOUCH AND STAY UPDATED WITH OUR NEWS AND EVENTS
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <div style={{ padding: "26px 0px 0px 10px" }}>
                <input type="text" className={"input"} />
                <button className={"btnSubscribe"}>SUBSCRIBE</button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default ThirdComponent;
