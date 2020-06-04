import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import bottom_line from "../../assests/menu-bg.svg";
import article_1 from "../../assests/article-1.jpg";
import video_1 from "../../assests/video-1.jpg";
import video_2 from "../../assests/video-2.jpg";
import video_3 from "../../assests/video-3.jpg";
import fb from "../../assests/fb.png";
import linkdin from "../../assests/linkdin.png";
import twitter from "../../assests/twitter.png";
import youtube from "../../assests/youtube.png";
import insta from "../../assests/insta.png";
import "./component_4.css";

class FourthComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div style={{ margin: "45px 40px 0px 150px" }}>
              <div>
                <div className={"featured"}>FEATURED ARTICLE</div>
                <img
                  src={bottom_line}
                  alt={"bottom_line"}
                  style={{ height: "20px", width: "110px" }}
                />
              </div>

              <div>
                <div className={"textRightContent"}>
                  <i>IF CONTENT IS KING,</i>
                </div>
                <div className={"textRightContent"}>
                  <i>THEN WHO IS QUEEN?</i>
                </div>
              </div>

              <div>
                <div className={"timeText"}>2 days ago| 15min read</div>
                <img
                  src={article_1}
                  alt="article_1"
                  style={{ width: "100%", height: "180px" }}
                />
              </div>

              <div>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blandiitiis praesentium voluptatum deleniti atque corrupti
                  quos dolores et quas molestias exceturi sint occaecati
                  cupiditate.At vero eos et accusamus et iusto odio dignissimos
                  ducimus qui blanditiis praesentium voluptatum deleniti atque
                  corrupti.
                </p>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati elum
                  dolor...
                </p>
                <div>
                  <a href={"/"} style={{ color: "#ffb900" }}>
                    Continue reading >>
                  </a>
                </div>
              </div>

              <div style={{ paddingBottom: "30px", paddingTop: "30px" }}>
                <hr />
              </div>
              <div>
                <div className={"featured"}>GUEST CONTRIBUTOR</div>
                <img
                  src={bottom_line}
                  alt={"bottom_line"}
                  style={{ height: "20px", width: "130px" }}
                />
              </div>

              <div>
                <div className={"textRightContent"}>
                  <i>HOW USER EXPERIENCE</i>
                </div>
                <div className={"textRightContent"}>
                  <i>TRANSLATE TO MARKETING</i>
                </div>
              </div>

              <div>
                <div className={"timeText"}>By Mattia Rasulo 10min read</div>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blandiitiis praesentium voluptatum deleniti atque corrupti
                  quos dolores et quas molestias exceturi sint occaecati
                  cupiditate.At vero eos et accusamus et iusto odio dignissimos
                  ducimus qui blanditiis praesentium voluptatum deleniti atque
                  corrupti.
                </p>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati elum
                  dolor...
                </p>
                <div>
                  <a href={"/"} style={{ color: "#ffb900" }}>
                    Continue reading >>
                  </a>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div style={{ padding: "80px 0px 0px 50px" }}>
              <div>
                <div className={"yello_bottom"}>
                  <div className={"freshClip"}>FRESH CLIP!</div>
                </div>

                <div style={{ width: "55%" }}>
                  <div>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      praesentium voluptatum qui dolores et quas molestias.
                    </p>

                    <div className={"timeText"}>YouTube | 0:34</div>
                    <div>
                      <img
                        src={video_1}
                        alt={"video_1"}
                        style={{ width: "100%", height: "180px" }}
                      />
                    </div>
                  </div>

                  <div style={{ paddingBottom: "15px", paddingTop: "30px" }}>
                    <hr />
                  </div>

                  <div>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      praesentium voluptatum qui dolores et quas molestias.
                    </p>

                    <div className={"timeText"}>YouTube | 25:42</div>
                    <div>
                      <img
                        src={video_2}
                        alt={"video_2"}
                        style={{ width: "100%", height: "150px" }}
                      />
                    </div>
                  </div>

                  <div style={{ paddingBottom: "15px", paddingTop: "30px" }}>
                    <hr />
                  </div>

                  <div>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      praesentium voluptatum qui dolores et quas molestias.
                    </p>

                    <div className={"timeText"}>YouTube | 5:00</div>
                    <div>
                      <img
                        src={video_3}
                        alt={"video_3"}
                        style={{ width: "100%", height: "180px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>

        <div className={"advertisement"}>
          <Grid container>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <div style={{ margin: "20px 0px 0px 150px", display: "flex" }}>
                <div className={"textInAdevertise"}>RESTA SEMPRE CONNESSO</div>
                <div className={"logosDiv"}>
                  <img
                    src={fb}
                    alt="fb"
                    style={{ width: "40px", height: "35px" }}
                  />
                </div>
                <div className={"logosDiv"}>
                  <img
                    src={linkdin}
                    alt="linkdin"
                    style={{ width: "30px", height: "30px" }}
                  />
                </div>
                <div className={"logosDiv"}>
                  <img
                    src={twitter}
                    alt="twitter"
                    style={{ width: "30px", height: "30px" }}
                  />
                </div>
                <div className={"logosDiv"}>
                  <img
                    src={youtube}
                    alt="fb"
                    style={{ width: "40px", height: "30px" }}
                  />
                </div>
                <div className={"logosDiv"}>
                  <img
                    src={insta}
                    alt="insta"
                    style={{ width: "30px", height: "30px" }}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <div className={"subscribeBtnDiv"}>
                <div className={"textInAdevertise"}>
                  RESTA SEMPRE AGGIORNATO
                </div>
                <div>
                  <button className={"subScribeBtn"}>SUBSCRIBE</button>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default FourthComponent;
