import React from 'react'

import { Typography, Grid, Card, GridList, Paper, Divider, Button } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'

import { createUseStyles } from 'react-jss'
import styles from '../../styles/conference/Conference'

import content from './Content'

const makeStyles = createUseStyles(styles)

const Conference = () => {

  const classes = makeStyles()
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid container item xs={12} sm={12} md={6} xl={6}>
          <Grid item xl={12}>
            <Typography className={classes.title} color='error' variant='h3'>Milwaukee Blockchain Conference</Typography>
          </Grid>
          <Grid item className={classes.subtitle}>
            <Typography color='error' variant='h4'>
              <br/>
              March 13th, 2020
              <br/>
              <br/>
              <Typography color='error' variant='h6'>
                <LocationOnIcon className={classes.locationIcon}/>
                Milwaukee, WI
              </Typography>
              <hr/>
              <Button color='inherit' variant='outlined' target='__blank' href='https://msu.co1.qualtrics.com/jfe/form/SV_5v5ZxJWO6vkIf0F' >Register</Button>
            </Typography>
            <div className={classes.spacerSmall}></div>

          </Grid>

        </Grid>

        <Grid container item xs={12} sm={12}>
          <Grid container item direction='row' xs={2} sm={2} md={4} xl={6}>

            <br/>
            <br/>
            <img alt='building' className={classes.building} src='https://www.pickardchilton.com/sites/default/files/1206_N344_webslider.jpg'/>
          </Grid>
          <Grid item container justify="center" alignItems="center" xs={10} sm={10} md={8} xl={6}>
            <Paper style={{marginRight: '5em'}}elevation={15}>
              <Typography className={classes.textBox} variant='h5'>{content.description}</Typography>
            </Paper>
          </Grid>
        </Grid>

        <div className={classes.spacer}></div>
        <Grid container item xs={12} sm={12}>
          <Grid item>
            <Typography className={classes.title} color='error' variant='h3'>Pitch Competition</Typography>
            <hr />
          </Grid>
          <Grid item className={classes.subtitle}>
            <Typography color='error' variant='h4'>
            </Typography>
          </Grid>
        </Grid>
        <div className={classes.spacerSmall}></div>

        <Grid container item xs={12}>
          <Grid item container direction="row" justify="center" alignItems="center">
            <Paper className={classes.textCard} elevation={15}>
              <Typography className={classes.textBox} variant='h5'>12+ Universities</Typography>
            </Paper>
            <Paper className={classes.textCard} elevation={15}>
              <Typography className={classes.textBox} variant='h5'>10-Minute Pitch</Typography>
            </Paper>            
            <Paper className={classes.textCard} elevation={15}>
              <Typography className={classes.textBox} variant='h5'>$1,000 Cash Prize</Typography>
            </Paper>
          </Grid>
        </Grid>


        <div className={classes.spacerSmall}></div>
        <Grid container direction='row-reverse' item xs={12} sm={12}>
          <Grid item>
            <Typography className={classes.title} color='error' variant='h3'>Important Dates</Typography>
            <hr />
          </Grid>
          <Grid item className={classes.subtitle}>
            <Typography color='error' variant='h4'>
            </Typography>
          </Grid>
        </Grid>

        <div className={classes.spacerSmall}></div>
        <Grid container item xs={12}>
          <Grid item container direction="row" justify="center" alignItems="center">
            <Card className={classes.textCard} raised>
              <Typography className={classes.textBox} color='textSecondary' variant='h4'>January 13th, 2020</Typography>
              <Typography className={classes.textBox} variant='h4'>Applications Open</Typography>


            </Card>
            <Card className={classes.textCard} elevation={15}>
              <Typography className={classes.textBox} color='textSecondary' variant='h4'>Feburary 28th, 2020</Typography>
              <Typography className={classes.textBox} variant='h4'>Applications Close</Typography>
            </Card>            
            <Card className={classes.textCard} elevation={15}>
            <Typography className={classes.textBox} color='textSecondary' variant='h4'>March 13th, 2020</Typography>
              <Typography className={classes.textBox} variant='h4'>Competition Day and Conference Start</Typography>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.spacerSmall}></div>

    </div>
  )
}

export default Conference