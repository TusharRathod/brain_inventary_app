import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, withStyles } from "@material-ui/core/styles";
import logo_inner from "../../assests/logo-inner.png";
import logo_text from "../../assests/logo-text.png";
import head_bottom from "../../assests/head-bottom.svg";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  bottom_line: {
    height: 0,
  },
  app_bar_name: {
    paddingRight: 30,
    fontFamily: "Oswald",
  },
  active_app_bar_name: {
    color: "#b58700",
    paddingRight: 30,
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "Oswald",
  },
  appBar: {
    backgroundColor: "black",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "10px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
});

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "home",
    };
  }
  mouseEnter = (name) => {
    this.setState({ name });
  };
  mouseLeave = () => {
    this.setState({ name: "" });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            {/* <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton> */}
            <img
              src={logo_inner}
              alt="logo"
              style={{ width: "38px", height: "38px" }}
            />
            <img
              src={logo_text}
              alt="logo_text"
              style={{ height: "25px", marginBottom: "16px" }}
            />
            <Typography
              className={classes.title}
              variant="h6"
              noWrap
            ></Typography>
            <div
              onMouseEnter={() => this.mouseEnter("home")}
              className={
                this.state.name === "home"
                  ? classes.active_app_bar_name
                  : classes.app_bar_name
              }
            >
              HOME
              <div className={classes.bottom_line}>
                {this.state.name === "home" && (
                  <img
                    src={head_bottom}
                    alt="head_bottom"
                    style={{ height: "21px", width: "30px" }}
                  />
                )}
              </div>
            </div>

            <div
              onMouseEnter={() => this.mouseEnter("podcast")}
              className={
                this.state.name === "podcast"
                  ? classes.active_app_bar_name
                  : classes.app_bar_name
              }
            >
              PODCAST
              <div className={classes.bottom_line}>
                {this.state.name === "podcast" && (
                  <img
                    src={head_bottom}
                    alt="bottom"
                    style={{ height: "21px", width: "38px" }}
                  />
                )}
              </div>
            </div>

            <div
              onMouseEnter={() => this.mouseEnter("blog")}
              className={
                this.state.name === "blog"
                  ? classes.active_app_bar_name
                  : classes.app_bar_name
              }
            >
              BLOG
              <div className={classes.bottom_line}>
                {this.state.name === "blog" && (
                  <img
                    src={head_bottom}
                    alt="heead_bottom"
                    style={{ height: "21px", width: "30px" }}
                  />
                )}
              </div>
            </div>

            <div
              onMouseEnter={() => this.mouseEnter("events")}
              className={
                this.state.name === "events"
                  ? classes.active_app_bar_name
                  : classes.app_bar_name
              }
            >
              EVENTS
              <div className={classes.bottom_line}>
                {this.state.name === "events" && (
                  <img
                    src={head_bottom}
                    alt="heead_bottom"
                    style={{ height: "21px", width: "38px" }}
                  />
                )}
              </div>
            </div>

            <div
              onMouseEnter={() => this.mouseEnter("contact")}
              className={
                this.state.name === "contact"
                  ? classes.active_app_bar_name
                  : classes.app_bar_name
              }
            >
              CONTACT
              <div className={classes.bottom_line}>
                {this.state.name === "contact" && (
                  <img
                    src={head_bottom}
                    alt="heead_bottom"
                    style={{ height: "21px", width: "38px" }}
                  />
                )}
              </div>
            </div>

            <div
              onMouseEnter={() => this.mouseEnter("story")}
              className={
                this.state.name === "story"
                  ? classes.active_app_bar_name
                  : classes.app_bar_name
              }
            >
              STORY
              <div className={classes.bottom_line}>
                {this.state.name === "story" && (
                  <img
                    src={head_bottom}
                    alt="heead_bottom"
                    style={{ height: "21px", width: "38px" }}
                  />
                )}
              </div>
            </div>
            <div
              onMouseEnter={() => this.mouseEnter("charity")}
              className={
                this.state.name === "charity"
                  ? classes.active_app_bar_name
                  : classes.app_bar_name
              }
            >
              CHARITY
              <div className={classes.bottom_line}>
                {this.state.name === "charity" && (
                  <img
                    src={head_bottom}
                    alt="heead_bottom"
                    style={{ height: "21px", width: "38px" }}
                  />
                )}
              </div>
            </div>

            <div
              onMouseEnter={() => this.mouseEnter("careers")}
              className={
                this.state.name === "careers"
                  ? classes.active_app_bar_name
                  : classes.app_bar_name
              }
            >
              CAREERS
              <div className={classes.bottom_line}>
                {this.state.name === "careers" && (
                  <img
                    src={head_bottom}
                    alt="heead_bottom"
                    style={{ height: "21px", width: "38px" }}
                  />
                )}
              </div>
            </div>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(useStyles)(Header);
