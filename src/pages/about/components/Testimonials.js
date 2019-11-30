import React from "react";
import { createUseStyles } from "react-jss";

import Container from "../../../util/Container";
import Title from "../../../util/Title";
import Paper from "../../../util/Paper";
import avatar from "../assets/avatar.png";

const useStyles = createUseStyles(theme => ({
  '@keyframes slideShow': {
    '0%': { transform: 'translateX(0)' },
    '37.5%': { transform: 'translateX(0)' },
    '50%': { transform: `translateX(-${theme.screenSize.md})` },
    '87.5%': { transform: `translateX(-${theme.screenSize.md})` },
    '100%': { transform: 'translateX(0)' }
  },
  body: {
    width: theme.screenSize.md,
    margin: 'auto',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column-reverse'
  },
  slides: {
    width: theme.screenSize.xl,
    display: 'flex',
    animationName: '$slideShow',
    animationDuration: '8s',
    animationIterationCount: 'infinite',
    '& div': {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& img': {
        borderRadius: '50%',
        width: '10%',
        boxShadow: theme.elevation[2]
      }
    }
  }
}));

function Testimonials() {
  const classes = useStyles();

  return (
    <Paper color="secondary">
      <Container style={{padding: '3rem 0'}}>
        <Title style={{marginBottom: '2rem'}}>
          TESTIMONIALS
        </Title>
        <div className={classes.body}>
          <div className={classes.slides}>
            <div>
              <img src={avatar} alt="avatar"/>
              <span>name1</span>
              <span>head1</span>
              <span>content1</span>
            </div>
            <div>
              <img src={avatar} alt="avatar"/>
              <span>name2</span>
              <span>head2</span>
              <span>content2</span>
            </div>
          </div>
        </div>
      </Container>
    </Paper>
  );
}

export default Testimonials;