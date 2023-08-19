import './animalShow.css';
import { useState } from 'react';
import bird from './svg/bird.svg';
import cow from './svg/cow.svg';
import cat from './svg/cat.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import horse from './svg/horse.svg';
import heart from './svg/heart.svg';

const svgMap = { bird, cat, cow, dog, gator, horse };

function AnimalShow({type}) {
    const [ click, setHeart ] = useState(0);

    const handleOnClick = () => {
        setHeart( click + 1 );
    }

    return (
        <div className='animal-show' onClick={handleOnClick}>
            <img className='animal' alt='Animals' src={svgMap[type]} />
            <img className='heart'
                alt='heart'
                src={heart}
                style={{ width: 10 + 10 * click + 'px' }}
            />
        </div>
    )
}

export default AnimalShow;
