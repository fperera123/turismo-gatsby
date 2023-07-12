import React, { useEffect } from 'react'
import { Link } from '@/components'
import { navigate } from 'gatsby';
import { useLocation } from '@reach/router';
import Content from "@/sections/slices/contentStyles"
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

import logoES_DarkMenu_0 from '../../assets/clone/logoES_DarkMenu_0.png';
import logoES_Hover_0_0 from '../../assets/clone/logoES_Hover_0_0.png';
import logoES_DarkMenu_0_0 from '../../assets/clone/logoES_DarkMenu_0_0.png';

import Poster_Gastronomía from '../../assets/clone/Poster-Gastronomía.jpg';
import listado_dulces_la_palma from '../../assets/clone/listado-dulces-la-palma.jpg';
import Gastronomía_Ensalada_de_la_huerta from '../../assets/clone/Gastronomía-Ensalada-de-la-huerta.jpg';
import Gastronomía_Bienmesabe from '../../assets/clone/Gastronomía-Bienmesabe.jpg';
import al_horno from '../../assets/clone/Gastronomía-Vieja-al-horno.jpg';
import gastronomia_conejera from '../../assets/clone/listado-gastronomia-conejera.jpg';
import queso_canario from '../../assets/clone/listado-amantes-del-queso-canario.jpg';
import Guachinche_gomero from '../../assets/clone/Guachinche-gomero.jpg';
import banner_recursos_restaurantes_dt from '../../assets/clone/banner-recursos-restaurantes-dt.jpg';
import Gastronomía_La_Geria from '../../assets/clone/Gastronomía-La-Geria.jpg';

import otherImage1 from '../../assets/clone/img1.jpg'
import otherImage2 from '../../assets/clone/img2.png'
import otherImage3 from '../../assets/clone/img3.jpg'
import otherImage4 from '../../assets/clone/img4.jpg'
import otherImage5 from '../../assets/clone/img5.jpg'
import otherImage6 from '../../assets/clone/img6.jpg'
import otherImage7 from '../../assets/clone/img7.jpg'
import otherImage8 from '../../assets/clone/img8.jpg'
import otherImage9 from '../../assets/clone/img9.jpg'
import otherImage10 from '../../assets/clone/img10.jpg'

import footerImage1 from '../../assets/clone/bono-la-palma-desktop-footer.jpg';
import footerImage2 from '../../assets/clone/la-vuelta-al-mundo-en-8-islas-dk.jpg';

import facebookIcon from '../../assets/clone/facebook-icon.png';
import facebookIconHover from '../../assets/clone/facebook-icon-hover.png';

import instagramIcon from '../../assets/clone/instagram-icon.png'
import instagramIconHover from '../../assets/clone/instagram-icon-hover.png'

import twitterIcon from '../../assets/clone/twitter-icon.png'
import twitterIconHover from '../../assets/clone/twitter-icon-hover.png'

import youtubeIcon from '../../assets/clone/youtube-icon.png'
import youtubeIconHover from '../../assets/clone/youtube-icon-hover.png'

import footerImage3 from '../../assets/clone/logo-next-generation-ES-desktop.png';
import footerImage4 from '../../assets/clone/logo-ministerio-resiliencia-desktop.png';
import footerImage5 from '../../assets/clone/logo-turismo-islas-canarias.png';
import footerImage6 from '../../assets/clone/logo-gobierno-canarias-desktop.png';

import GASTRO_SAUZAL_140420 from '../../assets/clone/26_GASTRO_SAUZAL_140420.mp4';
import ROQUENUBLO_210120_loop from '../../assets/clone/20_ROQUENUBLO_210120_loop.mp4';

