import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import axios from "axios";

import Container from "../../../util/Container";
import Title from "../../../util/Title";
import Paper from "../../../util/Paper";

const useStyles = createUseStyles({
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

function VisionMission({backgroundColor}) {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    axios.get("/api/aboutPageTexts")
      .then(response => {
        const contentList = [];
        response.data._embedded.aboutPageTexts.filter(item => item.title !== "About").forEach(response => {
          contentList.push({
            title: response.title,
            content: response.body,
            image: require(`../assets/${response.title.toLowerCase()}.png`)
          });
        });
        setContents(contentList);
      });
  }, []);

  const classes = useStyles();

  return (
    <Paper color={backgroundColor}>
      <Container style={{padding: '3rem 0'}}>
        <Title style={{marginBottom: '2rem'}}>
          OUR VISION AND MISSION
        </Title>
        <div className={classes.body}>
          <Paper elevation="2">
            {contents.map((item, key) => (
              <div className={classes.section}
                   style={{backgroundImage: `url(${item.image})`}}
                   key={key}>
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