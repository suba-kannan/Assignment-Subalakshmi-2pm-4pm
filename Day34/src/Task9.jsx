function Task9() {
  const data = [];

  return (
    <div>
      <h2>9. Conditional No Data</h2>
      {data.length === 0 ? <p>No data available</p> : <p>Data Found</p>}
    </div>
  );
}

export default Task9;
