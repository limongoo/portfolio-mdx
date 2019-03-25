import React from "react"
// import { css } from "@emotion/core"
// import { rhythm } from "../utils/typography"
import { StaticQuery, Link, graphql } from "gatsby"

export default () => (
    <StaticQuery
        query={graphql`
            query PageList{
                allMdx(sort: { fields: [frontmatter___date], order: ASC }){
                    edges{
                        node{
                            fields {
                                route
                            }
                            frontmatter{
                                title
                                date
                            }
                            timeToRead
                            excerpt
                        }
                    }
                }
            }
        `
        }  
        render={data => (
            data.allMdx.edges.map(({ node }, index) => (
                <Link to={node.fields.route} style={{textDecoration:'none', color:  'inherit'}} key={index}>
                    <div className="post-item">
                        <h3 className="post-title">{node.frontmatter.title}</h3>
                        {/* <p className="post-excerpt">{node.excerpt}</p> */}
                        {/* <p className="post-date">{node.frontmatter.date}</p> */}
                    </div>
                </Link>
            ))
        )}

    />
)