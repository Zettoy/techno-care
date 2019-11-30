import React from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";

import Container from "../../../util/Container";
import Paper from "../../../util/Paper";
import images from "../config/bannerImages";

const gap = 100 / images.length / 2;

const useStyles = createUseStyles(theme => ({
  '@keyframes fade': {
    '0%': { opacity: 0 },
    [`${gap}%`]: { opacity: 1 },
    [`${gap * 2}%`]: { opacity: 1 },
    [`${gap * 3}%`]: { opacity: 0 },
    '100%': { opacity: 0 },
  },
  '@keyframes slide': theme.animation.slideUp,
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'black',
  },
  img: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
    opacity: 0,
    backgroundSize: 'cover',
    animationName: '$fade',
    animationIterationCount: 'infinite'
  },
  content: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    color: 'white',
    '& $title, & $subtitle, & $button': {
      margin: '1rem 0',
      animationDuration: '1s',
      animationName: '$slide',
    }
  },
  title: {
    fontSize: '9em'
  },
  subtitle: {
    fontSize: '6em'
  },
  button: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
    backgroundColor: '#2e2e2e',
    padding: '1em 2em',
    fontSize: '1.5em',
    boxShadow: theme.elevation['2'],
    transition: '0.5s',
    '&:hover': {
      backgroundColor: theme.palette.background.hover
    }
  }
}));

function SlideShow() {
  const classes = useStyles();

  return (
    <Paper className={classes.root} color="inherit">
      {images.map(item => (
        <span className={classes.img}
              key={images.indexOf(item)}
              style={{
                backgroundImage: `url(${item.image})`,
                animationDuration: `${images.length * 8}s`,
                animationDelay: `${images.indexOf(item) * 8}s`
              }}/>
      ))}
      <Container className={classes.content}>
        <span className={classes.title}>Title</span>
        <span className={classes.subtitle}>Subtitle</span>
        <Link className={classes.button} to="/about">Learn More</Link>
      </Container>
    </Paper>
  );
}

export default SlideShow;
