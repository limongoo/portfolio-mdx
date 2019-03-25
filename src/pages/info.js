import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    {/* <h1>Info {data.site.siteMetadata.title}</h1> */}
    <h1>Hello, I'm Ivan Limongan, Front-End Developer &amp; UX/UI Designer With A Passion For Creating User-Focused Apps.</h1>

    <h5>—notes</h5>
    <p>I've always been interested in web design since high school. My first major website project was working on the Parkrose High School website. My background is biology and continued my education in graphic / web design and my work experience have allowed me to have a strong foundation in user experience design and front-end development.></p>
    <p>I currently work at MPowered Media and M Realty as the Brand Lead and Product Developer. My main duties includes Art Direction, Branding, Product Development, UX/UI Design, Front-End Development &amp; Marketing.</p>
    <p>Working professionally have led me to really appreciate user-centered design and the process that goes into creating an experience that is meaningful between people and technology. I believe this can be achieved through client input/feedback, collaboration, smart design and funtional solutions. This is what really excites me about UX &amp; Front-End development.</p>
    <p>Things I like to do outside of work include spending time with my wife and daughter. You can usually find me eating at some food cart or restaurant in my forever quest to try all the food places in Portland, I'm always on the lookout for the latest food, let me know if you know any good places. In my spare time I play bass guitar, dabble in photography and watch Wes Anderson/Wes Anderson type movies.</p>
  
    <h3>I Focus On User-Centered And Functional Design / Development</h3>
  
    <h5>—focus</h5>
    <ul>
      <li>Development</li>
      <li>— React / Redux / Gatsby</li>
      <li>— Javascript / JQuery</li>
      <li>— HTML5 / CSS3 / PostCSS</li>
      <li>— Firebase / REST API</li>
      <li>— Node.Js/ Webpack</li>
      <li>— API Integration</li>
      <li>— Express.Js / PostgreSQL</li>
      <li>— Cloudinary / Jest / Enzyme</li>
      <li>— Component &amp; MVC Architecture</li>
      <li>— Bootstrap / Bulma / Foundation</li>
    </ul>

    <ul>
      <li>Design</li>
      <li>— Advanced UX/UI Development</li>
      <li>— Mobile / Responsive Design</li>
      <li>— Interactive Design</li>
      <li>— Wireframing / Prototyping</li>
      <li>— Logo &amp; Brand Development</li>
      <li>— Digital / Visual / Print</li>
      <li>— Art Direction &amp; Strategy</li>
      <li>— Product Development</li>
    </ul>

  </Layout>
)

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`