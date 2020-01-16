import React from 'react'
import { Route, Link } from 'react-router-dom'

import { Typography, AppBar, Toolbar, Tabs, Tab, withStyles, createMuiTheme} from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import {createUseStyles} from 'react-jss'
import styles from '../../styles/navigation/Navigation'

const useStyles = createUseStyles(styles)

///



const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5c007a'
    },
    secondary: {
      main: '#c158dc'
    },
    error: {
      main: '#ffffff'
    }
  }
})

//

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
  selected: {
    indicatorColor: 'white'
  },
}))(props => <Tab disableRipple {...props} />)



const Title = (prop) => {
  const classes = useStyles()
  return (
    <div className={classes.title}>
      <Typography variant='h4'>
        <Link className={classes.link} to='/'>
          <img height='40em' alt='MBC' src='https://i.imgur.com/MB6HA6i.png' />
        </Link>
      </Typography>
    </div>
  )
}

const Navigation = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Route render={({ location }) => (
          <AppBar className={classes.toobar} position='fixed' color='primary'>
            <Toolbar>
              <Title prop={location.pathname} />
              <div>
                <Tabs indicatorColor='secondary' className={classes.tabs} value={location.pathname}>
                  <AltTab className={classes.tabItem} label='About' value='/about' component={Link} to={'/about'} />
                  <AltTab label='Conference' value='/conference' component={Link} to={'/conference'} />
                </Tabs>
              </div>
            </Toolbar>
          </AppBar>
        )} />
      </ThemeProvider>
    </div>
  )

}


export default Navigation