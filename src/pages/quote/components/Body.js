import React from "react";
import { createUseStyles } from "react-jss";

import Container from "../../../util/Container";
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
  },
  quote: {
    boxSizing: 'border-box',
    padding: '3rem',
    color: theme.palette.text.primary,
    '& span': {
      fontSize: '2.5em'
    }
  },
  form: {
    marginTop: '1rem',
    display: 'grid',
    gridGap: '1rem',
    gridTemplateColumns: 'repeat(4, 1fr)'
  },
  formItem: {
    display: 'flex',
    flexDirection: 'column',
    '& label': {
      fontSize: '1.2rem',
      marginBottom: '0.5rem'
    },
    '& input, & textarea': {
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
}));

function Body() {
  const classes = useStyles();

  return (
    <Paper className={classes.root} color="secondary">
      <Container className={classes.container}>
        <Paper color="primary" elevation="2" className={classes.quote}>
          <span><strong>GET A QUOTE TODAY</strong></span>
          <form className={classes.form}>
            <div className={classes.formItem}>
              <label htmlFor="name"><strong>Name</strong></label>
              <input type="text" id="name" name="name" required/>
            </div>
            <div className={classes.formItem}>
              <label htmlFor="contact"><strong>Contact</strong></label>
              <input type="text" id="contact" name="contact" required/>
            </div>
            <div className={classes.formItem}>
              <label htmlFor="email"><strong>Email</strong></label>
              <input type="email" id="email" name="email" required/>
            </div>
            <div className={classes.formItem}>
              <label htmlFor="service"><strong>Service interested</strong></label>
              <input type="text" id="service" name="service" required/>
            </div>
            <div className={classes.formItem} style={{gridColumn: '1 / 5'}}>
              <label htmlFor="message"><strong>Message</strong></label>
              <textarea id="message" name="message" rows="10" required/>
            </div>
            <input type="button" value="submit"/>
          </form>
        </Paper>
      </Container>
    </Paper>
  );
}

export default Body;