import React from 'react'
import { GatsbyImage as Img, getImage } from 'gatsby-plugin-image'
import Content from "../../contentStyles"

import GASTRO_SAUZAL_140420 from './../../../../assets/clone/26_GASTRO_SAUZAL_140420.mp4';

export default function HeroOne({ data: { titleVideo } }) {
  const { title, video } = titleVideo;
  return (
    <div class="region region-primary-menu">
      <div id="block-hic-common-header" class="block block-">
        <div id="header_hic" class="header dark height-big">
          <div id="video_dynamic" class="background_video dktH-center dktV-middle" data-video_dynamic="true" data-customizationexists="1" data-nid="21" data-videoid="video_21_desktop" data-typedinamic="video_local">

            <article class="media media--type-video-local media--view-mode-banner-video-local">

              <div class="local-video-desktop" data-video-width="1920" data-video-height="1080">

                <div class="field field--name-field-media-video-file field--type-file field--label-visually_hidden">
                  <div class="field__label visually-hidden">{ title }</div>
                  <div class="field__item">
                    <video autoplay="autoplay" loop="loop" muted="muted" width="1920" height="1080" class="js-plyr" playsinline="playsinline" styles="width: auto; height: 116.019%;">
                      <source src={video.url} type="video/mp4" />
                    </video>

                  </div>
                </div>

              </div>


            </article>

          </div>
          <div class="background_video_mov mblH-center mblV-middle" data-video_dynamic="true" data-nid="21" data-videoid="video_21_mobile" data-typedinamic="video_local">
          </div>

          <div class="content hor-align-center-ml ver-align-down-ml subtitle-down">
            <div class="titles">
              <h1 class="title font-width-bold large text-white">
                { title }
              </h1>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}