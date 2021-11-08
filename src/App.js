import { HomePage } from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Main } from "./styles/global";
import { Header } from "./components/Header/Header";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import { MoviePage } from "./pages/MoviePage/MoviePage";

const routes = [
  { path: "/", component: HomePage },
  { path: "/search/", component: SearchPage },
  { path: "/movies/:id", component: MoviePage },
];

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Main>
        {routes.map(({ path, component }) => (
          <Route exact path={path} component={component} key={path} />
        ))}
      </Main>
    </Router>
  );
}

export default App;
