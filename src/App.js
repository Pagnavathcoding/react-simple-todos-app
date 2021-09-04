import React from 'react';
import { useState } from 'react';
import "./index.css";
const idInfos = Date.now();
function Item({ dataInfos }) {
    const [toggle, setToggle] = useState(false);
    const [display, setDisplay] = useState(false);
    return (
        <>
            <div className="items" style={{ display: display ? "none" : null }} onClick={() => { setToggle(!toggle) }}>
                <li style={{ textDecoration: toggle ? "line-through" : "none", color: toggle ? "#61dafb" : "#fff" }}>{dataInfos.text}</li>
                <button id="delete" onClick={() => setDisplay(!display)}>×</button>
            </div>
        </>
    )
}
function List() {
    const [infos, setInfos] = useState([
        {
            id: idInfos,
            text: "Item 1"
        },
        {
            id: idInfos,
            text: "Item 2"
        },
        {
            id: idInfos,
            text: "Item 3"
        }
    ]);
    const [value, setValue] = useState('');
    function handleChange(e) {
        setValue(e.target.value);
    }
    function handleSubmit(e) {
        if (e.key === "Enter") {
            if (value === '') {
                return;
            }
            setValue('');
            setInfos([...infos, { id: idInfos, text: value }])
        }
    }
    function submitButton() {
        if (value === "") {
            return;
        }
        setValue('');
        setInfos([...infos, { id: idInfos, text: value }])
    }
    function removeItems() {
        setInfos([])
    }
    return (
        <div>
            <input type="text" placeholder="Enter..." value={value} onChange={handleChange} onKeyPress={handleSubmit} /><br />
            <button onClick={submitButton} id="btn">Add Item</button><br />
            <button onClick={removeItems} id="btn">Remove Items</button><br />
            {
                infos.map((data, index) => {
                    return <Item dataInfos={data} key={index} />
                })
            }
        </div>
    )
}
function App() {
    return (
        <div className="app">
            <List />
        </div>
    )
}

export default App;