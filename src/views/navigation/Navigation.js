import React from 'react'
import { Route, Link } from 'react-router-dom'

import { Typography, AppBar, Toolbar, Tabs, Tab, withStyles} from '@material-ui/core'
import {createUseStyles} from 'react-jss'
import styles from '../../styles/navigation/Navigation'

const useStyles = createUseStyles(styles)


const AltTab = withStyles(() => ({
  root: {
    textTransform: 'none',
    minWidth: 80,
    '&:hover': {
      color: 'white',
      opacity: 1,
    },
    '&$selected': {
      color: 'white',
      fontWeight: '400',
    },
    '&:focus': {
      color: 'white',
    },
  },
  selected: {},
}))(props => <Tab disableRipple {...props} />)



const Title = () => {
  const classes = useStyles()
  return (
    <div className={classes.title}>
      <Typography variant='h4'>
        <Link className={classes.link} to='/'>
          MBC
        </Link>
      </Typography>
    </div>
  )
}

const Navigation = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Route render={({ location }) => (
        
        <AppBar position='fixed' color='secondary'>
          <Toolbar>
            <Title />
            <div>
              <Tabs indicatorColor='secondary' className={classes.tabs} value={location.pathname}>
                <AltTab className={classes.tabItem} label='About' value='/about' component={Link} to={'/about'} />
                <AltTab label='Consulting' value='/consulting' component={Link} to={'/consulting'} />
              </Tabs>
            </div>
          </Toolbar>
        </AppBar>

      )} />
        
    </div>
  )

}


export default Navigation