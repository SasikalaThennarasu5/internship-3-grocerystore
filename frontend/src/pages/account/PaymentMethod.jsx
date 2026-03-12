import { useState } from "react";
import AccountSidebar from "../../components/AccountSidebar";

function PaymentMethod() {

  const [payment, setPayment] = useState("paypal");

  return (
    <div className="max-w-7xl mx-auto p-6">

      {/* PAGE TITLE */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Account</h1>
        <p className="text-gray-500">Home / Account</p>
      </div>

      <div className="grid grid-cols-4 gap-8">

        {/* SIDEBAR */}
        <AccountSidebar active="payment" />

        {/* PAYMENT CONTENT */}
        <div className="col-span-3">

          <div className="space-y-4">

            {/* PAYPAL */}
            <label className="flex items-center border p-4 rounded-lg cursor-pointer">
              <input
                type="radio"
                name="payment"
                checked={payment === "paypal"}
                onChange={() => setPayment("paypal")}
                className="mr-3"
              />
              <span className="font-medium">PayPal</span>
            </label>

            {/* VISA */}
            <label className="flex items-center border p-4 rounded-lg cursor-pointer">
              <input
                type="radio"
                name="payment"
                checked={payment === "visa"}
                onChange={() => setPayment("visa")}
                className="mr-3"
              />
              <span className="font-medium">VISA ************7870</span>
            </label>

            {/* GOOGLE PAY */}
            <label className="flex items-center border p-4 rounded-lg cursor-pointer">
              <input
                type="radio"
                name="payment"
                checked={payment === "gpay"}
                onChange={() => setPayment("gpay")}
                className="mr-3"
              />
              <span className="font-medium">Google Pay</span>
            </label>

            {/* CASH ON DELIVERY */}
            <label className="flex items-center border p-4 rounded-lg cursor-pointer">
              <input
                type="radio"
                name="payment"
                checked={payment === "cod"}
                onChange={() => setPayment("cod")}
                className="mr-3"
              />
              <span className="font-medium">Cash on Delivery</span>
            </label>

            {/* ADD NEW CARD */}
            <div className="border rounded-lg p-6 mt-6">

              <label className="flex items-center mb-4 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  checked={payment === "card"}
                  onChange={() => setPayment("card")}
                  className="mr-3"
                />
                <span className="font-medium">
                  Add New Credit / Debit Card
                </span>
              </label>

              <div className="space-y-4">

                <div>
                  <label className="text-sm font-medium">
                    Card Holder Name *
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded p-2 mt-1"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Card Number *
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded p-2 mt-1"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">

                  <div>
                    <label className="text-sm font-medium">
                      Expiry Date *
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full border rounded p-2 mt-1"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">
                      CVV *
                    </label>
                    <input
                      type="password"
                      className="w-full border rounded p-2 mt-1"
                    />
                  </div>

                </div>

                <label className="flex items-center text-sm">
                  <input type="checkbox" className="mr-2" />
                  Save card for future payments
                </label>

                <button className="bg-green-600 text-white px-6 py-2 rounded-full">
                  Add Card
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default PaymentMethod;