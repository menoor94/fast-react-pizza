import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { useState } from "react";
import { createOrder } from "../../services/apiRestaurant";
import { useSelector } from "react-redux";
import { clearCart } from "../cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import EmptyCart from "../cart/EmptyCart";
import store from "../../store";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector((state) => state.cartReducer.cart);
  const totalCartPrice = cart.reduce((acc, curVal) => {
    return acc + curVal.totalPrice;
  }, 0);

  const navigation = useNavigation();
  const formError = useActionData();
  const username = useSelector((state) => state.userReducer.username);

  const isSubmitting = navigation.state === "submitting";
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="p-5  w-full lg:w-/1/3 ">
      <h2 className="text-stone-800 font-semibold pb-3">
        Ready to order? Let&apos;s go!
      </h2>

      <Form method="POST" className="my-5 flex flex-col gap-y-3 lg:w-2/4">
        <div className="flex flex-col sm:flex-row justify-between">
          <label className="sm:basis-40">Full Name</label>
          <div className="grow">
            <input
              defaultValue={username}
              className="inputs w-full "
              type="text"
              name="customer"
              id="customer"
              required
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between lg:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input
              className="inputs w-full "
              type="tel"
              name="phone"
              required
            />
          </div>
        </div>
        {formError?.phone && (
          <p className="text-sm text-red-400 bg-red-100 rounded p-1 ">
            {formError.phone}
          </p>
        )}

        <div className="flex flex-col sm:flex-row justify-between">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="inputs w-full "
              type="text"
              name="address"
              required
            />
          </div>
        </div>

        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <div className="pt-4">
          <input
            className="accent-yellow-400 mx-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div className="pt-3">
          <Button disabled={isSubmitting} type="primary">
            {isSubmitting
              ? "Placing order..."
              : `Order now ${formatCurrency(totalCartPrice + priorityPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };
  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone =
      "We might need your phone number so please enter the correct number";
  }
  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
