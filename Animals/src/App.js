import './App.css';
import { useState } from 'react';
import AnimalShow from './animalShow';

function getRendomAnimal() {
    const animals = [ 'bird', 'cat', 'cow', 'dog', 'gator', 'horse' ];
    return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
    const [ animals, setAnimals ] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRendomAnimal()]);
    }

    const randomAnimals = animals.map( (animal, index) => {
        return <AnimalShow type={animal} key={index} />
    } );

    return <div className='app'>
        <button onClick={handleClick}>Add Animals</button>
        <div className='animal-list'>{randomAnimals}</div>
    </div>
}

export default App;
