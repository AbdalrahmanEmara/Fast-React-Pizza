import { Link } from 'react-router-dom'
import SearchQuery from '../features/order/SearchOrder'

export default function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchQuery />

      <p>Emara</p>
    </header>
  )
}
