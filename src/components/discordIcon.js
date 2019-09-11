import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import SvgIcon from '@material-ui/core/SvgIcon';

export const query = graphql`
  query {
    file(relativePath: { eq: "Discord-Logo-Color.svg" }) {
      childImageSharp {
        fixed(width: 200) {
            ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const DiscordIcon = ({data}) => (
    console.log(data)
  )

  export default DiscordIcon