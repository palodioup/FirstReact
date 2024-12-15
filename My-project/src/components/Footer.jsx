import FooterStyles from "../styles/stylesForFooter";
import ReactLogo from "../assets/react.svg";
import H3HTMLElemSty from "../styles/StylesForH3HTMLInMain";
import ImgFooterStyles from "../styles/IMGFOOTERSTYLES.JSX";
import alt from "../text/HTMLAttributes";
import { useState } from "react";
import PHTMLStyles from "../styles/stylesForPHTMLAtrributeInFooter";

const Footer = () => {
  const [count, setCount] = useState(0);
  const click = () => {
    setCount((c) => c + 1)
  }
  return (
    <footer style={FooterStyles}>
      <h3 style={H3HTMLElemSty}>
        &copy; {new Date().getFullYear()} React
        <img src={ReactLogo} style={ImgFooterStyles} alt={alt} onClick={click}></img>
        <p style={PHTMLStyles}>{count}</p>
      </h3>
    </footer>
  );
}

export default Footer;
