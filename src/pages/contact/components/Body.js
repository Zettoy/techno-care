import React from "react";
import { createUseStyles } from "react-jss";

import Container from "../../../util/Container";
import Paper from "../../../util/Paper";
import Button from "../../../util/Button";
import contactInfo from "../../../config/contactInfo";

const useStyles = createUseStyles(theme => ({
  root: {
    color: theme.palette.text.primary
  },
  container: {
    padding: '3rem 0',
    display: 'grid',
    gridGap: '1.5rem',
    gridTemplateColumns: 'repeat(12, 1fr)'
  },
  main: {
    gridColumn: '1 / 10',
    boxSizing: 'border-box',
    padding: '3rem',
    color: theme.palette.text.primary,
  },
  form: {
    marginTop: '1rem',
    display: 'grid',
    gridGap: '1rem',
    gridTemplateColumns: 'repeat(12, 1fr)'
  },
  formItem: {
    display: 'flex',
    flexDirection: 'column',
    '& label': {
      fontSize: '1.2rem',
      marginBottom: '0.5rem',
      '& span': {
        color: 'red',
      }
    },
    '& input, & select, & textarea': {
      boxSizing: 'border-box',
      width: '100%',
      backgroundColor: theme.palette.background.primary,
      color: theme.palette.text.primary,
      border: '1px solid grey',
      fontSize: '1.2rem',
      padding: '1rem',
      transition: '0.5s',
      '&:focus': {
        outline: 'none',
        border: `1px solid ${theme.palette.text.primary}`,
        boxShadow: '0 0 3px rgba(0, 0, 0, 0.5)'
      }
    },
  },
  button: {
    backgroundColor: theme.palette.background.secondary,
    gridColumn: '1 / 13',
    justifySelf: 'flex-end',
    width: '10rem',
    fontSize: '1.2em',
    padding: '0.8rem',
  },
  aside: {
    gridColumn: '10 / 13',
    display: 'flex',
    flexDirection: 'column'
  },
  asideItem: {
    marginBottom: '2rem',
    color: theme.palette.text.primary,
    display: 'flex',
    flexDirection: 'column',
    padding: '1.3rem'
  },
  title: {
    fontSize: '1.5rem',
    borderBottom: `2px solid ${theme.palette.text.primary}`,
    marginBottom: '1rem',
    paddingBottom: '0.5rem',
  },
  content: {
    fontSize: '0.9rem'
  }
}));

function Body() {
  const classes = useStyles();

  return (
    <Paper className={classes.root} color="secondary">
      <Container className={classes.container}>
        <Paper color="primary" elevation="2" className={classes.main}>
          <span style={{fontSize: '2.5rem'}}><strong>CONTACT US</strong></span>
          <form className={classes.form}>
            <div className={classes.formItem} style={{gridColumn: '1 / 5'}}>
              <label htmlFor="name"><strong>Name</strong><span><strong>*</strong></span></label>
              <input type="text" id="name" name="name" required/>
            </div>
            <div className={classes.formItem} style={{gridColumn: '5 / 9'}}>
              <label htmlFor="contact"><strong>Contact</strong><span><strong>*</strong></span></label>
              <input type="text" id="contact" name="contact" required/>
            </div>
            <div className={classes.formItem} style={{gridColumn: '9 / 13'}}>
              <label htmlFor="email"><strong>Email</strong><span><strong>*</strong></span></label>
              <input type="email" id="email" name="email" required/>
            </div>
            <div className={classes.formItem} style={{gridColumn: '1 / 13'}}>
              <label htmlFor="message"><strong>Message</strong></label>
              <textarea id="message" name="message" rows="10"/>
            </div>
            <Button className={classes.button} type="input">Submit</Button>
          </form>
        </Paper>
        <div className={classes.aside}>
          <Paper className={classes.asideItem} color="primary" elevation="2">
            <span className={classes.title}><strong>Contact Us</strong></span>
            {contactInfo.map(item => (
              <span key={contactInfo.indexOf(item)} className={classes.content}>{item}</span>
            ))}
          </Paper>
          <Paper className={classes.asideItem} color="primary" elevation="2">
            <span className={classes.title}><strong>Business Hours</strong></span>
            <span className={classes.content}><strong>Monday-Friday: </strong>10am-8pm</span>
            <span className={classes.content}><strong>Saturday: </strong>11am-4pm</span>
            <span className={classes.content}><strong>Sunday: </strong>Closed</span>
          </Paper>
        </div>
      </Container>
    </Paper>
  );
}

export default Body;