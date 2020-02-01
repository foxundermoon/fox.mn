import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Cat from '../components/cat.svg'

import NPM from '../components/icons/npm'
import GitHub from '../components/icons/github'
import Twitter from '../components/icons/twitter'
import LinkedIn from '../components/icons/linkedin'
import Instagram from '../components/icons/instagram'

import Cat2 from '../components/Cat'
import './style.scss'

const Home = () => (
  <div>
    <Head>
      <title>fox landing site</title>
      <link rel="icon" href="/favicon.ico" />
      <script
          dangerouslySetInnerHTML={{
            __html: `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?a82a321b3e7190eff23bd08fafe7e4c2";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
          `,
          }}
        />
    </Head>

    <div className="content">
      <div className="container">
        <Cat2 />

        <h1 className="name">Fox Under Moon</h1>
        <h2 className="handle">@foxundermoon</h2>
        <div id="icons">
          <a href="https://github.com/foxundermoon">
            <GitHub className="github" />
          </a>
          {/* <a href="https://twitter.com/foxundermoon">
            <Twitter className="twitter" />
          </a> */}
          {/* <a href="https://www.linkedin.com/in/nathan-rajlich-aaa17233">
            <LinkedIn className="linkedin" />
          </a> */}
          <a href="https://instagram.com/foxundermoon">
            <Instagram className="instagram" />
          </a>
          {/* <a href="https://www.npmjs.com/foxmn">
            <NPM className="npm" />
          </a> */}
        </div>
      </div>
      <style jsx>{`
        #root {
          align-items: center;
          display: flex;
          justify-content: center;
          height: 100%;
        }

        img {
          filter: grayscale(100%);
          border: #222 1px solid;
          border-radius: 50% 50%;
          width: 50%;
          margin-bottom: 0.4em;
        }

        h1,
        h2 {
          margin: 0;
          font-weight: normal;
        }

        h2 {
          margin-top: 0.4em;
        }

        .name {
          color: white;
        }

        .handle {
          font-style: italic;
        }

        #content {
          text-align: center;
        }

        #icons {
          margin-top: 1.2em;
          height: 2.5em;
        }

        #icons :global(svg) {
          fill: #ccc;
          vertical-align: top;
          width: 2em;
          padding: 0 0.5em;
        }

        #icons :global(svg),
        #icons :global(svg) :global(.colored) {
          filter: drop-shadow(0 0 0 white);
          transition-duration: 0.3s;
          transition-property: fill, filter, padding, width;
        }

        #icons :global(svg):hover {
          width: 2.5em;
          padding: 0 0.8em;
        }

        #icons :global(.github):hover {
          fill: #ffffff;
          filter: drop-shadow(0 0 0.2em #ffffff);
        }

        #icons :global(.twitter):hover {
          fill: #1da1f2;
          filter: drop-shadow(0 0 0.2em #1da1f2);
        }

        #icons :global(.linkedin):hover {
          fill: #0077b5;
          filter: drop-shadow(0 0 0.2em #0077b5);
        }

        #icons :global(.instagram):hover {
          fill: #e4405f;
          filter: drop-shadow(0 0 0.2em #e4405f);
        }

        #icons :global(.npm):hover {
          filter: drop-shadow(0 0 0.2em #c12127);
        }

        #icons :global(.npm):hover :global(.outer) {
          fill: #c12127;
        }

        #icons :global(.npm) :global(.inner) {
          fill: transparent;
        }

        #icons :global(.npm):hover :global(.inner) {
          fill: #fff;
        }
      `}</style>

      <style global jsx>{`
        html,
        body {
          background-color: #222222;
          color: #ccc;
          font-family: 'San Francisco', sans-serif;
        }

        /* https://github.com/zeit/next.js/issues/822#issuecomment-328279284 */
        html,
        body,
        body > div:first-child,
        #__next,
        #__next > div:first-child {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  </div>
)

export default Home
