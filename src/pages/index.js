import React from "react"
import Layout from '../components/layout'
import Projectlist from "../components/project-list"
import './index.css'


export default ({ data }) => {
    console.log(data)
    return (
      <Layout>
        <div>
          <Projectlist></Projectlist>
        </div>
      </Layout>
    )
  }