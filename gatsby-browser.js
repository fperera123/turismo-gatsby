import React from "react";
import "./node_modules/slick-carousel/slick/slick.css";
import "./node_modules/react-modal-video/css/modal-video.min.css";
import "./src/assets/fonts/fontawesome-5/css/all.min.css";
import { Layout } from "./src/components/Core";
import { GlobalHeaderProvider } from "./src/context/GlobalHeaderContext";
import "./src/styles/scss/bootstrap.scss";
import "./src/styles/scss/global.scss";
import "./src/styles/tailwind-output.css";
import "./src/assets/clone/global.js";
import "./src/assets/clone/me_video_plyr_setup.js";
import "./src/assets/clone/navigation.js";
import "./src/assets/clone/me_gallery_grid.js";
import "./src/assets/clone/me_gallery_grid_init.js";
import "./src/assets/clone/me_gallery_colorbox_init";
import "./src/assets/clone/me_gallery_colorbox.js";

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}


export const wrapRootElement = ({ element }) => (
  <GlobalHeaderProvider>{element}</GlobalHeaderProvider>
);
