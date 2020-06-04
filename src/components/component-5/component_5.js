import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import black_bottom from "../../assests/more-linkbg.svg";
import podcast_1 from "../../assests/podcast-vd2.jpg";
import "./component_5.css";

class FifthComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ backgroundColor: "#ffb900" }}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className={"container_fifth"}>
              <div>
                <div className={"textRightContent_fifth"}>
                  <i>WHAT IS PERFORMANCE</i>
                </div>
                <div className={"textRightContent_fifth"}>
                  <i>MARKETING</i>
                </div>
              </div>

              <div>
                <div className={"subtitle_white"}>13 days ago| 12min read</div>
                <div>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blandiitiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias exceturi sint
                    occaecati cupiditate.At vero eos et accusamus et iusto odio
                    dignissimos ducimus qui blanditiis praesentium voluptatum
                    deleniti atque corrupti.
                  </p>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati elum dolor...
                  </p>
                  <div>
                    <a href={"/"} style={{ color: "white" }}>
                      Continue reading >>
                    </a>
                  </div>
                </div>
              </div>
              <div style={{ padding: "30px 0px 50px 0px" }}>
                <div className={"moreArticle"}>MORE ARTICLE</div>
                <img
                  src={black_bottom}
                  alt={"black-bottom"}
                  style={{ height: "20px", width: "80px" }}
                />
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div style={{ padding: "45px 0px 0px 50px" }}>
              <div className={"white_bottom"}>
                <div className={"popular"}>POPULAR</div>
              </div>
              <div style={{ width: "55%" }}>
                <div>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    praesentium voluptatum qui dolores et quas molestias.
                  </p>

                  <div className={"timeDuretion"}>YouTube | 1:38:01</div>
                  <div>
                    <img
                      src={podcast_1}
                      alt={"podcast_1"}
                      style={{ width: "100%", height: "180px" }}
                    />
                  </div>
                </div>
                <div style={{ padding: "30px 0px 50px 0px" }}>
                  <div className={"moreArticle"}>MORE VIDEOS</div>
                  <img
                    src={black_bottom}
                    alt={"black-bottom"}
                    style={{ height: "20px", width: "80px" }}
                  />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default FifthComponent;
