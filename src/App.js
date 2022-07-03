import React from 'react'
import Content from './component/content'
import Footer from './component/footer'
import Header from './component/header'
import { createTheme, ThemeProvider, CssBaseline, createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#007bff',
    },
  },
  typography: {
    h5: {
      fontSize: 20,
    },
    h6: {
      fontSize: 14,
    },
    body1: {
      fontSize: 14,
    },
    subtitle1: {
      fontSize: 12,
    },
  },
})
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          <Content />
        </main>
        <Footer />
        <CssBaseline />
      </ThemeProvider>
    </>
  )
}

export default App