import React from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";

import Container from "../../../util/Container";
import Title from "../../../util/Title";
import Paper from "../../../util/Paper";
import services from "../../../config/services";

const useStyles = createUseStyles({
  root: {
    position: 'relative',
    zIndex: -1,
  },
  services: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    '& $service:nth-child(1)': {
      gridColumn: '1 / 3'
    },
    '& $service:nth-child(7)': {
      gridColumn: '2 / 4'
    },
  },
  service: {
    display: 'flex',
    position: 'relative',
    textDecoration: 'none',

    '& $image, & $mask, & $content': {
      width: '100%',
      height: '400px',
    },
    '& $image, & $mask': {
      position: 'absolute',
    },
    '& $mask, & $label': {
      transition: '0.5s'
    },
    '&:hover $mask': {
      opacity: 0
    },
    '&:hover $label': {
      border: '4px solid rgba(255, 255, 255, 1)'
    }
  },
  image: {
    backgroundSize: 'cover',
  },
  mask: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  label: {
    position: 'relative',
    color: 'white',
    fontSize: '1.1em',
    textTransform: 'uppercase',
    padding: '1rem',
    border: '4px solid rgba(255, 255, 255, 0)',
    '& div': {
      position: 'absolute',
      top: 0,
      left: 'calc((100% - 2em) / 2)',
      height: '100%',
      width: '2em',
      borderBottom: '4px solid white',
    }
  }
});

function Services() {
  const classes = useStyles();

  return (
    <Paper className={classes.root} color="secondary">
      <Container style={{padding: '5rem 0'}}>
        <Title style={{marginBottom: '3.5rem', fontSize: '2.5em'}}>
          OUR SERVICES
        </Title>
        <Paper className={classes.services}>
          {services.map(item => (
            <Link className={classes.service}
                  to={item.pathname}
                  key={item.label}>
              <span style={{backgroundImage: `url(${item.image}`}}
                    className={classes.image}/>
              <span className={classes.mask}/>
              <div className={classes.content}>
                <div className={classes.label}>
                  <strong>{item.label}</strong>
                  <div/>
                </div>
              </div>
            </Link>
          ))}
        </Paper>
      </Container>
    </Paper>
  );
}

export default Services;