import React, { useState } from 'react';
import TodoForm from './NewTodoForm';
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {

    const INITIAL_STATE = [];

    const [items, setItems] = useState(INITIAL_STATE);

    const addItem = (newItem) => {
        setItems(items => [...items, {...newItem, id: uuidv4()}])
    }

    const removeItem = (id) => {
        setItems(items => items.filter(item => item.id !== id))
    }

    return (
        <>
            <h4>Add Item</h4>
            <TodoForm addItem={addItem}/>
            <br></br>
            <h4>Items</h4>
            <ul>
                {items.map(({id, item}) => <Item id={id} key={id} item={item} removeItem={removeItem}/>)}
            </ul>
        </>
    )
}


export default TodoList;