import React from 'react'

import { Typography, Grid, GridList, Paper, withStyles, GridListTile} from '@material-ui/core'
import { createUseStyles } from 'react-jss'
import styles from '../../styles/landing/Landing'

import EventFeed from './EventFeed'

const useStyles = createUseStyles(styles)



const Landing = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8} md={8} lg={10}>
          <Grid item>
            <Paper className={classes.mission}>
              <Typography variant='h3'>Mission</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <Typography variant='h3'>Vision</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <Typography variant='h3'>Core Values</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={2}>
          <Paper>
            <EventFeed></EventFeed>
          </Paper>
        </Grid>
        
      </Grid>
    </div>
  )
}


export default Landing
