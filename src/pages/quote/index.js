import React from "react";
import { createUseStyles } from "react-jss";
import FlexColumn from "../../util/FlexColumn";

const useStyles = createUseStyles(theme => ({
  title: {
    fontSize: '2em',
    borderBottom: 'lightgrey 2px solid',
    marginBottom: '1.5rem',
    padding: '0.5rem 0',
    '& span': {
      borderBottom: `2px solid ${theme.palette.text.primary}`,
      padding: '0.5rem 0',
    }
  },
  root: {
    paddingTop: '8rem',
    paddingBottom: '4rem',
    maxWidth: theme.screenSize.lg,
    margin: 'auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridGap: '2rem',
  },
  form: {
    gridColumn: '1 / 6',
    '& input, & textarea': {
      marginTop: '0.3rem',
      marginBottom: '0.5rem',
      padding: '0.4rem 0.3rem'
    },
    '& input': {
      width: '50%'
    },
    '& textarea': {
      width: '70%'
    }
  },
  aside: {
    gridColumn: '6 / 7'
  }

}));

function Quote() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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

          <input type="button" value="Submit" style={{width: '10%'}}/>
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
    </div>
  );
}

export default Quote;