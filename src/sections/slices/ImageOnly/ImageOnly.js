import React from "react";
import Content from "../contentStyles";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import al_horno from './../../../assets/clone/Gastronomía-Vieja-al-horno.jpg';

export default function ImageOnly() {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="300"
        data-aos-once="true"
        class="layout hic_layout_one_00 boxed num-col--1 wrapper-layout wow fadeIn"
        data-valign1="valigntop"
        id="section--4Q9AuKy-j50"
        data-wow-duration="0.1s"
        styles="visibility: visible; animation-duration: 0.1s; animation-name: fadeIn;"
      >
        <div class="row-wrapper">
          <div class="row one-00">
            <div class="column valigntop">
              <div
                id="me-imagen-9ef7ad8a-32c1-4083-8bcc-8d917e6b9b47"
                class="block block-layout-builder block-inline-blockme-imagen footer-down-left full text-black"
                styles="color: #000000;"
              >
                <div class="">
                  <div class="field field--name-field-me-i-image field--type-entity-reference field--label-visually_hidden">
                    <div class="field__label visually-hidden">Imagen</div>
                    <div class="field__item">
                      <article class="media media--type-imagenes-bloques media--view-mode-me-image">
                        <div class="me-im-desktop-image">
                          <div class="field field--name-field-media-image field--type-image field--label-visually_hidden">
                            <div class="field__item">
                              <img
                                width="1334"
                                height="684"
                                alt="Vieja al horno"
                                loading="lazy"
                                class="image-style-image-paragraph-desktop lazyloaded"
                                typeof="foaf:Image"
                                src={al_horno}
                              />
                            </div>
                          </div>
                        </div>
                        <div class="me-im-mobile-image">
                          <div class="field field--name-field-media-image field--type-image field--label-visually_hidden">
                            <div class="field__item">
                              <img
                                width="1334"
                                height="684"
                                alt="Vieja al horno"
                                loading="lazy"
                                class="image-style-image-paragraph-desktop lazyloaded"
                                typeof="foaf:Image"
                                src={al_horno}
                              />
                            </div>
                          </div>
                        </div>

                        <div class="field field--name-field-ib-footer field--type-string field--label-visually_hidden">
                          <div class="field__item toClamp not-clamped">
                            Vieja al horno
                            <span
                              class="foo url-type-clamped block"
                              styles="display: inline;"
                            >
                              <span></span>
                            </span>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
