import React from 'react'
import { CircularProgress, Card, CardContent, CardActions, Typography, Grid, withStyles, Divider, Button } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import ErrorIcon from '@material-ui/icons/Error'

import styles from '../../styles/landing/EventFeed'
//have to apply withStyles to the Higher-Order Component at export


class EventFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: true,
      items: null
    }
  }

  componentDidMount() {

    /*
    console.log('fetching')
    fetch('https://us-central1-mbc-website-prod.cloudfunctions.net/getICal')
      .then(res => res.json())
      .then(
        (res) => {
          this.setState({
            isLoaded: true,
            items: res
          })
          console.log(res)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
    */
  }

  render() {
    const { error, isLoaded, items } = this.state
    const { classes } = this.props
    
    if (error) {
      return <div><ErrorIcon color='red'/>Error: {error.message}</div>
    } else if (!isLoaded) {
      return (
        <div className={classes.loading}>
          <CircularProgress></CircularProgress>
        </div>
      )
    } else {
      return (
        <Grid container spacing={1}>
          {/* {Object.keys(items)
            .map(obj => (
            moment(`${items[obj].start}`).isAfter() ?
            <Grid item xs={6} sm={12}>
              <Card className={classes.card} key={obj}>
                <CardContent>
                  <Typography color='textSecondary' variant='body2'>{moment(items[obj].start).format('DDD MMMM, YYYY')}</Typography>
                  <Typography variant='h6'>{items[obj].summary}</Typography>
                  <Divider light/>
                  <Typography variant='body1'>{items[obj].description}</Typography>
                </CardContent>
                <CardActionArea>
                  <Grid container xs={12}>
                    <Grid item xs={2}>
                      <LocationOnIcon color='action' className={classes.locationIcon}/>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography color='textSecondary' variant='body1' gutterBottom>
                        {items[obj].location}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardActionArea>
              </Card>
              </Grid>
            :
              <div></div>
          ))} */}

          <Grid item xs={12} sm={12}>
            <Card raised className={classes.card}>
              <CardContent>
                <Typography color='textSecondary' variant='body2'>March 13th, 2020</Typography>
                <br/>
                <Typography variant='h6'>MBC Pitch Competition</Typography>
                <Divider light/>
                <Typography variant='body1'></Typography>
              </CardContent>
              <Grid container item xs={12}>
                <Grid item xs={1} sm={1} md={2}>
                  <LocationOnIcon color='action' className={classes.locationIcon}/>
                </Grid>
                <Grid item xs={11} sm={11} md={10}>
                  <Typography color='textSecondary' variant='body1' gutterBottom>
                    Milwaukee Blockchain Conference
                  </Typography>
                </Grid>
              </Grid>
              <CardActions>
                  <Button className={classes.button} variant='outlined' size='small' target='__blank' href='https://msu.co1.qualtrics.com/jfe/form/SV_5v5ZxJWO6vkIf0F'>Apply</Button>
                  <Button className={classes.buttoen} size='small' href='https://midwestblockchain.org/pitchcompetition' >About</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      )
    }
  }
}

export default withStyles(styles)(EventFeed)