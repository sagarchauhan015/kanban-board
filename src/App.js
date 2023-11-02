import './App.css';
import Card from './Components/Card/Card';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <section className="board-details">
        <Card />
      </section>
    </>
  );
}

export default App;
