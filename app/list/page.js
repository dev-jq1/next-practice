export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((el, idx) => {
        return (
          <div className="food" key={idx}>
            <img src={`/food${idx}.png`} className="food-img" />
            <h4>{el} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
