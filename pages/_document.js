import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      data-wf-page="63661389dd2417d86f0d89d5"
      data-wf-site="63661389dd2417f19a0d89d3"
      className="w-mod-js w-mod-ix wf-syne-n5-active wf-syne-n4-active wf-robotomono-n4-active wf-active"
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/faviconwhite.png" />
        <title>Buçağ Medya</title>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
        !function(o,c){
          var n=c.documentElement,t=" w-mod-";
          n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")
        }(window,document);
      `
          }}
        />
      </Head>
      <body className="body">
        <Main />
        <NextScript />
        <script
          src="https://code.jquery.com/jquery-3.6.3.min.js"
          integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="
          crossorigin="anonymous"
        ></script>
        <script src="assets/scripts/custom.js"></script>
      </body>
    </Html>
  );
}
