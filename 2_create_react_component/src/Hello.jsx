function Hello() {
  let myName = "Rai Bilal";
  let agecal = () => {
    let age = 25;
    return age;
  };

  return (
    <h1>
      Hey I am your master {myName}. my age is {agecal()}.
    </h1>
  );
}

export default Hello;
