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
      width={600}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A piece of the puzzle"
      style={{ marginBottom: `1.45rem` }}
    />
    <p> </p>
    <p>
      <Link to="/page1/">Reveal</Link> <br />
    </p>
    <p>
      Dovresti essere in grado di decifrare questo momento importante della storia, quando lo avrai fatto procedi &nbsp;
      <Link to="/page2/">qui</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
