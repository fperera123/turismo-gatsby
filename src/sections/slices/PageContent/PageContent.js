import React from "react";
import Content from "../contentStyles";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function PageContent({ data: { content, richContent } }) {
  console.log(content, richContent);
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}
