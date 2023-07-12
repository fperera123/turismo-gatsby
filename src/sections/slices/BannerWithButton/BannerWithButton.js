import React from "react";
import { GatsbyImage as Img, getImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Content from "../contentStyles";

import banner_recursos_restaurantes_dt from './../../../assets/clone/banner-recursos-restaurantes-dt.jpg';

export default function BannerWithButton() {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="300"
        data-aos-once="true"
        class="layout hic_layout_one_01 fullwitdh num-col--1 wrapper-layout wow fadeIn"
        data-valign1="valigntop"
        id="section--8SL1QKBvnis"
        data-wow-duration="0.1s"
        styles="visibility: visible; animation-duration: 0.1s; animation-name: fadeIn;"
      >
        <div class="row-wrapper">
          <div class="row one-01">
            <div class="column"></div>
            <div class="column valigntop">
              <div
                id="me-banner-44cd6ea5-c1c3-4b36-be10-0ef6507cb3d3"
                class="block block-layout-builder block-inline-blockme-banner text-align-center wow fadeIn bg-white text-white"
                styles="background-color: rgb(255, 255, 255); color: rgb(255, 255, 255); visibility: visible; animation-duration: 1s; animation-delay: 0s; animation-name: fadeIn;"
                data-wow-delay="0.0s"
                data-wow-duration="1s"
              >
                <div class="wrapper-content   w-image">
                  <div class="me-banner-wrapper">
                    <div class="title-banner">
                      <div class="visually-hidden">Título</div>
                      <p data-clamp-always="3" class="clamp-on">
                        Lugares para saborear las Islas Canarias
                      </p>
                    </div>
                    <div class="wrapper-button">
                      <a
                        class="link-button bg-[#FFC600] border-[#FFC600] text-[#002132]"
                        styles="border-color: #FFC600;background-color: #FFC600;color: #002132;"
                        target="_self"
                        href="https://www.holaislascanarias.com/restaurantes/"
                      >
                        <div class="field field--name-field-me-b-text-button field--type-string field--label-visually_hidden">
                          <div class="field__label visually-hidden">
                            Texto Botón
                          </div>
                          <div class="field__item">Encuentra restaurante</div>
                        </div>
                        <span class="mini-arrow"></span>
                      </a>
                    </div>
                  </div>
                  <div class="field field--name-field-me-b-image field--type-entity-reference field--label-visually_hidden horizontal-img">
                    <div class="field__label visually-hidden">Imagen</div>
                    <div class="field__item">
                      <article class="media media--type-imagenes-bloques media--view-mode-image-paragraph">
                        <div class="me-im-desktop-image">
                          <div class="field field--name-field-media-image field--type-image field--label-hidden field__item">
                            {" "}
                            <img
                              width="1200"
                              height="722"
                              alt="Banner restaurantes en las Islas Canarias."
                              loading="lazy"
                              class="image-style-image-paragraph-desktop lazyloaded"
                              typeof="foaf:Image"
                              src={banner_recursos_restaurantes_dt}
                              styles="min-height: 530.047px; height: 589.633px; width: auto;"
                            />
                          </div>
                        </div>
                        <div class="me-im-mobile-image">
                          <div class="field field--name-field-ib-mobile-image field--type-image field--label-hidden field__item">
                            {" "}
                            <img
                              width="552"
                              height="501"
                              alt="Banner restaurantes en las Islas Canarias."
                              loading="lazy"
                              class="image-style-image-paragraph-mobile lazyloaded"
                              typeof="foaf:Image"
                              src={banner_recursos_restaurantes_dt}
                              styles="min-height: 530.047px;"
                            />
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column"></div>
          </div>
        </div>
      </div>
    </>
  );
}
