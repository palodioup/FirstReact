import headerUlStyle from "../styles/styles.jsx"


function Header() {
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
    )
}



export default Header