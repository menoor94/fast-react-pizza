import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="text-center p-3">
      <p className="bg-yellow-100 text-stone-800 ">
        Your cart is empty. Start adding some pizzas :)
      </p>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
    </div>
  );
}

export default EmptyCart;
