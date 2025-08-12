import { useState } from "react";
import { useOutletContext } from "react-router-dom"


export default function Browse(){

  const { storeItems , cartItems , setCartItems } = useOutletContext();

  const [browserSearch , SetBrowserSearch] = useState("")

  const handleAddtoCart = (id, title , image, price , description)=>{
    setCartItems(prev => [...prev, { id: id, title:title, image:image, price:price,description:description, count: 1 }])
  }
  const handleInc = (id)=>{
    setCartItems((prev)=>{
      return prev.map((item)=>{
        return (item.id==id && item.count<20)?(
          {...item , count:item.count+1}
        ):(
          item
        )
      })
    })
  }

  const handleDec = (id)=>{
    setCartItems((prev)=>{
      return prev.map((item)=>{
        return (item.id == id && item.count>0)?(
          {...item, count:item.count-1}
        ):(
          item
        )
      })
    })
  }

  const filteredItems = storeItems.filter((item)=>{
    return item.title.toLowerCase().includes(browserSearch.toLowerCase())
  })


  return (
    <div className="  text-black bg-gray-200 border-black min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6.25rem)]">
      <div className=" text-start text-black font-Poppins text-5xl font-bold p-5 md:mx-5 px-10 ">
        SHOP
      </div >
      <div className="justify-self-start mb-5 md:mx-15  mx-10 text-base ">
        <input type="text" 
        name="searchBrowser" 
        placeholder="Search" 
        id="searchBrowser" 
        className="bg-white md:w-80 w-60 h-10 rounded-2xl border-2 px-5 border-gray-300 "
        onChange={(e)=>SetBrowserSearch(e.target.value)}
        />
      </div>
      <div className=" flex items-center justify-center flex-wrap ">
        {filteredItems.map((items)=>{
          const isInCart = cartItems.some(cartitem => cartitem.id === items.id);
          
          return (
            <div key={items.id} className=" shadow-lg bg-white m-5 w-100 h-130 rounded-2xl ">
              <div className="h-60 flex justify-center items-center">
                <img src={items.image} alt=""  className="object-contain w-50 h-50"/>
              </div>
              <div className="h-23 flex items-center">
                <div className="font-Poppins text-xl font-bold mx-6 text-start">{items.title} </div> 
              </div>
              <div>
                <div className=" text-xl mx-6 md:my-4 my-3 text-start" >Price: ${items.price}</div>
              </div>
              
              { !isInCart?(
                  
                <div className="select-none  relative right-0 h-10 m-auto my-10  flex items-center justify-self-end-safe bg-black text-white rounded-4xl justify-center w-35 cursor-pointer text-[1.2rem]"
                  onClick={()=>handleAddtoCart(items.id, items.title , items.image, items.price , items.description)}
                >
                  Add to Cart +
                </div>
                  
                ): (
                  
                <div className="  select-none relative text-3xl  h-10 m-auto my-10  flex items-center  border-2 border-black rounded-4xl  w-35 text-[1.2rem] justify-around"
                >
                  <div className="text-2xl flex items-center justify-center h-full text-center w-10 cursor-pointer"
                    onClick={()=>handleDec(items.id)}
                  >-</div>
                  <div>
                    {cartItems.find(item=>item.id===items.id).count}
                  </div>
                  <div 
                    className="text-3xl m-0 p-0 flex items-center justify-center w-10 cursor-pointer"
                    onClick={()=>handleInc(items.id)}
                  >+</div>
                </div>
                
                )
              }

            </div>
          )
        })}
      </div>

    </div>
  )
}