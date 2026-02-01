import './App.css'

function Welcome() {
  return <h2>Welcome to React!</h2>;
}

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Welcome />  
      <Welcome />  
    </div>
  );
}

export default App;