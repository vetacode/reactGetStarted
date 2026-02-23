//React components are JavaScript functions that return markup:

function MyButton() {
  return <button>I'm a button</button>;
}

// Now that you’ve declared MyButton, you can nest it into another component:

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
