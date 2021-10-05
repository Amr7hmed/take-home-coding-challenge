import React, { useContext, useEffect } from 'react';
import { Authcontext } from './Context';
import axios from 'axios';

class Data{
    constructor(Api){
        this.Api = Api;
    }
    async getData(){
        const response = await axios.get(this.Api);
        return response;
    }
}


export default function Productsapi() {

    const categoryApi = new Data('http://test-api.edfa3ly.io/category');
    const prodectsApi = new Data('http://test-api.edfa3ly.io/product');
        
    const authcontext = useContext(Authcontext);
    const {setcategory,setprodects} = authcontext;

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
    }, []);
    
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
    }, []);
    

return (<div></div>)}


