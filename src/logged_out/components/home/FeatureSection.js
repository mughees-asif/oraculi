import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, isWidthUp, withWidth } from "@material-ui/core";
import ComputerIcon from "@material-ui/icons/Computer";
import BarChartIcon from "@material-ui/icons/BarChart";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import CloudIcon from "@material-ui/icons/Cloud";
import calculateSpacing from "./calculateSpacing";
import FeatureCard from "./FeatureCard";

const iconSize = 40;

const features = [
  {
    color: "#4a148c",
    headline: "Online Classroom",
    text:
      "Complete academic platform offering one-to-one or classroom study with upto 2 other students.",
    icon: <ComputerIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "200"
  },
  {
    color: "#00897b",
    headline: "Advanced Analytics",
    text:
      "Machine Learning and Data Analytics allows to track progress in real-time with suggestions to increase performance.",
    icon: <BarChartIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "400"
  },
  {
    color: "#0091EA",
    headline: "Accessible",
    text:
      "Every session recorded for re-use and deployed on the cloud for 24/7 accessiblity.",
    icon: <CloudIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "2000"
  },
  {
    color: "#d50000",
    headline: "Real-time collaboration",
    text:
      "Enabled with notes sharing and saving options; downloadable in different formats.",
    icon: <HeadsetMicIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "400"
  }
];

function FeatureSection(props) {
  const { width } = props;
  return (
    <div name="features" style={{ backgroundColor: "#000000" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h2" align="center" className="lg-mg-bottom" style={{color: "white"}}>
          Features
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width)}>
            {features.map(element => (
              <Grid
                item
                alignItems="center"
                xs={12}
                sm={6}
                lg={3}
                data-aos="zoom-in-up"
                data-aos-delay={
                  isWidthUp("md", width) ? element.mdDelay : element.smDelay
                }
                key={element.headline}
              >
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  text={element.text}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withWidth()(FeatureSection);
