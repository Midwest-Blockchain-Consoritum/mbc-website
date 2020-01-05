import React from 'react'
import {Paper, Grid, Container, Typography, IconButton} from '@material-ui/core'

import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

import {createUseStyles} from 'react-jss'
import styles from '../../styles/footer/Footer'

const useStyles = createUseStyles(styles)

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <div className={classes.footerLeft}>
          <IconButton aria-label='twitter'>
                <TwitterIcon className={classes.social}/>
              </IconButton>
              <IconButton aria-label='facebook'>
                <FacebookIcon className={classes.social}/>
              </IconButton>
              <IconButton aria-label='linkedin'>
                <LinkedInIcon className={classes.social}/>
              </IconButton>
          </div>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={8} square>
            <div className={classes.paper}>
              <Typography variant='body1'>
                &copy;2020 Midwest Blockchain Consoritum
              </Typography>
              
            </div>
          </Paper>        
        </Grid>
      </Grid>
    </div>
  )
}


export default Footer
