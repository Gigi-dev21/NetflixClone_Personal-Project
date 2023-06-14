import "./App.css";
// BOOTSTRAP///
import "../src/Resources/bootstrap.css";
//////
import Header from "./Components/header/Header";
import Nav from "./Components/nav/Nav";
import Row from "./Components/rows/Row";
import requestPage from "./requests/requestPage";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Row
        title="NETFLIX ORGINALS"
        fetchUrl={requestPage.fetchNetflix0riginals}
        isLargeRow
      />
      <Row title="TRENING NOW" fetchUrl={requestPage.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requestPage.fetchTopRatedMovies} />
      <Row title="ACTION MOVIES" fetchUrl={requestPage.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requestPage.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requestPage.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={requestPage.fetchRomanceMovies} />
    </div>
  );
}

export default App;
