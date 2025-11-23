import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-800 text-sm px-4 py-4 uppercase text-stone-200 sm:px-6 md:text-base flex justify-between items-center">
      <p className="space-x-4 font-semibold md:space-x-6">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link href="#" className="tracking-widest">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
