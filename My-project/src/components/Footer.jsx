import FooterStyles from "../styles/stylesForFooter"

function Footer() {
  return (
    <footer style={FooterStyles}>
      <h3>&copy; {new Date().getFullYear()} React</h3>
    </footer>
  )
}

export default Footer