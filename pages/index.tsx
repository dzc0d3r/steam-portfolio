import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Walid Lamraoui | Frontend Developer</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="description" content="Walid Lamraoui | Frontend Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Walid Lamraoui | Frontend Developer" />
        <meta name="description" content="Hey! I'm Walid Lamraoui, and I'm a Frontend developer, Open Source enthusiast, and Poet." />

        <meta property="og:title" content="Walid Lamraoui | Frontend Developer" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://codewithwalid.pro/" />
        <meta property="og:image" content="https://deverajc.com/screenshot.png" />
        <meta property="og:description" content="Hey! I'm WalidSS, and I'm a Frontend developer, Open Source enthusiast, and Poet." />

        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@dzc0d3r"/>
        <meta name="twitter:title" content="Walid Lamraoui | Frontend Developer"/>
        <meta name="twitter:description" content="Hey! I'm Walid Lamraoui, and I'm a Bachelor of Science in Information Technology graduate."/>
        <meta name="twitter:creator" content="@dzc0d3r"/>
        <meta name="twitter:image" content="https://deverajc.com/screenshot.png"/>

        {/* <meta itemprop="name" content="Walid Lamraoui | Frontend Developer"/>
        <meta itemprop="description" content="Hey! I'm Walid Lamraoui, and I'm a Bachelor of Science in Information Technology graduate."/>
        <meta itemprop="image" content="https://deverajc.com/screenshot.png"/> */}
      </Head>
      <Home />
    </>
  );
}
