import React from 'react';
import Color from './Color';
import Rating from './Rating';
import Rangeprice from './Rangeprice';
function Filters() {

    return (
        <div className="col-3 filters">
            <h6>Filters</h6>
            <Rangeprice/>
            <Color/>
            <Rating/>
        </div>
    )
}

export default Filters;


