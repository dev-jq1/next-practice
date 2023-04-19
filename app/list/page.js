"use client";
//"use client" 를 작성하지 않으면 default로 server component로 작동한다.
//server component에서는 react hook을 사용할 수 없다.
import { useState } from "react";

export default function List() {
  const items = ["Tomatoes", "Pasta", "Coconut"];
  //items의 크기만큼 배열 생성 후 초기값을 0으로 할당
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
