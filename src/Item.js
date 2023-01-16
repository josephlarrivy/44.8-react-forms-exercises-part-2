import React from "react";

const Item = ({ id, item, removeItem }) => {

    const handleClick = evt => {
        const id =  evt.target.parentNode.id;
        removeItem(id)
        
    }

    return (
        <>
            <li id={id}>{item}  <button onClick={handleClick}>  remove</button></li>
        </>
    )

}

export default Item;


