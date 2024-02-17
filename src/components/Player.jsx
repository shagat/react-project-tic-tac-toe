import { useState } from 'react';

export default function Player({ initialName, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editableName, setPlayerName] = useState(initialName);

    function handleEditClick() {
        setIsEditing(editing => !editing);
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    let playerName = <span className="player-name">{editableName}</span>;
    
    if (isEditing) {
        playerName = <input type="text" required value={editableName} onChange={handleChange}/>
    }

    return (
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}