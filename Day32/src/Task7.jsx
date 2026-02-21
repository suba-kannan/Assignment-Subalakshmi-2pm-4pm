function Product({ name, price }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
    </div>
  );
}

export default function Task7() {
  return (
    <div>
      <h2>Task 7</h2>
      <Product name="Laptop" price={50000} />
    </div>
  );
}
