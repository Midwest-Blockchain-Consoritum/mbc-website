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
        <CircularProgress color='primary'></CircularProgress>
      </Grid>
    </div>
  ) :
  (
    <div className={classes.root}>
      {posts.map((post, i) =>
          <Card key={i} raised className={classes.card}>
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
      )}
    </div>
  )
}


export default Blog