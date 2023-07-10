import React from 'react'
import Content from "../../contentStyles"
import { Link } from '@/components'
import { useLocation } from '@reach/router';
import GlobalHeaderContext from "@/context/GlobalHeaderContext";
import { useLanguage } from '@/hooks/useLanguage';

export default function ContactOne({ data }) {
    const location = useLocation();

    const { languagePrefix } = useLanguage();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-lightShade">
            <div className="w-full h-[400px]">
                <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.882597198733!2d48.013394616025884!3d29.34443628214237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c92c9b4e495%3A0x433fa07c4e07cb81!2sBetter%20Move%20Co!5e0!3m2!1sen!2sph!4v1672880973223!5m2!1sen!2sph" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="w-full flex flex-col justify-center items-center p-4">

                {languagePrefix == '/ar' ?
                    <Content.Text as='p' className='text-center'>
                        الدور الثاني مكتب رقم. 6<br />
                        حولي قطعة 3<br />
                        شارع رقم 101<br />
                        شارع تونس<br />
                        بناية الفردوس<br />
                        الكويت
                    </Content.Text> :
                    <Content.Text as='p' className='text-center'>
                        FLOOR 2 OFFICE No 6<br />
                        HAWALLY BLOCK 3,<br />
                        STREET No 101<br />
                        TUNISIA STREET,<br />
                        FIRDOUS BUILDING,<br />
                        KUWAIT.
                    </Content.Text>
                }
                <div className='flex flex-col text-center w-full text-black mt-4 gap-y-4'>
                    <Link dir="ltr" className="hover:text-primaryShade" to={`/ga/call_to_action?action=tel:+96599341116&redirect=${location.href}`}>
                        <div className='flex items-center justify-center w-full'>
                            <i className='fal fa-phone fa-2x mr-2'></i>
                            <Content.Text as='p' className='whitespace-nowrap hover:text-primaryShade'>(+965) 99 34 1116 </Content.Text>
                        </div>
                    </Link>
                    <Link dir="ltr" className="hover:text-primaryShade" to={`/ga/call_to_action?action=tel:+96560059169&redirect=${location.href}`}>
                        <div className='flex items-center justify-center w-full'>
                            <i className='fal fa-phone fa-2x mr-2'></i>
                            <Content.Text as='p' className='whitespace-nowrap hover:text-primaryShade'>(+965) 60 05 9169 </Content.Text>
                        </div>
                    </Link>
                    <Link dir="ltr" className="hover:text-primaryShade" to="mailto:info@bettermoveco.com">
                        <div className='flex items-center justify-center w-full'>
                            <i className='fal fa-envelope fa-2x mr-2'></i>
                            <Content.Text as='p' className='whitespace-nowrap hover:text-primaryShade'>info@bettermoveco.com</Content.Text>
                        </div>
                    </Link>
                </div>
                <div className='!text-primary gap-4 flex mt-4'>
                    <Link rel="nofollow" className="hover:text-black" to="https://wa.me/96599341116">
                        <i className='fab fa-whatsapp fa-2x'></i>
                    </Link>
                    <Link rel="nofollow" className="hover:text-black" to="https://facebook.com/bettermovecokw">
                        <i className='fab fa-facebook fa-2x'></i>
                    </Link>
                    <Link rel="nofollow" className="hover:text-black" to="https://www.instagram.com/better_move_co/">
                        <i className='fab fa-instagram fa-2x'></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

