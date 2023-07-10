import React, { useState } from 'react'
import { Link } from '@/components'
import { useLanguage } from '@/hooks/useLanguage';

function DropdownMenu({dropdown, dropdownItems}) {
    const [isOpen, setOpen] = useState(false);
    const { languagePrefix, lang } = useLanguage();

    return (
        <>
            <li className="nav-item relative">
                <a className="whitespace-nowrap cursor-pointer" onClick={() => setOpen(!isOpen)}>
                    <span>{dropdown.title}</span>
                    <i className="ml-1 mr-2 fas fa-angle-down"></i>
                </a>
                <div className={`absolute right-0 w-auto mt-2 origin-top-right rounded-md shadow-lg z-50 ${isOpen ? '' : 'hidden'}`}>
                    <ul className="px-2 py-2 bg-white rounded-md">
                        {dropdownItems.map((item, index) => {
                            console.log(item)
                            return <li key={index} className="nav-item">
                                <Link className="whitespace-nowrap" to={`${languagePrefix}${item.to}`}>
                                    {item.title}
                                </Link>
                            </li>
                        })}
                    </ul>
                </div>
            </li>
        </>
    )
}

export default DropdownMenu
