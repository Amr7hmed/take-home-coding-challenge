import React from 'react';
import  Stars  from './Stars';


export default function Product(props) {
    const {item}=props;
    const {color,name,image,price,rating}=item;
    return (
        <div className="col-md-6 col-sm-12 mb-4 products">
            <div className="card">
                    <div className="productsimg">
                        <img src={image} className="card-img-top" alt="..."/>
                    </div>
                <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p>price : {price} $</p>
                        <p> Color : {color}</p>
                        <Stars rating={rating}/>
                        <button type="button" className="btn btn-dark">
                            Add Cart
                        </button>
                </div>
        </div>
        </div>
    )}
