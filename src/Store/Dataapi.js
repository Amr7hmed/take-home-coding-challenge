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

export const categoryApi = new Data('http://test-api.edfa3ly.io/category');
export const prodectsApi = new Data('http://test-api.edfa3ly.io/product');



