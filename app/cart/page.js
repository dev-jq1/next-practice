export default function Cart() {
  let items = ["Tomatoes", "Pasta"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem item={items[0]} />
      <CartItem item={items[1]} />
    </div>
  );
}

//CartItem 컴포넌트 구현
function CartItem({ item }) {
  return (
    <div className="cart-item">
      <p>{item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
