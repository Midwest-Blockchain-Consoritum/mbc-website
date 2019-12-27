import React from 'react'

import Navigation from './views/navigation/Navigation'
import Router from './router/Router'
import Footer from './views/footer/Footer'

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Router />
      <Footer />
    </div>
  )
}

export default App
