import React, { useEffect } from "react";
import { graphql } from 'gatsby';
import { PageWrapper } from "~components/Core";
import _ from "lodash";
// import 'tw-elements';
import HeroOne from "@/sections/slices/Hero/HeroOne";
import ContentWithImage from "@/sections/slices/ContentWithImage";
import ContentWithImageAndList from "@/sections/slices/ContentWithImageAndList";
import ContentPlain from "@/sections/slices/ContentPlain";
import Reviews from "@/sections/slices/Reviews";
import Footer from "@/sections/Footer";
import ContactOne from "@/sections/slices/Contact/ContactOne";
import AccordionOne from "@/sections/slices/Accordion/AccordionOne";
import Navbar from "@/sections/Navbar";
import TopBar from "@/sections/TopBar";
import GalleryOne from "@/sections/slices/Gallery/GalleryOne";
import { GatsbyImage as Img, getSrc, getImage } from 'gatsby-plugin-image'
import { Helmet } from "react-helmet";
import NotificationModalOne from '../sections/PopupModal/NotificationModalOne/NotificationModalOne';
import NavbarTwo from "@/sections/Navbar/NavbarTwo";
import InstagramPost from "@/sections/slices/InstagramPost";
import YouTubeVideo from "@/sections/slices/YouTubeVideo";
import ParagraphOnly from "@/sections/slices/ParagraphOnly/ParagraphOnly";

import logoES_DarkMenu_0 from '../assets/clone/logoES_DarkMenu_0.png';
import logoES_Hover_0_0 from '../assets/clone/logoES_Hover_0_0.png';
import logoES_DarkMenu_0_0 from '../assets/clone/logoES_DarkMenu_0_0.png';

import GASTRO_SAUZAL_140420 from '../assets/clone/26_GASTRO_SAUZAL_140420.mp4';
import ROQUENUBLO_210120_loop from '../assets/clone/20_ROQUENUBLO_210120_loop.mp4';
import ContentWithImageTopOrBottom from "@/sections/slices/ContentWithImageTopOrBottom/ContentWithImageTopOrBottom";
import ImageOnly from "@/sections/slices/ImageOnly/ImageOnly";
import BannerWithButton from "@/sections/slices/BannerWithButton/BannerWithButton";
import MorePosts from "@/sections/slices/MorePosts/MorePosts";
import ContentWithColorBox from "@/sections/slices/ContentWithColorBox/ContentWithColorBox";

// export const query = graphql`
//   query GetSingleUniversal($slug: String, $locale: String){
//     navBarTwo: strapiNavBarTwo  (locale: {eq: $locale}){
//       sections {
//         ... on STRAPI__COMPONENT_SHARED_DROPDOWN_LINK {
//           __typename
//           id
//           dropdown {
//             icon
//             target
//             title
//             to
//           }
//           dropdownItems {
//             target
//             title
//             icon
//             to
//           }
//         }
//         ... on STRAPI__COMPONENT_SHARED_LINK_ITEM {
//           __typename
//           id
//           title
//           to
//           target
//           icon
//         }
//       }
//     }

//     universal: strapiUniversal(slug: {eq: $slug}) {
//       id
//       slug

//       metaTitle,
//       metaDescription,
//       ogTitle,
//       ogDescription,
//       ogImage {
//         localFile {
//           childImageSharp {
//             gatsbyImageData
//           }
//         }
//       }
//       jsonLD{
//         internal{
//           content
//         }
//       }

//       lang
//       direction

