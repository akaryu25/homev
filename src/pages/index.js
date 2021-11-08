import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <p>Questo &egrave; l'ultimo test per valutare le tue COmpetenze. Credo in te, so che sar&agrave; difficile ma penso che sarai in Grado di risolverlo.&nbsp;La soluzioNe ti pOrter&agrave; nel Mio giardino, dovE troverai gli altri concorrenti che sono riusciti a terminare l'enigma.&nbsp;</p>
    <p>Sai, VOrrei tanto poter invitare tutti, ma per poter benefi<span style="color: #99cc00;">C</span>iAre dei su<span style="color: #99cc00;">o</span>i frutti serve dimostrare di esserne all'aLtez<span style="color: #99cc00;">z</span>a. E' un luogo p<span style="color: #99cc00;">e</span>nsato per <span style="color: #99cc00;">r</span>acc<span style="color: #99cc00;">o</span>glIere persone che <span style="color: #99cc00;">con</span>dividono la mia <span style="color: #99cc00;">s</span>tessa ide<span style="color: #99cc00;">o</span>logia, che mi ha portato a creare la prima mo<span style="color: #99cc00;">n</span>eta peer to peer, prima <span style="color: #99cc00;">an</span>cora di Bi<span style="color: #99cc00;">t</span>co<span style="color: #99cc00;">i</span>n e tutte le altre criptovalUte. Ho fallito, mi hanNO fermato prima che potessi renderla pubblica, sono stato allontanato dalla mia famiglia e ora vivo fuori dalla societ&agrave;. Dovevo aspettarmelo, la gente non era ancora pronta in quel momento...</p>
    <p>Il mio allievo, Satoshi, &egrave; riuscito a portare alla luce la mia opera. Ora quello che vorrei fare &egrave; creare una societ&agrave; parallela, superiore, che non segua le regole corrotte di quella attuale. Che sappia leggere il <em>semaforo. </em>Che misuri con la mano destra le ore e con la mano sinistra i minuti.&nbsp;</p>
    <p>La domanda &egrave; quindi: tu ne farai parte?</p>
    <p>&nbsp;</p>
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
