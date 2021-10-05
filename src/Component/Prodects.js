import React from 'react';
import Product from './Pages/Product';
function Prodects(props) {
    const {prodects}=props;

     return (
        <div className="col-9 prodects">
            <div className="row">
                {prodects.map(item=>
                    <Product key={item.id} item={item}/>
                )}
            </div>
        </div>
    )
}

export default Prodects;