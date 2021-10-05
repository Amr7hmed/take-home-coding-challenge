import React, { useContext } from 'react';
import { Authcontext } from '../../Store/Context';
import Stars from '../Pages/Stars';

function Rating() {
    const authcontext = useContext(Authcontext);
    const {prodectfilter,filterRating} = authcontext;

    const arraydata = new Set();
        function setrating(){
            prodectfilter.map(item=>
                arraydata.add(item.rating)
            )
        }

    setrating();
    const arrayrating = [...arraydata].sort();

    
    return (
        <div className="rating">
            <p>Rating</p>
            {arrayrating.map((rating,index)=>
            <div key={index}
             onClick={()=> filterRating(rating)} 
             className="stars">
                <Stars rating={rating}/>
            </div>
            )}
        </div>
    )
}

export default Rating;





