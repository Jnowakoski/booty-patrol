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
        
      <GridList cellHeight='auto' className={classes.gridList} cols={2}>
      <GridListTile key='ScarletKillings' cols={2}>
          <Img fluid={data.scarletKilling.childImageSharp.fluid} />
          </GridListTile>
          <GridListTile key='firstPicture' cols={1}>
          <Img fluid={data.image1.childImageSharp.fluid} />
          </GridListTile>
          <GridListTile key='TheCrewOnAPlank' cols={1}>
          <Img fluid={data.image2.childImageSharp.fluid} />
          </GridListTile>
      </GridList>
    </div>
     
    </Layout>
  )
}
export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1440, quality:100) {
      ...GatsbyImageSharpFluid
    }
  }
}
`

export const query  = graphql`
query {
  image1: file(relativePath: { eq: "guild/firstPicture.png" }) {
    ...fluidImage
  }
  image2: file(relativePath: { eq: "guild/TheCrewOnAPlank.jpg" }) {
    ...fluidImage
  }
  scarletKilling: file(relativePath: { eq: "guild/ScarletKillings.jpg" }) {
    ...fluidImage
  }
}
`


export default Pictures
