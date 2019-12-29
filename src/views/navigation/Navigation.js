import React from 'react'
import { Typography, AppBar, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom'

import {createUseStyles} from 'react-jss'
import styles from '../../styles/navigation/Navigation'

const useStyles = createUseStyles(styles)

const Navigation = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <div className={classes.title}>
            <Typography variant='h4'>
              <Link to='/'>
                Midwest Blockchain Consoritum
              </Link>
            </Typography>
            </div>
          <div>    
          <Typography variant='h5'>
            <Link to='/about'>
              About
            </Link>
          </Typography>
          </div>
        </Toolbar>
      </AppBar>
      
    </div>
  )
}

export default Navigation