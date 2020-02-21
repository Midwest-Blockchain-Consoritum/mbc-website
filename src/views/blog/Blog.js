import React, {useState, useEffect} from 'react'

import { Grid, Paper, GridList, Button, Typography, Card, CardActionArea, CardContent, CircularProgress, makeStyles, Container} from '@material-ui/core'

import Meed from 'meed'
import renderHTML from 'react-render-html'

import styles from '../../styles/blog/Blog'
const useStyles = makeStyles(styles)

const feed = new Meed( {proxy:'https://cors-anywhere.herokuapp.com/'})


const Blog = () => {
  const [posts, setPosts] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const classes = useStyles()

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true)
      let postObj = await feed.publication('midwest-blockchain-consortium')
      console.log(postObj)
      setPosts(postObj)
      setIsLoading(false)
    }
    getPosts()
  }, [])

  return (posts === undefined) ? (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='h3' color='error' className={classes.title}>Medium Blog</Typography>
        </Grid>
        <CircularProgress color='primary'></CircularProgress>
      </Grid>
    </div>
  ) :
  (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='h3' color='error' className={classes.title}>Medium Blog</Typography>
        </Grid>
        <Grid item container xs={12} className={classes.blog}>
          {posts.map((post, i) =>
            <Grid key={i} item xs={12} sm={6} md={4} lg={3} className={classes.blogPost}>
              <Card className={classes.card}>
                <CardActionArea href={post.link} target='__blank'>
                  <CardContent>
                    <Typography variant='h6' color='textSecondary'>{post.date.toDateString()}</Typography>
                    <br/>
                      <Typography variant='h5' className={classes.postTitle}>{post.title}</Typography>
                    <br/>

                    <Typography variant='h6'>By {post.author}</Typography>              
                  </CardContent>
                </CardActionArea>
               </Card>            
            </Grid>
          )}
        </Grid>
      </Grid>
    </div>
  )
}


export default Blog