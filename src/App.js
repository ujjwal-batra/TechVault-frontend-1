import "./App.css";
import MainContent from "./components/MainContent";
import RightTags from "./components/Tags";
import Header from "./components/header";
import Navbar from "./components/navbar_homepage";

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />

      <main>
        <div className="left-container">
          <div className="mainContent left-tab">
            <MainContent />
          </div>
        </div>

        <div className="right-container">
          <RightTags />
        </div>
      </main>
    </div>
  );
}

export default App;
