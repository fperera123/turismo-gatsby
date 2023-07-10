import React, { useEffect, useRef } from 'react'
import Content from "../../slices/contentStyles"
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import CountDownTime from './CountDownTime'
import CouponCode from './CouponCode'
import { Link } from '@/components'
import { useLocation } from '@reach/router';
import { GatsbyImage as Img, getImage } from 'gatsby-plugin-image'
import { navigate } from "gatsby"

function NotificationModalOne({ data: {
    titleMarkdown,
    showAfter,
    promotion,
    basicImage,
    hasPromotion,
    hasImage,
    hasTitleMarkdown,
    id,
}
}) {

    const { title, titleHtmlTag, markdown: { data: { markdown } } } = titleMarkdown
    const { expiresAt, couponCode, showCallToActions } = promotion || {};
    const { imageAlt, imageTitle, image } = basicImage || {};

    const trigger = useRef(null)
    const location = useLocation()

    useEffect(() => {
        const timeOut = setTimeout(() => {
            trigger.current.click()
        }, showAfter * 1000);

        return () => {
            clearTimeout(timeOut)
        }
    }, [])


    const gtagHandler = () => {
        try {
            // eslint-disable-next-line  no-undef
            gtag('event', couponCode, {
                title: title,
            });

            console.log(couponCode);
        }
        catch (e) {

        }
    }

    return (
        <>

            <button ref={trigger} className='hiddenTrigger hidden' data-bs-toggle="modal" data-bs-target={`#NotificationModalOne-${id}`}> Test</button>

            <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id={`NotificationModalOne-${id}`}>
                <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div className="modal-body relative p-4">
                            <i className="fal fa-times cursor-pointer absolute top-0 right-0 p-1" data-bs-dismiss="modal" aria-label="Close"></i>
                            <div className='flex w-full flex-col'>
                                {hasImage ? <Img image={getImage(image.localFile)} alt={imageAlt} title={imageTitle} layout="fullWidth" placeholder="blurred" className='mb-4' /> : null}

                                {hasTitleMarkdown ?
                                    <Content.Title as={titleHtmlTag} className="text-center mb-4">
                                        {title}
                                    </Content.Title>
                                    : null
                                }


                                {hasPromotion ?
                                    <>
                                        <div className='mb-4'>
                                            <CountDownTime targetDate={new Date(expiresAt).getTime()} />
                                        </div>
                                        <div className='mb-4 w-full text-center'>
                                            <CouponCode code={couponCode} />
                                        </div>
                                    </>
                                    : null
                                }

                                {hasTitleMarkdown ?
                                    <ReactMarkdown className={'app-markdown text-center'} rehypePlugins={[rehypeRaw]} children={markdown} />
                                    : null
                                }

                                {
                                    showCallToActions ?
                                        <>
                                            <div className='w-full flex justify-center flex-col sm:flex-row gap-2 my-4'>
                                                <a dir="ltr" href={`tel:+96599341116`} onClick={() => gtagHandler()} className='inline-flex gap-x-1 self-center p-2 items-center border-2 !bg-primary rounded-md text-white shadow-lg'>
                                                    <i className='fal fa-2x fa-phone mr-2'></i>
                                                    <Content.Text as='p' className='whitespace-nowrap text-white'>(+965) 99 34 1116 </Content.Text>
                                                </a>

                                                <a dir="ltr" href={`https://wa.me/96599341116`} onClick={() => gtagHandler()} className='inline-flex gap-x-1 self-center p-2 items-center border-2 !bg-primary rounded-md text-white shadow-lg'>
                                                    <i className='fab fa-2x fa-whatsapp mr-2'></i>
                                                    <Content.Text as='p' className='whitespace-nowrap text-white'>(+965) 99 34 1116 </Content.Text>
                                                </a>
                                            </div>
                                        </>
                                        : null
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotificationModalOne
