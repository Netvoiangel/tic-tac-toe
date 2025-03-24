import { useState } from 'react';

export default function Player({ name, symbol }) {
    const [ isEditing, setIsEditing ] = useState(false);
    
    function handleSelect() {
        setIsEditing(true);
    }

    return (
        <li>
          <span className='player'>
            <span className='player-name'>{name}</span>
            <span className='player-symbol'>{symbol}</span>
          </span>
            {!isEditing ? (
                <button onClick={() => handleSelect()}>Edit</button>
            ) : <input></input>}
        </li>
    )
}