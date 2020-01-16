import React from 'react'

import { Typography, Grid, Paper} from '@material-ui/core'
import { createUseStyles } from 'react-jss'

import styles from '../../styles/about/About'

import content from './Content'

const useStyles = createUseStyles(styles)

const About = () => {

  const classes = useStyles()

  return(
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant='h5'>{content.msu.descrip}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
  <div>{content.about}</div>
        </Grid>
      </Grid>
    </div>
  )
}

export default About