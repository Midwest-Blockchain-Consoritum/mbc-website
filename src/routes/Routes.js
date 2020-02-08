import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import {createUseStyles} from 'react-jss'
import styles from '../styles/app/App'

import Navigation from '../views/navigation/Navigation'
import Footer from '../views/footer/Footer'

import Landing from '../views/landing/Landing'
import About from '../views/about/About'
import Conference from '../views/conference/Conference'
import Blog from '../views/blog/Blog'

import ScrollToTop from './ScrollToTop'

const useStyles = createUseStyles(styles)


const Routes = () => {
  const classes = useStyles()
  return (
    <Router>
      <ScrollToTop/>
      <div className={classes.root}>
        <Navigation />
        <div className={classes.page}>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/universities' component={About} />
            {/*<Route exact path='/blog' component={Blog} />*/}
            <Route exact path='/pitchcompetition' component={Conference} />
          </Switch>
        </div>
        <Footer />
      </div>
     
    </Router>
  )
}

export default Routes