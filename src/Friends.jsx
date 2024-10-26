export default function Friends({ friend }) {
    // console.log(friend);
    const styleFriend = {
      border: "1px solid red",
      padding: "10px",
      margin: "5px",
        borderRadius: "5px",
      gap: "10px"
    };
    const { name, Age, Address } = friend
    console.log(name)
    return (
      <div style={styleFriend}>
        <p>Name: {name}</p>
            <p>Age: {Age}</p>
            <p>Address : {Address} </p>
      </div>
    );
}
