import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { menuItems } from "@/data/menu";
import { motion } from "framer-motion";
import { fadeUpSmooth, staggerContainer } from "@/lib/animations";
import momoImg from "@/assets/momo.jpg";

const BASE_PRICE = {
  Veg: 30,
  Soya: 40,
  Paneer: 50,
};

const MIN_ORDER_AMOUNT = 500;

export default function OrderList() {
  const [type, setType] = useState({});
  const [cart, setCart] = useState({});
  const [openCart, setOpenCart] = useState(false);

  function getMomoType(name) {
    if (name.includes("Paneer")) return "Paneer";
    if (name.includes("Soya")) return "Soya";
    return "Veg";
  }

  function sendToWhatsApp(cartItems, total) {
    const PHONE = "919405711522";

    let message = `🛒 *Momo Order Details*%0A%0A`;

    cartItems.forEach((item, i) => {
      message += `${i + 1}. *${item.name}*%0A`;
      message += `   ${item.variant} (${item.momoType})%0A`;
      message += `   Quantity: ${item.quantity}%0A`;
      message += `   Price: ₹${item.price * item.quantity}%0A%0A`;
    });

    message += `------------------------%0A`;
    message += `💰 *Total Amount:* ₹${total}%0A`;
    message += `------------------------%0A%0A`;

    message += `📌 *Payment Details*%0A`;
    message += `Please make payment to confirm your order and also your payment screenshot:%0A`;
    message += `📞 *919405711522*%0A%0A`;

    message += `📍 *Delivery Location*%0A`;
    message += `Please send your *live location* or *address* here.%0A%0A`;

    message += `🙏 Thank you for ordering!`;

    window.open(`https://wa.me/${PHONE}?text=${message}`, "_blank");
  }

  function changeQty(item, delta, price, momoType, variant) {
    const key = `${item.id}-${variant}`;

    setCart((prev) => {
      const existing = prev[key];
      const newQty = (existing?.quantity || 0) + delta;

      if (newQty <= 0) {
        const copy = { ...prev };
        delete copy[key];
        return copy;
      }

      return {
        ...prev,
        [key]: {
          id: item.id,
          name: item.name,
          variant,
          momoType,
          price,
          quantity: newQty,
        },
      };
    });
  }

  const cartItems = Object.values(cart);
  const total = cartItems.reduce((s, i) => s + i.price * i.quantity, 0);
  const canCheckout = total >= MIN_ORDER_AMOUNT;

  return (
    <>
      <section className="px-6 md:px-10 py-24 bg-[#0b0b0b] min-h-screen">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-14 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Specials Menu
        </motion.h2>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {menuItems.map((item) => {
            const selected = type[item.id] || "Steam";
            const momoType = getMomoType(item.name);
            const price =
              BASE_PRICE[momoType] + (selected === "Fried" ? 10 : 0);

            const quantity = cart[`${item.id}-${selected}`]?.quantity || 0;

            return (
              <motion.div key={item.id} variants={fadeUpSmooth}>
                <Card className="bg-zinc-900 border border-zinc-800 rounded-2xl">
                  <img
                    src={momoImg}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-t-2xl"
                  />

                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white">
                      {item.name}
                    </h3>

                    <p className="text-zinc-400 text-sm mt-1">
                      {item.description}
                    </p>

                    <div className="flex gap-2 mt-4">
                      {["Steam", "Fried"].map((t) => (
                        <button
                          key={t}
                          onClick={() =>
                            setType((p) => ({ ...p, [item.id]: t }))
                          }
                          className={`px-4 py-1.5 rounded-full text-xs border ${
                            selected === t
                              ? "bg-orange-500 text-black"
                              : "border-zinc-700 text-zinc-400"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 mt-5">
                      <button
                        onClick={() =>
                          changeQty(item, -1, price, momoType, selected)
                        }
                        className="px-3 py-1 border border-zinc-700 rounded"
                      >
                        −
                      </button>

                      <span className="text-white min-w-[20px] text-center">
                        {quantity}
                      </span>

                      <button
                        onClick={() =>
                          changeQty(item, 1, price, momoType, selected)
                        }
                        className="px-3 py-1 border border-zinc-700 rounded"
                      >
                        +
                      </button>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-between items-center mt-6 px-2">
                  <p className="text-orange-400 font-bold">₹{price}</p>

                  <button
                    onClick={() =>
                      changeQty(item, 1, price, momoType, selected)
                    }
                    className="bg-red-500 text-white text-sm px-6 py-2 rounded-full"
                  >
                    {quantity === 0 ? "Add" : "Add More"}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {cartItems.length > 0 && (
        <div className="fixed bottom-4 inset-x-0 px-4 z-50">
          <Card className="max-w-4xl mx-auto bg-black border border-zinc-800">
            <CardContent className="flex justify-between items-center py-4 px-6">
              <p className="text-white text-sm">{cartItems.length} item(s)</p>
              <p className="text-orange-400 font-bold">₹{total}</p>
              <button
                disabled={!canCheckout}
                onClick={() => canCheckout && setOpenCart(true)}
                className={`px-6 py-2 rounded-full text-sm font-semibold ${
                  canCheckout
                    ? "bg-green-500 text-black"
                    : "bg-zinc-700 text-zinc-400"
                }`}
              >
                Order Now
              </button>
            </CardContent>
          </Card>
        </div>
      )}

      {openCart && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="w-[70vw] h-[70vh] bg-zinc-900 rounded-2xl p-6 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">Your Order</h2>

              <button
                onClick={() => setOpenCart(false)}
                className="text-zinc-400 hover:text-white text-xl"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto pr-2">
              {cartItems.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between py-3 border-b border-zinc-800"
                >
                  <div>
                    <p className="text-white">{item.name}</p>
                    <p className="text-xs text-zinc-400">
                      {item.variant} · {item.momoType}
                    </p>
                  </div>
                  <p className="text-orange-400">
                    ₹{item.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-zinc-800">
              <div className="flex justify-between text-white font-semibold mb-4">
                <span>Total</span>
                <span>₹{total}</span>
              </div>

              <button
                onClick={() => sendToWhatsApp(cartItems, total)}
                className="w-full py-3 rounded-lg font-semibold bg-green-500 text-black"
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
