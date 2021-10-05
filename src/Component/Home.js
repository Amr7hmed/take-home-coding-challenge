import React, { useContext } from 'react';
import Prodects from './Prodects';
import Filters from './Filters/Filters';
import Categorys from './Categorys';
import { Authcontext } from '../Store/Context';

function Home() {
const authcontext = useContext(Authcontext);
const {prodectfilter} = authcontext;

    return (
        <div>
            <Categorys/>
            <br/>
                <div className="row">
                    <Filters/>
                    <Prodects prodects={prodectfilter}/>
                </div>
    </div>
    )
}

export default Home;