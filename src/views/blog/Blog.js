import React from 'react'

import { Grid, GridList, Typography } from '@material-ui/core'

import createUseStyles from 'react-jss'

import styles from '../../styles/blog/Blog'
import content from './Content'
const useStyles = createUseStyles(styles)

const Blog = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container>
        <Typography variant='h4'>Blogs</Typography>
      </Grid>
    </div>
  )
}


export default Blog