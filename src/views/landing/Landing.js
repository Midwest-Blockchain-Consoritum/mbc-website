import React, { useEffect } from 'react'

import { Typography, Grid, GridList, GridListTile, Paper} from '@material-ui/core'
import { createUseStyles } from 'react-jss'

import styles from '../../styles/landing/Landing'

import EventFeed from './EventFeed'

import content from './Content'
import zIndex from '@material-ui/core/styles/zIndex';


const useStyles = createUseStyles(styles)


const Slider = () => {
  const classes = useStyles()
  const images = [
    { url: 'https://www.aithority.com/wp-content/uploads/2019/07/Blockchain-1.jpg' },
    { url: 'https://builtin.com/sites/default/files/styles/medium/public/2019-01/blockchain-companies.jpg' },
    { url: 'https://builtin.com/sites/default/files/styles/medium/public/2019-01/blockchain-companies.jpg' },
    { url: 'https://www.aithority.com/wp-content/uploads/2019/07/Blockchain-1.jpg' },
  ]
  
  return (
    <GridList className={classes.gridList} cellHeight={200} spacing={3} cols={2}>
      {images.map(image => (
        <GridListTile key={image.url}>
          <img src={image.url}></img>
        </GridListTile>
      ))}
    </GridList>
  )
}

const Landing = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8} md={8} lg={9} xl={10}>
          <Grid item>
            <Slider/>
          </Grid>
          <Grid item>
            <Paper className={classes.about} elevation={15}>
              <Typography className={classes.aboutText} variant='h6'>{content.about}</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={3} xl={2}>
          <Paper elevation={20}>
            <Typography className={classes.events} variant='h3'>Events</Typography>
            <EventFeed></EventFeed>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}


export default Landing
