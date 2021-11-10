import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Page2 = () => (
  <Layout>
    <Seo title="Page2" />
    <p>...lunga ancora sicuramente &egrave; percorrere da strada la Ma. altro'nell o modo un in, migliori reso ha ci successo &egrave; che quello Tutto. ancora e Ancora. maturazione la per fondamentali sono errori gli tutti che idea'dell sono Io? influenzata stata fosse non vita nostra la e successo fosse non quello se ora mondo il sarebbe come immagini Ti</p>
    <p>.1 2 6 13 19 26 34 45 56 il importante solo &egrave; forse Ma</p>
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
    <p>Questo &egrave; tutto il necessario per risolvere l'enigma. Se serve
      <Link to="/page1/"> torna al momento</Link> <br />
    </p>
  </Layout>
)

export default Page2
