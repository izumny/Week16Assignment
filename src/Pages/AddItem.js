import React from 'react';
import { useState } from 'react'  //used state hook and effect fook
import AddItemForm from '../Components/AddItemForm';
import ImageViewer from '../Components/ImageViewer';

function AddItem() {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems([item, ...items]);
    }

    return(
        <>
            <div>
                <h3 className="h3--additem">Add Item Room</h3>
                <AddItemForm addItem={addItem} />
                <ImageViewer />
            </div>
        </>
    );
}

export default AddItem;
