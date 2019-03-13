import React from "react"
import { Link, StaticQuery, graphql } from 'gatsby'
import { css } from "@emotion/core"
import "./layout.css"

import { rhythm } from "../utils/typography"

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
            <div
                css={css`
                margin: 0 auto;
                max-width: 700px;
                padding: ${rhythm(2)};
                padding-top: ${rhythm(1.5)};
                `}
            >
            <Link to={`/`}>
            <h3
                css={css`
                margin-bottom: ${rhythm(2)};
                display: inline-block;
                font-style: normal;
                `}
            >
                {data.site.siteMetadata.title}
            </h3>
            </Link>
            <div css={css`float:right;`}>
            <Link
                    to={`/`}
                    css={css`
                    `}
                >
                Work
                </Link>
                <Link
                    to={`/info/`}
                    css={css`
                    `}
                >
                Info
                </Link>
            </div> 
            <div className="child">
                {children}
            </div>
            </div>
            )
        }
    />
)