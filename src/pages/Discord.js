import React from 'react'
import Box from '@material-ui/core/Box';
import Layout from '../components/layout'
import SEO from '../components/seo'


const iframeStyles= {
  width: '100%',
  height: '100vh'
};

const SecondPage = () => (
  <Layout>
    <SEO title="The Discord" />
    <iframe src="https://discordapp.com/widget?id=616755147472896011&theme=dark"
    style={iframeStyles}
    allowtransparency="true" 
    frameborder="0">
    </iframe>
  </Layout>
)

export default SecondPage
