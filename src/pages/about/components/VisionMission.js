import React from "react";
import { createUseStyles } from "react-jss";

import Container from "../../../util/Container";
import Title from "../../../util/Title";
import Paper from "../../../util/Paper";
import content from "../config/content";

const useStyles = createUseStyles(theme => ({
  root: {
    position: 'relative',
    zIndex: 1,
    color: theme.palette.text.primary,
  },
  body: {
    display: 'grid',
    gridGap: '20px',
    gridTemplateColumns: 'repeat(3, 1fr)'
  }
}));

function VisionMission() {
  const classes = useStyles();

  return (
    <Paper className={classes.root} color="primary">
      <Container style={{padding: '3rem 0'}}>
        <Title style={{marginBottom: '2rem'}}>
          OUR VISION AND MISSION
        </Title>
        <div className={classes.body}>
          <span>{content.mission}</span>
          <span>{content.vision}</span>
          <span>{content.philosophy}</span>
        </div>
      </Container>
    </Paper>
  );
}

export default VisionMission;