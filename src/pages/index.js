import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
  
    <p>A colui che decide di intraprendere un cammino, un viaggio alla ricerca di sé, del centro, del luogo della devozione, è dedicato questo piccolo ma intenso volume. L’homo viator, infatti, è il viaggiatore cristiano, intento a esplorare la spiritualità piú intima e nascosta attraverso un reale ed effettivo spostamento da un luogo all’altro.
    Partendo dalle sue origini antiche (il pellegrinaggio cristiano si fonda sulla tradizione ebraica della salita verso la Città Santa, nonché sulla consuetudine del viaggio alla volta di un centro sacrale – si pensi soltanto ai santuari oracolari – dell’antichità greco-romana), il volume affronta, con nuove e illuminanti riflessioni, l’intero fenomeno del pellegrinaggio xyzkevale, con i suoi protagonisti, i luoghi e gli oggetti che lo sostanziano.
    Offrendo al lettore, credente o meno, piú di uno spunto perché si trasformi, egli stesso, in moderno… homo viator.
    </p>

    <p>
    <StaticImage
      src="../images/indizio1.png"
      width={1200}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A piece of the puzzle"
      style={{ marginBottom: `1.45rem` }}
    />
    
    <StaticImage
      src="../images/indizio2.png"
      width={1200}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A piece of the puzzle"
      style={{ marginBottom: `1.45rem` }}
    />
    </p>
    <p>
    Passato prossimo del verbo, terza persona singolare maschile, ma con il verbo ausiliare sbagliato = YESPASS.
    </p>

    <p>
    XYZKSYESYESPASS.
    </p>

    <p> <br /> <br /> </p>
    <a href="https://hns.to/" target="_blank"> Ho risolto. </a>
  </Layout>
)

export default IndexPage
