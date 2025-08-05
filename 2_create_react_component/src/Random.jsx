function Random() {
  const randomNumber = Math.floor(Math.random() * 10);
  return (
    <div>
      <h2>Random Number: {Math.floor(randomNumber)}</h2>
    </div>
  );
}
export default Random;
