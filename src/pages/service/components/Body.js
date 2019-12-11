import React from "react";
import { createUseStyles } from "react-jss";

import Container from "../../../util/Container";
import Paper from "../../../util/Paper";

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
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  body: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '1.5rem'
  },
  content: {
    gridColumn: '1 / 4',
    display: 'flex',
    padding: '1rem 0',
    flexDirection: 'column',
    '& span:nth-child(1)': {
      fontSize: '2em'
    },
    '& span:nth-child(2)': {
      fontSize: '1.1em',
      marginTop: '0.5rem'
    }
  }
}));

function Body({data}) {
  const classes = useStyles();

  return (
    <Paper color="secondary">
      <Container className={classes.container}>
        <Paper className={classes.head}
               style={{backgroundImage: `url(${data.image})`}}>
          <span className={classes.mask}/>
          <div>{data.label}<span/></div>
        </Paper>
        <div className={classes.body}>
          <div className={classes.content}>
            <span>{data.label}</span>
            <span>{data.content}</span>
          </div>
          <div style={{gridColumn: '4 / 5'}}>
            test
          </div>
        </div>
      </Container>
    </Paper>
  );
}

export default Body;