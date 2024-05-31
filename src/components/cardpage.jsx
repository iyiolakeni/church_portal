import parenting from '../assets/parenting.jpg'
import events from '../assets/EVENTS.png'
import connects from '../assets/connect.png'
import bibleReading from '../assets/onlinebiblereading.png'
import plan from '../assets/planavisit.png'
import location from '../assets/location.png'

const CardPage=()=>{
    const cards = [
        {id: 1, imageUrl: parenting},
        {id: 2, imageUrl: events},
        {id:3, imageUrl: connects},
        {id:4, imageUrl: bibleReading},
        {id:5, imageUrl: plan},
        {id:6, imageUrl: location},
    ]
    return (
        <div className='cardPage'>
        <div className="btn-group">
            <button>Download App</button>
            <button>Go to The Journey</button>
        </div>
        <div className="cardBody">
                {cards.map((card) => (
                    <div className="card" key={card.id}>
                        <div className="image"
                            style={{ backgroundImage: `url(${card.imageUrl})` }}>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default CardPage;