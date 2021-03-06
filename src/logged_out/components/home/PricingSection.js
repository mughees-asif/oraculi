import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  isWidthUp,
  withWidth,
  withStyles
} from "@material-ui/core";
import PriceCard from "./PriceCard";
import calculateSpacing from "./calculateSpacing";

const styles = theme => ({
  containerFix: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6)
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  cardWrapper: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 340
    }
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 360
    }
  }
});

function PricingSection(props) {
  const { width, classes } = props;
  return (
    <div name="pricing" className="lg-p-top" style={{ backgroundColor: "#000000" }}>
      <Typography variant="h3" align="center" className="lg-mg-bottom" style={{ color: "white" }}>
        Pricing
      </Typography>
      <div className={classNames("container-fluid", classes.containerFix)} style={{ backgroundColor: "#000000" }}>
        <Grid
          container
          spacing={calculateSpacing(width)}
          className={classes.gridContainer}
        >
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            className={classes.cardWrapper}
            data-aos="zoom-in-up"
          >
            <PriceCard
              title="Starter"
              pricing={
                <span>
                  <Typography display="inline" style={{ color: "white" }}> £14.99 </Typography>
                  <Typography display="inline" color="primary"> / month</Typography>
                </span>
              }
               features={[<Typography display="inline" style={{ color: "white" }}> One-to-one </Typography>, 
                          <Typography display="inline" style={{ color: "white" }}> Save notes/lectures </Typography>, 
                          <Typography display="inline" style={{ color: "white" }}> Access anywhere </Typography>]} />
          </Grid>
          <Grid
            item
            className={classes.cardWrapperHighlighted}
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <PriceCard
              highlighted
              title="Premium"
              pricing={
                <span>
                  £29.99
                  <Typography display="inline" color="#FFFFFF"> / month</Typography>
                </span>
              }
              features={[<Typography display="blcok" style={{ color: "white" }}> Starter included </Typography>, 
                          <Typography display="inline" style={{ color: "white" }}> Classroom mode </Typography>, 
                          <Typography display="inline" style={{ color: "white" }}> Track progress </Typography>]} />
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp("md", width) ? "400" : "0"}
          >
            <PriceCard
              title="Business"
              pricing={
                <span>
                  <Typography display="inline" style={{color: "white"}}> £49.99 </Typography>
                  <Typography display="inline" color="primary"> / month</Typography>
                </span>
              }
              features={[<Typography display="inline" style={{ color: "white" }}> Primary included </Typography>, 
                          <Typography display="inline" style={{ color: "white" }}> Advanced Analytics; real-time information </Typography>,           
                          <Typography display="inline" style={{ color: "white" }}> See where to improve </Typography> ]} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

PricingSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(
  withWidth()(PricingSection)
);
