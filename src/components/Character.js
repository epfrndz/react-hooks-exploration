import React from 'react';
import './Character.css';

const Character = ({charInfo, updateCharInfo}) => {


    // Change location, reduce gold
    const changeLocation = (newLocation) => {
        const newGold = parseInt(charInfo.gold) - 1
        changeCharacterProperty({
            location: newLocation,
            gold: newGold
        })
    }

    // Update character property
    const changeCharacterProperty = (newPropsAndVals) => {
        const newCharInfo = {...charInfo,
            ...newPropsAndVals
        }

        updateCharInfo(newCharInfo)
    }

    return (
        <div>
            <h2>{charInfo.name}'s Bio:</h2>
            <p>Race: {charInfo.race}</p>
            <p>Status: <br />
                Health at {charInfo.health}<br />
                Stamina at {charInfo.stamina}<br />
            </p>
            <p>Gold: {charInfo.gold}</p>
            <p>Location: {charInfo.location}</p>
            <p className={charInfo.comment ? 'visible' : 'hidden'}>Comment: {charInfo.comment}</p>

            <button onClick={() => {
                changeCharacterProperty({
                    health: parseInt(charInfo.health) + 10,
                    gold: parseInt(charInfo.gold) - 2
                });
            }}>
                Add 10 health (Costs 2 Gold)
            </button>
            <br />
            <button onClick={() => {
                changeCharacterProperty({
                    stamina: parseInt(charInfo.stamina) + 5,
                    gold: parseInt(charInfo.gold) - 1
                });
            }}>
                Add 5 stamina (Costs 1 Gold)
            </button>
            <br />
            <button onClick={() => {
                changeCharacterProperty({
                    gold: parseInt(charInfo.gold) + 3,
                    health: parseInt(charInfo.health) - 10,
                    stamina: parseInt(charInfo.stamina) - 5
                })
            }}>
                Add 3 gold (Costs 10 Health and 5 Stamina)
            </button>
            <br />
            <br />

            <label htmlFor="nameChange">Change Player's Name: </label><br />
            <input 
                type="text"
                id="nameChange"
                onChange={(e) => {
                    changeCharacterProperty({name: e.target.value})
                }}
            />
            <div className={charInfo.comment ? 'visible' : 'hidden'}>
                <label htmlFor="commentChange">Change Comment: </label><br />
                <input 
                    type="text"
                    id="commentChange"
                    onChange={(e) => {
                        changeCharacterProperty({comment: e.target.value})
                    }}
                />
            </div>

            <form>
                <label htmlFor="locationChange">Change Location (Cost 1 Gold): </label><br />
                <input 
                    type="text"
                    id="locationChange"
                    name="locationChange"
                />
                <input type="submit" onClick={(e) => {
                    e.preventDefault();
                    changeLocation(e.target.parentElement.locationChange.value)
                }} />
            </form>

            <br />
            <br />
            <hr />
        </div>
    )
}

export default Character;