import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!
    const [allposts, setallposts] = useState([]);
    const handle = (col)=> {
        var a = [...allposts];
        a.push(col);
        setallposts(a);
    };

    /* Use the map() function to render multiple Blocks! */
    const posts = allposts.map((color)=><Block key={color} color = {color}></Block>); // TODO: edit this variable

    return (
        <div>
            <Menu hand = {handle}></Menu>
            {/* Below is where all of your Blocks should render! */}
            {posts}
        </div>
    );
}

export default Feed;