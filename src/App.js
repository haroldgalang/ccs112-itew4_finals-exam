import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header";
import About from "./components/about";
import Teams from "./components/teams";
import Footer from "./components/footer";

function App() {
  return (
    <body>
      <div className="App">
        <header className="App-header" id="header">
          <Header />
        </header>
        <main>
          <About />
          <Teams />
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </body>
  );
}

export default App;
