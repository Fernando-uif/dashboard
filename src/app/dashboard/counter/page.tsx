import { Counter } from "@/shopping-cart/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Counter Page",
  description: "Un simple contador",
};
export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en carrito de compra</span>
      <Counter />
    </div>
  );
}