export default function NewPage() {

    const title = 'Strategy'
    const titleHtmlTag = 'h3';
    return (
        <>
            <div class="page-content">
                <header role="banner" class="">
                    <div class="dark region region-header">
                        <div class="opener-menu-block block block-" id="block-opener-menu" styles="display: block;">


                            <div id="menu_mobile_opener" class="menu_mobile_opener no-favourites"></div>

                        </div>
                        <div id="block-hicheaderlogo" class="block block-hic-header block-hic-header-logo">


                            <a href="https://www.holaislascanarias.com/" title="Start" className='w-full block'>
                                <div class="logo_image">
                                    <img class="logo_front" src={logoES_DarkMenu_0} alt="" title="Hello Canary Islands logo" typeof="foaf:Image" />
                                    <img class="logo_hover" src={logoES_Hover_0_0} alt="" typeof="foaf:Image" />
                                    <img class="logo_sticky" src={logoES_DarkMenu_0} alt="" typeof="foaf:Image" />
                                </div>
                            </a>
                        </div>


                        <div class="hic-search-engine-block-form block block-search container-inline mobile-closed" data-drupal-selector="hic-search-engine-block-form" id="block-hicsearchengineblockform">


                            <div class="search-block">
                                <div class="search-block-elements-wrapper">
                                    <form action="https://www.holaislascanarias.com/resultados-de-la-busqueda" method="get" id="hic-search-engine-block-form" accept-charset="UTF-8">
                                        <div class="js-form-item form-item js-form-type-search form-type-search js-form-item-search form-item-search form-no-label">
                                            <label for="edit-search" class="visually-hidden">Buscar</label>
                                            <input title="Escriba lo que quiere buscar." id="search-text" autocomplete="off" data-drupal-selector="edit-search" type="search" name="search" value="" size="15" maxlength="128" class="form-search" />

                                        </div>
                                        <div data-drupal-selector="edit-actions" class="form-actions js-form-wrapper form-wrapper" id="edit-actions"><input data-drupal-selector="edit-submit" type="submit" id="edit-submit" value="Buscar" class="button js-form-submit form-submit" />
                                        </div>

                                    </form>

                                </div>
                                <span class="mobile-search-trigger closed"></span>
                            </div>
                        </div>
                        <nav role="navigation" aria-labelledby="block-hic-front-theme-main-menu-menu" id="block-hic-front-theme-main-menu" class="block block-menu navigation menu--main">

                            <span class="visually-hidden" id="block-hic-front-theme-main-menu-menu">Navegación principal</span>



                            <ul class="menu">
                                <li class="menu-item menu-item--expanded">
                                    <span>Islas</span>
                                    <ul class="menu" styles="left: -67.375px;">
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/experiencias/las-islas-canarias-te-esperan/" data-drupal-link-system-path="node/41">Islas Canarias</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/tenerife/" data-drupal-link-system-path="node/184">Tenerife</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/gran-canaria/" data-drupal-link-system-path="node/185">Gran Canaria</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/lanzarote/" data-drupal-link-system-path="node/186">Lanzarote</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.visitfuerteventura.com/" target="_blank">Fuerteventura</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/la-palma/" data-drupal-link-system-path="node/189">La Palma</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://lagomera.travel/" target="_blank">La Gomera</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/el-hierro/" data-drupal-link-system-path="node/191">El Hierro</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/la-graciosa/" data-drupal-link-system-path="node/192">La Graciosa</a>
                                        </li>
                                    </ul>

                                </li>
                                <li class="menu-item menu-item--expanded menu-item--active-trail">
                                    <span>Descubre</span>
                                    <ul class="menu" styles="left: -51.1719px;">
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/experiencias/" data-drupal-link-system-path="node/82">Todos los artículos</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/costa-y-playa/" data-drupal-link-system-path="node/19">Costa y Playa</a>
                                        </li>
                                        <li class="menu-item menu-item--active-trail">
                                            <a href="https://www.holaislascanarias.com/gastronomia-canaria/" data-drupal-link-system-path="node/21" class="is-active">Gastronomia</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/naturaleza-en-estado-puro/" data-drupal-link-system-path="node/22">Naturaleza</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/patrimonio-y-cultura-de-las-islas-canarias/" data-drupal-link-system-path="node/34990">Cultura</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/cruceros-en-las-islas-canarias/" data-drupal-link-system-path="node/20">Cruceros</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/turismo-activo-en-las-islas-canarias/" data-drupal-link-system-path="node/23">Turismo activo</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/entrenamiento-deportivo-profesional/" data-drupal-link-system-path="node/32008">Entrenamiento deportivo</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/las-islas-canarias-para-toda-la-familia/" data-drupal-link-system-path="node/21937">Turismo en familia</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/teletrabajar-desde-las-islas-canarias/" data-drupal-link-system-path="node/10708">Teletrabajo</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/turismo-LGTBI/" data-drupal-link-system-path="node/11362">LGTBI</a>
                                        </li>
                                    </ul>

                                </li>
                                <li class="menu-item menu-item--expanded two-cols-submenu">
                                    <span class="two-column-menu">Planifica</span>
                                    <ul class="menu" styles="left: -184.539px;">
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/playas/" data-drupal-link-system-path="node/4912">Playas</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/espacios-naturales/" data-drupal-link-system-path="node/4951">Espacios naturales</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/piscinas-naturales/" data-drupal-link-system-path="node/5005">Piscinas naturales</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/senderos/" data-drupal-link-system-path="node/4987">Senderos</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/miradores/" data-drupal-link-system-path="node/4915">Miradores</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/avistamiento-de-ballenas-y-delfines/" data-drupal-link-system-path="node/4948">Avistamiento de ballenas y delfines</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/lugares-con-encanto/" data-drupal-link-system-path="node/4930">Lugares con encanto</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/observacion-de-estrellas/" data-drupal-link-system-path="node/4945">Observación de estrellas</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/centros-de-ocio/" data-drupal-link-system-path="node/4990">Centros de ocio</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/puntos-de-inmersion/" data-drupal-link-system-path="node/4972">Puntos de inmersión</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/museos-y-visitas-de-interes/" data-drupal-link-system-path="node/4927">Museos y visitas de interés</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/surf/" data-drupal-link-system-path="node/4975">Surf</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/localidades-turisticas/" data-drupal-link-system-path="node/4933">Localidades turísticas</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/windsurf/" data-drupal-link-system-path="node/4978">Windsurf</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/puertos-y-marinas/" data-drupal-link-system-path="node/4936">Puertos y marinas</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/bodyboard/" data-drupal-link-system-path="node/4984">Bodyboard</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/compras/" data-drupal-link-system-path="node/4924">Compras</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/kitesurf/" data-drupal-link-system-path="node/4981">Kitesurf</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/campos-de-golf/" data-drupal-link-system-path="node/4939">Campos de Golf</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/escalada/" data-drupal-link-system-path="node/4957">Escalada</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/rutas-para-cruceristas/" data-drupal-link-system-path="node/9601">Rutas para cruceristas</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/trail-running/" data-drupal-link-system-path="node/4963">Trail</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/rutas-en-coche/" data-drupal-link-system-path="node/5008">Rutas en coche</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/orientacion-en-las-islas-canarias/" data-drupal-link-system-path="node/4954">Orientación</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/bodegas-y-queserias/" data-drupal-link-system-path="node/4942">Bodegas y queserías</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/parapente/" data-drupal-link-system-path="node/4966">Parapente</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/spa/" data-drupal-link-system-path="node/4921">Spas</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/mountain-bike/" data-drupal-link-system-path="node/4969">Mountain Bike</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/rutas-de-ciclismo/" data-drupal-link-system-path="node/4960">Rutas de ciclismo</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/planificador/" target="_self" data-drupal-link-system-path="node/97">Planificador</a>
                                        </li>
                                    </ul>

                                </li>
                                <li class="menu-item menu-item--expanded">
                                    <a href="https://www.holaislascanarias.com/informacion-practica/" class="useful-info" data-drupal-link-system-path="node/5506">Información práctica</a>
                                    <ul class="menu" styles="left: -15.383px;">
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/el-archipielago/" data-drupal-link-system-path="node/5497">El archipiélago</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/el-tiempo-en-las-islas/" data-drupal-link-system-path="node/5503">El tiempo en las islas</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/alojamientos/" data-drupal-link-system-path="node/4993">Dónde dormir</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/restaurantes/" data-drupal-link-system-path="node/4918">Dónde comer</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/viajar-con-mascotas/" data-drupal-link-system-path="node/4999">Mascotas</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/agenda/" data-drupal-link-system-path="node/94">Agenda</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/viajar-a-las-islas-canarias/" data-drupal-link-system-path="node/5515">Cómo llegar</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/viajar-entre-islas/" data-drupal-link-system-path="node/5500">Viajar entre islas</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/moverse-dentro-de-la-isla/" data-drupal-link-system-path="node/9952">Moverse dentro de la isla</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/un-destino-turistico-accesible/" data-drupal-link-system-path="node/865">Accesibilidad</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/directorio-de-servicios/" data-drupal-link-system-path="node/104">Directorio de servicios</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/finaliza-la-erupcion-en-la-isla-de-la-palma/" target="_self" data-drupal-link-system-path="node/27013">Erupción en La Palma</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/un-bano-seguro/" data-drupal-link-system-path="node/33169">Consejos para un baño seguro</a>
                                        </li>
                                    </ul>

                                </li>
                            </ul>



                        </nav>
                        <div id="block-hicheaderfavouriteblock" class="block block-hic-favourites block-hic-header-favourite-block">





                            <div class="header-favourite-block no-favourites">
                                <div class="heart-favourites-mov">
                                    <a href="https://www.holaislascanarias.com/favoritos"> <span class="favourite-icon-container-mov"></span>
                                    </a>
                                </div>
                                <div class="heart-favourites"></div>
                                <div class="wrapper-menu hidden">
                                    <div class="menu-container">
                                        <ul>
                                            <li data-show-on-favourites="false">No ha seleccionado favoritos</li>
                                            <li data-show-on-favourites="true" class="fav-true" styles="display: none;"><a href="https://www.holaislascanarias.com/favoritos"> Consulta tus favoritos <span class="favourite-icon-container"></span>
                                            </a></li>
                                            <li data-show-on-favourites="true" class="pdf-icon" styles="display: none;"><a href="https://www.holaislascanarias.com/hic_favourites/pdf_form" class="use-ajax" data-dialog-type="modal" data-dialog-options="{&quot;width&quot;:893,&quot;closeText&quot;:&quot;&quot;,&quot;dialogClass&quot;:&quot;modal-pdf&quot;}">Descargar como PDF</a>
                                            </li>
                                            <li data-show-on-favourites="true" class="dwlMbl-icon" styles="display: none;"><a href="https://www.holaislascanarias.com/favourites/download" class="use-ajax" data-dialog-type="modal" data-dialog-options="{&quot;width&quot;:893,&quot;closeText&quot;:&quot;&quot;,&quot;dialogClass&quot;:&quot;modal-qr&quot;}">Enviar al móvil</a>
                                            </li> 				<li class="planifier-link"><a href="https://www.holaislascanarias.com/planificador/">Pruebe el planificador</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </header>

                <div class="region region-primary-menu">
                    <div id="block-hic-common-header" class="block block-">
                        <div id="header_hic" class="header dark height-big">
                            <div id="video_dynamic" class="background_video dktH-center dktV-middle" data-video_dynamic="true" data-customizationexists="1" data-nid="21" data-videoid="video_21_desktop" data-typedinamic="video_local">

                                <article class="media media--type-video-local media--view-mode-banner-video-local">

                                    <div class="local-video-desktop" data-video-width="1920" data-video-height="1080">

                                        <div class="field field--name-field-media-video-file field--type-file field--label-visually_hidden">
                                            <div class="field__label visually-hidden">Fichero de vídeo</div>
                                            <div class="field__item">
                                                <video autoplay="autoplay" loop="loop" muted="muted" width="1920" height="1080" class="js-plyr" playsinline="playsinline" styles="width: auto; height: 116.019%;">
                                                    <source src={GASTRO_SAUZAL_140420} type="video/mp4" />
                                                </video>

                                            </div>
                                        </div>

                                    </div>


                                </article>

                            </div>
                            <div class="background_video_mov mblH-center mblV-middle" data-video_dynamic="true" data-nid="21" data-videoid="video_21_mobile" data-typedinamic="video_local">
                            </div>

                            <div class="content hor-align-center-ml ver-align-down-ml
						 subtitle-down">

                                <div class="titles">
                                    <h1 class="title font-width-bold large text-white">
                                        Gastronomía canaria
                                    </h1>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                <div class="layout-content">
                    <div class="region region-content">
                        <div
                            id="block-hic-front-theme-content"
                            class="block block-system block-system-main-block"
                        >

                            <article
                                role="article"
                                about="https://www.holaislascanarias.com/gastronomia-canaria/"
                                class="node node--type-motivation-distribution node--view-mode-full"
                            >

                                <div class="node__content">

                                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="300" data-aos-once="true" class="layout hic_layout_one_02 fullwitdh num-col--1 wrapper-layout wow fadeIn" data-valign1="valigntop" id="section--Px-iuDEBP1I" data-wow-duration="0.1s" styles="visibility: visible; animation-duration: 0.1s; animation-name: fadeIn;">
                                        <div class="row-wrapper">
                                            <div class="row one-02">
                                                <div class="column"></div>
                                                <div class="column valigntop">

                                                    <div id="me-title-eda79666-cd51-4be7-ae04-a0e417be7349" class="block block-layout-builder block-inline-blockme-title left line-down medium text-black">



                                                        <p class="field field--name-field-me-t-title field--type-string-long field--label-hidden field__item">La cocina canaria se caracteriza por el mestizaje, la fusión de elementos y un pronunciado contraste de sabores, fruto de unos productos e ingredientes de gran calidad. Después de pasar un largo día en la playa, recorrer sus espacios naturales o dar un agradable paseo por sus atractivas localidades, no hay nada mejor que disfrutar de las delicias de la gastronomía de las islas. Para los canarios, la comida es parte de su identidad, de vital importancia en su cultura y en su día a día y, por eso, es fácil encontrar buenos sitios donde comer.</p>


                                                    </div>

                                                </div>
                                                <div class="column"></div>
                                            </div>
                                        </div>
                                    </div>

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
                                                                    <div class="field__label visually-hidden">Título</div>
                                                                    <div class="field__item">Además se come bien</div>
                                                                </div>

                                                            </div>

                                                            <div class="field field--name-field-me-v-remote-video field--type-entity-reference field--label-visually_hidden">
                                                                <div class="field__label visually-hidden">Vídeo</div>
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

                                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="300" data-aos-once="true" class="layout hic_layout_two_03 boxed num-col--2 wrapper-layout wow fadeIn" data-valign1="valigntop" data-valign2="valigntop" id="section--f0LFUAH0lZ0" data-wow-duration="0.1s" styles="visibility: visible; animation-duration: 0.1s; animation-name: fadeIn;">
                                        <div class="row-wrapper">
                                            <div class="row two-03">
                                                <div class="column valigntop">

                                                    <div id="me-paragraph-930548ac-24eb-422a-9e14-ebdcfff0419e" class="block block-layout-builder block-inline-blockme-paragraph no-capitol-letter no text-black" styles="color: #000000;">


                                                        <div class="p-wrapper">
                                                            <div class="p-content">

                                                                <div class="clearfix text-formatted field field--name-field-me-p-content field--type-text-long field--label-visually_hidden">
                                                                    <div class="field__label visually-hidden">Contenido</div>
                                                                    <div class="field__item"><h2 class="tit-izquierda">Sabores con denominación de origen</h2>

                                                                        <p>El origen volcánico de las islas, sus temperaturas suaves y la mimada elaboración artesanal hacen que muchos de los productos estrella de su gastronomía se encuentren bajo Denominación de Origen Protegida (D.O.P). Entre ellos, destacan sus excelentes vinos volcánicos y quesos como el majorero, de Fuerteventura, el palmero o el de Flor de Guía, elaborado en Gran Canaria. Todos de excelente sabor y reconocidos mundialmente.&nbsp;</p>

                                                                        <p>Las magníficas condiciones climáticas del archipiélago canario son perfectas para el cultivo de frutas y hortalizas, protagonistas en la mayoría de los platos locales, y también protegidas por denominaciones de origen. Un claro ejemplo son las papas antiguas canarias, entre las que destaca la apreciada papa negra. Además, el suave clima canario permite cultivar muchas frutas exóticas, como la papaya, el mango, la piña, el aguacate y, por supuesto, el popular plátano de Canarias. El único tipo de plátano que ha conseguido el reconocimiento europeo como Indicación Geográfica Protegida (IGP).</p></div>
                                                                </div>

                                                            </div>
                                                            <div class="boxshadow"></div>
                                                        </div>
                                                    </div>
                                                    <div id="md-itemlist-2df03873-d794-40d9-8157-7f5f4f4f5904" class="block block-layout-builder block-inline-blockmd-itemlist" data-dynamic="true" data-uuid="b884014a-8738-41db-aa64-eb334379a403"><div id="bloc_num_items" data-num_items="1"></div><div class="align-left"><a href="/experiencias/una-guia-para-golosos-en-la-palma/" class="link-element wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="0.2s" styles="visibility: visible; animation-duration: 0.2s; animation-delay: 0.5s; animation-name: fadeInUp;"><div class="shadow"><div class="element"><article role="article" about="https://www.holaislascanarias.com/experiencias/una-guia-para-golosos-en-la-palma/" class="art"><div><div class="field_h_images"><div class="field field--name-field-h-image-gallery field--type-entity-reference field--label-visually_hidden"><div class="field__label visually-hidden">Imagen Listado</div><div class="field__item"><article class="media media--type-list-image media--view-mode-header-thumbnail"><div class="field field--name-field-media-image field--type-image field--label-visually_hidden"><div class="field__label visually-hidden">Imagen</div><div class="field__item">
                                                        <img src={listado_dulces_la_palma} width="1040" height="1080" alt="Rapadura La Palma" typeof="foaf:Image" />
                                                    </div></div></article></div></div></div><div class="field_others"><div class="field_t_main_motivation"><p>
                                                        Gastronomía
                                                    </p></div><div class="field_h_title"><h2 class="clamp-on" data-clamp-desktop="2" data-clamp-mobile="0">
                                                        Una guía para golosos en La Palma
                                                    </h2></div><div class="field_h_subtitle"><p class="clamp-on" data-clamp-desktop="3" data-clamp-mobile="0">
                                                        Fruto del mestizaje cultural y gastronómico.
                                                    </p></div></div></div></article></div></div></a></div></div>
                                                </div>
                                                <div class="column"></div>
                                                <div class="column valigntop">

                                                    <div id="me-imagen-335a04fa-b7d4-43ab-b44d-23212d0e7f28" class="block block-layout-builder block-inline-blockme-imagen footer-down-left full text-black" styles="color: #000000;">


                                                        <div class="">


                                                            <div class="field field--name-field-me-i-image field--type-entity-reference field--label-visually_hidden">
                                                                <div class="field__label visually-hidden">Imagen</div>
                                                                <div class="field__item"><article class="media media--type-imagenes-bloques media--view-mode-me-image">

                                                                    <div class="me-im-desktop-image">

                                                                        <div class="field field--name-field-media-image field--type-image field--label-visually_hidden">
                                                                            <div class="field__label visually-hidden">Imagen Escritorio 16:9</div>
                                                                            <div class="field__item">  <img width="820" height="785" alt="Ensalada de la huerta" loading="lazy" class="image-style-image-paragraph-desktop lazyloaded" typeof="foaf:Image" src={Gastronomía_Ensalada_de_la_huerta} />


                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                    <div class="me-im-mobile-image">

                                                                        <div class="field field--name-field-media-image field--type-image field--label-visually_hidden">
                                                                            <div class="field__label visually-hidden">Imagen Escritorio 16:9</div>
                                                                            <div class="field__item">  <img width="820" height="785" alt="Ensalada de la huerta" loading="lazy" class="image-style-image-paragraph-desktop lazyloaded" typeof="foaf:Image" src={Gastronomía_Ensalada_de_la_huerta} />


                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                    <div class="field field--name-field-ib-footer field--type-string field--label-visually_hidden">
                                                                        <div class="field__label visually-hidden">
                                                                            Pie de foto
                                                                        </div>
                                                                        <div class="field__item toClamp not-clamped inline-block">Ensalada de la huerta<span class="foo url-type-clamped" styles="display: inline;"><span></span></span></div>

                                                                    </div>

                                                                </article>
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>
                                                    <div id="md-canary-fact-64a8c5a3-2811-4814-a02a-3a26df09cdf4" class="block block-layout-builder block-inline-blockmd-canary-fact align-right text-black" data-dynamic="true" data-uuid="8802bd5d-0547-4004-b3e2-d3a34e90c1d6" styles="color: #000000;">
                                                        <div id="bloc_num_items" data-num_items="1"></div><article role="article" about="https://www.holaislascanarias.com/node/225" class="node node--type-canary-fact"><div class="node__content"><div class="title-canaryfact"><div class="visually-hidden">
                                                            Titular
                                                        </div><p>
                                                                El majorero de Fuerteventura fue el primer queso de cabra de España en obtener la Denominación de Origen Protegida.
                                                            </p></div></div></article><p class="canary-fact-suffix">
                                                            Curiosidad canaria
                                                        </p></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="300" data-aos-once="true" class="layout hic_layout_one_01 fullwitdh num-col--1 wrapper-layout wow fadeIn" data-valign1="valigntop" id="section--ZZq-PmVkhrQ" data-wow-duration="0.1s" styles="visibility: visible; animation-duration: 0.1s; animation-name: fadeIn;">
                                        <div class="row-wrapper">
                                            <div class="row one-01">
                                                <div class="column"></div>
                                                <div class="column valigntop">


                                                    <div id="me-image-paragraph-78df2c7a-dca6-4d4a-8616-999d4e251513" class="block block-layout-builder block-inline-blockme-image-paragraph no-capitol-letter up text-black" styles="color: #000000;">


                                                        <div class="">

                                                            <div class="field field--name-field-me-ip-images field--type-entity-reference field--label-visually_hidden">
                                                                <div class="field__label visually-hidden">Imagen</div>
                                                                <div class="field__item"><article class="media media--type-imagenes-bloques media--view-mode-image-paragraph">


                                                                    <div class="me-im-desktop-image">

                                                                        <div class="field field--name-field-media-image field--type-image field--label-hidden field__item">  <img width="1500" height="684" alt="Bienmesabe" loading="lazy" class="image-style-image-paragraph-desktop lazyloaded" typeof="foaf:Image" src={Gastronomía_Bienmesabe} />


                                                                        </div>

                                                                    </div>
                                                                    <div class="me-im-mobile-image">

                                                                        <div class="field field--name-field-media-image field--type-image field--label-hidden field__item">  <img width="1500" height="684" alt="Bienmesabe" loading="lazy" class="image-style-image-paragraph-desktop lazyloaded" typeof="foaf:Image" src={Gastronomía_Bienmesabe} />


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
                                                                    <div class="field__item"><h2 class="tit-izquierda">Recetas locales</h2>

                                                                        <p>Son muy diversas las culturas que han dejado su huella en las islas. Y eso ha dado como resultado grandes sabores y contrastes que se pueden apreciarse en la mayoría de sus platos típicos, como las apetecibles papas arrugadas con mojo picón. Otro de los productos estrella de las Islas Canarias, presente también en muchas recetas, es el gofio. Elaborado a base de cereales tostados, como el maíz y el trigo, proviene de la época de los primeros pobladores.</p>

                                                                        <p>En la gastronomía canaria predomina el uso de las verduras locales, como sucede con el potaje de berros, las piñas de millo con papas y costillas o los bubangos rellenos, una variedad autóctona de calabacín. Otro producto ‘top’ en las recetas de las islas es el pescado, sobre todo en las elaboradas con especies autóctonas como la vieja, de delicado sabor, el cherne, el mero o el jurel. También existe una amplia variedad de postres y dulces típicos, irresistibles para los más golosos. Los deliciosos bienmesabe y príncipe Alberto, de La Palma, la leche asada gomera, el quesillo, el frangollo o las quesadillas herreñas.<br />
                                                                            &nbsp;</p></div>
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                                <div class="column"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="300" data-aos-once="true" class="layout hic_layout_one_00 boxed num-col--1 wrapper-layout wow fadeIn" data-valign1="valigntop" id="section--4Q9AuKy-j50" data-wow-duration="0.1s" styles="visibility: visible; animation-duration: 0.1s; animation-name: fadeIn;">
                                        <div class="row-wrapper">
                                            <div class="row one-00">
                                                <div class="column valigntop">





                                                    <div id="me-imagen-9ef7ad8a-32c1-4083-8bcc-8d917e6b9b47" class="block block-layout-builder block-inline-blockme-imagen footer-down-left full text-black" styles="color: #000000;">


                                                        <div class="">


                                                            <div class="field field--name-field-me-i-image field--type-entity-reference field--label-visually_hidden">
                                                                <div class="field__label visually-hidden">Imagen</div>
                                                                <div class="field__item"><article class="media media--type-imagenes-bloques media--view-mode-me-image">

                                                                    <div class="me-im-desktop-image">

                                                                        <div class="field field--name-field-media-image field--type-image field--label-visually_hidden">
                                                                            <div class="field__label visually-hidden">Imagen Escritorio 16:9</div>
                                                                            <div class="field__item">  <img width="1334" height="684" alt="Vieja al horno" loading="lazy" class="image-style-image-paragraph-desktop lazyloaded" typeof="foaf:Image" src={al_horno} />


                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                    <div class="me-im-mobile-image">

                                                                        <div class="field field--name-field-media-image field--type-image field--label-visually_hidden">
                                                                            <div class="field__label visually-hidden">Imagen Escritorio 16:9</div>
                                                                            <div class="field__item">  <img width="1334" height="684" alt="Vieja al horno" loading="lazy" class="image-style-image-paragraph-desktop lazyloaded" typeof="foaf:Image" src={al_horno} />


                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                    <div class="field field--name-field-ib-footer field--type-string field--label-visually_hidden">
                                                                        <div class="field__label visually-hidden">
                                                                            Pie de foto
                                                                        </div>
                                                                        <div class="field__item toClamp not-clamped">Vieja al horno<span class="foo url-type-clamped block" styles="display: inline;"><span></span></span></div>

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

                                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="300" data-aos-once="true" class="layout hic_layout_one_03 boxed num-col--1 wrapper-layout wow fadeIn" data-valign1="valigntop" id="section--lHWt90Q7KEI" data-wow-duration="0.1s" styles="visibility: visible; animation-duration: 0.1s; animation-name: fadeIn;">
                                        <div class="row-wrapper">
                                            <div class="row one-03">
                                                <div class="column"></div>
                                                <div class="column valigntop">
                                                    <div id="md-itemlist-eeae2c8b-6af5-40b8-898f-39375b2e30e0" class="block block-layout-builder block-inline-blockmd-itemlist" data-dynamic="true" data-uuid="986c1165-27f1-475f-8719-de6b4da0318b"><div id="bloc_num_items" data-num_items="2"></div><div class="align-left"><a href="/experiencias/un-paseo-por-la-nueva-gastronomia-conejera/" class="link-element wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="0.2s" styles="visibility: visible; animation-duration: 0.2s; animation-delay: 0.5s; animation-name: fadeInUp;"><div class="shadow"><div class="element"><article role="article" about="https://www.holaislascanarias.com/experiencias/un-paseo-por-la-nueva-gastronomia-conejera/" class="art"><div><div class="field_h_images"><div class="field field--name-field-h-image-gallery field--type-entity-reference field--label-visually_hidden"><div class="field__label visually-hidden">Imagen Listado</div><div class="field__item"><article class="media media--type-list-image media--view-mode-header-thumbnail"><div class="field field--name-field-media-image field--type-image field--label-visually_hidden"><div class="field__label visually-hidden">Imagen</div><div class="field__item">
                                                        <img src={gastronomia_conejera} width="560" height="582" alt="Lapas" typeof="foaf:Image" /></div></div></article></div></div></div><div class="field_others"><div class="field_t_main_motivation"><p>
                                                            Gastronomía
                                                        </p></div><div class="field_h_title"><h2 class="clamp-on" data-clamp-desktop="2" data-clamp-mobile="0">
                                                            Un paseo por la nueva gastronomía conejera
                                                        </h2></div><div class="field_h_subtitle"><p class="clamp-on" data-clamp-desktop="3" data-clamp-mobile="0">
                                                            La cultura y el patrimonio están presentes en platos sorprendentes y originales
                                                        </p></div></div></div></article></div></div></a><a href="/experiencias/en-fuerteventura-hay-un-museo-para-los-amantes-del-queso/" class="link-element wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="0.2s" styles="visibility: visible; animation-duration: 0.2s; animation-delay: 0.5s; animation-name: fadeInUp;"><div class="shadow"><div class="element"><article role="article" about="https://www.holaislascanarias.com/experiencias/en-fuerteventura-hay-un-museo-para-los-amantes-del-queso/" class="art"><div><div class="field_h_images"><div class="field field--name-field-h-image-gallery field--type-entity-reference field--label-visually_hidden"><div class="field__label visually-hidden">Imagen Listado</div><div class="field__item"><article class="media media--type-list-image media--view-mode-header-thumbnail"><div class="field field--name-field-media-image field--type-image field--label-visually_hidden"><div class="field__label visually-hidden">Imagen</div><div class="field__item">
                                                            <img src={queso_canario} width="560" height="582" alt="Quesos Canarios" typeof="foaf:Image" /></div></div></article></div></div></div><div class="field_others"><div class="field_t_main_motivation"><p>
                                                                Gastronomía
                                                            </p></div><div class="field_h_title"><h2 class="clamp-on" data-clamp-desktop="2" data-clamp-mobile="0">
                                                                En Fuerteventura hay un museo para los amantes d...</h2></div><div class="field_h_subtitle"><p class="clamp-on" data-clamp-desktop="3" data-clamp-mobile="0">
                                                                    Fuerteventura destaca también por su gastronomía y por uno de sus productos estrella: el queso de cabra.
                                                                </p></div></div></div></article></div></div></a></div></div>
                                                </div>
                                                <div class="column"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="300" data-aos-once="true" class="layout hic_layout_two_03 boxed num-col--2 wrapper-layout wow fadeIn" data-valign1="valigntop" data-valign2="valigntop" id="section--7HJsrSWxndQ" data-wow-duration="0.1s" styles="visibility: visible; animation-duration: 0.1s; animation-name: fadeIn;">
                                        <div class="row-wrapper">
                                            <div class="row two-03">
                                                <div class="column valigntop">

                                                    <div id="me-paragraph-d5f29d3f-d5ef-41c2-8b08-ff53618abde4" class="block block-layout-builder block-inline-blockme-paragraph no-capitol-letter no text-black" styles="color: #000000;">


                                                        <div class="p-wrapper">
                                                            <div class="p-content">

                                                                <div class="clearfix text-formatted field field--name-field-me-p-content field--type-text-long field--label-visually_hidden">
                                                                    <div class="field__label visually-hidden">Contenido</div>
                                                                    <div class="field__item"><h2 class="tit-izquierda">Restaurantes y guachinches</h2>

                                                                        <p>En las Islas Canarias hay una gran diversidad de locales en los que disfrutar de los mejores platos de la gastronomía local. Desde chiringuitos a pie de playa en los que degustar lo mejor del mar, a restaurantes con estrella Michelin donde descubrir nuevos y sofisticados sabores.&nbsp;</p>

                                                                        <p>Y, por supuesto, no hay que olvidar esos rincones con un encanto especial donde se saborea la cocina típica más tradicional: los guachinches, pequeños restaurantes improvisados en patios y garajes, habituales sobre todo en Tenerife, donde se comen platos caseros acompañados de vino de la tierra en un ambiente acogedor y familiar. Un lugar en el que sentarse a la mesa y sentirse como un isleño más mientras se saborea un buen puchero canario, un cabrito asado, un plato de conejo en salmorejo o de garbanzas compuestas.</p></div>
                                                                </div>

                                                            </div>
                                                            <div class="boxshadow"></div>
                                                        </div>
                                                    </div>
                                                    <div id="md-canary-fact-e39b218c-8a49-4876-93eb-70384d03c935" class="block block-layout-builder block-inline-blockmd-canary-fact align-left text-black" data-dynamic="true" data-uuid="36dcf21f-4773-4115-bbf0-02dae50e09b7" styles="color: #000000;
"><div id="bloc_num_items" data-num_items="1"></div><article role="article" about="https://www.holaislascanarias.com/node/251" class="node node--type-canary-fact"><div class="node__content"><div class="title-canaryfact"><div class="visually-hidden">
                                                            Titular
                                                        </div><p>
                                                                Las Islas Canarias cuentan con siete restaurantes reconocidos con estrellas Michelin
                                                            </p></div></div></article><p class="canary-fact-suffix">
                                                            Curiosidad canaria
                                                        </p></div>
                                                </div>
                                                <div class="column"></div>
                                                <div class="column valigntop">





                                                    <div id="me-imagen-9b40dde4-dc8a-41e4-8d16-9fbaa558a43b" class="block block-layout-builder block-inline-blockme-imagen footer-down-left full text-black" styles="color: #000000;">


                                                        <div class="">


                                                            <div class="field field--name-field-me-i-image field--type-entity-reference field--label-visually_hidden">
                                                                <div class="field__label visually-hidden">Imagen</div>
                                                                <div class="field__item"><article class="media media--type-imagenes-bloques media--view-mode-me-image">

                                                                    <div class="me-im-desktop-image">

                                                                        <div class="field field--name-field-media-image field--type-image field--label-visually_hidden">
                                                                            <div class="field__label visually-hidden">Imagen Escritorio 16:9</div>
                                                                            <div class="field__item">  <img width="567" height="610" alt="Guachinche gomero" loading="lazy" class="image-style-image-paragraph-desktop lazyloaded" typeof="foaf:Image" src={Guachinche_gomero} />


                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                    <div class="me-im-mobile-image">

                                                                        <div class="field field--name-field-media-image field--type-image field--label-visually_hidden">
                                                                            <div class="field__label visually-hidden">Imagen Escritorio 16:9</div>
                                                                            <div class="field__item">  <img width="567" height="610" alt="Guachinche gomero" loading="lazy" class="image-style-image-paragraph-desktop lazyloaded" typeof="foaf:Image" src={Guachinche_gomero} />


                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                    <div class="field field--name-field-ib-footer field--type-string field--label-visually_hidden">
                                                                        <div class="field__label visually-hidden">
                                                                            Pie de foto
                                                                        </div>
                                                                        <div class="field__item toClamp not-clamped">Guachinche<span class="foo url-type-clamped inline-block" styles="display: inline;"><span></span></span></div>

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

                                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="300" data-aos-once="true" class="layout hic_layout_one_01 fullwitdh num-col--1 wrapper-layout wow fadeIn" data-valign1="valigntop" id="section--8SL1QKBvnis" data-wow-duration="0.1s" styles="visibility: visible; animation-duration: 0.1s; animation-name: fadeIn;">
                                        <div class="row-wrapper">
                                            <div class="row one-01">
                                                <div class="column"></div>
                                                <div class="column valigntop">


                                                    <div id="me-banner-44cd6ea5-c1c3-4b36-be10-0ef6507cb3d3" class="block block-layout-builder block-inline-blockme-banner text-align-center wow fadeIn bg-white text-white" styles="background-color: rgb(255, 255, 255); color: rgb(255, 255, 255); visibility: visible; animation-duration: 1s; animation-delay: 0s; animation-name: fadeIn;" data-wow-delay="0.0s" data-wow-duration="1s">


                                                        <div class="wrapper-content   w-image"><div class="me-banner-wrapper">


                                                            <div class="title-banner">
                                                                <div class="visually-hidden">Título</div>
                                                                <p data-clamp-always="3" class="clamp-on">Lugares para saborear las Islas Canarias</p>
                                                            </div>
                                                            <div class="wrapper-button">
                                                                <a class="link-button bg-[#FFC600] border-[#FFC600] text-[#002132]" styles="border-color: #FFC600;background-color: #FFC600;color: #002132;" target="_self" href="https://www.holaislascanarias.com/restaurantes/">
                                                                    <div class="field field--name-field-me-b-text-button field--type-string field--label-visually_hidden">
                                                                        <div class="field__label visually-hidden">Texto Botón</div>
                                                                        <div class="field__item">Encuentra restaurante</div>
                                                                    </div>
                                                                    <span class="mini-arrow"></span></a>
                                                            </div></div>
                                                            <div class="field field--name-field-me-b-image field--type-entity-reference field--label-visually_hidden horizontal-img">
                                                                <div class="field__label visually-hidden">Imagen</div>
                                                                <div class="field__item"><article class="media media--type-imagenes-bloques media--view-mode-image-paragraph">


                                                                    <div class="me-im-desktop-image">

                                                                        <div class="field field--name-field-media-image field--type-image field--label-hidden field__item">  <img width="1200" height="722" alt="Banner restaurantes en las Islas Canarias." loading="lazy" class="image-style-image-paragraph-desktop lazyloaded" typeof="foaf:Image" src={banner_recursos_restaurantes_dt} styles="min-height: 530.047px; height: 589.633px; width: auto;" />


                                                                        </div>

                                                                    </div>
                                                                    <div class="me-im-mobile-image">

                                                                        <div class="field field--name-field-ib-mobile-image field--type-image field--label-hidden field__item">  <img width="552" height="501" alt="Banner restaurantes en las Islas Canarias." loading="lazy" class="image-style-image-paragraph-mobile lazyloaded" typeof="foaf:Image" src={banner_recursos_restaurantes_dt} styles="min-height: 530.047px;" />


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

                                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="300" data-aos-once="true" class="layout hic_layout_one_01 fullwitdh num-col--1 wrapper-layout wow fadeIn" data-valign1="valigntop" id="section--JB8AWV5ZaOs" data-wow-duration="0.1s" styles="visibility: visible; animation-duration: 0.1s; animation-name: fadeIn;">
                                        <div class="row-wrapper">
                                            <div class="row one-01">
                                                <div class="column"></div>
                                                <div class="column valigntop">

                                                    <div id="me-image-paragraph-e71add52-97ea-44f3-9b1f-69e8d180fdcd" class="block block-layout-builder block-inline-blockme-image-paragraph no-capitol-letter down text-black" styles="color: #000000;">


                                                        <div class="ip-wrapper">
                                                            <div class="ip-content">

                                                                <div class="clearfix text-formatted field field--name-field-me-ip-content field--type-text-long field--label-visually_hidden">
                                                                    <div class="field__label visually-hidden">Contenido</div>
                                                                    <div class="field__item"><h2 class="tit-izquierda">Enogastronomía</h2>

                                                                        <p><span><span>Tintos, blancos, rosados. Con mucho cuerpo, afrutados o muy aromáticos… Hablar del vino en Canarias es hablar de arraigo y amor por la tierra. La producción vinícola de las islas no solo es variada sino de una enorme calidad, algo que se refleja en las diez Denominaciones de Origen con las que cuenta el archipiélago -cinco de ellas en la isla de Tenerife- y en los numerosos galardones que suman cada año.</span></span></p>

                                                                        <p><span><span>Entre los vinos de las islas destacan los volcánicos. De compleja elaboración y cada vez más apreciados por los expertos de todo el mundo, son ácidos y afrutados al paladar. Entre ellos, son especialmente singulares los vinos de La Geria, en Lanzarote, una zona de cultivo única en el mundo donde las vides crecen sobre un manto de pequeños fragmentos de roca volcánica que retienen la humedad, una singularidad que, junto a otras, aporta a estos magníficos caldos una inconfundible gama de matices.</span></span></p></div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="">

                                                            <div class="field field--name-field-me-ip-images field--type-entity-reference field--label-visually_hidden">
                                                                <div class="field__label visually-hidden">Imagen</div>
                                                                <div class="field__item"><article class="media media--type-imagenes-bloques media--view-mode-image-paragraph">


                                                                    <div class="me-im-desktop-image">

                                                                        <div class="field field--name-field-media-image field--type-image field--label-hidden field__item">  <img width="1500" height="534" alt="La Geria" loading="lazy" class="image-style-image-paragraph-desktop lazyloaded" typeof="foaf:Image" src={Gastronomía_La_Geria} />


                                                                        </div>

                                                                    </div>
                                                                    <div class="me-im-mobile-image">

                                                                        <div class="field field--name-field-media-image field--type-image field--label-hidden field__item">  <img width="1500" height="534" alt="La Geria" loading="lazy" class="image-style-image-paragraph-desktop lazyloaded" typeof="foaf:Image" src={Gastronomía_La_Geria} />


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

                                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="300" data-aos-once="true" class="layout hic_layout_one_02 fullwitdh num-col--1 wrapper-layout wow fadeIn" data-valign1="valigntop" id="section--fbalGr12Ks0" data-wow-duration="0.1s" styles="visibility: visible; animation-duration: 0.1s; animation-name: fadeIn;">
                                        <div class="row-wrapper">
                                            <div class="row one-02">
                                                <div class="column"></div>
                                                <div class="column valigntop">





                                                    <div id="md-related-stories-a777eb8a-d8cb-4c4c-ae01-e04189d4e1a3" class="block block-layout-builder block-inline-blockmd-related-stories subtitle-motivation" data-dynamic="true" data-uuid="b17a916c-1772-4ae9-b37e-5e525e19b9f3">



                                                        <div id="bloc_num_items" data-num_items="6"></div>


                                                        <div>
                                                            <div class="visually-hidden">Título</div>
                                                            <h2>Te puede interesar</h2>
                                                        </div>

                                                        <div class="articles-wrapper items-6"><article role="article" about="https://www.holaislascanarias.com/experiencias/10-cosas-que-hacer-en-la-graciosa/" class="art">



                                                            <div class="fav-container" data-nid="709">
                                                                <span class="ic-favourite"></span>
                                                                <svg version="1.1" class="hearts hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.181 89.321">
                                                                    <path class="heart1a" fill="#010101" d="M24.059,71.838c-2.053-2.053-5.381-2.053-7.434,0c-0.002,0-0.002,0-0.002,0l-1.014,1.014
				l-1.013-1.014c-2.054-2.053-5.382-2.053-7.436,0c-2.053,2.054-2.053,5.384,0,7.438l1.014,1.012l7.435,7.436l7.435-7.436l1.014-1.012
				c2.054-2.054,2.054-5.382,0.001-7.436C24.061,71.84,24.06,71.84,24.059,71.838z"></path>
                                                                    <path class="heart1b" fill="#010101" d="M24.059,71.838c-2.053-2.053-5.381-2.053-7.434,0c-0.002,0-0.002,0-0.002,0l-1.014,1.014
				l-1.013-1.014c-2.054-2.053-5.382-2.053-7.436,0c-2.053,2.054-2.053,5.384,0,7.438l1.014,1.012l7.435,7.436l7.435-7.436l1.014-1.012
				c2.054-2.054,2.054-5.382,0.001-7.436C24.061,71.84,24.06,71.84,24.059,71.838z"></path>
                                                                    <path class="heart2" fill="#010101" d="M18.343,45.734c-2.485-1.5-5.716-0.703-7.217,1.782c-0.002,0.001-0.002,0.001-0.002,0.001
				l-0.741,1.228l-1.228-0.741c-2.487-1.5-5.718-0.702-7.218,1.783c-1.501,2.486-0.703,5.719,1.784,7.221l1.227,0.739l9.001,5.435
				l5.435-9.001l0.742-1.226c1.5-2.487,0.703-5.718-1.782-7.219C18.344,45.735,18.343,45.735,18.343,45.734z"></path>
                                                                    <path class="heart3" fill="#010101" d="M30,27.841c-1.371-2.559-4.556-3.522-7.115-2.152c-0.002,0-0.002,0-0.002,0l-1.264,0.677
				l-0.677-1.264c-1.373-2.56-4.559-3.523-7.117-2.152c-2.561,1.372-3.524,4.559-2.153,7.12l0.677,1.262l4.965,9.27l9.269-4.965
				l1.264-0.675c2.56-1.372,3.524-4.558,2.153-7.118C30,27.843,30,27.843,30,27.841z"></path>
                                                                </svg>
                                                            </div>
                                                            <div class="related-stories-item">
                                                                <div class="wrapper-content">
                                                                    <a href="https://www.holaislascanarias.com/experiencias/10-cosas-que-hacer-en-la-graciosa/">
                                                                        <div class="field field--name-field-h-image-gallery field--type-entity-reference field--label-visually_hidden">
                                                                            <div class="field__label visually-hidden">Imagen Listado</div>
                                                                            <div class="field__item"><article class="media media--type-list-image media--view-mode-header-thumbnail">


                                                                                <div class="field field--name-field-media-image field--type-image field--label-visually_hidden">
                                                                                    <div class="field__label visually-hidden">Imagen</div>
                                                                                    <div class="field__item">  <img src={otherImage1} width="560" height="582" alt="La Graciosa" typeof="foaf:Image" />

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
                                                                                <div class="visually-hidden">Motivación Principal</div>
                                                                                <p>Costa y playa</p>
                                                                            </div>


                                                                            <div class="s-item-title">
                                                                                <div class="visually-hidden">Titular</div>
                                                                                <h3 data-clamp-always="3" class="clamp-on">10 cosas que hacer en La Graciosa</h3>
                                                                            </div>

                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </article>
                                                            <article role="article" about="https://www.holaislascanarias.com/experiencias/es-tendencia-pasar-el-invierno-en-las-islas-canarias/" class="art">



                                                                <div class="fav-container" data-nid="625183">
                                                                    <span class="ic-favourite"></span>
                                                                    <svg version="1.1" class="hearts hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.181 89.321">
                                                                        <path class="heart1a" fill="#010101" d="M24.059,71.838c-2.053-2.053-5.381-2.053-7.434,0c-0.002,0-0.002,0-0.002,0l-1.014,1.014
				l-1.013-1.014c-2.054-2.053-5.382-2.053-7.436,0c-2.053,2.054-2.053,5.384,0,7.438l1.014,1.012l7.435,7.436l7.435-7.436l1.014-1.012
				c2.054-2.054,2.054-5.382,0.001-7.436C24.061,71.84,24.06,71.84,24.059,71.838z"></path>
                                                                        <path class="heart1b" fill="#010101" d="M24.059,71.838c-2.053-2.053-5.381-2.053-7.434,0c-0.002,0-0.002,0-0.002,0l-1.014,1.014
				l-1.013-1.014c-2.054-2.053-5.382-2.053-7.436,0c-2.053,2.054-2.053,5.384,0,7.438l1.014,1.012l7.435,7.436l7.435-7.436l1.014-1.012
				c2.054-2.054,2.054-5.382,0.001-7.436C24.061,71.84,24.06,71.84,24.059,71.838z"></path>
                                                                        <path class="heart2" fill="#010101" d="M18.343,45.734c-2.485-1.5-5.716-0.703-7.217,1.782c-0.002,0.001-0.002,0.001-0.002,0.001
				l-0.741,1.228l-1.228-0.741c-2.487-1.5-5.718-0.702-7.218,1.783c-1.501,2.486-0.703,5.719,1.784,7.221l1.227,0.739l9.001,5.435
				l5.435-9.001l0.742-1.226c1.5-2.487,0.703-5.718-1.782-7.219C18.344,45.735,18.343,45.735,18.343,45.734z"></path>
                                                                        <path class="heart3" fill="#010101" d="M30,27.841c-1.371-2.559-4.556-3.522-7.115-2.152c-0.002,0-0.002,0-0.002,0l-1.264,0.677
				l-0.677-1.264c-1.373-2.56-4.559-3.523-7.117-2.152c-2.561,1.372-3.524,4.559-2.153,7.12l0.677,1.262l4.965,9.27l9.269-4.965
				l1.264-0.675c2.56-1.372,3.524-4.558,2.153-7.118C30,27.843,30,27.843,30,27.841z"></path>
                                                                    </svg>
                                                                </div>
                                                                <div class="related-stories-item">
                                                                    <div class="wrapper-content">
                                                                        <a href="https://www.holaislascanarias.com/experiencias/es-tendencia-pasar-el-invierno-en-las-islas-canarias/">
                                                                            <div class="field field--name-field-h-image-gallery field--type-entity-reference field--label-visually_hidden">
                                                                                <div class="field__label visually-hidden">Imagen Listado</div>
                                                                                <div class="field__item"><article class="media media--type-list-image media--view-mode-header-thumbnail">


                                                                                    <div class="field field--name-field-media-image field--type-image field--label-visually_hidden">
                                                                                        <div class="field__label visually-hidden">Imagen</div>
                                                                                        <div class="field__item">  <img src={otherImage2} width="560" height="582" alt="puesta sol silver" typeof="foaf:Image" />

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
                                                                                    <div class="visually-hidden">Motivación Principal</div>
                                                                                    <p>Costa y playa</p>
                                                                                </div>


                                                                                <div class="s-item-title">
                                                                                    <div class="visually-hidden">Titular</div>
                                                                                    <h3 data-clamp-always="3" class="clamp-on">Es tendencia: pasar el invierno en las Islas Ca...</h3>
                                                                                </div>

                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </article>
                                                            <article role="article" about="https://www.holaislascanarias.com/experiencias/10-cosas-que-hacer-en-lanzarote/" class="art">



                                                                <div class="fav-container" data-nid="5023">
                                                                    <span class="ic-favourite"></span>
                                                                    <svg version="1.1" class="hearts hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.181 89.321">
                                                                        <path class="heart1a" fill="#010101" d="M24.059,71.838c-2.053-2.053-5.381-2.053-7.434,0c-0.002,0-0.002,0-0.002,0l-1.014,1.014
				l-1.013-1.014c-2.054-2.053-5.382-2.053-7.436,0c-2.053,2.054-2.053,5.384,0,7.438l1.014,1.012l7.435,7.436l7.435-7.436l1.014-1.012
				c2.054-2.054,2.054-5.382,0.001-7.436C24.061,71.84,24.06,71.84,24.059,71.838z"></path>
                                                                        <path class="heart1b" fill="#010101" d="M24.059,71.838c-2.053-2.053-5.381-2.053-7.434,0c-0.002,0-0.002,0-0.002,0l-1.014,1.014
				l-1.013-1.014c-2.054-2.053-5.382-2.053-7.436,0c-2.053,2.054-2.053,5.384,0,7.438l1.014,1.012l7.435,7.436l7.435-7.436l1.014-1.012
				c2.054-2.054,2.054-5.382,0.001-7.436C24.061,71.84,24.06,71.84,24.059,71.838z"></path>
                                                                        <path class="heart2" fill="#010101" d="M18.343,45.734c-2.485-1.5-5.716-0.703-7.217,1.782c-0.002,0.001-0.002,0.001-0.002,0.001
				l-0.741,1.228l-1.228-0.741c-2.487-1.5-5.718-0.702-7.218,1.783c-1.501,2.486-0.703,5.719,1.784,7.221l1.227,0.739l9.001,5.435
				l5.435-9.001l0.742-1.226c1.5-2.487,0.703-5.718-1.782-7.219C18.344,45.735,18.343,45.735,18.343,45.734z"></path>
                                                                        <path class="heart3" fill="#010101" d="M30,27.841c-1.371-2.559-4.556-3.522-7.115-2.152c-0.002,0-0.002,0-0.002,0l-1.264,0.677
				l-0.677-1.264c-1.373-2.56-4.559-3.523-7.117-2.152c-2.561,1.372-3.524,4.559-2.153,7.12l0.677,1.262l4.965,9.27l9.269-4.965
				l1.264-0.675c2.56-1.372,3.524-4.558,2.153-7.118C30,27.843,30,27.843,30,27.841z"></path>
                                                                    </svg>
                                                                </div>
                                                                <div class="related-stories-item">
                                                                    <div class="wrapper-content">
                                                                        <a href="https://www.holaislascanarias.com/experiencias/10-cosas-que-hacer-en-lanzarote/">
                                                                            <div class="field field--name-field-h-image-gallery field--type-entity-reference field--label-visually_hidden">
                                                                                <div class="field__label visually-hidden">Imagen Listado</div>
                                                                                <div class="field__item"><article class="media media--type-list-image media--view-mode-header-thumbnail">


                                                                                    <div class="field field--name-field-media-image field--type-image field--label-visually_hidden">
                                                                                        <div class="field__label visually-hidden">Imagen</div>
                                                                                        <div class="field__item">  <img src={otherImage3} width="560" height="582" alt="La Geria" typeof="foaf:Image" />

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
                                                                                    <div class="visually-hidden">Motivación Principal</div>
                                                                                    <p>Costa y playa</p>
                                                                                </div>


                                                                                <div class="s-item-title">
                                                                                    <div class="visually-hidden">Titular</div>
                                                                                    <h3 data-clamp-always="3" class="clamp-on">10 cosas que hacer en Lanzarote</h3>
                                                                                </div>

                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </article>
                                                            <article role="article" about="https://www.holaislascanarias.com/experiencias/que-hacer-en-la-palma-con-ninos/" class="art">



                                                                <div class="fav-container" data-nid="5323">
                                                                    <span class="ic-favourite"></span>
                                                                    <svg version="1.1" class="hearts hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.181 89.321">
                                                                        <path class="heart1a" fill="#010101" d="M24.059,71.838c-2.053-2.053-5.381-2.053-7.434,0c-0.002,0-0.002,0-0.002,0l-1.014,1.014
				l-1.013-1.014c-2.054-2.053-5.382-2.053-7.436,0c-2.053,2.054-2.053,5.384,0,7.438l1.014,1.012l7.435,7.436l7.435-7.436l1.014-1.012
				c2.054-2.054,2.054-5.382,0.001-7.436C24.061,71.84,24.06,71.84,24.059,71.838z"></path>
                                                                        <path class="heart1b" fill="#010101" d="M24.059,71.838c-2.053-2.053-5.381-2.053-7.434,0c-0.002,0-0.002,0-0.002,0l-1.014,1.014
				l-1.013-1.014c-2.054-2.053-5.382-2.053-7.436,0c-2.053,2.054-2.053,5.384,0,7.438l1.014,1.012l7.435,7.436l7.435-7.436l1.014-1.012
				c2.054-2.054,2.054-5.382,0.001-7.436C24.061,71.84,24.06,71.84,24.059,71.838z"></path>
                                                                        <path class="heart2" fill="#010101" d="M18.343,45.734c-2.485-1.5-5.716-0.703-7.217,1.782c-0.002,0.001-0.002,0.001-0.002,0.001
				l-0.741,1.228l-1.228-0.741c-2.487-1.5-5.718-0.702-7.218,1.783c-1.501,2.486-0.703,5.719,1.784,7.221l1.227,0.739l9.001,5.435
				l5.435-9.001l0.742-1.226c1.5-2.487,0.703-5.718-1.782-7.219C18.344,45.735,18.343,45.735,18.343,45.734z"></path>
                                                                        <path class="heart3" fill="#010101" d="M30,27.841c-1.371-2.559-4.556-3.522-7.115-2.152c-0.002,0-0.002,0-0.002,0l-1.264,0.677
				l-0.677-1.264c-1.373-2.56-4.559-3.523-7.117-2.152c-2.561,1.372-3.524,4.559-2.153,7.12l0.677,1.262l4.965,9.27l9.269-4.965
				l1.264-0.675c2.56-1.372,3.524-4.558,2.153-7.118C30,27.843,30,27.843,30,27.841z"></path>
                                                                    </svg>
                                                                </div>
                                                                <div class="related-stories-item">
                                                                    <div class="wrapper-content">
                                                                        <a href="https://www.holaislascanarias.com/experiencias/que-hacer-en-la-palma-con-ninos/">
                                                                            <div class="field field--name-field-h-image-gallery field--type-entity-reference field--label-visually_hidden">
                                                                                <div class="field__label visually-hidden">Imagen Listado</div>
                                                                                <div class="field__item"><article class="media media--type-list-image media--view-mode-header-thumbnail">


                                                                                    <div class="field field--name-field-media-image field--type-image field--label-visually_hidden">
                                                                                        <div class="field__label visually-hidden">Imagen</div>
                                                                                        <div class="field__item">  <img src={otherImage4} width="560" height="582" alt="senderismo niños" typeof="foaf:Image" />

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
                                                                                    <div class="visually-hidden">Motivación Principal</div>
                                                                                    <p>Costa y playa</p>
                                                                                </div>


                                                                                <div class="s-item-title">
                                                                                    <div class="visually-hidden">Titular</div>
                                                                                    <h3 data-clamp-always="3" class="clamp-on">Qué hacer en La Palma con niños</h3>
                                                                                </div>

                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </article>
                                                            <article role="article" about="https://www.holaislascanarias.com/experiencias/una-copa-de-vino-muy-cerca-del-cielo/" class="art">



                                                                <div class="fav-container" data-nid="652">
                                                                    <span class="ic-favourite"></span>
                                                                    <svg version="1.1" class="hearts hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.181 89.321">
                                                                        <path class="heart1a" fill="#010101" d="M24.059,71.838c-2.053-2.053-5.381-2.053-7.434,0c-0.002,0-0.002,0-0.002,0l-1.014,1.014
				l-1.013-1.014c-2.054-2.053-5.382-2.053-7.436,0c-2.053,2.054-2.053,5.384,0,7.438l1.014,1.012l7.435,7.436l7.435-7.436l1.014-1.012
				c2.054-2.054,2.054-5.382,0.001-7.436C24.061,71.84,24.06,71.84,24.059,71.838z"></path>
                                                                        <path class="heart1b" fill="#010101" d="M24.059,71.838c-2.053-2.053-5.381-2.053-7.434,0c-0.002,0-0.002,0-0.002,0l-1.014,1.014
				l-1.013-1.014c-2.054-2.053-5.382-2.053-7.436,0c-2.053,2.054-2.053,5.384,0,7.438l1.014,1.012l7.435,7.436l7.435-7.436l1.014-1.012
				c2.054-2.054,2.054-5.382,0.001-7.436C24.061,71.84,24.06,71.84,24.059,71.838z"></path>
                                                                        <path class="heart2" fill="#010101" d="M18.343,45.734c-2.485-1.5-5.716-0.703-7.217,1.782c-0.002,0.001-0.002,0.001-0.002,0.001
				l-0.741,1.228l-1.228-0.741c-2.487-1.5-5.718-0.702-7.218,1.783c-1.501,2.486-0.703,5.719,1.784,7.221l1.227,0.739l9.001,5.435
				l5.435-9.001l0.742-1.226c1.5-2.487,0.703-5.718-1.782-7.219C18.344,45.735,18.343,45.735,18.343,45.734z"></path>
                                                                        <path class="heart3" fill="#010101" d="M30,27.841c-1.371-2.559-4.556-3.522-7.115-2.152c-0.002,0-0.002,0-0.002,0l-1.264,0.677
				l-0.677-1.264c-1.373-2.56-4.559-3.523-7.117-2.152c-2.561,1.372-3.524,4.559-2.153,7.12l0.677,1.262l4.965,9.27l9.269-4.965
				l1.264-0.675c2.56-1.372,3.524-4.558,2.153-7.118C30,27.843,30,27.843,30,27.841z"></path>
                                                                    </svg>
                                                                </div>
                                                                <div class="related-stories-item">
                                                                    <div class="wrapper-content">
                                                                        <a href="https://www.holaislascanarias.com/experiencias/una-copa-de-vino-muy-cerca-del-cielo/">
                                                                            <div class="field field--name-field-h-image-gallery field--type-entity-reference field--label-visually_hidden">
                                                                                <div class="field__label visually-hidden">Imagen Listado</div>
                                                                                <div class="field__item"><article class="media media--type-list-image media--view-mode-header-thumbnail">


                                                                                    <div class="field field--name-field-media-image field--type-image field--label-visually_hidden">
                                                                                        <div class="field__label visually-hidden">Imagen</div>
                                                                                        <div class="field__item">  <img src={otherImage5} width="560" height="582" alt="Vinos que tocan el cielo" typeof="foaf:Image" />

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
                                                                                    <div class="visually-hidden">Motivación Principal</div>
                                                                                    <p>Gastronomía</p>
                                                                                </div>


                                                                                <div class="s-item-title">
                                                                                    <div class="visually-hidden">Titular</div>
                                                                                    <h3 data-clamp-always="3" class="clamp-on">Una copa de vino muy cerca del cielo</h3>
                                                                                </div>

                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </article>
                                                            <article role="article" about="https://www.holaislascanarias.com/experiencias/el-hierro-la-isla-sostenible/" class="art">



                                                                <div class="fav-container" data-nid="5017">
                                                                    <span class="ic-favourite"></span>
                                                                    <svg version="1.1" class="hearts hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.181 89.321">
                                                                        <path class="heart1a" fill="#010101" d="M24.059,71.838c-2.053-2.053-5.381-2.053-7.434,0c-0.002,0-0.002,0-0.002,0l-1.014,1.014
				l-1.013-1.014c-2.054-2.053-5.382-2.053-7.436,0c-2.053,2.054-2.053,5.384,0,7.438l1.014,1.012l7.435,7.436l7.435-7.436l1.014-1.012
				c2.054-2.054,2.054-5.382,0.001-7.436C24.061,71.84,24.06,71.84,24.059,71.838z"></path>
                                                                        <path class="heart1b" fill="#010101" d="M24.059,71.838c-2.053-2.053-5.381-2.053-7.434,0c-0.002,0-0.002,0-0.002,0l-1.014,1.014
				l-1.013-1.014c-2.054-2.053-5.382-2.053-7.436,0c-2.053,2.054-2.053,5.384,0,7.438l1.014,1.012l7.435,7.436l7.435-7.436l1.014-1.012
				c2.054-2.054,2.054-5.382,0.001-7.436C24.061,71.84,24.06,71.84,24.059,71.838z"></path>
                                                                        <path class="heart2" fill="#010101" d="M18.343,45.734c-2.485-1.5-5.716-0.703-7.217,1.782c-0.002,0.001-0.002,0.001-0.002,0.001
				l-0.741,1.228l-1.228-0.741c-2.487-1.5-5.718-0.702-7.218,1.783c-1.501,2.486-0.703,5.719,1.784,7.221l1.227,0.739l9.001,5.435
				l5.435-9.001l0.742-1.226c1.5-2.487,0.703-5.718-1.782-7.219C18.344,45.735,18.343,45.735,18.343,45.734z"></path>
                                                                        <path class="heart3" fill="#010101" d="M30,27.841c-1.371-2.559-4.556-3.522-7.115-2.152c-0.002,0-0.002,0-0.002,0l-1.264,0.677
				l-0.677-1.264c-1.373-2.56-4.559-3.523-7.117-2.152c-2.561,1.372-3.524,4.559-2.153,7.12l0.677,1.262l4.965,9.27l9.269-4.965
				l1.264-0.675c2.56-1.372,3.524-4.558,2.153-7.118C30,27.843,30,27.843,30,27.841z"></path>
                                                                    </svg>
                                                                </div>
                                                                <div class="related-stories-item">
                                                                    <div class="wrapper-content">
                                                                        <a href="https://www.holaislascanarias.com/experiencias/el-hierro-la-isla-sostenible/">
                                                                            <div class="field field--name-field-h-image-gallery field--type-entity-reference field--label-visually_hidden">
                                                                                <div class="field__label visually-hidden">Imagen Listado</div>
                                                                                <div class="field__item"><article class="media media--type-list-image media--view-mode-header-thumbnail">


                                                                                    <div class="field field--name-field-media-image field--type-image field--label-visually_hidden">
                                                                                        <div class="field__label visually-hidden">Imagen</div>
                                                                                        <div class="field__item">  <img src={otherImage6} width="560" height="582" alt="El Hierro la isla sostenible" typeof="foaf:Image" />

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
                                                                                    <div class="visually-hidden">Motivación Principal</div>
                                                                                    <p>Naturaleza</p>
                                                                                </div>


                                                                                <div class="s-item-title">
                                                                                    <div class="visually-hidden">Titular</div>
                                                                                    <h3 data-clamp-always="3" class="clamp-on">El Hierro, la isla sostenible </h3>
                                                                                </div>

                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </article>
                                                        </div><div class="button">
                                                            <a class="link-button" href="/experiencias/" styles="border-color: #FFC600;background-color: #FFC600;color: #002132;" target="_self">Ver más artículos</a>
                                                        </div></div>
                                                </div>
                                                <div class="column"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="300" data-aos-once="true" class="layout hic_layout_two_03 boxed num-col--2 wrapper-layout wow fadeIn" data-valign1="valigntop" data-valign2="valigntop" id="section--s_-Ysf-e70k" data-wow-duration="0.1s" styles="visibility: visible; animation-duration: 0.1s; animation-name: fadeIn;">
                                        <div class="row-wrapper">
                                            <div class="row two-03">
                                                <div class="column valigntop">

                                                    <div id="me-paragraph-bff933bd-f9be-476e-a5c5-7d06728c722e" class="block block-layout-builder block-inline-blockme-paragraph no-capitol-letter no text-black" styles="color: #000000;">


                                                        <div class="p-wrapper">
                                                            <div class="p-content">

                                                                <div class="clearfix text-formatted field field--name-field-me-p-content field--type-text-long field--label-visually_hidden">
                                                                    <div class="field__label visually-hidden">Contenido</div>
                                                                    <div class="field__item"><h2 class="tit-izquierda">Naturaleza a tus pies</h2>

                                                                        <p>Las Islas Canarias nos ofrecen la oportunidad de disfrutar de unos paisajes impresionantes, repletos de contrastes, que nos permiten caminar por terrenos volcánicos, playas paradisiacas y bosques milenarios. Un archipiélago de posibilidades donde disfrutar de una red de rutas perfectamente trazadas, con recorridos balizados, cualificados y homologados para la práctica del senderismo.</p></div>
                                                                </div>

                                                            </div>
                                                            <div class="boxshadow"></div>
                                                        </div>
                                                    </div>
                                                    <div id="md-itemlist-942cdc26-b390-4d07-81ad-754bb7a0238f" class="block block-layout-builder block-inline-blockmd-itemlist" data-dynamic="true" data-uuid="e30085eb-ad1f-483c-bca2-dcd6a02091f9"><div id="bloc_num_items" data-num_items="1"></div><div class="align-left"><a href="/experiencias/senderos-de-las-islas-canarias/" class="link-element wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="0.2s" styles="visibility: visible; animation-duration: 0.2s; animation-delay: 0.5s; animation-name: fadeInUp;"><div class="shadow"><div class="element"><article role="article" about="https://www.holaislascanarias.com/experiencias/senderos-de-las-islas-canarias/" class="art"><div><div class="field_h_images"><div class="field field--name-field-h-image-gallery field--type-entity-reference field--label-visually_hidden"><div class="field__label visually-hidden">Imagen Listado</div><div class="field__item"><article class="media media--type-list-image media--view-mode-header-thumbnail"><div class="field field--name-field-media-image field--type-image field--label-visually_hidden"><div class="field__label visually-hidden">Imagen</div><div class="field__item">
                                                        <img src={otherImage7} width="560" height="582" alt="Senderos de las Islas Canarias" typeof="foaf:Image" />
                                                    </div></div></article></div></div></div><div class="field_others"><div class="field_t_main_motivation"><p>
                                                        Senderismo
                                                    </p></div><div class="field_h_title"><h2 class="clamp-on" data-clamp-desktop="2" data-clamp-mobile="0">
                                                        Senderos de las Islas Canarias
                                                    </h2></div><div class="field_h_subtitle"><p class="clamp-on" data-clamp-desktop="3" data-clamp-mobile="0">
                                                        Descubre los mejores senderos para disfrutar de los espectaculares paisajes naturales de las Islas Canarias
                                                    </p></div></div></div></article></div></div></a></div></div>
                                                </div>
                                                <div class="column"></div>
                                                <div class="column valigntop">





                                                    <div id="me-gallery-9a78314d-d9d7-4df0-9917-a1ebed2bcc91">





                                                        <div class="field field--name-field-me-g-images field--type-entity-reference field--label-visually_hidden">
                                                            <div class="field__label visually-hidden">Imágenes</div>
                                                            <div class="field field--name-field-me-g-images field--type-entity-reference field--label-visually_hidden field__items me-gallery me-gallery-grid dt-col-two mb-col-two zoom-on relative" styles="position: relative; height: 582.735px;">

                                                                <div class="gutter-sizer"></div>

                                                                <div class="field__item grid-item zoom-on" styles="position: absolute; left: 0%; top: 0px;">
                                                                    <article class="media media--type-imagenes-bloques media--view-mode-masonry-imagen" data-media-id="1792">

                                                                        <div class="me-im-desktop-image me-gallery-image-item">

                                                                            <a data-colorbox-inline=".colorbox-block-1792" data-colorbox-gallery="colorbox-group-desktop-0" class="cboxElement"><div class="field field--name-field-media-image field--type-image field--label-hidden field__item">
                                                                                <img src={otherImage8} width="1166" height="900" alt="Naturaleza-Galería 3" typeof="foaf:Image" class="image-style-masonry-image" />


                                                                            </div><div class="field field--name-field-ib-footer field--type-string field--label-hidden field__item">Bosque de Los Tilos, La Palma</div></a>




                                                                        </div>
                                                                        <div class="me-im-mobile-image me-gallery-image-item">

                                                                            <a data-colorbox-inline=".colorbox-block-1792" data-colorbox-gallery="colorbox-group-mobile-0" class="cboxElement"><div class="field field--name-field-media-image field--type-image field--label-hidden field__item">
                                                                                <img src={otherImage8} width="1166" height="900" alt="Naturaleza-Galería 3" typeof="foaf:Image" class="image-style-masonry-image" />


                                                                            </div><div class="field field--name-field-ib-footer field--type-string field--label-hidden field__item">Bosque de Los Tilos, La Palma</div></a>




                                                                        </div>
                                                                        <div class="visually-hidden">
                                                                            <div class="colorbox-block-1792">
                                                                                <div class="container-colorbox">
                                                                                    <div class="media-content">
                                                                                        <img src={otherImage8} width="1036" height="800" alt="Naturaleza-Galería 3" typeof="foaf:Image" class="image-style-colorbox-image" />



                                                                                    </div>
                                                                                    <div class="caption-content">

                                                                                        <div class="field field--name-field-ib-footer field--type-string field--label-hidden field__item">Bosque de Los Tilos, La Palma</div>

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </article>
                                                                </div>

                                                                <div class="field__item grid-item zoom-on" styles="position: absolute; left: 50%; top: 0px;">
                                                                    <article class="media media--type-imagenes-bloques media--view-mode-masonry-imagen" data-media-id="1789">

                                                                        <div class="me-im-desktop-image me-gallery-image-item">

                                                                            <a data-colorbox-inline=".colorbox-block-1789" data-colorbox-gallery="colorbox-group-desktop-0" class="cboxElement"><div class="field field--name-field-media-image field--type-image field--label-hidden field__item">
                                                                                <img src={otherImage9} width="615" height="900" alt="Naturaleza-Galería 2" typeof="foaf:Image" class="image-style-masonry-image" />


                                                                            </div><div class="field field--name-field-ib-footer field--type-string field--label-hidden field__item">Cumbres de Gran Canaria, Gran Canaria </div></a>




                                                                        </div>
                                                                        <div class="me-im-mobile-image me-gallery-image-item">

                                                                            <a data-colorbox-inline=".colorbox-block-1789" data-colorbox-gallery="colorbox-group-mobile-0" class="cboxElement"><div class="field field--name-field-media-image field--type-image field--label-hidden field__item">
                                                                                <img src={otherImage9} width="615" height="900" alt="Naturaleza-Galería 2" typeof="foaf:Image" class="image-style-masonry-image" />


                                                                            </div><div class="field field--name-field-ib-footer field--type-string field--label-hidden field__item">Cumbres de Gran Canaria, Gran Canaria </div></a>




                                                                        </div>
                                                                        <div class="visually-hidden">
                                                                            <div class="colorbox-block-1789">
                                                                                <div class="container-colorbox">
                                                                                    <div class="media-content">
                                                                                        <img src={otherImage9} width="546" height="800" alt="Naturaleza-Galería 2" typeof="foaf:Image" class="image-style-colorbox-image" />



                                                                                    </div>
                                                                                    <div class="caption-content">

                                                                                        <div class="field field--name-field-ib-footer field--type-string field--label-hidden field__item">Cumbres de Gran Canaria, Gran Canaria </div>

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </article>
                                                                </div>
                                                                <div class="field__item grid-item zoom-on" styles="position: absolute; left: 0%; top: 240.391px;">
                                                                    <article class="media media--type-imagenes-bloques media--view-mode-masonry-imagen" data-media-id="1786">

                                                                        <div class="me-im-desktop-image me-gallery-image-item">

                                                                            <a data-colorbox-inline=".colorbox-block-1786" data-colorbox-gallery="colorbox-group-desktop-0" class="cboxElement"><div class="field field--name-field-media-image field--type-image field--label-hidden field__item">
                                                                                <img src={otherImage10} width="783" height="900" alt="Naturaleza-Galería 1" typeof="foaf:Image" class="image-style-masonry-image" />


                                                                            </div><div class="field field--name-field-ib-footer field--type-string field--label-hidden field__item">Roque de Agando, La Gomera</div></a>




                                                                        </div>
                                                                        <div class="me-im-mobile-image me-gallery-image-item">

                                                                            <a data-colorbox-inline=".colorbox-block-1786" data-colorbox-gallery="colorbox-group-mobile-0" class="cboxElement"><div class="field field--name-field-media-image field--type-image field--label-hidden field__item">
                                                                                <img src={otherImage10} width="783" height="900" alt="Naturaleza-Galería 1" typeof="foaf:Image" class="image-style-masonry-image" />


                                                                            </div><div class="field field--name-field-ib-footer field--type-string field--label-hidden field__item">Roque de Agando, La Gomera</div></a>




                                                                        </div>
                                                                        <div class="visually-hidden">
                                                                            <div class="colorbox-block-1786">
                                                                                <div class="container-colorbox">
                                                                                    <div class="media-content">
                                                                                        <img src={otherImage10} width="696" height="800" alt="Naturaleza-Galería 1" typeof="foaf:Image" class="image-style-colorbox-image" />



                                                                                    </div>
                                                                                    <div class="caption-content">

                                                                                        <div class="field field--name-field-ib-footer field--type-string field--label-hidden field__item">Roque de Agando, La Gomera</div>

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </article>
                                                                </div>


                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div id="md-canary-fact-5766a9e6-a519-4991-9cc9-02a234773f69" class="block block-layout-builder block-inline-blockmd-canary-fact align-left text-black" data-dynamic="true" data-uuid="5d0cd412-1d05-4b52-bf5b-d16752d06b1b" styles="color: #000000;
"><div id="bloc_num_items" data-num_items="1"></div><article role="article" about="https://www.holaislascanarias.com/node/250" class="node node--type-canary-fact"><div class="node__content"><div class="title-canaryfact"><div class="visually-hidden">
                                                            Titular
                                                        </div><p>
                                                                La naturaleza de las Islas Canarias es excepcional: 146 espacios protegidos, incluidos sus cuatro Parques Nacionales, y tres Reservas Marinas, además de siete Reservas de la Biosfera.
                                                            </p></div></div></article><p class="canary-fact-suffix">
                                                            Curiosidad canaria
                                                        </p></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </article>
                        </div>

                    </div>
                </div>

                <footer role="contentinfo">
                    <div class="region region-secondary-menu">
                        <nav role="navigation" aria-labelledby="block-menufooter-menu" id="block-menufooter" class="block block-menu navigation menu--menu-footer">

                            <h3 class="visually-hidden" id="block-menufooter-menu">Menú Footer</h3>



                            <ul class="menu">
                                <li class="menu-item menu-item--expanded">
                                    <a href="https://www.holaislascanarias.com/experiencias/las-islas-canarias-te-esperan/" data-drupal-link-system-path="node/41">Islas Canarias</a>
                                    <ul class="menu">
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/tenerife/" title="Tenerife" data-drupal-link-system-path="node/184">Tenerife</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/gran-canaria/" data-drupal-link-system-path="node/185">Gran Canaria</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/lanzarote/" data-drupal-link-system-path="node/186">Lanzarote</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.visitfuerteventura.com/">Fuerteventura</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/la-palma/" data-drupal-link-system-path="node/189">La Palma</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/el-hierro/" data-drupal-link-system-path="node/191">El Hierro</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://lagomera.travel/" target="_blank">La Gomera</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/la-graciosa/" data-drupal-link-system-path="node/192">La Graciosa</a>
                                        </li>
                                    </ul>

                                </li>
                                <li class="menu-item menu-item--expanded menu-item--active-trail">
                                    <a href="https://www.holaislascanarias.com/experiencias/" data-drupal-link-system-path="node/82">Descubre</a>
                                    <ul class="menu">
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/bodas-en-las-islas-canarias/" data-drupal-link-system-path="node/18">Bodas</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/costa-y-playa/" data-drupal-link-system-path="node/19">Costa y playa</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/cruceros-en-las-islas-canarias/" data-drupal-link-system-path="node/20">Cruceros</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/patrimonio-y-cultura-de-las-islas-canarias/" data-drupal-link-system-path="node/34990">Cultura</a>
                                        </li>
                                        <li class="menu-item menu-item--active-trail">
                                            <a href="https://www.holaislascanarias.com/gastronomia-canaria/" data-drupal-link-system-path="node/21" class="is-active">Gastronomía</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/naturaleza-en-estado-puro/" data-drupal-link-system-path="node/22">Naturaleza</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/turismo-activo-en-las-islas-canarias/" data-drupal-link-system-path="node/23">Turismo activo</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/experiencias/" data-drupal-link-system-path="node/82">Todos los artículos</a>
                                        </li>
                                    </ul>

                                </li>
                                <li class="menu-item menu-item--expanded">
                                    <a href="https://www.holaislascanarias.com/informacion-practica/" data-drupal-link-system-path="node/5506">Información práctica</a>
                                    <ul class="menu">
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/agenda/" data-drupal-link-system-path="node/94">Agenda</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/el-tiempo-en-las-islas/" data-drupal-link-system-path="node/5503">Clima</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/viajar-a-las-islas-canarias/" data-drupal-link-system-path="node/5515">Cómo llegar</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/restaurantes/" data-drupal-link-system-path="node/4918">Dónde comer</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/alojamientos/" data-drupal-link-system-path="node/4993">Dónde dormir</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/el-archipielago/" data-drupal-link-system-path="node/5497">El archipiélago</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://www.holaislascanarias.com/directorio-de-servicios/" data-drupal-link-system-path="node/104">Servicios</a>
                                        </li>
                                    </ul>

                                </li>
                            </ul>



                        </nav>

                    </div>

                    <div class="region region-secondary-menu-second">
                        <div class="region-secundary-menu-second-div">

                            <div id="block-sugerencias" class="block block-block-content block-block-content332fa367-00c2-4e67-ab30-ad2aa28f5ace">
                                <hr />
                                <div>

                                    <div class="field field--name-field-me-b-title field--type-string field--label-hidden field__item">¿Has detectado información incorrecta?</div>

                                    <a href="https://www.holaislascanarias.com/contacto/" target="_blank">
                                        <div class="field field--name-field-me-b-text-button field--type-string field--label-hidden field__item">Sugerir cambio</div>
                                    </a>
                                </div>
                            </div>

                            <nav role="navigation" aria-labelledby="block-menuwebsitedelfooter-menu" id="block-menuwebsitedelfooter" class="block block-menu navigation menu--footer-website-menu">

                                <h3 class="visually-hidden" id="block-menuwebsitedelfooter-menu">Menú Website del Footer</h3>


                                <div class="title-footer-websites">
                                    Puede interesarte
                                </div>

                                <ul class="menu">
                                    <li class="menu-item active">
                                        <div class="footer_menu_title">
                                            <div class="wrapper-title">Bono Turístico La Palma</div>
                                            <span class="icon-arrow"></span>
                                        </div>
                                        <div class="footer_item_content">
                                            <div class="wrapper-item-content" styles="height: 177px;">
                                                <div class="footer_menu_img"><img src={footerImage1} alt="Bono Turístico La Palma" typeof="foaf:Image" />
                                                </div>
                                                <div class="footer_menu_img_mov"><img src={footerImage1} alt="Bono Turístico La Palma" typeof="foaf:Image" />
                                                </div>
                                                <div class="wrapper-text-link" styles="height: 103.344px;">
                                                    <div class="footer_menu_add_text">Descubre si has ganado uno de los bonos de 250 € para disfrutar de las diferentes opciones que te ofrece la isla.</div>
                                                    <a target="_blank" href="https://www.holaislascanarias.com/bono-turistico-la-palma/" title="Bono Turístico La Palma">Explora</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="menu-item no-active">
                                        <div class="footer_menu_title">
                                            <div class="wrapper-title">La vuelta al mundo en 8 islas</div>
                                            <span class="icon-arrow"></span>
                                        </div>
                                        <div class="footer_item_content">
                                            <div class="wrapper-item-content" styles="height: 177px;">
                                                <div class="footer_menu_img"><img src={footerImage2} alt="La vuelta al mundo en 8 islas" typeof="foaf:Image" />
                                                </div>
                                                <div class="footer_menu_img_mov"><img src={footerImage2} alt="La vuelta al mundo en 8 islas" typeof="foaf:Image" />
                                                </div>
                                                <div class="wrapper-text-link" styles="height: 103.344px;">
                                                    <div class="footer_menu_add_text">Playas, selva, volcanes, cascadas… Contempla todas las maravillas naturales del mundo en un mismo archipiélago.</div>
                                                    <a target="_blank" href="https://www.holaislascanarias.com/la-vuelta-al-mundo-en-8-islas/" title="La vuelta al mundo en 8 islas">Explora</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="menu-item no-active">
                                        <div class="footer_menu_title">
                                            <div class="wrapper-title">Islas que alargan la vida</div>
                                            <span class="icon-arrow"></span>
                                        </div>
                                        <div class="footer_item_content">
                                            <div class="wrapper-item-content" styles="height: 177px;">
                                                <div class="footer_menu_img"><img src={footerImage2} alt="Islas que alargan la vida" typeof="foaf:Image" />
                                                </div>
                                                <div class="footer_menu_img_mov"><img src={footerImage2} alt="Islas que alargan la vida" typeof="foaf:Image" />
                                                </div>
                                                <div class="wrapper-text-link" styles="height: 103.344px;">
                                                    <div class="footer_menu_add_text">Disfruta, sin prisas, de todas los atractivos, ventajas y comodidades de pasar largas estancias en el archipiélago.</div>
                                                    <a target="_blank" href="https://www.holaislascanarias.com/tu-tiempo-es-tuyo/" title="Islas que alargan la vida">Explora</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="menu-item no-active">
                                        <div class="footer_menu_title">
                                            <div class="wrapper-title">#AfterTeleWork canario</div>
                                            <span class="icon-arrow"></span>
                                        </div>
                                        <div class="footer_item_content">
                                            <div class="wrapper-item-content" styles="height: 177px;">
                                                <div class="footer_menu_img"><img src={footerImage2} alt="#AfterTeleWork canario" typeof="foaf:Image" />
                                                </div>
                                                <div class="footer_menu_img_mov"><img src={footerImage2} alt="#AfterTeleWork canario" typeof="foaf:Image" />
                                                </div>
                                                <div class="wrapper-text-link" styles="height: 103.344px;">
                                                    <div class="footer_menu_add_text">Lo mejor de teletrabajar desde las Islas Canarias empieza cuando apagas la pantalla. ¿Te apuntas a disfrutar?</div>
                                                    <a target="_blank" href="https://www.holaislascanarias.com/aftertelework/" title="#AfterTeleWork canario">Explora</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>



                            </nav>

                        </div>
                    </div>

                    <div class="region region-footer">
                        <div id="block-hicfooterlogo" class="block block-hic-footer block-hic-footer-logo">


                            <a href="https://www.holaislascanarias.com/"><div class="logo_image"><img class="logo_footer" src={logoES_DarkMenu_0} alt="" typeof="foaf:Image" />
                                <img class="logo_footer_hover" src={logoES_DarkMenu_0_0} alt="" typeof="foaf:Image" />
                            </div>
                            </a>
                        </div>
                        <nav role="navigation" aria-labelledby="block-menuredesfooter-menu" id="block-menuredesfooter" class="block block-menu navigation menu--footer-social-menu">

                            <h3 class="visually-hidden" id="block-menuredesfooter-menu">Menú Redes Footer</h3>


                            <ul class="menu">
                                <li class="menu-item">
                                    <a target="_blank" href="https://www.facebook.com/holaislascanarias/" title="Facebook">
                                        <div class="footer_icon_rrss">
                                            <img src={facebookIcon} alt="Facebook" typeof="foaf:Image" />

                                            <img src={facebookIconHover} alt="Facebook" typeof="foaf:Image" />

                                        </div>
                                    </a>

                                </li>
                                <li class="menu-item">
                                    <a target="_blank" href="https://www.instagram.com/islascanariasoficial/" title="Instagram">
                                        <div class="footer_icon_rrss">
                                            <img src={instagramIcon} alt="Instagram" typeof="foaf:Image" />

                                            <img src={instagramIconHover} alt="Instagram" typeof="foaf:Image" />

                                        </div>
                                    </a>

                                </li>
                                <li class="menu-item">
                                    <a target="_blank" href="https://twitter.com/Canarias_es" title="Twitter">
                                        <div class="footer_icon_rrss">
                                            <img src={twitterIcon} alt="Twitter" typeof="foaf:Image" />

                                            <img src={twitterIconHover} alt="Twitter" typeof="foaf:Image" />

                                        </div>
                                    </a>

                                </li>
                                <li class="menu-item">
                                    <a target="_blank" href="http://www.youtube.com/user/IslasCanariasOficial" title="Youtube">
                                        <div class="footer_icon_rrss">
                                            <img src={youtubeIcon} alt="Youtube" typeof="foaf:Image" />

                                            <img src={youtubeIconHover} alt="Youtube" typeof="foaf:Image" />

                                        </div>
                                    </a>

                                </li>
                            </ul>





                        </nav>

                        <nav role="navigation" aria-labelledby="block-menulegalfooter-menu" id="block-menulegalfooter" class="block block-menu navigation menu--menu-legal-footer">

                            <h3 class="visually-hidden" id="block-menulegalfooter-menu">Menú Legal Footer</h3>



                            <ul class="menu">
                                <li class="menu-item">
                                    <span>© Turismo de Canarias 2023</span>
                                </li>
                                <li class="menu-item">
                                    <a href="https://www.holaislascanarias.com/contacto/" data-drupal-link-system-path="node/828562">Contacto</a>
                                </li>
                                <li class="menu-item">
                                    <a href="https://www.holaislascanarias.com/informacion-legal/" data-drupal-link-system-path="node/100">Información legal</a>
                                </li>
                                <li class="menu-item">
                                    <a href="https://www.holaislascanarias.com/mapa-web/" data-drupal-link-system-path="node/152">Mapa web</a>
                                </li>
                                <li class="menu-item">
                                    <a href="https://www.holaislascanarias.com/politica-de-cookies/" target="_self" data-drupal-link-system-path="node/9922">Política de cookies</a>
                                </li>
                                <li class="menu-item">
                                    <a href="https://www.holaislascanarias.com/" data-drupal-link-system-path="<front>">Términos y condiciones</a>
                                </li>
                                <li class="reset-cookies-link-didomi menu-item">
                                    <a href="https://www.holaislascanarias.com/gastronomia-canaria/">Preferencias de Cookies</a>
                                </li>
                            </ul>



                        </nav>

                    </div>

                    <div class="region region-secondary-footer">
                        <nav role="navigation" aria-labelledby="block-menuinstitucionesfooter-menu" id="block-menuinstitucionesfooter" class="block block-menu navigation menu--menu-instituciones-footer">

                            <h3 class="visually-hidden" id="block-menuinstitucionesfooter-menu">Menú Instituciones Footer</h3>



                            <ul class="menu">
                                <li class="menu-item">
                                    <a target="_blank" href="https://next-generation-eu.europa.eu/index_es" title="Next Generation EU">
                                        <div class="footer_menu_img"><img src={footerImage3} alt="Next Generation EU" typeof="foaf:Image" />
                                        </div>
                                    </a>

                                </li>
                                <li class="menu-item">
                                    <a target="_blank" href="https://planderecuperacion.gob.es/" title="Plan de Recuperación Transformación y Resiliencia">
                                        <div class="footer_menu_img"><img src={footerImage4} alt="Ministerio de Industria Comercio y Turismo - Plan de Transformación, Recuperación y Resiliencia" typeof="foaf:Image" />
                                        </div>
                                    </a>

                                </li>
                                <li class="menu-item">
                                    <a target="_blank" href="https://turismodeislascanarias.com/" title="Turismo de Islas Canarias">
                                        <div class="footer_menu_img"><img src={footerImage4} alt="Turismo de Islas Canarias" typeof="foaf:Image" />
                                        </div>
                                    </a>

                                </li>
                                <li class="menu-item">
                                    <a target="_blank" href="https://www.gobiernodecanarias.org/principal/" title="Gobierno de Canarias">
                                        <div class="footer_menu_img"><img src={footerImage5} alt="Gobierno de Canarias" typeof="foaf:Image" />
                                        </div>
                                    </a>

                                </li>
                            </ul>



                        </nav>

                    </div>


                </footer>
            </div>
        </>
    )
}