import React from "react";
import { createUseStyles } from "react-jss";

import Container from "../../../util/Container";
import Title from "../../../util/Title";
import Paper from "../../../util/Paper";
import content from "../config/content";

const useStyles = createUseStyles({
  root: {
    position: 'relative',
    zIndex: -1,
  },
  body: {
    display: 'flex',
    flexDirection: 'column'
  },
  section: {
    backgroundSize: 'cover',
    backgroundPositionY: '-12rem',
    position: 'relative'
  },
  mask: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem 4rem',
    height: '15rem',
    color: 'white',
    justifyContent: 'center'
  }
});

function VisionMission() {
  const classes = useStyles();
  const data = [
    {
      title: 'Mission',
      content: content.mission,
      image: require(`../assets/mission.png`)
    },
    {
      title: 'Vision',
      content: content.vision,
      image: require(`../assets/vision.png`)
    },
    {
      title: 'Philosophy',
      content: content.philosophy,
      image: require(`../assets/philosophy.png`)
    },
  ];


  return (
    <Paper className={classes.root} color="primary">
      <Container style={{padding: '3rem 0'}}>
        <Title style={{marginBottom: '2rem'}}>
          OUR VISION AND MISSION
        </Title>
        <div className={classes.body}>
          <Paper>
            {data.map(item => (
              <div className={classes.section} style={{backgroundImage: `url(${item.image})`}}>
                <span className={classes.mask}/>
                <div className={classes.content}>
                  <span style={{fontSize: '3rem', marginBottom: '1rem'}}>{item.title}</span>
                  <span style={{fontSize: '1.2rem'}}>{item.content}</span>
                </div>
              </div>
            ))}
          </Paper>
        </div>
      </Container>
    </Paper>
  );
}

export default VisionMission;