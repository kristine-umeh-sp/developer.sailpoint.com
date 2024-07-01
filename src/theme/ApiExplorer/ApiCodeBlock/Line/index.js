import React from "react";

import clsx from "clsx";

export default function CodeBlockLine({
  line,
  classNames,
  showLineNumbers,
  getLineProps,
  getTokenProps,
}) {
  if (line.length === 1 && line[0].content === "\n") {
    line[0].content = "";
  }
  const lineProps = getLineProps({
    line,
    className: clsx(
      classNames,
      showLineNumbers && "openapi-explorer__code-block-code-line"
    ),
  });
  const lineTokens = line.map((token, key) => (
    <span key={key} {...getTokenProps({ token, key })} />
  ));
  return (
    <span {...lineProps}>
      {showLineNumbers ? (
        <>
          <span className="openapi-explorer__code-block-code-line-number" />
          <span className="openapi-explorer__code-block-code-line-content">
            {lineTokens}
          </span>
        </>
      ) : (
        lineTokens
      )}
      <br />
    </span>
  );
}