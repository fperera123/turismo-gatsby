import React, { useEffect } from "react";
import { graphql } from "gatsby";
import _ from "lodash";

import PageContent from "@/sections/slices/PageContent/PageContent";

export const query = graphql`
  query GetSingleUniversal($slug: String, $locale: String) {
    navBarTwo: strapiNavBarTwo(locale: { eq: $locale }) {
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

    universal: strapiUniversal(slug: { eq: $slug }) {
      id
      slug

      slices {
        ... on STRAPI__COMPONENT_SLICES_PAGE_CONTENT {
          __typename
          id
          content
        }
      }
    }
  }
`;


export default function Home({
  data: {
    universal: { slices },
  },
}) {
  return (
    <>
        {slices.map((slice) => {
          console.log(slice);
          switch (slice.__typename) {
            case "STRAPI__COMPONENT_SLICES_PAGE_CONTENT":
              return <PageContent key={slice.id} data={slice} />;

            default:
              return null;
          }
        })}
    </>
  );
}
