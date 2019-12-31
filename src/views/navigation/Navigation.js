import React from 'react'
import { Route, Link } from 'react-router-dom'

import { Typography, AppBar, Toolbar, Tabs, Tab, withStyles} from '@material-ui/core'
import {createUseStyles} from 'react-jss'
import styles from '../../styles/navigation/Navigation'

const useStyles = createUseStyles(styles)

const AntTab = withStyles(() => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    '&:hover': {
      color: 'purple',
      opacity: 1,
    },
    '&$selected': {
      color: '#purple',
      fontWeight: '400',
    },
    '&:focus': {
      color: '#purple',
    },
  },
  selected: {},
}))(props => <Tab disableRipple {...props} />)


const Navigation = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Route render={({ location }) => (

        <AppBar position='static' color='default'>
          <Toolbar>
            
            <div className={classes.title}>
              <Typography variant='h4'>
                <Link className={classes.link} to='/'>
                  Midwest Blockchain Consoritum
                </Link>
              </Typography>
              </div>
            <div>
            <Tabs className={classes.tabs} value={location.pathname}>
              <AntTab className={classes.tabItem} label='About' value='/about' component={Link} to={'/about'} />
              <AntTab label='Consulting' value='/consulting' component={Link} to={'/consulting'} />
            </Tabs>
            </div>
          </Toolbar>
        </AppBar>


      )} />
        
    </div>
  )

}


export default Navigation