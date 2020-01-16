const styles = {
  root: {
    flexGrow: 1,
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
    animation: '$fadeIn 4s'
  }
}


export default styles