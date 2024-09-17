import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { enrutador } from "../routes/enrutador";
let router = createBrowserRouter(enrutador);

const Home = () => {
  return <RouterProvider router={router} />;
};

export default Home;
