import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import axios from "axios"

import Container from "../../../util/Container";
import Paper from "../../../util/Paper";
import Title from "../../../util/Title";
import content from "../config/content";
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

  const [edit, setEdit] = useState(false);
  const [content, setContent] = useState("");

  const handleSave = () => {
    axios.put("http://localhost:8080/api/texts/1", {content: content})
      .then(response => console.log(response))
      .catch(error => console.log(error));
    setEdit(false);
  };

  useEffect(() => {
    axios.get("http://localhost:8080/api/texts")
      .then(response => setContent(response.data._embedded.texts[0].content))
      .catch(error => console.log(error))
  }, []);

  return (
    <Paper color={backgroundColor}>
      <Container className={classes.container}>
        {title && <Title style={{marginTop: '2rem'}}>ABOUT US</Title>}
        <div className={classes.body}>
          <Paper className={classes.content} color="primary" elevation="2">
            {edit ? <form>
                      <textarea style={{width: '100%'}} rows="10" value={content}
                                onChange={event => setContent(event.target.value)}/>
                    </form>
                  : <span>{content}</span>}
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <span>Your satisfaction, Our desire</span>
              {edit ? <button onClick={() => handleSave()}>Save</button>
                    : <button onClick={() => setEdit(true)}>Edit</button>}
            </div>
          </Paper>
          <img src={about} alt="about"/>
        </div>
      </Container>
    </Paper>
  )
}

export default Header;