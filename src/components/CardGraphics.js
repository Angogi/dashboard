import React from 'react';
import '../assets/css/CardGraphics.css';
import {Line} from 'react-chartjs-2';

function CardGraphics(props) {

    
    const data={
        labels: ["Enero", "febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        datasets:[
            {
                label:"Expedientes por mes",
                fill:false,
                backgroundColor: 'rgba(73, 15, 135, 1)',
                borderColor: 'rgba(73, 15, 135, 1)',
                pointBorderColor : 'rgba(73, 15, 135, 1)',
                pointBorderWidth : 1,
                pointHoverRadius: 5, 
                pointHoverBackgroundColor: 'rgba(73, 15, 135, 1)',
                pointHoverBorderColor: 'rgba(73, 15, 135, 1)',
                pointRadius: 1,
                pointHitRadius:10,
                data: [.17, 19, 156, 367, 565, 1198, 845, 504, 357, 750, 789, 823]
            }
           
        ]
    }
    return (
        <div className="graphicContainer">
            <Line data={data}/>
        </div>
    )
}


export default CardGraphics

