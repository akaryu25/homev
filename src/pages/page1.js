import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const page1 = () => (
  <Layout>
    <Seo title="Page1" />
    <p>Questo &egrave; l'ultimo test per valutare le tue COmpetenxe. Crxdo in te, so che sax&agrave; difficile ma penso che sarai in Gradx di risolverlo.&nbsp;La soluzioNe ti pOrter&agrave; nel Mio giardino, dovE troverai gli altri xoncxrrenti che soxo riuxciti a terminare l'enigma.&nbsp;</p>
    <p>Sai, VOrrei tanto poter invitare tutti, ma per poter benefiCiAre dei suxi frutti serve dimostrare di esserxe all'aLtezzx. E' ux luogo pensaxo per raccoglIere persone che condxvidono la mia stessa ideologia, che mi ha portato a creare la prima moneta peer to peer, prima ancora di Bitcoin e tutte le altre criptovalUte. Ho fallito, mi hanNO fermato prima che potessi renderla pubblica, sono stato allontanato dalla mia famiglia e ora vivo fuori dalla societ&agrave;. Dovevo aspettarmelo, la gente non era ancora pronta in quel momento...</p>
    <p>Il mio allievo, Satoshi, &egrave; riuscito a portare alla luce la mia opera. Ora quello che vorrei fare &egrave; creare una societ&agrave; parallela, superiore, che non segua le regole corrotte di quella attuale. Che sappia leggere il <em>semaforo. </em>Che misuri con la mano destra le ore e con la mano sinistra i minuti.&nbsp;</p>
    <p>La domanda &egrave; quindi: tu ne farai parte?</p>
    <StaticImage
      src="../images/tesseract-first.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="The first piece of the puzzle"
      style={{ marginBottom: `1.45rem` }}
    />
    <p> </p>
    <p>
      <Link to="/">Cover</Link> <br />
    </p>
    <p>
      <Link to="/page2/">STEP 2</Link> <br />
    </p>
  </Layout>
)

export default page1
