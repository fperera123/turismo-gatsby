import React from "react";
import { GatsbyImage as Img, getImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Content from "../contentStyles";

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

export default function ContentWithColorBox() {
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
        id="section--s_-Ysf-e70k"
        data-wow-duration="0.1s"
        styles="visibility: visible; animation-duration: 0.1s; animation-name: fadeIn;"
      >
        <div class="row-wrapper">
          <div class="row two-03">
            <div class="column valigntop">
              <div
                id="me-paragraph-bff933bd-f9be-476e-a5c5-7d06728c722e"
                class="block block-layout-builder block-inline-blockme-paragraph no-capitol-letter no text-black"
                styles="color: #000000;"
              >
                <div class="p-wrapper">
                  <div class="p-content">
                    <div class="clearfix text-formatted field field--name-field-me-p-content field--type-text-long field--label-visually_hidden">
                      <div class="field__label visually-hidden">Contenido</div>
                      <div class="field__item">
                        <h2 class="tit-izquierda">Naturaleza a tus pies</h2>

                        <p>
                          Las Islas Canarias nos ofrecen la oportunidad de
                          disfrutar de unos paisajes impresionantes, repletos de
                          contrastes, que nos permiten caminar por terrenos
                          volcánicos, playas paradisiacas y bosques milenarios.
                          Un archipiélago de posibilidades donde disfrutar de
                          una red de rutas perfectamente trazadas, con
                          recorridos balizados, cualificados y homologados para
                          la práctica del senderismo.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="boxshadow"></div>
                </div>
              </div>
              <div
                id="md-itemlist-942cdc26-b390-4d07-81ad-754bb7a0238f"
                class="block block-layout-builder block-inline-blockmd-itemlist"
                data-dynamic="true"
                data-uuid="e30085eb-ad1f-483c-bca2-dcd6a02091f9"
              >
                <div id="bloc_num_items" data-num_items="1"></div>
                <div class="align-left">
                  <a
                    href="/experiencias/senderos-de-las-islas-canarias/"
                    class="link-element wow fadeInUp"
                    data-wow-delay="0.5s"
                    data-wow-duration="0.2s"
                    styles="visibility: visible; animation-duration: 0.2s; animation-delay: 0.5s; animation-name: fadeInUp;"
                  >
                    <div class="shadow">
                      <div class="element">
                        <article
                          role="article"
                          about="https://www.holaislascanarias.com/experiencias/senderos-de-las-islas-canarias/"
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
                                          src={otherImage7}
                                          width="560"
                                          height="582"
                                          alt="Senderos de las Islas Canarias"
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
                                <p>Senderismo</p>
                              </div>
                              <div class="field_h_title">
                                <h2
                                  class="clamp-on"
                                  data-clamp-desktop="2"
                                  data-clamp-mobile="0"
                                >
                                  Senderos de las Islas Canarias
                                </h2>
                              </div>
                              <div class="field_h_subtitle">
                                <p
                                  class="clamp-on"
                                  data-clamp-desktop="3"
                                  data-clamp-mobile="0"
                                >
                                  Descubre los mejores senderos para disfrutar
                                  de los espectaculares paisajes naturales de
                                  las Islas Canarias
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
            </div>
            <div class="column"></div>
            <div class="column valigntop">
              <div id="me-gallery-9a78314d-d9d7-4df0-9917-a1ebed2bcc91">
                <div class="field field--name-field-me-g-images field--type-entity-reference field--label-visually_hidden">
                  <div class="field__label visually-hidden">Imágenes</div>
                  <div
                    class="field field--name-field-me-g-images field--type-entity-reference field--label-visually_hidden field__items me-gallery me-gallery-grid dt-col-two mb-col-two zoom-on relative"
                    styles="position: relative; height: 582.735px;"
                  >
                    <div class="gutter-sizer"></div>

                    <div
                      class="field__item grid-item zoom-on"
                      styles="position: absolute; left: 0%; top: 0px;"
                    >
                      <article
                        class="media media--type-imagenes-bloques media--view-mode-masonry-imagen"
                        data-media-id="1792"
                      >
                        <div class="me-im-desktop-image me-gallery-image-item">
                          <a
                            data-colorbox-inline=".colorbox-block-1792"
                            data-colorbox-gallery="colorbox-group-desktop-0"
                            class="cboxElement"
                          >
                            <div class="field field--name-field-media-image field--type-image field--label-hidden field__item">
                              <img
                                src={otherImage8}
                                width="1166"
                                height="900"
                                alt="Naturaleza-Galería 3"
                                typeof="foaf:Image"
                                class="image-style-masonry-image"
                              />
                            </div>
                            <div class="field field--name-field-ib-footer field--type-string field--label-hidden field__item">
                              Bosque de Los Tilos, La Palma
                            </div>
                          </a>
                        </div>
                        <div class="me-im-mobile-image me-gallery-image-item">
                          <a
                            data-colorbox-inline=".colorbox-block-1792"
                            data-colorbox-gallery="colorbox-group-mobile-0"
                            class="cboxElement"
                          >
                            <div class="field field--name-field-media-image field--type-image field--label-hidden field__item">
                              <img
                                src={otherImage8}
                                width="1166"
                                height="900"
                                alt="Naturaleza-Galería 3"
                                typeof="foaf:Image"
                                class="image-style-masonry-image"
                              />
                            </div>
                            <div class="field field--name-field-ib-footer field--type-string field--label-hidden field__item">
                              Bosque de Los Tilos, La Palma
                            </div>
                          </a>
                        </div>
                        <div class="visually-hidden">
                          <div class="colorbox-block-1792">
                            <div class="container-colorbox">
                              <div class="media-content">
                                <img
                                  src={otherImage8}
                                  width="1036"
                                  height="800"
                                  alt="Naturaleza-Galería 3"
                                  typeof="foaf:Image"
                                  class="image-style-colorbox-image"
                                />
                              </div>
                              <div class="caption-content">
                                <div class="field field--name-field-ib-footer field--type-string field--label-hidden field__item">
                                  Bosque de Los Tilos, La Palma
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>

                    <div
                      class="field__item grid-item zoom-on"
                      styles="position: absolute; left: 50%; top: 0px;"
                    >
                      <article
                        class="media media--type-imagenes-bloques media--view-mode-masonry-imagen"
                        data-media-id="1789"
                      >
                        <div class="me-im-desktop-image me-gallery-image-item">
                          <a
                            data-colorbox-inline=".colorbox-block-1789"
                            data-colorbox-gallery="colorbox-group-desktop-0"
                            class="cboxElement"
                          >
                            <div class="field field--name-field-media-image field--type-image field--label-hidden field__item">
                              <img
                                src={otherImage9}
                                width="615"
                                height="900"
                                alt="Naturaleza-Galería 2"
                                typeof="foaf:Image"
                                class="image-style-masonry-image"
                              />
                            </div>
                            <div class="field field--name-field-ib-footer field--type-string field--label-hidden field__item">
                              Cumbres de Gran Canaria, Gran Canaria{" "}
                            </div>
                          </a>
                        </div>
                        <div class="me-im-mobile-image me-gallery-image-item">
                          <a
                            data-colorbox-inline=".colorbox-block-1789"
                            data-colorbox-gallery="colorbox-group-mobile-0"
                            class="cboxElement"
                          >
                            <div class="field field--name-field-media-image field--type-image field--label-hidden field__item">
                              <img
                                src={otherImage9}
                                width="615"
                                height="900"
                                alt="Naturaleza-Galería 2"
                                typeof="foaf:Image"
                                class="image-style-masonry-image"
                              />
                            </div>
                            <div class="field field--name-field-ib-footer field--type-string field--label-hidden field__item">
                              Cumbres de Gran Canaria, Gran Canaria{" "}
                            </div>
                          </a>
                        </div>
                        <div class="visually-hidden">
                          <div class="colorbox-block-1789">
                            <div class="container-colorbox">
                              <div class="media-content">
                                <img
                                  src={otherImage9}
                                  width="546"
                                  height="800"
                                  alt="Naturaleza-Galería 2"
                                  typeof="foaf:Image"
                                  class="image-style-colorbox-image"
                                />
                              </div>
                              <div class="caption-content">
                                <div class="field field--name-field-ib-footer field--type-string field--label-hidden field__item">
                                  Cumbres de Gran Canaria, Gran Canaria{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div
                      class="field__item grid-item zoom-on"
                      styles="position: absolute; left: 0%; top: 240.391px;"
                    >
                      <article
                        class="media media--type-imagenes-bloques media--view-mode-masonry-imagen"
                        data-media-id="1786"
                      >
                        <div class="me-im-desktop-image me-gallery-image-item">
                          <a
                            data-colorbox-inline=".colorbox-block-1786"
                            data-colorbox-gallery="colorbox-group-desktop-0"
                            class="cboxElement"
                          >
                            <div class="field field--name-field-media-image field--type-image field--label-hidden field__item">
                              <img
                                src={otherImage10}
                                width="783"
                                height="900"
                                alt="Naturaleza-Galería 1"
                                typeof="foaf:Image"
                                class="image-style-masonry-image"
                              />
                            </div>
                            <div class="field field--name-field-ib-footer field--type-string field--label-hidden field__item">
                              Roque de Agando, La Gomera
                            </div>
                          </a>
                        </div>
                        <div class="me-im-mobile-image me-gallery-image-item">
                          <a
                            data-colorbox-inline=".colorbox-block-1786"
                            data-colorbox-gallery="colorbox-group-mobile-0"
                            class="cboxElement"
                          >
                            <div class="field field--name-field-media-image field--type-image field--label-hidden field__item">
                              <img
                                src={otherImage10}
                                width="783"
                                height="900"
                                alt="Naturaleza-Galería 1"
                                typeof="foaf:Image"
                                class="image-style-masonry-image"
                              />
                            </div>
                            <div class="field field--name-field-ib-footer field--type-string field--label-hidden field__item">
                              Roque de Agando, La Gomera
                            </div>
                          </a>
                        </div>
                        <div class="visually-hidden">
                          <div class="colorbox-block-1786">
                            <div class="container-colorbox">
                              <div class="media-content">
                                <img
                                  src={otherImage10}
                                  width="696"
                                  height="800"
                                  alt="Naturaleza-Galería 1"
                                  typeof="foaf:Image"
                                  class="image-style-colorbox-image"
                                />
                              </div>
                              <div class="caption-content">
                                <div class="field field--name-field-ib-footer field--type-string field--label-hidden field__item">
                                  Roque de Agando, La Gomera
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="md-canary-fact-5766a9e6-a519-4991-9cc9-02a234773f69"
                class="block block-layout-builder block-inline-blockmd-canary-fact align-left text-black"
                data-dynamic="true"
                data-uuid="5d0cd412-1d05-4b52-bf5b-d16752d06b1b"
                styles="color: #000000;
"
              >
                <div id="bloc_num_items" data-num_items="1"></div>
                <article
                  role="article"
                  about="https://www.holaislascanarias.com/node/250"
                  class="node node--type-canary-fact"
                >
                  <div class="node__content">
                    <div class="title-canaryfact">
                      <div class="visually-hidden">Titular</div>
                      <p>
                        La naturaleza de las Islas Canarias es excepcional: 146
                        espacios protegidos, incluidos sus cuatro Parques
                        Nacionales, y tres Reservas Marinas, además de siete
                        Reservas de la Biosfera.
                      </p>
                    </div>
                  </div>
                </article>
                <p class="canary-fact-suffix">Curiosidad canaria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
