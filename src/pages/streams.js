import React from 'react';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import red from '@material-ui/core/colors/red';
import {Typography, makeStyles, Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(theme => ({
    card: {
      width:"100%",
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

const StreamsPage = () => {
    const classes = useStyles();
  return(
    <Layout>
      
    <SEO title="Streams" />
    <h1>Streamers</h1>
    <Box display="flex" width="100%" height="100%" bgcolor="background.paper" flexBasis='620' flexWrap='wrap'>
    <Card className={classes.card} >
    <CardActionArea >
        <CardMedia
          src="iframe"
          component="iframe"
          image="https://player.twitch.tv/?channel=serschmoopyy"
          title="CSGO Card"
          allowfullscreen="true"
          width="100vw"
          height='378'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Serchmoopyy
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Best mage streamer NA
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
  </Layout>
  )
}

export default StreamsPage