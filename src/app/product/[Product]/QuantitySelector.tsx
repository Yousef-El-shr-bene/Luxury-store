import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function QuantitySelector({ onQuantityChange }: { onQuantityChange: (quantity: number) => void }) {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    if (quantity < 3) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <Button variant="outline" size="icon" onClick={decrease}>-</Button>
      <span className="text-lg font-medium">{quantity}</span>
      <Button variant="outline" size="icon" onClick={increase}>+</Button>
    </div>
  );
}
