import './App.css';
import List from './Components/List/List';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <section className="board-details">
        <div className="board-details-list">
        <List />
        <List />
        <List />
        <List />
        <List />
        
        </div>

      </section>
    </>
  );
}

export default App;
