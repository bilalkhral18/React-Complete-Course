function Count({ count, setCount }) {
  console.log("new count is :", count);
  return (
    <div className="card">
      <button onClick={setCount}>count is {count}</button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  );
}

export default Count;
