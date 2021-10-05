import React, { useContext,useState} from 'react';
import { Authcontext } from '../../Store/Context';

function Color() {
    const authcontext = useContext(Authcontext);
    const {prodectfilter,filterColor,clearcolorselect,cheackinput} = authcontext;
    const [searchColor,setsearchColor]=useState("");


    const arraydata = new Set();
        function setcolor(){
            prodectfilter.map(item=>
                arraydata.add(item.color)
            )
        }
    
    setcolor();
    const arraycolor = [...arraydata];

    return (
        <div className="filltercolor">
        <p>Color Filter</p>
            <input 
                type="text"
                placeholder="Search...."
                className="search"
                onChange={(event)=> {
                    setsearchColor(event.target.value); 
                }}/>
            <div className="form-check">
                {arraycolor.filter((item)=>{
                    if(searchColor == ""){
                        return item
                    }else if(item.toLowerCase().includes(searchColor.toLowerCase())){
                        return item
                    }
                }).map((item,index)=>
                <div key={index} 
                onChange={(item)=> filterColor(item)}>
                    <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="color"
                        value={item} id="defaultCheck1" defaultCheck={cheackinput}/>
                        {item}
                    </label>
                </div>              
                )}
            </div>
            <button onClick={()=> clearcolorselect()} className="btn btn-danger">Clear</button>
        </div>
    )
}

export default Color;
