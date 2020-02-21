import React from 'react'
import { Route, Link } from 'react-router-dom'

import { Grid, Hidden, Typography, AppBar, Toolbar, Tabs, Tab, withStyles, createMuiTheme} from '@material-ui/core'
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
    fontSize: '1em',
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
      <Grid container>
        <Grid item>
            <Link className={classes.logo} to='/'>
              <img height='40em' alt='MBC' src='https://i.imgur.com/MB6HA6i.png' />
            </Link> 
        </Grid>
        <Grid item>
          <Hidden smDown>
            <Link style={{textDecoration: 'none'}} to='/'>
              <Typography color='error' className={classes.titleText} variant='h5'>
                Midwest Blockchain Consortium
              </Typography>
            </Link>
          </Hidden>
        </Grid>
      </Grid>
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
              <Grid container>
                <Grid item xs={10} sm={9} md={9} lg={9} xl={9}>
                  <Title prop={location.pathname} />
                </Grid>
                <Grid item>
                  <div>
                    <Tabs indicatorColor='secondary' className={classes.tabs} value={location.pathname}>
                      <AltTab label='Universities' value='/universities' component={Link} to={'/universities'} />
                      <AltTab label='Pitch Competition' value='/pitchcompetition' component={Link} to={'/pitchcompetition'} />
                    </Tabs>
                  </div>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        )} />
        <Hidden lgUp>
          <div className={classes.spacer}/>
        </Hidden>
      </ThemeProvider>
    </div>
  )

}


export default Navigation