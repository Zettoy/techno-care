import React from "react";
import {createUseStyles, useTheme} from "react-jss";

import Container from "../../../util/Container";
import Title from "../../../util/Title";
import Paper from "../../../util/Paper";
import Button from "../../../util/Button";
import testimonials from "../config/testimonials";

const useStyles = createUseStyles(theme => ({
  body: {
    width: theme.screenSize.md,
    margin: 'auto',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column'
  },
  slides: {
    display: 'flex',
    transition: '1s',
  },
  slide: {
    flexGrow: 1,
    width: theme.screenSize.md,
    height: '10rem',
    padding: '1.5rem 1.5rem',
    margin: '0 1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    '& span': {
      color: theme.palette.text.primary
    },
    '& div': {
      alignSelf: 'flex-end',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      '& img, & span': {
        margin: '0 0.2rem'
      },
      '& img': {
        borderRadius: '50%',
        width: '10%',
        boxShadow: theme.elevation[2]
      },
      '& span': {
        fontSize: '1.2em'
      }
    }
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem 0',
    '& button': {
      margin: '0 0.1rem',
      height: '2rem',
      width: '2rem',
    }
  }
}));

function Testimonials({backgroundColor}) {
  const classes = useStyles();
  const theme = useTheme();
  const [transform, setTransform] = React.useState(0);

  const handleLt = () => {
    if (transform === 0) return;
    setTransform(transform - 1);
  };

  const handleGt = () => {
    if (transform === testimonials.length - 1) return;
    setTransform(transform + 1);
  };

  return (
    <Paper color={backgroundColor}>
      <Container style={{padding: '3rem 0'}}>
        <Title style={{marginBottom: '2rem'}}>
          TESTIMONIALS
        </Title>
        <div className={classes.body}>
          <div className={classes.slides}
               style={{
                 width: `calc(${theme.screenSize.md} * ${testimonials.length})`,
                 transform: `translateX(calc(${-transform} * ${theme.screenSize.md}))`
               }}>
            {testimonials.map((item, key) => (
              <Paper className={classes.slide} color="primary" elevation="2" key={key}>
                <span style={{fontSize: '1.5em'}}>"{item.content}"</span>
                <div style={{display: 'flex'}}>
                  <img src={item.avatar} alt="avatar"/>
                  <span>{item.name},</span>
                  <span>{item.head}</span>
                </div>
              </Paper>
            ))}
          </div>
          <div className={classes.nav}>
            <Button onClick={handleLt}>&lt;</Button>
            <Button onClick={handleGt}>&gt;</Button>
          </div>
        </div>
      </Container>
    </Paper>
  );
}

export default Testimonials;