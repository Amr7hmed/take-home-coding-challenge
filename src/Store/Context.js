import React, { useEffect,useState} from 'react';
import {categoryApi,prodectsApi} from './Dataapi';

export const Authcontext=React.createContext();

export function Contextprovider(props) {

//==This variable is category
   const [category,setcategory]=useState([]);
   
//==This variable is for prodects
   const [prodects,setprodects]=useState([]);

//==This variable is for products after filtering
const [prodectfilter,setprodectfilter]=useState([]);

//Cheack input Color
const [cheackinput,setcheackinput]=useState(true);

//This variable is for Range Price
const [range,setrange]=useState(0);

//Adding data from the api to the variable Category
useEffect(() => {
   categoryApi.getData()
       .then(response => {
           setcategory(
               response.data
           )
       }).catch(error => {
           alert("Not Connect")
         });
}, [categoryApi]);

//Adding data from the api to the variable Prodects
useEffect(() => {
   prodectsApi.getData()
       .then(response => {
           setprodects(
               response.data
           )
       }).catch(error => {
           alert("Not Connect")
         });
}, [prodectsApi]);


//Add Data to Filter Array
useEffect(() => {
    setprodectfilter([...prodects]);
}, [prodects]);


/*==This Function is based on filtering
   products based on Categorys==*/

const filterCategorys = (buttonid) =>{
    const filteredProudect = prodects.filter
    (item => item.categoryId ===  buttonid);
    setprodectfilter(filteredProudect);
  }

/*==This Function is based on filtering
   products based on Color==*/

const filterColor = (event) =>{
    setcheackinput(true);
    const filteredProudect = prodects.filter
    (item => item.color ===  event.target.value);
    setprodectfilter(filteredProudect);
  }

/*==This Function is based on filtering
   products based on Rating==*/

const filterRating = (buttonrating) =>{
    const filteredProudect = prodects.filter
    (item => item.rating ===  buttonrating);
    setprodectfilter(filteredProudect);
  }

/*==This Function is based on clear filtering
   products based on color==*/

const clearcolorselect =()=>{
  setcheackinput(false);
  setprodectfilter(prodects);
}

/*==This Function is based on filtering
   products based on price==*/

const filterPrice = (event) =>{
  const filteredProudect = prodects.filter
  (item => item.price <=  event);
  setprodectfilter(filteredProudect);
}

/*==This Function is based on changing the value of
     the variable for the value of the input==*/
     
const setRangefilter = (event) =>{
  const value = parseInt(event.target.value);
  setrange(value)
}

/*==This Function is based on clear filtering
   products based on Price==*/
const filterpclear =(e)=>{
  const filteredProudect = prodects.filter
  (item => item.price <=  e);
  setprodectfilter(filteredProudect);
  setrange(0);
}

const value={
        category:category,
        setcategory:setcategory,
        prodects:prodects,
        setprodects:setprodects,
        prodectfilter:prodectfilter,
        setprodectfilter:setprodectfilter,
        filterCategorys:filterCategorys,
        filterColor:filterColor,
        filterRating:filterRating,
        clearcolorselect:clearcolorselect,
        cheackinput:cheackinput,
        filterPrice:filterPrice,
        filterpclear:filterpclear,
        range:range,
        setrange:setrange,
        setRangefilter:setRangefilter
    }

    return (
        <Authcontext.Provider value={value}>
           {props.children}
        </Authcontext.Provider>
    )
}
