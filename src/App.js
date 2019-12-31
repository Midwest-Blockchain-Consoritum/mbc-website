import React from 'react'

import Routes from './routes/Routes'

import GoogleFontLoader from 'react-google-font-loader'

const App = () => {
  return (
    <div>
      <GoogleFontLoader 
        fonts={[
          {
            font: 'Roboto',
            weights: [400, '400i']
          },
          {
            font: 'Roboto Mono',
            weights: [400, 700]
          }
        ]}
      />
      <Routes />
    </div>
    
  )
}

export default App
