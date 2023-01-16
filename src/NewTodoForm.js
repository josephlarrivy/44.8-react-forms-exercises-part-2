import React, { useState } from 'react';

const TodoForm = ({addItem}) => {

    const INITIAL_STATE = ' ';

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = evt => {
        evt.preventDefault();
        addItem({ ...formData });
        setFormData(INITIAL_STATE)
    };

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="item">Item: </label>
            <input
                id="item"
                type="text"
                name="item"
                placeholder="Item"
                value={formData.item}
                onChange={handleChange}
            />
            <button>Add Item</button>
        </form>
    )
}





export default TodoForm;