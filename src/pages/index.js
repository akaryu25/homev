import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    
    <StaticImage
      src="../images/tesseract-second.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="The first piece of the puzzle"
      style={{ marginBottom: `1.45rem` }}
    />
    <p> </p>
    <p>
      <Link to="/page1/">Reveal</Link> <br />
    </p>
    <p>
      <Link to="/page2/">STEP 2</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
