const styles = {
  root: {
    color: 'black',
    animation: '$fadeIn 1s'
  },
  '@keyframes fadeIn': {
    from: {opacity: 0},
    to: {opacity: 1}
  },
  school: {
    padding: '0em',
    margin: '.5em',
    marginBottom: '10em',
    zIndex: '100'
  },
  cardInt: {
    padding: '.5em'
  },
  logoContainer: {
    margin: '8em',
    marginBottom: '2em'
  },
  logo: {
    borderRadius: '50%',
    opacity: '60%',
    marginBottom: '20em',
    marginRight: '5em',
  },
  title: {
    paddingLeft: '1em',
    paddingTop: '1em'
  }
}

export default styles