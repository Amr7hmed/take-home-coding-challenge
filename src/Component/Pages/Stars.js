import React from 'react';
import Sregular from '../svg/star-regular.svg';
import Ssolid from '../svg/star-solid.svg';


export default function Stars(props) {
    const arraysrc =[Ssolid,Ssolid,Ssolid,Ssolid,Ssolid];
    const {rating}=props;
    return (<>
                {arraysrc.
                    fill(Sregular,rating)
                    .map((item,index)=>
                    <img src={item} className="startimg" key={index}/>
                    )}
        </>
    )
}