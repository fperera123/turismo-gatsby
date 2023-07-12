import React from "react";
import { GatsbyImage as Img, getImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Content from "../contentStyles";


import Poster_Gastronomía from './../../../assets/clone/Poster-Gastronomía.jpg';
import listado_dulces_la_palma from './../../../assets/clone/listado-dulces-la-palma.jpg';
import Gastronomía_Ensalada_de_la_huerta from './../../../assets/clone/Gastronomía-Ensalada-de-la-huerta.jpg';
import Gastronomía_Bienmesabe from './../../../assets/clone/Gastronomía-Bienmesabe.jpg';
import al_horno from './../../../assets/clone/Gastronomía-Vieja-al-horno.jpg';
import gastronomia_conejera from './../../../assets/clone/listado-gastronomia-conejera.jpg';
import queso_canario from './../../../assets/clone/listado-amantes-del-queso-canario.jpg';
import Guachinche_gomero from './../../../assets/clone/Guachinche-gomero.jpg';
import banner_recursos_restaurantes_dt from './../../../assets/clone/banner-recursos-restaurantes-dt.jpg';
import Gastronomía_La_Geria from './../../../assets/clone/Gastronomía-La-Geria.jpg';

import otherImage1 from './../../../assets/clone/img1.jpg'
import otherImage2 from './../../../assets/clone/img2.png'
import otherImage3 from './../../../assets/clone/img3.jpg'
import otherImage4 from './../../../assets/clone/img4.jpg'
import otherImage5 from './../../../assets/clone/img5.jpg'
import otherImage6 from './../../../assets/clone/img6.jpg'
import otherImage7 from './../../../assets/clone/img7.jpg'
import otherImage8 from './../../../assets/clone/img8.jpg'
import otherImage9 from './../../../assets/clone/img9.jpg'
import otherImage10 from './../../../assets/clone/img10.jpg'

import footerImage1 from './../../../assets/clone/bono-la-palma-desktop-footer.jpg';
import footerImage2 from './../../../assets/clone/la-vuelta-al-mundo-en-8-islas-dk.jpg';

import facebookIcon from './../../../assets/clone/facebook-icon.png';
import facebookIconHover from './../../../assets/clone/facebook-icon-hover.png';

import instagramIcon from './../../../assets/clone/instagram-icon.png'
import instagramIconHover from './../../../assets/clone/instagram-icon-hover.png'

import twitterIcon from './../../../assets/clone/twitter-icon.png'
import twitterIconHover from './../../../assets/clone/twitter-icon-hover.png'

import youtubeIcon from './../../../assets/clone/youtube-icon.png'
import youtubeIconHover from './../../../assets/clone/youtube-icon-hover.png'

import footerImage3 from './../../../assets/clone/logo-next-generation-ES-desktop.png';
import footerImage4 from './../../../assets/clone/logo-ministerio-resiliencia-desktop.png';
import footerImage5 from './../../../assets/clone/logo-turismo-islas-canarias.png';
import footerImage6 from './../../../assets/clone/logo-gobierno-canarias-desktop.png';

import GASTRO_SAUZAL_140420 from './../../../assets/clone/26_GASTRO_SAUZAL_140420.mp4';
import ROQUENUBLO_210120_loop from './../../../assets/clone/20_ROQUENUBLO_210120_loop.mp4';

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

export default function ContentWithImageTopOrBottom() {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="300"
        data-aos-once="true"
        class="layout hic_layout_one_01 fullwitdh num-col--1 wrapper-layout wow fadeIn"
        data-valign1="valigntop"
        id="section--ZZq-PmVkhrQ"
        data-wow-duration="0.1s"
        styles="visibility: visible; animation-duration: 0.1s; animation-name: fadeIn;"
      >
        <div class="row-wrapper">
          <div class="row one-01">
            <div class="column"></div>
            <div class="column valigntop">
              <div
                id="me-image-paragraph-78df2c7a-dca6-4d4a-8616-999d4e251513"
                class="block block-layout-builder block-inline-blockme-image-paragraph no-capitol-letter up text-black"
                styles="color: #000000;"
              >
                <div class="">
                  <div class="field field--name-field-me-ip-images field--type-entity-reference field--label-visually_hidden">
                    <div class="field__label visually-hidden">Imagen</div>
                    <div class="field__item">
                      <article class="media media--type-imagenes-bloques media--view-mode-image-paragraph">
                        <div class="me-im-desktop-image">
                          <div class="field field--name-field-media-image field--type-image field--label-hidden field__item">
                            {" "}
                            <img
                              width="1500"
                              height="684"
                              alt="Bienmesabe"
                              loading="lazy"
                              class="image-style-image-paragraph-desktop lazyloaded"
                              typeof="foaf:Image"
                              src={Gastronomía_Bienmesabe}
                            />
                          </div>
                        </div>
                        <div class="me-im-mobile-image">
                          <div class="field field--name-field-media-image field--type-image field--label-hidden field__item">
                            {" "}
                            <img
                              width="1500"
                              height="684"
                              alt="Bienmesabe"
                              loading="lazy"
                              class="image-style-image-paragraph-desktop lazyloaded"
                              typeof="foaf:Image"
                              src={Gastronomía_Bienmesabe}
                            />
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
                <div class="ip-wrapper">
                  <div class="ip-content">
                    <div class="clearfix text-formatted field field--name-field-me-ip-content field--type-text-long field--label-visually_hidden">
                      <div class="field__label visually-hidden">Contenido</div>
                      <div class="field__item">
                        <h2 class="tit-izquierda">Recetas locales</h2>

                        <p>
                          Son muy diversas las culturas que han dejado su huella
                          en las islas. Y eso ha dado como resultado grandes
                          sabores y contrastes que se pueden apreciarse en la
                          mayoría de sus platos típicos, como las apetecibles
                          papas arrugadas con mojo picón. Otro de los productos
                          estrella de las Islas Canarias, presente también en
                          muchas recetas, es el gofio. Elaborado a base de
                          cereales tostados, como el maíz y el trigo, proviene
                          de la época de los primeros pobladores.
                        </p>

                        <p>
                          En la gastronomía canaria predomina el uso de las
                          verduras locales, como sucede con el potaje de berros,
                          las piñas de millo con papas y costillas o los
                          bubangos rellenos, una variedad autóctona de
                          calabacín. Otro producto ‘top’ en las recetas de las
                          islas es el pescado, sobre todo en las elaboradas con
                          especies autóctonas como la vieja, de delicado sabor,
                          el cherne, el mero o el jurel. También existe una
                          amplia variedad de postres y dulces típicos,
                          irresistibles para los más golosos. Los deliciosos
                          bienmesabe y príncipe Alberto, de La Palma, la leche
                          asada gomera, el quesillo, el frangollo o las
                          quesadillas herreñas.
                          <br />
                          &nbsp;
                        </p>
                      </div>
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
