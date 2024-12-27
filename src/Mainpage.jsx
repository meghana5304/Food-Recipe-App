import React,{useState} from "react";
import MealCards from "./MealCards";
const Mainpage=()=>{
    const [data,setData]=useState();
    const [search,setSearch]=useState("");
    const [msg,setMsg]=useState("")
    const handleInput=(eve)=>{
        setSearch(eve.target.value);
    }
    const myFun=async()=>{
        if(search===""){
            setMsg("Please Enter Something")
        }
        else{
            const get=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const jsonData=await get.json();
            setData(jsonData.meals);
            setMsg("Your Search Results: ")
        }
        
    }
    return(
        <>
            <h1 className="head">FOOD RECIPE APP</h1>
            <div className="container">
                <div className="searchBar">
                    <input type="text" placeholder="Search Meals" onChange={handleInput}/>
                    <button onClick={myFun}>Search</button>
                </div>
                <h3 className="msg">{msg}</h3>
                <div>
                    <MealCards detail={data}/>
                </div>
            </div>   
        </>
    )
}
export default Mainpage