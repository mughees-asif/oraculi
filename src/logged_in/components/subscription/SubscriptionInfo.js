import React from "react";
import PropTypes from "prop-types";
import { ListItemText, Button, Toolbar, withStyles } from "@material-ui/core";

const styles = {
  toolbar: {
    justifyContent: "space-between"
  }
};

function SubscriptionInfo(props) {
  const { classes, openAddBalanceDialog } = props;
  return (
    <Toolbar className={classes.toolbar}>
      <ListItemText primary="Lecture name: " secondary="Subject: " />
      <Button
        variant="contained"
        color="secondary"
        onClick={openAddBalanceDialog}
        disableElevation
      >
        Call
      </Button>&nbsp;&nbsp;&nbsp;
      <Button
        variant="contained"
        color="primary"
        // onClick={openAddBalanceDialog}
      >
        End
      </Button>
    </Toolbar>
  );
}

SubscriptionInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  openAddBalanceDialog: PropTypes.func.isRequired
};

export default withStyles(styles)(SubscriptionInfo);