//       slices {
//         ... on STRAPI__COMPONENT_SLICES_PARAGRAPH_WITH_TITLE  {
//             __typename
//             id
//             titleMarkdown{
//                 title
//                 markdown{
//                   data{
//                     markdown
//                   }
//                 }
//                 titleHtmlTag
//             }
//           }
//         ... on STRAPI__COMPONENT_SLICES_HERO_ONE {
//             __typename
//             id
//             titleParagraphImage{
//                 title
//                 paragraph
//                 titleHtmlTag
//                 image {
//                   localFile {
//                     childImageSharp {
//                       gatsbyImageData
//                     }
//                   }
//                 }
//                 imageAlt
//             }
//           }
//           ... on STRAPI__COMPONENT_SLICES_CONTENT_WITH_IMAGE {
//             __typename
//             id
//             contentWithImageBasicImage : basicImage {
//               imageAlt
//               imageOrder
//               imageTitle
//               image {
//                 localFile {
//                   childImageSharp {
//                     gatsbyImageData
//                   }
//                 }
//               }
//             }
//             contentWithImageTitleMarkdown : titleMarkdown {
//               title
//               titleHtmlTag
//               markdown {
//                 data {
//                   markdown
//                 }
//               }
//             }
//           }
//           ... on STRAPI__COMPONENT_SLICES_CONTENT_WITH_IMAGE_AND_LIST{
//             __typename
//             id
//             contentWithImageTitleMarkdownImage: titleMarkdownImage{
//                 title
//                 markdown{
//                   data{
//                     markdown
//                   }
//                 }
//                 titleHtmlTag
//                 image {
//                     localFile {
//                       childImageSharp {
//                         gatsbyImageData
//                       }
//                     }
//                   }
//                 imageAlt
//             }
//             unorderedList {
//               text
//               icon
//             }
//             sliceWidth,
//           }
//           ... on STRAPI__COMPONENT_SLICES_REVIEW_ONE {
//             __typename
//             id
//            reviewOneItem{
//             text
//             customerName
//             customerPosition
//             imageAlt
//            }
//           }
//           ... on STRAPI__COMPONENT_SLICES_GALLERY_ONE {
//             __typename
//             id
//             imageGrid{
//             image {
//               localFile {
//                 childImageSharp {
//                   gatsbyImageData
//                 }
//               }
//             }
//             imageAlt
//            }
//           }
//           ... on STRAPI__COMPONENT_SLICES_ACCORDION_ONE {
//               __typename
//               id
//               label
//               titleMarkdown {
//                 title
//                 markdown {
//                   data {
//                     markdown
//                   }
//                 }
//                 titleHtmlTag
//               }
//               accordionItems {
//                 item {
//                   markdown {
//                     data {
//                       markdown
//                     }
//                   }
//                   titleHtmlTag
//                   title
//                   hasLink,
//                   to
//                   icon
//                   target
//                 }
//               }
//           }
//           ... on STRAPI__COMPONENT_SLICES_NOTIFICATION_MODAL_ONE {
//             __typename
//             id
//             titleMarkdown {
//               markdown {
//                 data {
//                   markdown
//                 }
//               }
//               title
//               titleHtmlTag
//             }
//             basicImage {
//               imageAlt
//               imageOrder
//               imageTitle
//               image {
//                 localFile {
//                   childImageSharp {
//                     gatsbyImageData
//                   }
//                 }
//               }
//             }
//             promotion {
//               expiresAt
//               couponCode
//               showCallToActions
//             }
//             showAfter
//             hasPromotion
//             hasImage
//             hasTitleMarkdown
//           }
//           ... on STRAPI__COMPONENT_SLICES_INSTAGRAM_POST_ONE {
//             __typename
//             id
//             link
//           }
//           ... on STRAPI__COMPONENT_SLICES_YOUTUBE_ONE {
//             __typename
//             id
//             videoId
//           }
//       }
//     }
//   }
// `

// export function Head({ location, data: { universal } }) {
//   const siteRoot = process.env.SITE_URL;

//   const {
//     metaTitle,
//     metaDescription,
//     ogTitle,
//     ogDescription,
//     ogImage,
//     jsonLD,

//     lang,
//     direction,
//   } = universal;

//   const src = getSrc(ogImage.localFile);

//   const { internal: { content } } = jsonLD;

//   return (
//     <>
//       <title>{metaTitle}</title>
//       <meta name="description" content={metaDescription} />

//       <meta property="og:title" content={ogTitle} />
//       <meta property="og:description" content={ogDescription} />
//       <meta property="og:url" content={`${siteRoot}${location.pathname}`} />
//       <meta property="og:image" content={`${siteRoot}${src}`} />

//       <meta property="og:type" content="website" />
//       <meta name="twitter:card" content="summary_large_image" />

//       <meta name="robots" content="index, archive, follow" />

//       <link rel="canonical" href={`${siteRoot}${location.pathname}`} />

//       <link rel="alternate" hrefLang="en" href={`${siteRoot}${location.pathname}`} />
//       <link rel="alternate" hrefLang="ar" href={`${siteRoot}/ar${location.pathname}`} />

//       <script src="https://cdn.jsdelivr.net/npm/tw-elements@1.0.0-alpha13/dist/js/index.min.js"></script>

//       <script type="application/ld+json">
//         {
//           content
//         }
//       </script>

//       <meta name="google-site-verification" content="gFlzkaJIn3EpMd-fNjBPJITQYwc3KWmcABnFm4eF8Ac" />
//       <meta name="ahrefs-site-verification" content="267619e8af15f5eaef9bef029030405b8556d477a4a7043ed158c74f7a29b7cc" />

//       <Helmet
//         htmlAttributes={{
//           lang: lang,
//           dir: direction,
//         }}
//       />

//     </>
//   )
// }

export const query = graphql`
  query GetSingleUniversal($slug: String, $locale: String ){

    navBarTwo: strapiNavBarTwo  (locale: {eq: $locale}){
      sections {

        ... on STRAPI__COMPONENT_SHARED_LINK_ITEM {
          __typename
          id
          title
          to
          target
          icon
        }
      }
    }

    universal: strapiUniversal(slug: {eq: $slug}) {
      id
      slug

      metaTitle,
      metaDescription,
      ogTitle,
      ogDescription,
      ogImage {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      jsonLD{
        internal{
          content
        }
      }

      lang
      direction

      slices {
        ... on STRAPI__COMPONENT_SLICES_HERO_ONE {
            __typename
            id
            titleVideo{
                title
                video {
                  url
                }
            }
          }
        ... on STRAPI__COMPONENT_SLICES_PARAGRAPH_ONLY {
          __typename
          id
          paragraph
        }
        ... on STRAPI__COMPONENT_SLICES_YOUTUBE_ONE {
          __typename
          id
          videoId
          basicImage {
            imageAlt
            imageOrder
            imageTitle
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  }
`

