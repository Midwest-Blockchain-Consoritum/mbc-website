const styles = {
  root: {
    flexGrow: 1,
    margin: '1em',
    animation: '$fadeIn 1s'
  },
  about: {
    marginTop: '1em',
    padding: '2em',
  },
  aboutText: {

  },
  spacer: {
    minHeight: '1em'
  },
  events: {
    padding: '.5em',
  },
  '@keyframes fadeIn': {
    from: {opacity: 0},
    to: {opacity: 1}
  },
  intro: {
    animation: '$fadeIn 0s',
  },
  imga: {
    boxShadow: '20em 20em'

  }
}


export default styles