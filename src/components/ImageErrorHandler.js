import React from "react";

export default ({ src, alt }) => {
  const [loadFailed, setLoadFailed] = React.useState(false);
  return loadFailed ? null : (
    <img
      src={src}
      onError={() => setLoadFailed(true)}
      alt={alt}
    />
  );
};
