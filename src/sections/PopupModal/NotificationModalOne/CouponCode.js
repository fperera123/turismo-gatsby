import React from 'react'
import Content from "../../slices/contentStyles"

function CouponCode({ code }) {
    return <>
        <div dir="ltr"  onClick={() => { navigator.clipboard.writeText(code) }} className='inline-flex border-1 self-center px-2 py-1 border-dashed !border-primaryShade rounded-md cursor-pointer'>
            <Content.Text as="p" className="!text-primary mr-4">{code}</Content.Text>
            <i className='fal fa-clone !text-primary mt-[3px]'></i>
        </div>
    </>
}

export default CouponCode
