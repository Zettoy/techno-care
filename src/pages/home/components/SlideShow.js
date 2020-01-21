import React from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";

import Container from "../../../util/Container";
import images from "../config/bannerImages";
import Button from "../../../util/Button";

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
    height: 'calc(100% - 4.5rem)',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'black',
    '& $img, & $mask': {
      position: 'absolute',
      width: '100%',
      height: '100%',
    }
  },
  img: {
    zIndex: 1,
    opacity: 0,
    backgroundSize: 'cover',
    animationName: '$fade',
    animationIterationCount: 'infinite'
  },
  mask: {
    zIndex: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  content: {
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    color: 'white',
    '& $title, & $subtitle, & $button': {
      animationDuration: '1s',
      animationName: '$slide',
    }
  },
  title: {
    fontSize: '6em'
  },
  subtitle: {
    fontSize: '3em',
  },
  button: {
    marginTop: '4rem',
    padding: '1em 1.5em',
    fontSize: '1.3em',
  }
}));

function SlideShow() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map((item, key) => (
        <span className={classes.img}
              key={key}
              style={{
                backgroundImage: `url(${item.image})`,
                animationDuration: `${images.length * 8}s`,
                animationDelay: `${images.indexOf(item) * 8}s`
              }}/>
      ))}
      <span className={classes.mask}/>
      <Container className={classes.content}>
        <span className={classes.title}><strong>TechnoCare IT Services</strong></span>
        <span className={classes.subtitle}>Your satisfaction, our desire.</span>
        <Link to="/quote"><Button className={classes.button}>GET A QUOTE</Button></Link>
      </Container>
    </div>
  );
}

export default SlideShow;
