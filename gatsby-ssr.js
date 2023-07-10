import React from "react";
import "./node_modules/slick-carousel/slick/slick.css";
import "./src/assets/fonts/fontawesome-5/css/all.min.css";
import { Layout } from "./src/components/Core";
import { GlobalHeaderProvider } from "./src/context/GlobalHeaderContext";
import "./src/styles/scss/bootstrap.scss";
import "./src/styles/scss/global.scss";


export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}


export const wrapRootElement = ({ element }) => (
  <GlobalHeaderProvider>{element}</GlobalHeaderProvider>
);

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    // <script
    //   key="./node_modules/tw-elements/dist/js/index.min.js"
    //   src="./node_modules/tw-elements/dist/js/index.min.js"
    //   crossOrigin="anonymous"
    //   defer
    // />,
    <script src="https://www.holaislascanarias.com/core/assets/vendor/jquery/jquery.min.js?v=3.5.1"/>,
    <script src="https://www.holaislascanarias.com/modules/custom/hic_block_me_video/libraries/plyr/plyr.js?v=3.5.6"/>,
    <script src="https://www.holaislascanarias.com/themes/custom/hic_front_theme/hic_front_theme/js/masonry/masonry.pkgd.min.js?v=4.2.2"/>,
    <script src="https://www.holaislascanarias.com/themes/custom/hic_front_theme/hic_front_theme/js/masonry/imagesloaded.pkgd.min.js?v=4.2.2"/>,
    <script src="https://www.holaislascanarias.com/themes/custom/hic_front_theme/hic_front_theme/js/colorbox/jquery.colorbox.js?v=1.6.4"/>,
    <script src="https://www.holaislascanarias.com/modules/custom/hic_block_me_gallery/js/jquery.touchSwipe.min.js?v=1.x"/>,

  ])
}