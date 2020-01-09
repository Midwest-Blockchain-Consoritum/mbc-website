import React from 'react'

import { Typography, Grid, Paper, withStyles} from '@material-ui/core'
import { createUseStyles } from 'react-jss'
import styles from '../../styles/landing/Landing'

const useStyles = createUseStyles(styles)


const Landing = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8} md={10}>
          <Grid item xs>
            <Paper className={classes.mission}>
              <Typography variant='h3'>Mission</Typography>
            </Paper>
          </Grid>
          <Grid item xs={10} sm={8} md={10}>
            <Paper>
              <Typography variant='h3'>Vision</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <Paper>
            <Typography variant='h4'>Feed</Typography>
            <Typography variant='h4'>Feed</Typography>
            <Typography variant='h4'>Feed</Typography>
            <Typography variant='h4'>Feed</Typography>

          </Paper>
        </Grid>
        
      </Grid>
    </div>
  )
}


export default Landing
