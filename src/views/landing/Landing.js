import React, { useEffect } from 'react'

import { Typography, Grid, Card, GridList, GridListTile, Paper, CircularProgress} from '@material-ui/core'
import { createUseStyles } from 'react-jss'

import { Fade } from 'react-slideshow-image'

import styles from '../../styles/landing/Landing'

import EventFeed from './EventFeed'

import content from './Content'


const useStyles = createUseStyles(styles)


const ImageSlider = () => {
  const classes = useStyles()

  const images = [
    { url: 'https://i.imgur.com/BLquf0g.jpg' },
    { url: 'https://i.imgur.com/fsB5TAn.jpg' },
    { url: 'https://i.imgur.com/ZBaxWPe.jpg' },
    { url: 'https://i.imgur.com/insWI6r.jpg' },
    { url: 'https://i.imgur.com/05f9jC3.png' },
  ]

  const settings = {
    duration: 4000,
    transitionDuration: 1000,
    infinite: true,
    indications: true,
    arrows: false,
    onChange: (oldIndex, newIndex) => {
    }
  }

  return (
    <div className={classes.intro}>
      <GridList cellHeight={500} cols={1} spacing={0} >
        <GridListTile>
          <Fade {...settings}>
            {images.map(image => (
              <img width='120%' align='middle' alt='carousel' src={image.url} />
            ))} 
          </Fade>
        </GridListTile>
      </GridList>
    </div>
  )
}

const Landing = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Grid item>
            <div className={classes.spacer}/>
            <ImageSlider />
          </Grid>
          <Grid item>
            <Paper className={classes.about} elevation={25}>
              <Typography className={classes.aboutText}  variant='h5'>{content.about}</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className={classes.spacer}/>
          <Paper elevation={20}>
            <Typography className={classes.events} variant='h3'>Upcoming Events</Typography>
            <EventFeed></EventFeed>
          </Paper>
        </Grid>
      </Grid>
      <div className={classes.spacer}/>
      <div className={classes.spacer}/>
    </div>
  )
}


export default Landing
