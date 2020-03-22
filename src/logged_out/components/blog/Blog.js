import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { makeStyles } from '@material-ui/core/styles';
import calculateSpacing from "../home/calculateSpacing";
import FeatureCard from "../home/FeatureCard";
import ComputerIcon from "@material-ui/icons/Computer";
import BarChartIcon from "@material-ui/icons/BarChart";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import CloudIcon from "@material-ui/icons/Cloud";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import topAboutUsImage from "../../dummy_data/images/topAboutUsImage.jpg";
import bottomHeaderImage from "../../dummy_data/images/bottomHeaderImage.png";
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

const useStyles = makeStyles({
  root: {
    paddingTop: "5rem",
    paddingBottom: "5rem",
    paddingLeft: "5rem",
    paddingRight: "5rem",
    color: "white",
    opacity: 0.2
  },
  media: {
    paddingTop: "5rem",
    paddingBottom: "5rem",
    paddingLeft: "5rem",
    paddingRight: "5rem"
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className="container-fluid" color="secondary">
              <img
                src={topAboutUsImage}
                className={classes.image}
                style={{paddingTop: "5rem", width: '50rem', position: 'relative'}}
                alt="topAboutUsImage example"
              />

            <Typography gutterBottom variant="h1">
              About Us
            </Typography>
            <div style={{color: "black"}}>
              <Typography variant="body1" color="white" component="p">
                  A complete innovative online tutoring software that will seamlessly transform your tutoring company 
                  into a virtual masterpiece. Using online classrooms, machine learning, data analytics, automated booking 
                  systems, and real-time collaboration you can run your entire tutoring company from anywhere in the world 
                  while keeping track of everything that is happening under your virtual roof!
                  As a tutoring company you can use our effective and simple admin dashboard to manage the daily operations such as tutors, 
                  students, sessions, course managements with ratings, reviews, transaction histories, invoices and a complete CRM to give you 
                  full control to make your business a success.
                  In addition to that, Oraculi is powered by Stripe payment to accept all credit and debit cards including foreign transactions 
                  to make payments easy and efficient.
                  Our automatic notification system makes sure tutors and students never miss a session by sending instant emails and SMS notifications 
                  for session bookings, payment confirmation, and more.
                  As a tutor they can personalize their profile to fit their schedule, and their method of teaching. Furthermore, they can view 
                  all their students, assign homework, access all their previously recorded sessions , view their calendar for future sessions, see 
                  what students think of them, the ability to rate and leave feedback after every session, and an easy to use chatroom to communicate 
                  with their students and their parents.
                  As a student they can personalize their profile to fit their subjects and their method of learning. Using machine learning and data 
                  analytics our software will then show the students all the available tutors for their subjects and rank them from “Most Useful” to “Least 
                  Useful” depending on the student and their method of learning. The student can then access the tutor’s calendar to book sessions. 
                  Furthermore, the student can access all their previously recorded sessions, all their session notes, 
                  their assigned homework, a chatroom to communicate with their tutors and the ability to rate and leave feedback after every session.
                  For sessions, our software can be used on its own as an online tutoring platform where students and tutors can have sessions using our 
                  whiteboard with integrated audio-video collaboration that has the ability to accommodate one–to-one sessions or even a classroom of up to 3
                   students to maximize productivity!
                  If your tutoring company decides to stick with old-fashioned ways of teaching (without the use of an online whiteboard). Oraculi is still an 
                  amazing addition to your company as our software solves the matching, scheduling, collaboration and payment inefficiencies in any tutoring company
                  by providing all the tools needed to expand an offline tutoring service.
                  As our software is developed by our CTO himself, we can add, remove or modify any feature as per your business requirements such as themes and branding. 
              </Typography>
            </div> 
                <img
                src={bottomHeaderImage}
                className={classes.image}
                alt="bottomHeaderImage example"
              />

    </div>
  );
}



