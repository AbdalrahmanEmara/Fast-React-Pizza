import { Link } from 'react-router-dom'
import SearchQuery from '../features/order/SearchOrder'
import UserName from '../features/user/UserName'

export default function Header() {
  return (
    <header className='bg-yellow-500 uppercase px-4 py-3 border-b border-stone-200 sm:px-6 flex justify-between items-center text-sm'>
      <Link to="/" className='tracking-widest text-lg'>Fast React Pizza Co.</Link>
      <SearchQuery />

      <UserName />
    </header>
  )
}
