import Navbar from "@component/Navbar";
import Footer from "@component/Footer";

import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <div className="page-wrapper">
      <div className="global-styles w-embed">
        <style jsx>{`
          /* Snippet gets rid of top margin on first element in any rich text*/
          .w-richtext>:first-child {
            margin-top: 0;
          }
  
          /* Snippet gets rid of bottom margin on last element in any rich text*/
          .w-richtext>:last-child,
          .w-richtext ol li:last-child,
          .w-richtext ul li:last-child {
            margin-bottom: 0;
          }
  
          /*
   * Cursor
   */
  
          .cursor-wrapper {
            pointer-events: none;
          }
  
          /*
   * Reset buttons, and links styles
   */
  
          a {
            color: inherit;
            text-decoration: inherit;
            font-size: inherit;
          }
  
          /*
   * Blog, Shop Border Fix
   */
  
          @media (min-width: 992px) {
  
            .post-preview:nth-child(4),
            .product-preview:nth-child(4) {
              border-left: none;
            }
  
          }
        `}</style>
      </div>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </div>

    
  );
}

export default App;


