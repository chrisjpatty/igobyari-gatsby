import React from "react";
import rehypeReact from "rehype-react";
import PropTypes from "prop-types";
import ImageErrorHandler from "./ImageErrorHandler";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { img: ImageErrorHandler }
}).Compiler;

export const HTMLContent = ({ htmlAst, className }) => (
  renderAst(htmlAst)
)

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
