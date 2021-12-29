import React from 'react';
import {Card, Typography, CardContent, CardActions} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(()=> ({
    root: {
        textAlign: 'center',
        backgroundColor: 'rgba(73, 15, 135, 1)',

    },
    texto:{
        fontSize:18,
        color: 'white',

    },
    titulo:{
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    }
}));


function Cards(props) {
    const classes = useStyles();
    return (
      <Card className={classes.root}>
          <CardContent>
              <Typography className={classes.titulo}>
                  {props.title}
              </Typography>
              <Typography className={classes.texto}>
                  {props.text}
              </Typography>
          </CardContent>
      </Card>
    )
}



export default Cards

