import React from "react"
import { Link, StaticQuery, graphql } from 'gatsby'
import "./layout.css"

export default ({children})=> (
    <StaticQuery
        query={graphql`query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }`
        }
        render={data => (
            <div className="container">
                
                <div className="header">
                    <Link to={`/`}>{data.site.siteMetadata.title}</Link>
                    <div className="nav">
                        <Link to={`/`}>Work</Link>
                        <Link to={`/info/`}>Info</Link>
                    </div> 
                </div>

                <div className="child">
                    {children}
                </div>
            </div>
            )
        }
    />
)