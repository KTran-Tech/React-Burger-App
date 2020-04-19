
import React from 'react'

//Import a LOCAL module css file 
import classes from './BuildControls.module.css';

import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type:'salad'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'},
];

//STATELESS functional 'buildControls' component aka (Organizer for the controllers)
const buildControls = (props) => (
    /*We are using a <div> wrapper here because 
    we want to add a className to it which is 
    not possible with <Aux> or hoc*/
    <div className={classes.BuildControls}>

        {controls
            .map(ctrl =>(
            <BuildControl key={ctrl.label} label={ctrl.label}/>
            ))
        }

    </div>
);


//Exporting the the STATELESS component
export default buildControls;