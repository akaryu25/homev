import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <StaticImage
      src="../images/indizio1.png"
      width={1200}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A piece of the puzzle"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/indizio/">MCMLXXXVI</Link>
    </p>


    <p> <br /> <br /> </p>
    <a href="https://hns.to/" target="_blank"> Ho risolto. </a>
  </Layout>
)

export default IndexPage
