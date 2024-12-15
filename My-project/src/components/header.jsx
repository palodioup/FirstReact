import headerUlStyle from "../styles/styles.jsx";

const Header = () => {
  return (
    <header>
      <nav>
        <ul style={headerUlStyle}>
          <li>Home</li>
          <li>About</li>
          <li>FAQ</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
