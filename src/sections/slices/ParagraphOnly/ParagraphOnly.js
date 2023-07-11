import React from 'react'
import Content from "../contentStyles"
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export default function ParagraphOnly({ data: { paragraph } }) {

  return (
    <>
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="300" data-aos-once="true" class="layout hic_layout_one_02 fullwitdh num-col--1 wrapper-layout wow fadeIn" data-valign1="valigntop" id="section--Px-iuDEBP1I" data-wow-duration="0.1s" styles="visibility: visible; animation-duration: 0.1s; animation-name: fadeIn;">
        <div class="row-wrapper">
          <div class="row one-02">
            <div class="column"></div>
            <div class="column valigntop">

              <div id="me-title-eda79666-cd51-4be7-ae04-a0e417be7349" class="block block-layout-builder block-inline-blockme-title left line-down medium text-black">



                <p class="field field--name-field-me-t-title field--type-string-long field--label-hidden field__item">
                  {paragraph}
                </p>


              </div>

            </div>
            <div class="column"></div>
          </div>
        </div>
      </div>
    </>
  )
}