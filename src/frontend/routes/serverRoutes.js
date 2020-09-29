import Home from "../pages/home/homePage";
import NotFound from "../components/NotFound/NotFoundComponent";
import Characters from "../pages/characters/charactersPage";

const routes = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: true,
    path: "/characters",
    component: Characters,
  },
  {
    name: "NotFound",
    component: NotFound,
  },
];
export default routes;
