import React from 'react'

import { Typography, Grid, GridList, Paper, Divider, Button } from '@material-ui/core'

import { createUseStyles } from 'react-jss'
import styles from '../../styles/conference/Conference'

import content from './Content'

const makeStyles = createUseStyles(styles)

const Conference = () => {

  const classes = makeStyles()
  return (
    <Grid container>
      <Grid container item xs={12} sm={6}>
        <Grid item>
          <Typography className={classes.title} color='error' variant='h3'>Milwaukee Blockchain Conference</Typography>
        </Grid>
        <Grid item className={classes.subtitle}>
          <Typography color='error' variant='h4'>
            <br/>
            March 13th, 2020
            <br/>
            <hr/>
            <Button color='inherit' variant='outlined' target='__blank' href='https://msu.co1.qualtrics.com/jfe/form/SV_5v5ZxJWO6vkIf0F' >Register</Button>
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12} sm={6}>
        <Grid container item xs={2} sm={2} md={4} xl={6}>

          <br/>
          <br/>
          <img className={classes.building} src='https://www.pickardchilton.com/sites/default/files/1206_N344_webslider.jpg'/>
        </Grid>
        <Grid item container justify="center" alignItems="center" xs={10} sm={10} md={8} xl={6}>
          <Paper elevation={15}>
            <Typography className={classes.textBox} variant='h5'>{content.description}</Typography>
          </Paper>
        </Grid>
      </Grid>
     
    </Grid>
  )
}

export default Conference