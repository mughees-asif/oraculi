import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  Card,
  Button,
  Hidden,
  Box,
  withStyles,
  withWidth,
  isWidthUp
} from "@material-ui/core";
import BlogCard from "./BlogCard";

const styles = theme => ({
  blogContentWrapper: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4)
    },
    maxWidth: 1280,
    width: "100%"
  },
  wrapper: {
    minHeight: "60vh"
  },
  noDecoration: {
    textDecoration: "none !important"
  }
});

class Blog extends PureComponent {
  componentDidMount() {
    const { selectBlog } = this.props;
    selectBlog();
  }

  render() {
    const { classes, width } = this.props;
    return (
       <div className={classNames("lg-p-top", classes.wrapper)}>
        
      </div>
    );
  }
}

Blog.propTypes = {
  selectBlog: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  blogposts: PropTypes.arrayOf(PropTypes.object)
};

export default withWidth()(withStyles(styles, { withTheme: true })(Blog));
