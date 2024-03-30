import React from 'react';

import { useState } from 'react'  //used state hook and effect fook
import AddItemForm from '../Components/AddItemForm';

function AddItem() {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems([...items, item]);
    }

    return(
        <>
            <div>
                <h3>Add item below</h3>
                <AddItemForm addItem={addItem} />
            </div>
        </>
    );
}

export default AddItem;
