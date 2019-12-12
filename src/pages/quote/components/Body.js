import React from "react";
import { createUseStyles } from "react-jss";

import Container from "../../../util/Container";
import FlexColumn from "../../../util/FlexColumn";
import Paper from "../../../util/Paper";

const useStyles = createUseStyles(theme => ({
  title: {
    fontSize: '2em',
    borderBottom: `lightgrey 2px solid`,
    marginBottom: '1.5rem',
    padding: '0.5rem 0',
    '& span': {
      borderBottom: `2px solid ${theme.palette.text.primary}`,
      padding: '0.5rem 0',
    }
  },
  root: {
    color: theme.palette.text.primary
  },
  container: {
    paddingTop: '4rem',
    paddingBottom: '4rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridGap: '2rem',
  },
  form: {
    gridColumn: '1 / 6',
    '& input, & textarea': {
      marginTop: '0.5rem',
      marginBottom: '1rem',
      padding: '0.4rem',
      backgroundColor: theme.palette.background.primary,
      color: theme.palette.text.primary,
      border: 'none',
      boxShadow: theme.elevation[2],
      '&:focus': {
        outline: 'none'
      }
    },
    '& input': {
      width: '50%'
    },
    '& textarea': {
      width: '70%'
    },
    '& $button': {
      width: '10%',
      padding: '0.5rem 0'
    }
  },
  button: {
    cursor: 'pointer',
    transition: '0.5s',
    '&:hover': {
      backgroundColor: theme.palette.background.hover
    }
  },
  aside: {
    gridColumn: '6 / 7'
  }
}));

function Body() {
  const classes = useStyles();

  return (
    <Paper className={classes.root} color="secondary">
      <Container className={classes.container}>
        <div className={classes.form}>
          <div className={classes.title}><span>Quote Form</span></div>
          <FlexColumn>
            <label htmlFor="name"><strong>Name</strong></label>
            <input type="text" id="name" name="name" required/>

            <label htmlFor="contact"><strong>Contact</strong></label>
            <input type="text" id="contact" name="contact" required/>

            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" id="email" name="email" required/>

            <label htmlFor="service"><strong>Service interested</strong></label>
            <input type="text" id="service" name="service" required/>

            <label htmlFor="message"><strong>Message</strong></label>
            <textarea id="message" name="message" rows="10" required/>

            <input className={classes.button} type="button" value="Submit"/>
          </FlexColumn>
        </div>
        <div className={classes.aside}>
          <FlexColumn>
            <div className={classes.title}><span>Contacts</span></div>
            <span>5B/186-188 Canterbury Road,Canterbury,2193,NSW Australia</span>
            <span>info@technocareitsolutions.com.au</span>
            <span>0421 673 915</span>
          </FlexColumn>
          <FlexColumn style={{marginTop: '2rem'}}>
            <div className={classes.title}><span>Business Hours</span></div>
            <span>Monday-Friday:10am-8pm</span>
            <span>Saturday:11am -4pm</span>
            <span>Sunday: closed</span>
          </FlexColumn>
        </div>
      </Container>
    </Paper>
  );
}

export default Body;