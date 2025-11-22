import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-700 uppercase text-stone-200">
      <p className="font-semibold">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link href="#" className="tracking-widest">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
