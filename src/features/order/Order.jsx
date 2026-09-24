// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import OrderItem from "./OrderItem";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const order = useLoaderData();
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="container flex flex-col gap-y-3 p-5">
      <div className="flex justify-between items-center flex-wrap gap-3">
        <h2 className="text-stone-800 font-semibold text-xl">
          Status #{id} Order
        </h2>
        <div className="">
          {priority && (
            <span className="bg-red-500 rounded-full px-3 py-2 text-red-100 font-semibold">
              Priority
            </span>
          )}{" "}
          <span className="bg-green-500 rounded-full px-3 py-2  text-red-100 font-semibold">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap gap-3 bg-stone-200 p-2">
        <p className="text-stone-800 font-semibold">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-sm italic text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>
      <ul className="divide-y divide-stone-200 border-b border-t border-stone-200 ">
        {cart.map((item) => (
          <OrderItem key={item.pizzaId} item={item} />
        ))}
      </ul>
      <div className=" bg-stone-200 p-2">
        <p className=" ">
          Price pizza:{" "}
          <span className="text-green-400">{formatCurrency(orderPrice)}</span>
        </p>
        {priority && (
          <p>
            Price priority:{" "}
            <span className="text-green-400">
              {formatCurrency(priorityPrice)}
            </span>
          </p>
        )}
        <p className="pt-4 font-bold">
          To pay on delivery:{" "}
          <span className="text-green-400 ">
            {formatCurrency(orderPrice + priorityPrice)}
          </span>
        </p>
      </div>
    </div>
  );
}
export async function loader({ params }) {
  const order = getOrder(params.orderId);
  return order;
}

export default Order;
