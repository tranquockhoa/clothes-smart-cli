"use client";
import CartForm from "./cart-form";
import CartList from "./cart-list";
import "./cart.scss";

export default function Cart() {
  return (
    <div className="cart">
      <div className="cart__left">
        <CartForm />
      </div>

      <div className="cart__right">
        <CartList />
      </div>
    </div>
  );
}
