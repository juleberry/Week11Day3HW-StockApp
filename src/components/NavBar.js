import { Link } from 'react-router-dom'

export default function NavBar (props) {
  return (
    <>
    <nav>
      <Link to="/">iStock</Link> | 
      <Link to="/stocks">Stocks</Link>&nbsp;
      <Link to="/about">About</Link>
    </nav>
    </>
  )
}