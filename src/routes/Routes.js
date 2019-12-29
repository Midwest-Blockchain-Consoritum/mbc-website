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


const useStyles = createUseStyles(styles)


const Routes = () => {
  const classes = useStyles()
  return (
    <Router>
      <div className={classes.root}>
        <Navigation />
        <div className={classes.page}>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/about' component={About} />
          </Switch>
        </div>
        <Footer />
      </div>
     
    </Router>
  )
}

export default Routes