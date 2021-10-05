import React, { useContext } from 'react';
import Product from './Pages/Product';
import { Authcontext } from '../Store/Context';


export default function Prodects() {
    const authcontext = useContext(Authcontext);
    const {prodectfilter} = authcontext;

     return (
        <div className="col-9 prodects">
            <div className="row">
                {prodectfilter.map(item=>
                    <Product key={item.id} item={item}/>
                )}
            </div>
        </div>
    )}