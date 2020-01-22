import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import axios from "axios"

import Container from "../../../util/Container";
import Paper from "../../../util/Paper";
import Title from "../../../util/Title";
import about from "../assets/about.jpg";

const useStyles = createUseStyles(theme=> ({
  container: {
    width: `calc(${theme.screenSize.lg} + 4rem)`,
    padding: '1rem 0',
  },
  body: {
    display: 'flex',
    width: '100%',
    padding: '4rem 0',
    '& $content, & img': {
      position: 'relative',
      flexGrow: 1,
      width: '100%',
      boxSizing: 'border-box'
    },
    '& img': {
      boxShadow: theme.elevation[2],
      bottom: '2rem',
      right: '2rem'
    }
  },
  content: {
    padding: '2.5rem 2rem',
    zIndex: 1,
    top: '2rem',
    left: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    '& span': {
      fontSize: '1.1rem',
      color: theme.palette.text.primary
    },
    '& div span:nth-child(1)': {
      padding: '0.5rem 1rem',
      borderLeft: `2px solid ${theme.palette.text.primary}`
    },
  }
}));

function Header({backgroundColor, title}) {
  const classes = useStyles();

  const [content, setContent] = useState("");
  const [footer, setFooter] = useState("");

  useEffect(() => {
    axios.get("/api/aboutPageTexts")
      .then(response => {
        const responseDataList = response.data._embedded.aboutPageTexts;
        setContent(responseDataList.find(item => item.title === "About").body);
        setFooter(responseDataList.find(item => item.title === "Philosophy").body);
      })
      .catch(error => console.log(error))
  }, []);

  return (
    <Paper color={backgroundColor}>
      <Container className={classes.container}>
        {title && <Title style={{marginTop: '2rem'}}>ABOUT US</Title>}
        <div className={classes.body}>
          <Paper className={classes.content} color="primary" elevation="2">
            <span>{content}</span>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <span>{footer}</span>
            </div>
          </Paper>
          <img src={about} alt="about"/>
        </div>
      </Container>
    </Paper>
  )
}

export default Header;