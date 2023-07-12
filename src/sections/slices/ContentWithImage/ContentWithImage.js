import React from "react";
import { GatsbyImage as Img, getImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Content from "../contentStyles";

import listado_dulces_la_palma from "./../../../assets/clone/listado-dulces-la-palma.jpg";
import Gastronomía_Ensalada_de_la_huerta from "./../../../assets/clone/Gastronomía-Ensalada-de-la-huerta.jpg";

const compParagraph = () => {
  return (
    <>
      <div
        class="block block-layout-builder block-inline-blockme-paragraph no-capitol-letter no text-black"
        styles="color: #000000;"
      >
        <div class="p-wrapper">
          <div class="p-content">
            <div class="clearfix text-formatted field field--name-field-me-p-content field--type-text-long field--label-visually_hidden">
              <div class="field__item">
                <h2 class="tit-izquierda">
                  Sabores con denominación de origen
                </h2>
                <p>
                  El origen volcánico de las islas, sus temperaturas suaves y la
                  mimada elaboración artesanal hacen que muchos de los productos
                  estrella de su gastronomía se encuentren bajo Denominación de
                  Origen Protegida (D.O.P). Entre ellos, destacan sus excelentes
                  vinos volcánicos y quesos como el majorero, de Fuerteventura,
                  el palmero o el de Flor de Guía, elaborado en Gran Canaria.
                  Todos de excelente sabor y reconocidos mundialmente.&nbsp;
                </p>

                <p>
                  Las magníficas condiciones climáticas del archipiélago canario
                  son perfectas para el cultivo de frutas y hortalizas,
                  protagonistas en la mayoría de los platos locales, y también
                  protegidas por denominaciones de origen. Un claro ejemplo son
                  las papas antiguas canarias, entre las que destaca la
                  apreciada papa negra. Además, el suave clima canario permite
                  cultivar muchas frutas exóticas, como la papaya, el mango, la
                  piña, el aguacate y, por supuesto, el popular plátano de
                  Canarias. El único tipo de plátano que ha conseguido el
                  reconocimiento europeo como Indicación Geográfica Protegida
                  (IGP).
                </p>
              </div>
            </div>
          </div>
          <div class="boxshadow"></div>
        </div>
      </div>
    </>
  );
};

const compImage = () => {
  return (
    <>
      <div
        class="block block-layout-builder block-inline-blockme-imagen footer-down-left full text-black"
        styles="color: #000000;"
      >
        <div class="">
          <div class="field field--name-field-me-i-image field--type-entity-reference field--label-visually_hidden">
            <div class="field__item">
              <article class="media media--type-imagenes-bloques media--view-mode-me-image">
                <div class="me-im-desktop-image">
                  <div class="field field--name-field-media-image field--type-image field--label-visually_hidden">
                    <div class="field__item">
                      <img
                        width="820"
                        height="785"
                        alt="Ensalada de la huerta"
                        loading="lazy"
                        class="image-style-image-paragraph-desktop lazyloaded"
                        typeof="foaf:Image"
                        src={Gastronomía_Ensalada_de_la_huerta}
                      />
                    </div>
                  </div>
                </div>
                <div class="me-im-mobile-image">
                  <div class="field field--name-field-media-image field--type-image field--label-visually_hidden">
                    <div class="field__item">
                      <img
                        width="820"
                        height="785"
                        alt="Ensalada de la huerta"
                        loading="lazy"
                        class="image-style-image-paragraph-desktop lazyloaded"
                        typeof="foaf:Image"
                        src={Gastronomía_Ensalada_de_la_huerta}
                      />
                    </div>
                  </div>
                </div>

                <div class="field field--name-field-ib-footer field--type-string field--label-visually_hidden">
                  <div class="field__item toClamp not-clamped inline-block">
                    Ensalada de la huerta
                    <span
                      class="foo url-type-clamped"
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
    </>
  );
};

const compFact = () => {
  return (
    <>
      <div
        class="block block-layout-builder block-inline-blockmd-canary-fact align-right text-black"
        data-dynamic="true"
        data-uuid="8802bd5d-0547-4004-b3e2-d3a34e90c1d6"
        styles="color: #000000;"
      >
        <div id="bloc_num_items" data-num_items="1"></div>
        <article
          role="article"
          about="https://www.holaislascanarias.com/node/225"
          class="node node--type-canary-fact"
        >
          <div class="node__content">
            <div class="title-canaryfact">
              <div class="visually-hidden">Titular</div>
              <p>
                El majorero de Fuerteventura fue el primer queso de cabra de
                España en obtener la Denominación de Origen Protegida.
              </p>
            </div>
          </div>
        </article>
        <p class="canary-fact-suffix">Curiosidad canaria</p>
      </div>
    </>
  );
};

const dynamicBlock = () => {
  return (
    <>
      <div
        class="block block-layout-builder block-inline-blockmd-itemlist"
        data-dynamic="true"
        data-uuid="b884014a-8738-41db-aa64-eb334379a403"
      >
        <div id="bloc_num_items" data-num_items="1"></div>
        <div class="align-left">
          <a
            href="/experiencias/una-guia-para-golosos-en-la-palma/"
            class="link-element wow fadeInUp"
            data-wow-delay="0.5s"
            data-wow-duration="0.2s"
            styles="visibility: visible; animation-duration: 0.2s; animation-delay: 0.5s; animation-name: fadeInUp;"
          >
            <div class="shadow">
              <div class="element">
                <article
                  role="article"
                  about="https://www.holaislascanarias.com/experiencias/una-guia-para-golosos-en-la-palma/"
                  class="art"
                >
                  <div>
                    <div class="field_h_images">
                      <div class="field field--name-field-h-image-gallery field--type-entity-reference field--label-visually_hidden">
                        <div class="field__label visually-hidden">
                          Imagen Listado
                        </div>
                        <div class="field__item">
                          <article class="media media--type-list-image media--view-mode-header-thumbnail">
                            <div class="field field--name-field-media-image field--type-image field--label-visually_hidden">
                              <div class="field__label visually-hidden">
                                Imagen
                              </div>
                              <div class="field__item">
                                <img
                                  src={listado_dulces_la_palma}
                                  width="1040"
                                  height="1080"
                                  alt="Rapadura La Palma"
                                  typeof="foaf:Image"
                                />
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                    <div class="field_others">
                      <div class="field_t_main_motivation">
                        <p>Gastronomía</p>
                      </div>
                      <div class="field_h_title">
                        <h2
                          class="clamp-on"
                          data-clamp-desktop="2"
                          data-clamp-mobile="0"
                        >
                          Una guía para golosos en La Palma
                        </h2>
                      </div>
                      <div class="field_h_subtitle">
                        <p
                          class="clamp-on"
                          data-clamp-desktop="3"
                          data-clamp-mobile="0"
                        >
                          Fruto del mestizaje cultural y gastronómico.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default function ContentWithImage() {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="300"
        data-aos-once="true"
        class="layout hic_layout_two_03 boxed num-col--2 wrapper-layout wow fadeIn"
        data-valign1="valigntop"
        data-valign2="valigntop"
        id="section--f0LFUAH0lZ0"
        data-wow-duration="0.1s"
        styles="visibility: visible; animation-duration: 0.1s; animation-name: fadeIn;"
      >
        <div class="row-wrapper">
          <div class="row two-03">
            <div class="column valigntop">
              {compParagraph()} {dynamicBlock()}
            </div>
            <div class="column"></div>
            <div class="column valigntop">
              {compImage()}
              {compFact()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
