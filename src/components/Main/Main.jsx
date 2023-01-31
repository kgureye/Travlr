import React from 'react'
import './main.css'

/* Images */
import img from '../../assets/img (1).jpg'
import img2 from '../../assets/img (2).jpg'
import img3 from '../../assets/img (3).jpg'
import img4 from '../../assets/img (4).jpg'
import img5 from '../../assets/img (5).jpg'
import img6 from '../../assets/img (6).jpg'
import img7 from '../../assets/img (7).jpg'
import img8 from '../../assets/img (8).jpg'
import img9 from '../../assets/img (9).jpg'

/* Icons */
 import { HiOutlineLocationMarker, HiOutlineClipboardCheck } from 'react-icons/hi'
 import { AiFillStar } from 'react-icons/ai'

const Data = [
  {
  id:1,
  imgSrc: img,
  destTitle: 'Bora Bora',
  destLocation: 'New Zealand',
  grade: 'Rating',
  fees: '$700',
  description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities. ' 
  },


  {
  id:2,
  imgSrc: img2,
  destTitle: 'Machu Picchu',
  destLocation: 'Peru',
  grade: 'CULTURAL RELAX ',
  fees: '$600',
  description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.' 
  },


  {
  id:3,
  imgSrc: img3,
  destTitle: 'Great Barrier Reef',
  destLocation: 'Australia',
  grade: 'CULTURAL RELAX ',
  fees: '$700',
  description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is ‘lavish’ and ‘beauty’. Always interesting to be in this place'  
  },


  {
  id:4,
  imgSrc: img4,
  destTitle: 'Cappadocia',
  destLocation: 'Turkey ',
  grade: 'CULTURAL RELAX ',
  fees: '$800',
  description: '  According to the World Tourism Ranking, 45 Million people visit Turkey each year, and from that about 2 Million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activities '  
  },


  {
  id:5,
  imgSrc: img5,
  destTitle: 'Guanajuato',
  destLocation: 'Mexico',
  grade: 'CULTURAL RELAX ',
  fees: '$1100',
  description: 'A city in central Mexico, Guanajuato is known for its history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colors available. Always welcome.'  
  },


  {
  id:6,
  imgSrc: img6,
  destTitle: 'Cinque Terre',
  destLocation: 'Italy ',
  grade: 'CULTURAL RELAX ',
  fees: '$840',
  description: 'The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food! '  
  },


  {
  id:7,
  imgSrc: img7,
  destTitle: 'Angkor Wat',
  destLocation: 'Cambodia',
  grade: 'CULTURAL RELAX ',
  fees: '$790',
  description: 'Angkot wat represents the entire range of Khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia. This place is known for its luxurious stays and adventurous activities'  
  },


  {
  id:8,
  imgSrc: img8,
  destTitle: 'Taj Mahal',
  destLocation: 'India',
  grade: 'CULTURAL RELAX ',
  fees: '$900',
  description: 'An immense mausoleum of white marble, built-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the monument is breathtakingly beautiful. This place is known for its luxurious stays and adventurous activities' 
  },


  {
  id:9,
  imgSrc: img9,
  destTitle: 'Bali Island',
  destLocation: 'Indonesia',
  grade: 'CULTURAL RELAX ',
  fees: '$500',
  description: 'Bali is an Indonesian Island and one of the best holiday destinations in the Indonesian archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches.' 
  }, 
]

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">
          Mest populære reisemål
        </h3>
      </div>
      <div className="secContent grid">

        {
          Data.map(({ id, imgSrc, destTitle, destLocation, grade, fees, description }) => {
            return (
              <div  key={id} className="singleDestination">
                 {/* return single id from the map */}

                  <div className="imageDiv">
                     <img src={imgSrc} alt={destTitle} />
                  </div>

                  <div className="cardInfo">
                    <div className="continent flex">
                      <HiOutlineLocationMarker className="pin-icon" />
                      <span className="destInfo">{destTitle}, {destLocation} </span>

                      <div className="price">
                         <h5>{fees}</h5>
                      </div>
                    </div>

                    <div className="culture flex">
                       {/*  <span>{grade}</span> */}
                        <AiFillStar className="star-icon" />
                        <AiFillStar className="star-icon" />
                        <AiFillStar className="star-icon" />
                        <AiFillStar className="star-icon" />
                    </div>

                    <div className="desc">
                       <p>{description}</p>
                    </div>

                    <button className="btn flex">
                       Detaljer <HiOutlineClipboardCheck className="icon" />
                    </button>
                  </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main