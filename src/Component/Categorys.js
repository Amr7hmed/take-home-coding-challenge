import React, { useContext} from 'react';
import { Authcontext } from '../Store/Context';

export default function Categorys() {
    const authcontext = useContext(Authcontext);
    const {category,filterCategorys} = authcontext;

    return (<div className="category">
            <h4>Choose one of our Categories from below</h4>
            
                <div className="row">
                    {category.map(item=>
                        <div className="card bg-dark text-white col"
                    key={item.id}
                    onClick={()=> filterCategorys(item.id)}>
                        <img src={item.image} className="card-img"/>
                        <div className="card-img-overlay">
                            <h5 className="card-title">{item.name}</h5>
                        </div>
                    </div>)}
                </div>
        </div>)}
