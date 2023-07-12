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

export default function MorePosts() {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="300"
        data-aos-once="true"
        class="layout hic_layout_one_02 fullwitdh num-col--1 wrapper-layout wow fadeIn"
        data-valign1="valigntop"
        id="section--fbalGr12Ks0"
        data-wow-duration="0.1s"
        styles="visibility: visible; animation-duration: 0.1s; animation-name: fadeIn;"
      >
        <div class="row-wrapper">
          <div class="row one-02">
            <div class="column"></div>
            <div class="column valigntop">
              <div
                id="md-related-stories-a777eb8a-d8cb-4c4c-ae01-e04189d4e1a3"
                class="block block-layout-builder block-inline-blockmd-related-stories subtitle-motivation"
                data-dynamic="true"
                data-uuid="b17a916c-1772-4ae9-b37e-5e525e19b9f3"
              >
                <div id="bloc_num_items" data-num_items="6"></div>

                <div>
                  <div class="visually-hidden">Título</div>
                  <h2>Te puede interesar</h2>
                </div>

                <div class="articles-wrapper items-6">
                  <article
                    role="article"
                    about="https://www.holaislascanarias.com/experiencias/10-cosas-que-hacer-en-la-graciosa/"
                    class="art"
                  >
                    <div class="fav-container" data-nid="709">
                      <span class="ic-favourite"></span>
                      <svg
                        version="1.1"
                        class="hearts hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 31.181 89.321"
                      >
                        <path
                          class="heart1a"
                          fill="#010101"
                          d="M24.059,71.838c-2.053-2.053-5.381-2.053-7.434,0c-0.002,0-0.002,0-0.002,0l-1.014,1.014
				l-1.013-1.014c-2.054-2.053-5.382-2.053-7.436,0c-2.053,2.054-2.053,5.384,0,7.438l1.014,1.012l7.435,7.436l7.435-7.436l1.014-1.012
				c2.054-2.054,2.054-5.382,0.001-7.436C24.061,71.84,24.06,71.84,24.059,71.838z"
                        ></path>
                        <path
                          class="heart1b"
                          fill="#010101"
                          d="M24.059,71.838c-2.053-2.053-5.381-2.053-7.434,0c-0.002,0-0.002,0-0.002,0l-1.014,1.014
				l-1.013-1.014c-2.054-2.053-5.382-2.053-7.436,0c-2.053,2.054-2.053,5.384,0,7.438l1.014,1.012l7.435,7.436l7.435-7.436l1.014-1.012
				c2.054-2.054,2.054-5.382,0.001-7.436C24.061,71.84,24.06,71.84,24.059,71.838z"
                        ></path>
                        <path
                          class="heart2"
                          fill="#010101"
                          d="M18.343,45.734c-2.485-1.5-5.716-0.703-7.217,1.782c-0.002,0.001-0.002,0.001-0.002,0.001
				l-0.741,1.228l-1.228-0.741c-2.487-1.5-5.718-0.702-7.218,1.783c-1.501,2.486-0.703,5.719,1.784,7.221l1.227,0.739l9.001,5.435
				l5.435-9.001l0.742-1.226c1.5-2.487,0.703-5.718-1.782-7.219C18.344,45.735,18.343,45.735,18.343,45.734z"
                        ></path>
                        <path
                          class="heart3"
                          fill="#010101"
                          d="M30,27.841c-1.371-2.559-4.556-3.522-7.115-2.152c-0.002,0-0.002,0-0.002,0l-1.264,0.677
				l-0.677-1.264c-1.373-2.56-4.559-3.523-7.117-2.152c-2.561,1.372-3.524,4.559-2.153,7.12l0.677,1.262l4.965,9.27l9.269-4.965
				l1.264-0.675c2.56-1.372,3.524-4.558,2.153-7.118C30,27.843,30,27.843,30,27.841z"
                        ></path>
                      </svg>
                    </div>
                    <div class="related-stories-item">
                      <div class="wrapper-content">
                        <a href="https://www.holaislascanarias.com/experiencias/10-cosas-que-hacer-en-la-graciosa/">
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
                                    {" "}
                                    <img
                                      src={otherImage1}
                                      width="560"
                                      height="582"
                                      alt="La Graciosa"
                                      typeof="foaf:Image"
                                    />
                                  </div>
                                </div>
                              </article>
                            </div>
                          </div>

                          <div class="story-texts">
                            <div class="island-selected">
                              <div class="visually-hidden">Islas</div>
                              <div>
                                <p>La Graciosa</p>
                              </div>
                            </div>

                            <div class="motivation-selected">
                              <div class="visually-hidden">
                                Motivación Principal
                              </div>
                              <p>Costa y playa</p>
                            </div>

                            <div class="s-item-title">
                              <div class="visually-hidden">Titular</div>
                              <h3 data-clamp-always="3" class="clamp-on">
                                10 cosas que hacer en La Graciosa
                              </h3>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </article>
                  <article
                    role="article"
                    about="https://www.holaislascanarias.com/experiencias/es-tendencia-pasar-el-invierno-en-las-islas-canarias/"
                    class="art"
                  >
                    <div class="fav-container" data-nid="625183">
                      <span class="ic-favourite"></span>
                      <svg
                        version="1.1"
                        class="hearts hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 31.181 89.321"
                      >
                        <path
                          class="heart1a"
                          fill="#010101"
                          d="M24.059,71.838c-2.053-2.053-5.381-2.053-7.434,0c-0.002,0-0.002,0-0.002,0l-1.014,1.014
				l-1.013-1.014c-2.054-2.053-5.382-2.053-7.436,0c-2.053,2.054-2.053,5.384,0,7.438l1.014,1.012l7.435,7.436l7.435-7.436l1.014-1.012
				c2.054-2.054,2.054-5.382,0.001-7.436C24.061,71.84,24.06,71.84,24.059,71.838z"
                        ></path>
                        <path
                          class="heart1b"
                          fill="#010101"
                          d="M24.059,71.838c-2.053-2.053-5.381-2.053-7.434,0c-0.002,0-0.002,0-0.002,0l-1.014,1.014
				l-1.013-1.014c-2.054-2.053-5.382-2.053-7.436,0c-2.053,2.054-2.053,5.384,0,7.438l1.014,1.012l7.435,7.436l7.435-7.436l1.014-1.012
				c2.054-2.054,2.054-5.382,0.001-7.436C24.061,71.84,24.06,71.84,24.059,71.838z"
                        ></path>
                        <path
                          class="heart2"
                          fill="#010101"
                          d="M18.343,45.734c-2.485-1.5-5.716-0.703-7.217,1.782c-0.002,0.001-0.002,0.001-0.002,0.001
				l-0.741,1.228l-1.228-0.741c-2.487-1.5-5.718-0.702-7.218,1.783c-1.501,2.486-0.703,5.719,1.784,7.221l1.227,0.739l9.001,5.435
				l5.435-9.001l0.742-1.226c1.5-2.487,0.703-5.718-1.782-7.219C18.344,45.735,18.343,45.735,18.343,45.734z"
                        ></path>
                        <path
                          class="heart3"
                          fill="#010101"
                          d="M30,27.841c-1.371-2.559-4.556-3.522-7.115-2.152c-0.002,0-0.002,0-0.002,0l-1.264,0.677
				l-0.677-1.264c-1.373-2.56-4.559-3.523-7.117-2.152c-2.561,1.372-3.524,4.559-2.153,7.12l0.677,1.262l4.965,9.27l9.269-4.965
				l1.264-0.675c2.56-1.372,3.524-4.558,2.153-7.118C30,27.843,30,27.843,30,27.841z"
                        ></path>
                      </svg>
                    </div>
                    <div class="related-stories-item">
                      <div class="wrapper-content">
                        <a href="https://www.holaislascanarias.com/experiencias/es-tendencia-pasar-el-invierno-en-las-islas-canarias/">
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
                                    {" "}
                                    <img
                                      src={otherImage2}
                                      width="560"
                                      height="582"
                                      alt="puesta sol silver"
                                      typeof="foaf:Image"
                                    />
                                  </div>
                                </div>
                              </article>
                            </div>
                          </div>

                          <div class="story-texts">
                            <div class="island-selected">
                              <div class="visually-hidden">Islas</div>
                              <div>
                                <p>Todas las islas</p>
                              </div>
                            </div>

                            <div class="motivation-selected">
                              <div class="visually-hidden">
                                Motivación Principal
                              </div>
                              <p>Costa y playa</p>
                            </div>

                            <div class="s-item-title">
                              <div class="visually-hidden">Titular</div>
                              <h3 data-clamp-always="3" class="clamp-on">
                                Es tendencia: pasar el invierno en las Islas
                                Ca...
                              </h3>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </article>
                  <article
                    role="article"
                    about="https://www.holaislascanarias.com/experiencias/10-cosas-que-hacer-en-lanzarote/"
                    class="art"
                  >
                    <div class="fav-container" data-nid="5023">
                      <span class="ic-favourite"></span>
                      <svg
                        version="1.1"
                        class="hearts hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 31.181 89.321"
                      >
                        <path
                          class="heart1a"
                          fill="#010101"
                          d="M24.059,71.838c-2.053-2.053-5.381-2.053-7.434,0c-0.002,0-0.002,0-0.002,0l-1.014,1.014
				l-1.013-1.014c-2.054-2.053-5.382-2.053-7.436,0c-2.053,2.054-2.053,5.384,0,7.438l1.014,1.012l7.435,7.436l7.435-7.436l1.014-1.012
				c2.054-2.054,2.054-5.382,0.001-7.436C24.061,71.84,24.06,71.84,24.059,71.838z"
                        ></path>
                        <path
                          class="heart1b"
                          fill="#010101"
                          d="M24.059,71.838c-2.053-2.053-5.381-2.053-7.434,0c-0.002,0-0.002,0-0.002,0l-1.014,1.014
				l-1.013-1.014c-2.054-2.053-5.382-2.053-7.436,0c-2.053,2.054-2.053,5.384,0,7.438l1.014,1.012l7.435,7.436l7.435-7.436l1.014-1.012
				c2.054-2.054,2.054-5.382,0.001-7.436C24.061,71.84,24.06,71.84,24.059,71.838z"
                        ></path>
                        <path
                          class="heart2"
                          fill="#010101"
                          d="M18.343,45.734c-2.485-1.5-5.716-0.703-7.217,1.782c-0.002,0.001-0.002,0.001-0.002,0.001
				l-0.741,1.228l-1.228-0.741c-2.487-1.5-5.718-0.702-7.218,1.783c-1.501,2.486-0.703,5.719,1.784,7.221l1.227,0.739l9.001,5.435
				l5.435-9.001l0.742-1.226c1.5-2.487,0.703-5.718-1.782-7.219C18.344,45.735,18.343,45.735,18.343,45.734z"
                        ></path>
                        <path
                          class="heart3"
                          fill="#010101"
                          d="M30,27.841c-1.371-2.559-4.556-3.522-7.115-2.152c-0.002,0-0.002,0-0.002,0l-1.264,0.677
				l-0.677-1.264c-1.373-2.56-4.559-3.523-7.117-2.152c-2.561,1.372-3.524,4.559-2.153,7.12l0.677,1.262l4.965,9.27l9.269-4.965
				l1.264-0.675c2.56-1.372,3.524-4.558,2.153-7.118C30,27.843,30,27.843,30,27.841z"
                        ></path>
                      </svg>
                    </div>
                    <div class="related-stories-item">
                      <div class="wrapper-content">
                        <a href="https://www.holaislascanarias.com/experiencias/10-cosas-que-hacer-en-lanzarote/">
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
                                    {" "}
                                    <img
                                      src={otherImage3}
                                      width="560"
                                      height="582"
                                      alt="La Geria"
                                      typeof="foaf:Image"
                                    />
                                  </div>
                                </div>
                              </article>
                            </div>
                          </div>

                          <div class="story-texts">
                            <div class="island-selected">
                              <div class="visually-hidden">Islas</div>
                              <div>
                                <p>Lanzarote</p>
                              </div>
                            </div>

                            <div class="motivation-selected">
                              <div class="visually-hidden">
                                Motivación Principal
                              </div>
                              <p>Costa y playa</p>
                            </div>

                            <div class="s-item-title">
                              <div class="visually-hidden">Titular</div>
                              <h3 data-clamp-always="3" class="clamp-on">
                                10 cosas que hacer en Lanzarote
                              </h3>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </article>
                  <article
                    role="article"
                    about="https://www.holaislascanarias.com/experiencias/que-hacer-en-la-palma-con-ninos/"
                    class="art"
                  >
                    <div class="fav-container" data-nid="5323">
                      <span class="ic-favourite"></span>
                      <svg
                        version="1.1"
                        class="hearts hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 31.181 89.321"
                      >
                        <path
                          class="heart1a"
                          fill="#010101"
                          d="M24.059,71.838c-2.053-2.053-5.381-2.053-7.434,0c-0.002,0-0.002,0-0.002,0l-1.014,1.014
				l-1.013-1.014c-2.054-2.053-5.382-2.053-7.436,0c-2.053,2.054-2.053,5.384,0,7.438l1.014,1.012l7.435,7.436l7.435-7.436l1.014-1.012
				c2.054-2.054,2.054-5.382,0.001-7.436C24.061,71.84,24.06,71.84,24.059,71.838z"
                        ></path>
                        <path
                          class="heart1b"
                          fill="#010101"
                          d="M24.059,71.838c-2.053-2.053-5.381-2.053-7.434,0c-0.002,0-0.002,0-0.002,0l-1.014,1.014
				l-1.013-1.014c-2.054-2.053-5.382-2.053-7.436,0c-2.053,2.054-2.053,5.384,0,7.438l1.014,1.012l7.435,7.436l7.435-7.436l1.014-1.012
				c2.054-2.054,2.054-5.382,0.001-7.436C24.061,71.84,24.06,71.84,24.059,71.838z"
                        ></path>
                        <path
                          class="heart2"
                          fill="#010101"
                          d="M18.343,45.734c-2.485-1.5-5.716-0.703-7.217,1.782c-0.002,0.001-0.002,0.001-0.002,0.001
				l-0.741,1.228l-1.228-0.741c-2.487-1.5-5.718-0.702-7.218,1.783c-1.501,2.486-0.703,5.719,1.784,7.221l1.227,0.739l9.001,5.435
				l5.435-9.001l0.742-1.226c1.5-2.487,0.703-5.718-1.782-7.219C18.344,45.735,18.343,45.735,18.343,45.734z"
                        ></path>
                        <path
                          class="heart3"
                          fill="#010101"
                          d="M30,27.841c-1.371-2.559-4.556-3.522-7.115-2.152c-0.002,0-0.002,0-0.002,0l-1.264,0.677
				l-0.677-1.264c-1.373-2.56-4.559-3.523-7.117-2.152c-2.561,1.372-3.524,4.559-2.153,7.12l0.677,1.262l4.965,9.27l9.269-4.965
				l1.264-0.675c2.56-1.372,3.524-4.558,2.153-7.118C30,27.843,30,27.843,30,27.841z"
                        ></path>
                      </svg>
                    </div>
                    <div class="related-stories-item">
                      <div class="wrapper-content">
                        <a href="https://www.holaislascanarias.com/experiencias/que-hacer-en-la-palma-con-ninos/">
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
                                    {" "}
                                    <img
                                      src={otherImage4}
                                      width="560"
                                      height="582"
                                      alt="senderismo niños"
                                      typeof="foaf:Image"
                                    />
                                  </div>
                                </div>
                              </article>
                            </div>
                          </div>

                          <div class="story-texts">
                            <div class="island-selected">
                              <div class="visually-hidden">Islas</div>
                              <div>
                                <p>La Palma</p>
                              </div>
                            </div>

                            <div class="motivation-selected">
                              <div class="visually-hidden">
                                Motivación Principal
                              </div>
                              <p>Costa y playa</p>
                            </div>

                            <div class="s-item-title">
                              <div class="visually-hidden">Titular</div>
                              <h3 data-clamp-always="3" class="clamp-on">
                                Qué hacer en La Palma con niños
                              </h3>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </article>
                  <article
                    role="article"
                    about="https://www.holaislascanarias.com/experiencias/una-copa-de-vino-muy-cerca-del-cielo/"
                    class="art"
                  >
                    <div class="fav-container" data-nid="652">
                      <span class="ic-favourite"></span>
                      <svg
                        version="1.1"
                        class="hearts hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 31.181 89.321"
                      >
                        <path
                          class="heart1a"
                          fill="#010101"
                          d="M24.059,71.838c-2.053-2.053-5.381-2.053-7.434,0c-0.002,0-0.002,0-0.002,0l-1.014,1.014
				l-1.013-1.014c-2.054-2.053-5.382-2.053-7.436,0c-2.053,2.054-2.053,5.384,0,7.438l1.014,1.012l7.435,7.436l7.435-7.436l1.014-1.012
				c2.054-2.054,2.054-5.382,0.001-7.436C24.061,71.84,24.06,71.84,24.059,71.838z"
                        ></path>
                        <path
                          class="heart1b"
                          fill="#010101"
                          d="M24.059,71.838c-2.053-2.053-5.381-2.053-7.434,0c-0.002,0-0.002,0-0.002,0l-1.014,1.014
				l-1.013-1.014c-2.054-2.053-5.382-2.053-7.436,0c-2.053,2.054-2.053,5.384,0,7.438l1.014,1.012l7.435,7.436l7.435-7.436l1.014-1.012
				c2.054-2.054,2.054-5.382,0.001-7.436C24.061,71.84,24.06,71.84,24.059,71.838z"
                        ></path>
                        <path
                          class="heart2"
                          fill="#010101"
                          d="M18.343,45.734c-2.485-1.5-5.716-0.703-7.217,1.782c-0.002,0.001-0.002,0.001-0.002,0.001
				l-0.741,1.228l-1.228-0.741c-2.487-1.5-5.718-0.702-7.218,1.783c-1.501,2.486-0.703,5.719,1.784,7.221l1.227,0.739l9.001,5.435
				l5.435-9.001l0.742-1.226c1.5-2.487,0.703-5.718-1.782-7.219C18.344,45.735,18.343,45.735,18.343,45.734z"
                        ></path>
                        <path
                          class="heart3"
                          fill="#010101"
                          d="M30,27.841c-1.371-2.559-4.556-3.522-7.115-2.152c-0.002,0-0.002,0-0.002,0l-1.264,0.677
				l-0.677-1.264c-1.373-2.56-4.559-3.523-7.117-2.152c-2.561,1.372-3.524,4.559-2.153,7.12l0.677,1.262l4.965,9.27l9.269-4.965
				l1.264-0.675c2.56-1.372,3.524-4.558,2.153-7.118C30,27.843,30,27.843,30,27.841z"
                        ></path>
                      </svg>
                    </div>
                    <div class="related-stories-item">
                      <div class="wrapper-content">
                        <a href="https://www.holaislascanarias.com/experiencias/una-copa-de-vino-muy-cerca-del-cielo/">
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
                                    {" "}
                                    <img
                                      src={otherImage5}
                                      width="560"
                                      height="582"
                                      alt="Vinos que tocan el cielo"
                                      typeof="foaf:Image"
                                    />
                                  </div>
                                </div>
                              </article>
                            </div>
                          </div>

                          <div class="story-texts">
                            <div class="island-selected">
                              <div class="visually-hidden">Islas</div>
                              <div>
                                <p>Tenerife</p>
                              </div>
                            </div>

                            <div class="motivation-selected">
                              <div class="visually-hidden">
                                Motivación Principal
                              </div>
                              <p>Gastronomía</p>
                            </div>

                            <div class="s-item-title">
                              <div class="visually-hidden">Titular</div>
                              <h3 data-clamp-always="3" class="clamp-on">
                                Una copa de vino muy cerca del cielo
                              </h3>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </article>
                  <article
                    role="article"
                    about="https://www.holaislascanarias.com/experiencias/el-hierro-la-isla-sostenible/"
                    class="art"
                  >
                    <div class="fav-container" data-nid="5017">
                      <span class="ic-favourite"></span>
                      <svg
                        version="1.1"
                        class="hearts hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 31.181 89.321"
                      >
                        <path
                          class="heart1a"
                          fill="#010101"
                          d="M24.059,71.838c-2.053-2.053-5.381-2.053-7.434,0c-0.002,0-0.002,0-0.002,0l-1.014,1.014
				l-1.013-1.014c-2.054-2.053-5.382-2.053-7.436,0c-2.053,2.054-2.053,5.384,0,7.438l1.014,1.012l7.435,7.436l7.435-7.436l1.014-1.012
				c2.054-2.054,2.054-5.382,0.001-7.436C24.061,71.84,24.06,71.84,24.059,71.838z"
                        ></path>
                        <path
                          class="heart1b"
                          fill="#010101"
                          d="M24.059,71.838c-2.053-2.053-5.381-2.053-7.434,0c-0.002,0-0.002,0-0.002,0l-1.014,1.014
				l-1.013-1.014c-2.054-2.053-5.382-2.053-7.436,0c-2.053,2.054-2.053,5.384,0,7.438l1.014,1.012l7.435,7.436l7.435-7.436l1.014-1.012
				c2.054-2.054,2.054-5.382,0.001-7.436C24.061,71.84,24.06,71.84,24.059,71.838z"
                        ></path>
                        <path
                          class="heart2"
                          fill="#010101"
                          d="M18.343,45.734c-2.485-1.5-5.716-0.703-7.217,1.782c-0.002,0.001-0.002,0.001-0.002,0.001
				l-0.741,1.228l-1.228-0.741c-2.487-1.5-5.718-0.702-7.218,1.783c-1.501,2.486-0.703,5.719,1.784,7.221l1.227,0.739l9.001,5.435
				l5.435-9.001l0.742-1.226c1.5-2.487,0.703-5.718-1.782-7.219C18.344,45.735,18.343,45.735,18.343,45.734z"
                        ></path>
                        <path
                          class="heart3"
                          fill="#010101"
                          d="M30,27.841c-1.371-2.559-4.556-3.522-7.115-2.152c-0.002,0-0.002,0-0.002,0l-1.264,0.677
				l-0.677-1.264c-1.373-2.56-4.559-3.523-7.117-2.152c-2.561,1.372-3.524,4.559-2.153,7.12l0.677,1.262l4.965,9.27l9.269-4.965
				l1.264-0.675c2.56-1.372,3.524-4.558,2.153-7.118C30,27.843,30,27.843,30,27.841z"
                        ></path>
                      </svg>
                    </div>
                    <div class="related-stories-item">
                      <div class="wrapper-content">
                        <a href="https://www.holaislascanarias.com/experiencias/el-hierro-la-isla-sostenible/">
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
                                    {" "}
                                    <img
                                      src={otherImage6}
                                      width="560"
                                      height="582"
                                      alt="El Hierro la isla sostenible"
                                      typeof="foaf:Image"
                                    />
                                  </div>
                                </div>
                              </article>
                            </div>
                          </div>

                          <div class="story-texts">
                            <div class="island-selected">
                              <div class="visually-hidden">Islas</div>
                              <div>
                                <p>El Hierro</p>
                              </div>
                            </div>

                            <div class="motivation-selected">
                              <div class="visually-hidden">
                                Motivación Principal
                              </div>
                              <p>Naturaleza</p>
                            </div>

                            <div class="s-item-title">
                              <div class="visually-hidden">Titular</div>
                              <h3 data-clamp-always="3" class="clamp-on">
                                El Hierro, la isla sostenible{" "}
                              </h3>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                <div class="button">
                  <a
                    class="link-button"
                    href="/experiencias/"
                    styles="border-color: #FFC600;background-color: #FFC600;color: #002132;"
                    target="_self"
                  >
                    Ver más artículos
                  </a>
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
