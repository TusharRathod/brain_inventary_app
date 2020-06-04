import React, { Component } from "react";
import { Grid, TextField } from "@material-ui/core";
import black_bottom from "../../assests/more-linkbg.svg";
import "./component_6.css";

class SixthComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ paddingBottom: 40 }}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className={"leftContainer"}>
              <div className={"yellow_six_bottom"}>
                <div className={"getInTouch_six"}>GET IN TOUCH</div>
              </div>

              <div className={"form"}>
                <Grid container>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <div className={"textFeild"}>
                      <TextField
                        id="standard-password-input"
                        label="First Name"
                        type="text"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <div className={"textFeild"}>
                      <TextField
                        id="standard-password-input"
                        label="Last Name"
                        type="text"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <div className={"textFeild"}>
                      <TextField
                        id="standard-password-input"
                        label="Email address"
                        type="email"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <div className={"textFeild"}>
                      <TextField
                        id="standard-password-input"
                        label="Website"
                        type="text"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <div className={"textFeild"}>
                      <TextField
                        id="standard-password-input"
                        label="Phone number"
                        type="text"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <div className={"textFeild"}>
                      <textarea
                        style={{ width: "100%", height: "40px" }}
                        placeholder={"Message"}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <div className={"textFeild"}>
                      <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        defaultValue="2017-05-24"
                        // className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </Grid>
                </Grid>

                <div style={{ paddingTop: "40px" }}>
                  <button className={"submitBtn_six"}>SUBMIT</button>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div style={{ padding: "45px 190px 0px 30px" }}>
              <div className={"yellow_six_bottom"}>
                <div className={"getInTouch_six"}>EVENTS</div>
              </div>
              <div style={{ padding: "20px 0px 20px 0px" }}>
                <h2>APRIL</h2>
              </div>
              <div>
                <div className={"eventsDetail"}>
                  <div className={"date"}>28</div>
                  <div className={"discription"}>
                    Lorem ipsum vero eos et accusamus et iusto...
                  </div>
                  <div className={"detail"}>DETAIL</div>
                </div>
                <div style={{ paddingBottom: "15px", paddingTop: "30px" }}>
                  <hr />
                </div>
                <div className={"eventsDetail"}>
                  <div className={"date"}>27</div>
                  <div className={"discription"}>
                    Lorem ipsum vero eos et accusamus et iusto...
                  </div>
                  <div className={"detail"}>DETAIL</div>
                </div>
                <div style={{ paddingBottom: "15px", paddingTop: "30px" }}>
                  <hr />
                </div>
                <div className={"eventsDetail"}>
                  <div className={"date"}>20</div>
                  <div className={"discription"}>
                    Lorem ipsum vero eos et accusamus et iusto...
                  </div>
                  <div className={"detail"}>DETAIL</div>
                </div>
                <div style={{ paddingBottom: "10px", paddingTop: "10px" }}>
                  <hr />
                </div>
                <div className={"eventsDetail"}>
                  <div className={"date"}>16</div>
                  <div className={"discription"}>
                    Lorem ipsum vero eos et accusamus et iusto...
                  </div>
                  <div className={"detail"}>DETAIL</div>
                </div>
                <div style={{ paddingBottom: "15px", paddingTop: "30px" }}>
                  <hr />
                </div>
                <div className={"eventsDetail"}>
                  <div className={"date"}>10</div>
                  <div className={"discription"}>
                    Lorem ipsum vero eos et accusamus et iusto...
                  </div>
                  <div className={"detail"}>DETAIL</div>
                </div>
              </div>
              <div style={{ padding: "30px 0px 50px 0px" }}>
                <div className={"moreEvents"}>MORE EVENTS</div>
                <img
                  src={black_bottom}
                  alt={"black-bottom"}
                  style={{ height: "10px", width: "60px" }}
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SixthComponent;
