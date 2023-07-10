import { Accordion } from 'react-bootstrap';
import React from 'react'
import Content from "@/sections/slices/contentStyles"
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import './styles.scss'
import GlobalHeaderContext from "@/context/GlobalHeaderContext";
import { useLocation } from '@reach/router';
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from '@/components'

const itemList = ({ item: items }, dir) => {
    return items.map((titleMarkdown, index) => {
        const { title, titleHtmlTag, markdown: {
            data: { markdown }
        },
            hasLink,
            to,
            icon,
            target,
        } = titleMarkdown;
        return <Accordion.Item key={index} eventKey={index}>
            <Accordion.Header className='accordion-header cursor-pointer transition flex space-x-5 px-5 items-center'>
                <Content.Title as={titleHtmlTag} className="text- mb-0" dir={dir} >
                    {hasLink ? <Link dir="ltr" className="hover:text-primaryShade" to={`${to}`} target={target}>
                        {title}
                    </Link> : <>{title}</>}
                </Content.Title>
                <i className='icon closed fal fa-angle-down fa-2x mr-2'></i>
                <i className='icon opened fal fa-angle-up fa-2x mr-2'></i>
            </Accordion.Header>
            <Accordion.Body className='accordion-content px-16 overflow-hidden'>
                <ReactMarkdown className={'app-markdown w-full'} rehypePlugins={[rehypeRaw]} children={markdown} />
            </Accordion.Body>
        </Accordion.Item>
    })
}

const AccordionOne = ({ data: { label, titleMarkdown, accordionItems } }) => {
    const { title, titleHtmlTag, markdown: {
        data: { markdown }
    } } = titleMarkdown;

    const { dir } = useLanguage();

    return (
        <>
            <div className="container py-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <span className="!text-primary uppercase mb-2">{label}</span>
                    <Content.Title as={titleHtmlTag} className="text-center">
                        {title}
                    </Content.Title>

                    <ReactMarkdown className={'app-markdown text-center max-w-lg w-full mx-auto'} rehypePlugins={[rehypeRaw]} children={markdown} />
                </div>
                <div className="grid grid-cols-1 mt-8">
                    <Accordion flush>
                        {itemList(accordionItems, dir)}
                    </Accordion>
                </div>
            </div>
        </>
    )
}

export default AccordionOne;