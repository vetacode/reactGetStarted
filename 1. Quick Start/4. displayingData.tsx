const user = {
  name: 'Pinky',
  imageUrl: 'https://xxx.com'
}

function YourName {
return <h1>{user.name}</h1>;
}

function YourImage {
 return (
  <img
    className="avatar"
    src={user.imageUrl}
  />
);
}