import "./css/App.css";
import Footer from "./components/Footer/Footer.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import Card from "./components/Card/Card.tsx";
import Searchbar from "./components/Searchbar/Searchbar.tsx";
import { cardInfo } from "./data/cardInfo.ts";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <h1>Miku blog</h1>
        <Searchbar></Searchbar>
        {cardInfo.map((card) => {
          return <Card data={card}></Card>;
        })}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
