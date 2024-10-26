import "./App.css";
import Members from "./Members";
import Friends from "./Friends";

function App() {
  const peoples = ["Apu", "Dipu", "Tipu", "Shipu", "Epu"];
  const friends = [
    { id: 1, name: "Moynul Islam", Age: 24, Address: "Azimpur, Dhaka" },
    { id: 2, name: "Abu Sayed", Age: 23, Address: "Sciencelab, Dhaka" },
    { id: 3, name: "Sifat Mia", Age: 25, Address: "Gazipur" },
    { id: 4, name: "Tapan Chakma", Age: 24, Address: "Rangamati" },
  ];

  return (
    <>
      <h1>Vite + React</h1>

      {peoples.map((people) => (
        // <li>Name: {people}</li>
        <Members key={people} name={people}></Members>
      ))}

      <h2>My Friends</h2>
      {friends.map((friend) => (
        // console.log(friend);
        <Friends key={friend.id} friend={friend}></Friends>
      ))}
    </>
  );
}

export default App;
