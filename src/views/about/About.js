import React from 'react'

import { Typography, Grid, Paper} from '@material-ui/core'
import { createUseStyles } from 'react-jss'

import styles from '../../styles/about/About'

const useStyles = createUseStyles(styles)

const About = () => {

  const classes = useStyles()

  return(
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <div></div>
        </Grid>
      </Grid>
    </div>
  )
}

export default About