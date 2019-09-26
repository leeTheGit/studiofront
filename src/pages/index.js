import React from "react"
import {graphql, StaticQuery, Link} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
        <StaticQuery query={graphql`
            {
                allWordpressPage {
                    edges {
                        node {
                            id
                            title
                            slug
                        }
                    }
                }
            }
        `} render={props => (
            <div>
                { props.allWordpressPage.edges.map(page => (
                    <div>
                        <Link to={page.node.slug}>{page.node.title}</Link>
                    </div>
                ))}
            </div>
        )} 
        />


  </Layout>
)

export default IndexPage;
