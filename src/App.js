import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import Routes from './routes/Routes'

import GoogleFontLoader from 'react-google-font-loader'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6a1b9a'
    },
    secondary: {
      main: '#f3e5f5',
    },
    white: {
      main: '#ffffff'
    }
  }
})


const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
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
    </MuiThemeProvider>
  )
}

export default App
