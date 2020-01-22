import React from 'react'

import {Typography, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Hidden} from '@material-ui/core'
import { createUseStyles } from 'react-jss'

import styles from '../../styles/about/About'

import content from './Content'

const useStyles = createUseStyles(styles)

const About = () => {
  const classes = useStyles()

  return(
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={5}>
          <Typography className={classes.title} variant='h4' color='error'>Our Universities</Typography>
          {content.schools.map((school, index) => (
            <Hidden smDown>
              <div className={classes.logoContainer}>
                <Grid item sm={12}>
                  <img className={classes.logo} height='250em' width='250em' alt='logo' src={school.logo}/>
                </Grid>
              </div>
            </Hidden>
          ))}
        </Grid>
        <Grid container item xs={12} sm={12} md={8} lg={8} xl={7}>
          {content.schools.map((school, index) => (
            <Card raised className={classes.school} key={index}>
              <CardMedia
                className={classes.schoolMedia}
                style= {{ height: '15em' }}
                image={school.photo}
                title={school.name}
              />
              <div className={classes.cardInt}>
                <CardContent>
                  <Typography gutterBottom variant='h4'>
                    {school.name}
                  </Typography>
                  <Typography variant='body1'>
                    {school.descrip}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    size='medium'
                    href={school.url} 
                    target='__blank' >Learn More</Button>
                </CardActions>
              </div>
            </Card>
          ))}
        </Grid>
      </Grid>
    </div>
  )
}

export default About