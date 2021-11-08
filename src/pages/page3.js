import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Page3 = () => (
  <Layout>
    <Seo title="Page3" />
   
    <p>Ora che hai trovato il momento esatto, qui ci sono le istruzioni per risolvere l'enigma.</p>
    <StaticImage
      src="../images/tesseract-third.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="The second piece of the puzzle"
      style={{ marginBottom: `1.45rem` }}
    />
    <p></p>
    <StaticImage
      src="../images/tesseract-final.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="The final piece of the puzzle"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/">STEP 1</Link> <br />
    </p>
    <p>
      <Link to="/page3/">STEP 3</Link> <br />
    </p>
  </Layout>
)

export default Page3