export function Head({ location, data: { universal } }) {
  const siteRoot = process.env.SITE_URL;

  const {
    metaTitle,
    metaDescription,
    ogTitle,
    ogDescription,
    ogImage,
    jsonLD,

    lang,
    direction,
  } = universal;

  const src = getSrc(ogImage.localFile);

  const { internal: { content } } = jsonLD;

  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />

      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={`${siteRoot}${location.pathname}`} />
      <meta property="og:image" content={`${siteRoot}${src}`} />

      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="robots" content="index, archive, follow" />

      <link rel="canonical" href={`${siteRoot}${location.pathname}`} />

      <link rel="alternate" hrefLang="en" href={`${siteRoot}${location.pathname}`} />
      <link rel="alternate" hrefLang="ar" href={`${siteRoot}/ar${location.pathname}`} />

      <script src="https://cdn.jsdelivr.net/npm/tw-elements@1.0.0-alpha13/dist/js/index.min.js"></script>

      <script type="application/ld+json">
        {
          content
        }
      </script>

      <Helmet
        htmlAttributes={{
          lang: lang,
          dir: direction,
        }}
      />

    </>
  )
}

export default function Home({
  data: {
    universal:
    {
      slices,
      direction
    },
    navBarTwo: {
      sections,
    },
  }
}) {

  useEffect(() => {
    const interval = setInterval(() => {
      const element = document ? document.querySelectorAll('#portal-5c3b767d-0f72-4519-88d5-142378a21309 a[target="_blank"]') : null
      if (element.length > 0) {
        element[0].remove();
      }
    }, 1000);

    return () => {
      clearInterval(interval)
    }
  }, [])


  return (
    <PageWrapper>
      {/* <TopBar />

      {slices.map(slice => {
        switch (slice.__typename) {
          case "STRAPI__COMPONENT_SLICES_PARAGRAPH_WITH_TITLE":
            return <ContentPlain key={slice.id} data={slice} />

          case "STRAPI__COMPONENT_SLICES_HERO_ONE":
            return <HeroOne key={slice.id} data={slice} />

          case "STRAPI__COMPONENT_SLICES_CONTENT_WITH_IMAGE":
            return <ContentWithImage key={slice.id} data={slice} />

          case "STRAPI__COMPONENT_SLICES_CONTENT_WITH_IMAGE_AND_LIST":
            return <ContentWithImageAndList key={slice.id} data={slice} />

          case "STRAPI__COMPONENT_SLICES_REVIEW_ONE":
            return <Reviews key={slice.id} data={slice} />

          case "STRAPI__COMPONENT_SLICES_GALLERY_ONE":
            return <GalleryOne key={slice.id} data={slice} />

          case "STRAPI__COMPONENT_SLICES_ACCORDION_ONE":
            return <AccordionOne key={slice.id} data={slice} />

          case "STRAPI__COMPONENT_SLICES_INSTAGRAM_POST_ONE":
            return <InstagramPost key={slice.id} data={slice} />

          case "STRAPI__COMPONENT_SLICES_YOUTUBE_ONE":
            return <YouTubeVideo key={slice.id} data={slice} />

          case "STRAPI__COMPONENT_SLICES_NOTIFICATION_MODAL_ONE":
            return <NotificationModalOne key={slice.id} data={slice} />

          default:
            return null;
        }
      })} */}
      <div class="page-content">
        <NavbarTwo direction={direction} sections={sections} />
        {
          slices.map(slice => {
            switch (slice.__typename) {
              case "STRAPI__COMPONENT_SLICES_HERO_ONE":
                return <HeroOne key={slice.id} data={slice} />

              default:
                return null;
            }
          })
        }

        <div class="layout-content">
          <div class="region region-content">
            <div
              id="block-hic-front-theme-content"
              class="block block-system block-system-main-block"
            >

              <article
                role="article"
                class="node node--type-motivation-distribution node--view-mode-full"
              >
                {
                  slices.map(slice => {
                    switch (slice.__typename) {
                      case "STRAPI__COMPONENT_SLICES_PARAGRAPH_ONLY":
                        return <ParagraphOnly key={slice.id} data={slice} />

                      case "STRAPI__COMPONENT_SLICES_YOUTUBE_ONE":
                        return <YouTubeVideo key={slice.id} data={slice} />

                      default:
                        return null;
                    }
                  })
                }

                <ContentWithImage/>
                <ContentWithImageTopOrBottom/>
                <ImageOnly/>
                <ContentWithImage/>
                <BannerWithButton/>
                <ContentWithImageTopOrBottom/>
                <MorePosts/>
                <ContentWithColorBox/>
              </article>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
      <div className="sm:w-1/3 hidden"></div>

    </PageWrapper>

  )
}
