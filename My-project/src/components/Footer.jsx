import FooterStyles from "../styles/stylesForFooter";
import ReactLogo from "../assets/react.svg";
import H3HTMLElemSty from "../styles/StylesForH3HTMLInMain";
import ImgFooterStyles from "../styles/IMGFOOTERSTYLES.JSX";

function Footer() {
  return (
    <footer style={FooterStyles}>
      <h3 style={H3HTMLElemSty}>
        &copy; {new Date().getFullYear()} React{" "}
        <img src={ReactLogo} style={ImgFooterStyles} alt="ReactFooter"></img>
      </h3>
    </footer>
  );
}

export default Footer;
