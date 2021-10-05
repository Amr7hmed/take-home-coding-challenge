import React, { useContext } from 'react';
import Prodects from './Prodects';
import Filters from './Filters/Filters';
import Categorys from './Categorys';

export default function Home() {

    return (<div>
                    <Categorys/>
                    <br/>
                    <div className="row">
                        <Filters/>
                        <Prodects/>
                    </div>
            </div>)}