import { useRef, useState, useEffect } from 'react';
import './card.css';
import Confetti from 'react-confetti'

const Card: React.FC = () => {

    const cardRef = useRef<HTMLDivElement>(null);
    let [width, setWidth] = useState(0);
    let [height, setHeight] = useState(0);

    useEffect(() => {
        const element = cardRef.current;
        if (element) {
            setWidth(element.offsetWidth);
            setHeight(element.offsetHeight - 40 );
            console.log('Width of .card:', width);
            console.log('Height of .card:', height);
            // Now you can use width and height as needed
        }
    }, []);

    return (
        <>
        <div className="card primary" ref={cardRef}>
        <Confetti
                width={width}
                height={height}
                opacity={0.4}
                gravity={0.03}
            />
            <div className="card-content">
                {/* <p className="title has-text-justified	"></p> */}
                <span className="is-size-6">
                    You've been invited to: 
                    <h3 className='is-size-1'>Rebecca's <strong className="has-text-purp is-underlined">surprise</strong> 30th Birthday.</h3>
                    <p>Date:<strong className="has-text-purp">Friday 26th April 2024</strong></p>
                    <p>Time:<strong className="has-text-purp">19:00</strong></p>
                    <p>Location:<strong className="has-text-purp">The Naval Club, L14 3NN</strong></p>

                </span>
            </div>
        </div>
        </>
    )
}

export default Card;