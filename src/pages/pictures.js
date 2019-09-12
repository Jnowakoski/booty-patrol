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
    width: '100%',
    height: '100%',
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
          <Img fluid={data.file.childImageSharp.fluid} />
          </GridListTile>
      </GridList>
      <Img fluid={data.file.childImageSharp.fluid} />
    </div>
     
    </Layout>
  )
}
export const query = graphql`
  query {
    file(relativePath: { eq: "guild/firstPicture.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default Pictures
