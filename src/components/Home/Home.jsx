import React, { useEffect } from 'react'
import './home.css'
import video from '../../assets/video.mp4'
import { GrLocation } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'
import { FiFacebook } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { SiTripadvisor } from 'react-icons/si'
import { BsListTask } from 'react-icons/bs'
import { TbApps } from 'react-icons/tb'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {

  // scroll animation w/ useEffect
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="home">
      <div className="overlay">
        <video src={video} muted autoPlay loop  type="video/mp4"></video>
      </div>

      {/* Home Content */}

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Våre pakkereiser
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
             Finn din neste reise
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
              <label htmlFor="city">Søk etter destinasjon:</label>
              <div className="input flex">
                <input type="text" placeholder="Skriv inn reisemål" />
                <GrLocation className="icon" />
              </div>
           </div>

           <div className="dateInput">
              <label htmlFor="date">Ankomst</label>
              <div className="input flex">
                <input type="date"  />
              </div>
           </div>
           <div className="dateInput">
              <label htmlFor="date">Avreise</label>
              <div className="input flex">
                <input type="date"  />
              </div>
           </div>

           <div className="priceInput">
              <div className="label_total flex">
                <label htmlFor="price">Maks pris: </label> &nbsp;
                <h3 className="total"> 10000,- </h3>
              </div>
              <div className="input flex">
                <input type="range" max="10000" min="5000"/>
              </div>
           </div>

            <div className="searchOptions flex">
                <HiFilter className="icon" />
                <span>Flere filtere</span>
            </div>
        </div>

        
      </div>



    </section>
  )
}

export default Home




