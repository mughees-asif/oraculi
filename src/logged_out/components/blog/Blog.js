import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import topAboutUsImage from "../../dummy_data/images/topAboutUsImage.png";
import bottomHeaderImage from "../../dummy_data/images/bottomHeaderImage.png";
import { Typography, Card } from "@material-ui/core";
import AssessmentIcon from '@material-ui/icons/Assessment';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PaymentIcon from '@material-ui/icons/Payment';
import ScheduleIcon from '@material-ui/icons/Schedule';

const useStyles = makeStyles({

});

export default function MediaCard() {
  const classes = useStyles();

  return (
   <div style={{ backgroundColor: "black" }}>
    <div className="container" >
      <div className="container" display ="flex" flexDirection="row" style={{ paddingTop: "5rem", position: "relative" }}>
          <img
            src={topAboutUsImage}
            className={classes.image}
            style={{ width: '50rem' }}
            alt="topAboutUsImage example"
          />
      </div>
    </div>
    <div className="container">
      <div className="container-image" style= {{ width:"100%" }}>
          <Card variant="outlined" style={{ backgroundColor: "black" }} >
            <Typography variant="h5" component="p" style={{ color: "white" }}>
              <p>Tutoring software that will seamlessly transform remote education by integrating 
                online classrooms, Machine Learning, Data Analytics, Automated booking 
                systems, and real-time collaboration, where, keeping track of everything is happening under your virtual roof!</p>
                <p>As a tutoring company you can use our simple CRM dashboard to manage daily operations such as contaacting tutors, 
                managing students, monitoring sessions, handling reviews, transaction histories, and invoices to give you 
                full control.</p>
              <div className="container-icons" >
                  <PaymentIcon style={{ fontSize: 100, color: "blue" }} />
                    <ol>Powered by Stripe payment</ol>
              </div>
               <div className="container-icons" > 
                  <NotificationsActiveIcon  style={{ fontSize: 100, color: "white" }} />         
                    <ol>Automatic text-notification system</ol>
              </div>
              <div className="container-icons" >
                <ScheduleIcon style={{ fontSize: 100, color: "green" }} />
                  <ol>Machine Learning algorithms suggest improvements</ol>
              </div>
              <div className="container-icons" >
                <AssessmentIcon style={{ fontSize: 100, color: "red" }} />
                  <ol>Advanced analytics allows for real-time tracking</ol>
              </div>
            </Typography>
          </Card>
       </div> 
    </div>    
      <div className="container-icons">
        <img
        src={bottomHeaderImage}
        className={classes.image}
        alt="bottomHeaderImage example"
        style={{ width: '15rem' }}
        />
      </div>
    </div>
  );
}
