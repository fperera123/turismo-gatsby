import React, { useState } from 'react'
import { Link } from '@/components'
import './../style.scss';
import { StaticImage as Img } from 'gatsby-plugin-image'
import { useLanguage } from '@/hooks/useLanguage';
import DropdownMenu from './DropdownMenu';

import logoES_DarkMenu_0 from './../../../assets/clone/logoES_DarkMenu_0.png';
import logoES_Hover_0_0 from './../../../assets/clone/logoES_Hover_0_0.png';
import logoES_DarkMenu_0_0 from './../../../assets/clone/logoES_DarkMenu_0_0.png';

const singleLinkItem = (item, languagePrefix) => {
    return <li key={item.id} class="menu-item menu-item--expanded">
        <Link to={`${languagePrefix}${item.to}`}>{item.title}</Link>
    </li>
}

export default function NavbarTwo({ direction, sections }) {

    const { languagePrefix, lang } = useLanguage();

    return (
        <>
            <header role="banner" class="">
                <div class="dark region region-header">

                    <div class="opener-menu-block block block-" id="block-opener-menu" styles="display: block;">
                        <div id="menu_mobile_opener" class="menu_mobile_opener no-favourites"></div>
                    </div>

                    <div id="block-hicheaderlogo" class="block block-hic-header block-hic-header-logo">
                        <a href="#" title="Start" className='w-full block'>
                            <div class="logo_image">
                                <img class="logo_front" src={logoES_DarkMenu_0} alt="" title="" typeof="foaf:Image" />
                                <img class="logo_hover" src={logoES_Hover_0_0} alt="" typeof="foaf:Image" />
                                <img class="logo_sticky" src={logoES_DarkMenu_0} alt="" typeof="foaf:Image" />
                            </div>
                        </a>
                    </div>


                    <div class="hic-search-engine-block-form block block-search container-inline mobile-closed" data-drupal-selector="hic-search-engine-block-form" id="block-hicsearchengineblockform">
                        <div class="search-block">
                            <div class="search-block-elements-wrapper">
                                <form action="#" method="get" id="hic-search-engine-block-form" accept-charset="UTF-8">
                                    <div class="js-form-item form-item js-form-type-search form-type-search js-form-item-search form-item-search form-no-label">
                                        <label for="edit-search" class="visually-hidden">Search</label>
                                        <input title="" id="search-text" autocomplete="off" data-drupal-selector="edit-search" type="search" name="search" value="" size="15" maxlength="128" class="form-search" />

                                    </div>
                                    <div data-drupal-selector="edit-actions" class="form-actions js-form-wrapper form-wrapper" id="edit-actions">
                                        <input data-drupal-selector="edit-submit" type="submit" id="edit-submit" value="Buscar" class="button js-form-submit form-submit" />
                                    </div>
                                </form>
                            </div>
                            <span class="mobile-search-trigger closed"></span>
                        </div>
                    </div>

                    <nav role="navigation" aria-labelledby="block-hic-front-theme-main-menu-menu" id="block-hic-front-theme-main-menu" class="block block-menu navigation menu--main">

                        <ul class="menu">
                            {
                                sections && sections.map((section, index) => {
                                    switch (section.__typename) {
                                        case "STRAPI__COMPONENT_SHARED_LINK_ITEM":
                                            return singleLinkItem(section, languagePrefix)

                                        case "STRAPI__COMPONENT_SHARED_DROPDOWN_LINK":
                                            return <DropdownMenu key={section.id} {...section} />

                                        default:
                                            return null;
                                    }
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}