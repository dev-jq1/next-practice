"use client";

import { useState } from "react";

export default function List() {
  const items = ["Tomatoes", "Pasta", "Coconut"];
  const [qty, setQty] = useState(Array(items.length).fill(0));
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {items.map((el, idx) => {
        return (
          <div className="food" key={idx}>
            <img src={`/food${idx}.png`} className="food-img" />
            <h4>{el} $40</h4>
            <span>{qty[idx]}</span>
            <button
              type="button"
              onClick={() => {
                const copy = [...qty];
                copy[idx] = copy[idx] + 1;
                setQty([...copy]);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}
