import React, { useState } from 'react';
import './Character.css';

const Character = (props) => {
    // Name
    const [name, setName] = useState(props.name)

    // Health
    const [health, setHealth] = useState('150')

    // Stamina
    const [stamina, setStamina] = useState('200')

    // Gold
    const [gold, setGold] = useState('75')

    return (
        <div>
            <h2>{name}'s Bio:</h2>
            <p>Race: {props.race}</p>
            <p>Status: <br />
                Health at {health}<br />
                Stamina at {stamina}<br />
            </p>
            <p>Gold: {gold}</p>
            <p className={props.comment ? 'visible' : 'hidden'}>Comment: {props.comment}</p>

            <button onClick={() => {
                setHealth(parseInt(health) + 10);
                setGold(parseInt(gold) - 2);
            }}>
                Add 10 health (Costs 2 Gold)
            </button>
        </div>
    )
}

export default Character;