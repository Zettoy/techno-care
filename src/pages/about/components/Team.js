import React from "react";
import { createUseStyles } from "react-jss";

import Container from "../../../util/Container";
import Title from "../../../util/Title";
import Paper from "../../../util/Paper";
import teamMembers from "../config/teamMembers";

const useStyles = createUseStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.secondary,
    color: theme.palette.text.primary
  },
  body: {
    display: 'grid',
    gridGap: '20px',
    gridTemplateColumns: 'repeat(3, 1fr)'
  },
  member: {
    display: 'flex',
    flexDirection: 'column',
    '& img': {
      height: '100%',
      width: '100%',
      boxShadow: theme.elevation[2]
    }
  }
}));

function Team() {
  const classes = useStyles();

  return (
    <Paper className={classes.root} color="secondary">
      <Container style={{padding: '3rem 0'}}>
        <Title style={{marginBottom: '2rem'}}>
          OUR TEAM
        </Title>
        <div className={classes.body}>
          {teamMembers.map(member => (
            <div className={classes.member} key={teamMembers.indexOf(member)}>
              <img src={require(`../assets/${member.avatar}`)} alt={member.name}/>
              <span>{member.name}</span>
              <span>{member.title}</span>
            </div>
          ))}
        </div>
      </Container>
    </Paper>
  );
}

export default Team;