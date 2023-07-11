import React, { useState } from 'react'
import { Link } from '@/components'
import { useLanguage } from '@/hooks/useLanguage';

function DropdownMenu({ dropdown, dropdownItems }) {
    const [isOpen, setOpen] = useState(false);
    const { languagePrefix, lang } = useLanguage();

    return (
        <>
            <li class="menu-item menu-item--expanded">
                <span>{dropdown.title}</span>
                <ul class="menu">
                    {dropdownItems.map((item, index) => {
                        console.log(item)
                        return <li key={index} class="menu-item">
                            <Link href={`${languagePrefix}${item.to}`} >{item.title}</Link>
                        </li>
                    })}

                </ul>

            </li>
        </>
    )
}

export default DropdownMenu
