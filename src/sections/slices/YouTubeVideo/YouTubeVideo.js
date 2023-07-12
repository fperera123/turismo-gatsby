import React from 'react';
import YouTube from 'react-youtube';
import Poster_Gastronomía from './../../../assets/clone/Poster-Gastronomía.jpg';


export default function YouTubeVideo({ data: { videoId } }) {

  return (
    <>
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="300" data-aos-once="true" class="layout hic_layout_one_00 boxed num-col--1 wrapper-layout wow fadeIn" data-valign1="valigntop" id="section--zf999SiakXg" data-wow-duration="0.1s" styles="visibility: visible; animation-duration: 0.1s; animation-name: fadeIn;">
        <div class="row-wrapper">
          <div class="row one-00">
            <div class="column valigntop">

              <div id="me-video-34b1b5ba-4631-45e0-8ea9-4fb9a065dcf7" class="block block-layout-builder block-inline-blockme-video full">


                <div class="wrapper-video-container poster pb-[56.25%]" styles="padding-bottom: 56.25%">
                  <div class="iconContainer !text-[1rem]" styles="font-size: 0.979592vw;">
                    <div class="playIcon"></div>
                    <div class="pauseIcon hidden"></div>
                  </div>
                  <div class="spinkit-overlay">
                    <div class="loader">
                      <div class="sk-circle">
                        <div class="sk-circle-dot sk-circle1 sk-child"></div>
                        <div class="sk-circle-dot sk-circle2 sk-child"></div>
                        <div class="sk-circle-dot sk-circle3 sk-child"></div>
                        <div class="sk-circle-dot sk-circle4 sk-child"></div>
                        <div class="sk-circle-dot sk-circle5 sk-child"></div>
                        <div class="sk-circle-dot sk-circle6 sk-child"></div>
                        <div class="sk-circle-dot sk-circle7 sk-child"></div>
                        <div class="sk-circle-dot sk-circle8 sk-child"></div>
                        <div class="sk-circle-dot sk-circle9 sk-child"></div>
                        <div class="sk-circle-dot sk-circle10 sk-child"></div>
                        <div class="sk-circle-dot sk-circle11 sk-child"></div>
                        <div class="sk-circle-dot sk-circle12 sk-child"></div>
                      </div>
                    </div>
                  </div>
                  <div class="info-video">
                    <div class="video-duration">01:55</div>

                    <div class="field field--name-field-me-v-title field--type-string field--label-visually_hidden">
                      <div class="field__label visually-hidden">Title</div>
                      <div class="field__item">Además se come bien</div>
                    </div>

                  </div>

                  <div class="field field--name-field-me-v-remote-video field--type-entity-reference field--label-visually_hidden">
                    <div class="field__label visually-hidden">Video</div>
                    <div class="field__item">
                      <div class="media media--type-remote-video media--view-mode-default">

                        <div class="media media--type-remote-video media--view-mode-default js-plyr" data-plyr-provider="youtube" data-plyr-embed-id="Z85VMOJsAOA">
                        </div>
                      </div>

                    </div>
                  </div>

                  <div class="field field--name-field-me-v-poster field--type-entity-reference field--label-visually_hidden">
                    <div class="field__label visually-hidden">Póster</div>
                    <div class="field__item">
                      <article class="media media--type-imagenes-bloques media--view-mode-default">

                        <div class="me-im-desktop-image">

                          <div class="field field--name-field-media-image field--type-image field--label-hidden field__item">
                            <img src={Poster_Gastronomía} width="1920" height="1080" alt="Además se come bien" typeof="foaf:Image" className='min-h-[695px]' styles="min-height: 685px;" />

                          </div>

                        </div>
                        <div class="me-im-mobile-image">

                          <div class="field field--name-field-media-image field--type-image field--label-hidden field__item">
                            <img src={Poster_Gastronomía} width="1920" height="1080" alt="Además se come bien" typeof="foaf:Image" />

                          </div>

                        </div>

                      </article>
                    </div>
                  </div>

                  <div class="field field--name-field-me-v-type field--type-list-string field--label-visually_hidden">
                    <div class="field__label visually-hidden">Tipo</div>
                    <div class="field__item">Ancho completo</div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}