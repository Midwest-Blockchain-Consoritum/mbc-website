import React from 'react'
import { Grid, Typography, IconButton, Hidden } from '@material-ui/core'

import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

import {createUseStyles} from 'react-jss'
import styles from '../../styles/footer/Footer'

const useStyles = createUseStyles(styles)

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Hidden xsDown>
            <div className={classes.footerPrimary}>
              <Typography variant='body2'>
                &copy;2020 Midwest Blockchain Consortium
              </Typography>
            </div>
          </Hidden>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.footerSecondary}>
            <IconButton aria-label='twitter'>
              <TwitterIcon className={classes.social}/>
            </IconButton>
            <IconButton aria-label='linkedin'>
              <LinkedInIcon className={classes.social}/>
            </IconButton>
            <IconButton aria-label='github' target='__blank' href='https://github.com/Midwest-Blockchain-Consoritum'>
              <GitHubIcon className={classes.social}/>
            </IconButton>
            <Hidden smUp>
              <Typography className={classes.hidden} variant='body2'>
                &copy;2020 Midwest Blockchain Consortium
              </Typography>
            </Hidden>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}


export default Footer
