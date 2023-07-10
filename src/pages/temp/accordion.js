import React, { useEffect } from 'react'
import { Link } from '@/components'
import { navigate } from 'gatsby';
import { useLocation } from '@reach/router';
import './styles.scss'
import Content from "@/sections/slices/contentStyles"
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { Accordion } from 'react-bootstrap';

export default function AppAccordion() {
    return (
        <>

            <div className="container md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <span className="!text-primary uppercase mb-2">Work Process</span>
                    <Content.Title as={'h2'} className="text-center">
                        Digital System For Our Business
                    </Content.Title>

                    <ReactMarkdown className={'app-markdown text-center max-w-lg w-full mx-auto'} rehypePlugins={[rehypeRaw]} children={'The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,'} />
                </div>
                <div className="grid grid-cols-1 mt-8">
                    <Accordion flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className='accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16'>
                                <Content.Title as={'h4'} className="text- mb-0">
                                    Digital System For Our Business
                                </Content.Title>
                                <i className='icon closed fal fa-angle-down fa-2x mr-2'></i>
                                <i className='icon opened fal fa-angle-up fa-2x mr-2'></i>
                            </Accordion.Header>
                            <Accordion.Body className='accordion-content px-16 overflow-hidden'>
                                <ReactMarkdown className={'app-markdown w-full'} rehypePlugins={[rehypeRaw]} children={'The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,'} />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>

            <div class="">
                <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                    Vertically centered modal
                </button>
                <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable">
                    Vertically centered scrollable modal
                </button>
            </div>

            <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
                <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                    <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
                                Modal title
                            </h5>
                            <button type="button"
                                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body relative p-4">
                            <p>This is a vertically centered modal.</p>
                        </div>
                        <div
                            class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                            <button type="button"
                                class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                                data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="button"
                                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}