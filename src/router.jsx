import App from "./App";
import About from "./components/about";
import Browse from "./components/browse";
import Cart from "./components/cart";
import Home from "./components/home";
import Checkout from "./components/checkout";

const Router = [
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index :true,
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "browser",
        element: <Browse/>
      },
      {
        path: "cart",
        element: <Cart/>
      }
    ]

  },
  {
    path:"/checkout",
    element: <Checkout/>
  }
]

export default Router