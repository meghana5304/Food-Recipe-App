import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'

const MealInfo=()=>{
    const {mealid}=useParams();
    const[info,setInfo]=useState(null);
    const getInfo=async()=>{
        const get=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
        const jsonData=await get.json();
        //console.log(jsonData.meals[0]);
        setInfo(jsonData.meals[0]);
    }
    useEffect(()=>{
        getInfo();
    },[mealid]);
    /*if(info!=""){
        getInfo();
    }*/
   /*if(info!=""){
        getInfo()
   }*/
    return(
        <div>
            {!info? ("Data Not Found"):
            (
                <div className="mealInfo">
                    <img src={info.strMealThumb}/>
                    <div className="info">
                        <h1>Recipe Details</h1>
                        <button>{info.strMeal}</button>
                        <h3>Instructions:</h3>
                        <ul className="inst">
                            {info.strInstructions
                                .split('.')
                                .filter((instruction) => instruction.trim() !== '') 
                                .map((step, index) => (
                                    <li key={index}>{step.trim()}</li>
                                ))}
                        </ul>
                    </div>
            
                </div>
            )}
        </div>
    )
}
export default MealInfo