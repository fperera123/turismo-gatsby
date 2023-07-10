import React, { useState } from 'react'
import { Link } from '@/components'
import './../style.scss';
import { StaticImage as Img } from 'gatsby-plugin-image'
import { useLanguage } from '@/hooks/useLanguage';
import DropdownMenu from './DropdownMenu';

const languageSelector = (lang) => {
    console.log(lang);
    if (lang == 'ar-KW') {
        return (
            // <Link
            //     to={location.pathname.replace("/ar/", "/")}
            // >
            //     English
            // </Link>
            <Link
                to={"/"}
            >
                English
            </Link>
        )
    }
    else {
        // return <Link to={`/ar${location.pathname}`}>
        //     عربي
        // </Link>
        return <Link to={`/ar/`}>
            عربي
        </Link>
    }
}

const singleLinkItem = (item, languagePrefix) => {
    return <li key={item.id} className="nav-item">
        <Link className="whitespace-nowrap" to={`${languagePrefix}${item.to}`}>
            {item.title}
        </Link>
    </li>
}

export default function NavbarTwo({ direction, sections }) {

    const { languagePrefix, lang } = useLanguage();

    return (
        <>
            <nav dir="ltr" className='flex flex-wrap w-full p-2 items-center md:!py-4 md:!px-6  md:inline-flex'>
                <div className='flex-grow md:flex-grow-0 md:flex'>
                    <Img className='w-[60px]' src="../../../assets/image/favicon-512.png" alt="better move co logo" title="Better Move Co" />
                </div>

                <div className='hidden !text-primary text-2xl text-bold justify-center gap-x-4 md:flex md:flex-grow '>
                    {languagePrefix == '/ar' ?
                        <div>شركة بيتر موف لنقل العفش والاغراض بالكويت</div> :
                        <div>Better Move Co. For Furniture Moving in Kuwait</div>
                    }
                </div>

                <div className='flex md:hidden'>
                    <button className='p-2 outline-0' data-bs-toggle="collapse" data-bs-target="#navBarItems">
                        <i className="fas fa-bars fa-2x !text-primary"></i>
                    </button>
                </div>

                <div dir={direction} className="collapse flex w-full items-center md:visible md:!flex md:flex-grow-0 md:flex-1 " id="navBarItems">
                    <ul className="navbar-nav flex flex-col w-full md:flex-row pl-0 list-style-none mr-auto gap-y-2 md:gap-x-6">
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
                        <li className="nav-item">
                            {languageSelector(lang)}
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}