import React, { useContext,useState} from 'react';
import { Authcontext } from '../../Store/Context';

function Rangeprice() {
    const authcontext = useContext(Authcontext);
    const {filterPrice,filterpclear,range,setRangefilter} = authcontext;

    
    return (
        <div className="rangeprice">
            <p>Price Range</p>

            <input type="number"
                    value={range}
                    min="104"
                    max="1000"
                    step="50"
                    onChange={(event)=> setRangefilter(event)}/>

                <input id="range" 
                    type="range" 
                    className="form-control-range"
                    value={range}                    
                    min="104"
                    max="1000"
                    step="50"
                    onChange={(event)=> setRangefilter(event)}/>

                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-danger"
                        onClick={()=> filterpclear(1000)}>Clear</button>
                    <button type="button" className="btn btn-success"
                        onClick={()=> filterPrice(range)}>Filters</button>
                </div>
                <span id="output"></span>
        </div>
    )
}

export default Rangeprice;
