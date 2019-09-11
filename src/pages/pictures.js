import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import SEO from '../components/seo';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100vw',
    height: '100vh',
  },
}));

const Pictures = ({ data }) => {
  const classes = useStyles();
  return (
    <Layout>
        <SEO title="Pictures" />
      <h1>The Pix</h1>
      <div className={classes.root}>
      <GridList cellHeight='auto' className={classes.gridList} cols={1}>
          <GridListTile key='base' cols={1}>
          <Img class='potato' fluid={data.file.childImageSharp.fluid} />
          </GridListTile>
      </GridList>
    </div>
     
    </Layout>
  )
}
export const query = graphql`
  query {
    file(relativePath: { eq: "firstPicture.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default Pictures
