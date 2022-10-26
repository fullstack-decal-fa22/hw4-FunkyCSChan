import React, { useState } from 'react';
/* Add any imports you think you might need here! */
import Color from './Color.js';
import Feed from './Feed.js';
const Menu = (props) => { 
    return (
      <div className="colorOptions">
        <Color color = "blue" handleClick = {props.hand} ></Color>
        <Color color = "red" handleClick = {props.hand}></Color>
        <Color color = "green" handleClick = {props.hand}></Color>
        <Color color = "black" handleClick = {props.hand}></Color>

      </div>
    );
}

export default Menu;