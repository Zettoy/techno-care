import React from "react";
import { createUseStyles } from "react-jss";

import Container from "../../../util/Container";
import Title from "../../../util/Title";
import Paper from "../../../util/Paper";
import teamMembers from "../config/teamMembers";

const useStyles = createUseStyles(theme => ({
  body: {
    display: 'grid',
    gridGap: '1.5rem',
    gridTemplateColumns: 'repeat(3, 1fr)'
  },
  member: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  profile: {
    backgroundSize: 'cover',
    height: `calc((${theme.screenSize.lg} - 3rem) / 3)`,
    width: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover $mask': {
      opacity: 1
    },
    '&:hover $social': {
      opacity: 1,
      transform: 'translateY(0)',
    }
  },
  mask: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0,
    transition: '0.5s'
  },
  social: {
    display: 'flex',
    opacity: 0,
    transform: 'translateY(10rem)',
    transition: '0.5s',
    '& div': {
      height: '4rem',
      width: '4rem',
      border: '1px solid white',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0)',
      transition: '0.5s',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 1)'
      }
    }
  },
  info: {
    marginTop: '0.5rem',
    color: theme.palette.text.primary
  }
}));

function Team({backgroundColor}) {
  const classes = useStyles();

  return (
    <Paper color={backgroundColor}>
      <Container style={{padding: '3rem 0'}}>
        <Title style={{marginBottom: '2rem'}}>
          OUR TEAM
        </Title>
        <div className={classes.body}>
          {teamMembers.map((member, key) => (
            <div className={classes.member} key={key}>
              <Paper className={classes.profile} elevation="2"
                     style={{backgroundImage: `url(${require(`../assets/${member.avatar}`)})`}}>
                <span className={classes.mask}/>
                <div className={classes.social}>
                  <div/>
                  <div style={{margin: '0 1.5rem'}}/>
                  <div/>
                </div>
              </Paper>
              <span className={classes.info}>{member.name}</span>
              <span className={classes.info}>{member.title}</span>
            </div>
          ))}
        </div>
      </Container>
    </Paper>
  );
}

export default Team;