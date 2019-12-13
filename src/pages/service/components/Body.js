import React from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";

import Container from "../../../util/Container";
import Paper from "../../../util/Paper";

import services from "../../../config/services";

const useStyles = createUseStyles(theme => ({
  container: {
    color: theme.palette.text.primary,
    padding: '2rem 0'
  },
  head: {
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPositionY: '-7rem',
    height: '30rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& div': {
      fontSize: '3rem',
      color: 'white',
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      justifyContent: 'center',
      padding: '0.5rem 0',
      '& span': {
        position: 'absolute',
        width: '5rem',
        height: '100%',
        borderBottom: 'white 4px solid'
      }
    }
  },
  mask: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  body: {
    display: 'grid',
    gridTemplateColumns: 'repeat(10, 1fr)',
    gridGap: '1.5rem',
    marginTop: '1rem'
  },
  content: {
    gridColumn: '1 / 8',
    display: 'flex',
    flexDirection: 'column',
    '& span:nth-child(1)': {
      fontSize: '2em'
    },
    '& span:nth-child(2)': {
      fontSize: '1.1em',
      marginTop: '0.5rem'
    }
  },
  aside: {
    gridColumn: '8 / 11',
    display: 'flex',
    flexDirection: 'column'
  },
  asideItem: {
    backgroundSize: 'cover',
    position: 'relative',
    height: '4rem',
    display: 'flex',
    alignItems: 'center',
    margin: '0.5rem 0',
    '& $mask': {
      transition: '0.5s'
    },
    '&:hover $mask': {
      opacity: 0
    },
    '& span:nth-child(2)': {
      position: 'relative',
      zIndex: 1,
      margin: '0 1rem'
    }
  }
}));

function Body({data}) {
  const classes = useStyles();

  return (
    <Paper color="secondary">
      <Container className={classes.container}>
        <Paper className={classes.head} elevation="2"
               style={{backgroundImage: `url(${data.image})`}}>
          <span className={classes.mask}/>
          <div><strong>{data.label}</strong><span/></div>
        </Paper>
        <div className={classes.body}>
          <div className={classes.content}>
            <span>{data.label}</span>
            <span>{data.content}</span>
          </div>
          <div className={classes.aside}>
            {services.map(item => (
              <Link to={item.pathname}
                    key={services.indexOf(item)}
                    style={{textDecoration: 'none', color: 'white'}}>
                <Paper className={classes.asideItem} elevation="2"
                       style={{backgroundImage: `url(${item.image})`}}>
                  <span className={classes.mask}/>
                  <span style={{zIndex: 1, position: 'relative'}}><strong>{item.label} &gt;</strong></span>
                </Paper>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Paper>
  );
}

export default Body;