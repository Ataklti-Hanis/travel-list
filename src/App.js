export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stat />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far away 💼</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>What do you for your 😍 trip?</h3>
    </div>
  );
}
function PackingList() {
  return <div className="list">LIST</div>;
}
function Stat() {
  return (
    <footer className="stats">
      <em>👜 You have X itemsl on you list, and you already packed X(x%)</em>
    </footer>
  );
}
