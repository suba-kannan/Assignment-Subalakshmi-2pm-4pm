function Footer({ year }) {
  return <footer>© {year}</footer>;
}

export default function Task2() {
  return (
    <div>
      <h2>Task 2</h2>
      <Footer year={2026} />
    </div>
  );
}
