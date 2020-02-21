const styles = {
  root: {
    flexGrow: 1,
    marginLeft: '1em',
    marginRight: '1em',
    animation: '$fadeIn 1s'
  },
  about: {
    marginTop: '1em',
    padding: '2em',
    zIndex: '1000'
  },
  aboutText: {

  },
  side: {
    minHeight: '1em'
  },
  spacer: {
    minHeight: '.5em'
  },
  smallSpacer: {
    minHeight: '.1em'
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
    zIndex: '10'
  },
}


export default styles