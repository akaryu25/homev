import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const indizio = () => (
  <Layout>
    <Seo title="Indizio" />
    
    <StaticImage
      src="../images/indizio2.jpg"
      width={1200}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="The first piece of the puzzle"
      style={{ marginBottom: `1.45rem` }}
    />
   
   
  </Layout>
)

export default indizio
