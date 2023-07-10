import React from 'react'

export default function InstagramPost({ data: { link } }) {
  
  return (
    <>
      <div class='w-full flex justify-center'>
        <blockquote className="instagram-media" data-instgrm-permalink={link} style={{ maxWidth: '600px', width: '100%'}}>
        </blockquote>
      </div>
    </>
  )
}