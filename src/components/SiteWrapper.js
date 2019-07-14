import React from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

const SiteWrapper = ({ children, menuOpen, onRequestMenuClose }) => {
  const [closing, setClosing] = React.useState(false);

  const startCloseAnimation = () => {
    setClosing(true);
  };

  const handleTransitionEnd = () => {
    if (closing) {
      onRequestMenuClose();
      setClosing(false);
    }
  };

  return (
    <Wrapper
      menuOpen={menuOpen}
      closing={closing}
      onTransitionEnd={handleTransitionEnd}
    >
      <Helmet>
        <meta name="theme-color" content={menuOpen && !closing ? "#456746" : "#fff"} />
      </Helmet>
      <Global
        styles={css`
          body {
            background: ${menuOpen ? "#456746" : "none"};
            overflow: ${menuOpen ? 'hidden' : ''};
            width: ${menuOpen ? '100vw' : ''};
            height: ${menuOpen ? '100vh' : ''};
          }
        `}
      />
      {children}
      {menuOpen && <InteractionOverlay onClick={startCloseAnimation} />}
    </Wrapper>
  );
};

const Wrapper = styled("div")(
  {
    background: "#ffffff",
    position: "relative",
    transform: "scale(1) translateX(0%)",
    transition: "transform 300ms, border-radius 300ms",
    transitionTimingFunction: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)'
  },
  ({ menuOpen }) =>
    menuOpen
      ? {
          height: "100vh",
          width: "100vw",
          overflow: "auto",
          borderRadius: 20,
          transform: "scale(.8) translateX(80%)",
          boxShadow: "0px 10px 500px -15px rgba(0,0,0,.4)",
          pointerEvents: "none"
        }
      : {},
  ({ closing }) =>
    closing
      ? {
          transform: "scale(1) translateX(0%)",
          borderRadius: 0
        }
      : {}
);

const InteractionOverlay = styled("div")`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  z-index: 99;
  pointer-events: all;
`;

export default SiteWrapper;
