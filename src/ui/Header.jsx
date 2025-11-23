import { Link } from "react-router-dom";
import SearchQuery from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 text-sm uppercase sm:px-6">
      <Link to="/" className="text-lg tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchQuery />

      <UserName />
    </header>
  );
}
