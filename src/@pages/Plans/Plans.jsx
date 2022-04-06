import {React,useState} from 'react'
import './Plans.scss';
import DosMeses from './DosMeses/DosMeses';
import CuatroMeses from './CuatroMeses/CuatroMeses';
export default function Plans(){

    const [flag, setflagPlans] = useState(true);

    return(
        <><div className="c-plans" id="plans">
        
            <div className="c-plans__mainContent">
            <div className="descriptionContent-title">
                PLANES DE ENTRENAMIENTO Y NUTRICIóN
            </div>
            <div className="text-description">
                <hr/>
               
                <button className="plans-button" onClick={()=>{setflagPlans(true)}} style={flag?{background:'rgb(2, 95, 28)'}:{background:'#011601'}} >2 MESES</button>
                <button className="plans-button button-off" onClick={()=>{setflagPlans(false)}} style={flag?{background:'#011601'}:{background:'rgb(2, 95, 28)'}}>4 MESES</button> 
                
                <hr/>

                {flag?<DosMeses/>:<CuatroMeses/>}
            </div>
            </div>
            <div className="c-plans-hr"></div>
        </div></>
    )
}