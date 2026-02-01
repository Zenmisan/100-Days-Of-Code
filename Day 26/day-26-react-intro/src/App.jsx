import './App.css'
import Card from './card.jsx';
function Welcome() {
  return <h2>Welcome to React!</h2>;
}

function App() {
  return (
 <>
      <h1>My Team</h1>
      <Card name="Zenmisan" role="Developer" />
      <Card name="Mr. Nobody" role="Strategist" />
      <Card name="Paul" role="Pilot" />
    </>
  );
}

export default App;