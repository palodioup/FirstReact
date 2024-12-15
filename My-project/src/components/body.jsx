import stylesForBodyMain from "../styles/stylesForCardBodyMain";
import mainStyles from "../styles/stylesForHTMLMain";
import ReactLogo from "../assets/react.svg";
import alt from "../text/HTMLAttributes";

const Main = () => {
  return (
    <main style={mainStyles}>
      <div style={stylesForBodyMain}>
        <img src={ReactLogo} alt={alt}></img>
        <h1>This is REACT</h1>
        <p>
          React was created by Facebook. <br /> It was used to create the 2016
          facebook. <br /> JSX stands Javascript XML(HTML)
        </p>
      </div>
    </main>
  );
}

export default Main;
