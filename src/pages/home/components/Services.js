import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import axios from "axios";

import Container from "../../../util/Container";
import Title from "../../../util/Title";
import Paper from "../../../util/Paper";

const useStyles = createUseStyles({
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

function Services({backgroundColor}) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("/api/services")
      .then(response => {
        const serviceList = [];
        response.data._embedded.services.forEach(service => {
          serviceList.push({
            label: service.title,
            content: service.body,
            pathname: '/services/' + service.title.toLowerCase().replace(/ /g, '-'),
            image: require(`../../../assets/${service.title.toLowerCase().replace(/ /g, '_')}.png`)
          });
        });
        setServices(serviceList);
      });
  }, []);

  const classes = useStyles();

  return (
    <Paper color={backgroundColor}>
      <Container style={{padding: '3rem 0'}}>
        <Title style={{marginBottom: '2rem'}}>
          OUR SERVICES
        </Title>
        <Paper className={classes.services} elevation="2">
          {services.map((item, key) => (
            <Link className={classes.service}
                  to={item.pathname}
                  key={key}>
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