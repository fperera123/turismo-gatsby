import React from "react";

export default function PageContent({ data: { content, richContent } }) {
  console.log(content, richContent);
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}
