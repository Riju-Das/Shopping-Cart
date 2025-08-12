import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Link, NavLink, Outlet } from 'react-router-dom'
import NavBar from './components/navbar'

function App() {

  const [storeItems, setStoreItems] = useState([])
  const [browserLoading , setBrowserLoading] = useState(true)
  const [cartItems, setCartItems] = useState([])

  async function fetchGameByIds() {
    const res = await fetch(`https://fakestoreapi.com/products/`)
    const data = await res.json()
    setBrowserLoading(false)
    setStoreItems(data);
  }

  useEffect(() => {
    fetchGameByIds()
  }, []);

  useEffect(() => {
    const filterCart = cartItems.filter(item => item.count!==0)
    if(filterCart.length !== cartItems.length){
      setCartItems(filterCart)
    }
  }, [setCartItems, cartItems]);

  return (
    <div className=' w-screen h-screen md:text-2xl overflow-x-hidden'>
      <NavBar cartItems={cartItems} />
      <main className=' -z-20 h-[calc(100vh-5rem)] md:h-[calc(100vh-5.6rem)]   '>
        <Outlet context={{storeItems, browserLoading ,cartItems, setCartItems}}/>
      </main>
    </div>
  )
}

export default App
