import React, { useEffect }from 'react'
import './footer.css'
import video2 from '../../assets/footer-video.mp4'
import { FiChevronRight, FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'



const Footer = () => {

  const year = new Date().getFullYear()

   // scroll animation w/ useEffect
   useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <section id="footer" className="footer" >
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
       <div className="footerCard flex">
          <div className="footerIntro flex">
             <div className="logoDiv">
                <a href="#" className="logo flex">
                  <MdOutlineTravelExplore className="icon" /> <span>Travlr.</span>
                </a>
             </div>

        <div className="contactDiv">
           <div  data-aos="fade-up" className="text">
             <small>KOM I KONTAKT</small>
             <h2>Reis med oss</h2>
           </div>

           <div className="inputDiv flex">
            <p>Vil du motta eksklusive reisetilbud? Abonner på nyhetsbrevet vårt!</p>
            <input className="inputField" data-aos="fade-up" type="text" placeholder="E-postadresse" />
            <button  data-aos="fade-up" className="btn flex" type="submit">
                Abonner <FiSend className="icon" />
            </button>
           </div>
       </div>

           <div  data-aos="fade-up" className="footerParagraph">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe adipisci corporis nesciunt unde cupiditate maiores natus
             </div>
          </div>

          <div className="footerLinks grid">
            {/* First group */}
             <div  data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
               <span className="groupTitle">
                 Vårt Byrå
               </span>

               <li className="footerList flex">
                 <FiChevronRight className="icon" />
                 Tjenester
               </li>

               <li className="footerList flex">
                 <FiChevronRight className="icon" />
                 Forsikring
               </li>

               <li className="footerList flex">
                 <FiChevronRight className="icon" />
                 Reisebyrå
               </li>

               <li className="footerList flex">
                 <FiChevronRight className="icon" />
                 Turisme
               </li>

               <li className="footerList flex">
                 <FiChevronRight className="icon" />
                 Betaling
               </li>
               
             </div>
             {/* Second group */}
             <div  data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
               <span className="groupTitle">
                 Partnere
               </span>

               <li className="footerList flex">
                 <FiChevronRight className="icon" />
                 Booking
               </li>

               <li className="footerList flex">
                 <FiChevronRight className="icon" />
                 Leiebil
               </li>

               <li className="footerList flex">
                 <FiChevronRight className="icon" />
                 HostelWorld
               </li>

               <li className="footerList flex">
                 <FiChevronRight className="icon" />
                 Trivago
               </li>

               <li className="footerList flex">
                 <FiChevronRight className="icon" />
                  TripAdvisor
               </li>
             </div>

              {/* Third group */}
             <div  data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
               <span className="groupTitle">
                 Siste sjanse
               </span>

               <li className="footerList flex">
                 <FiChevronRight className="icon" />
                  London
               </li>

               <li className="footerList flex">
                 <FiChevronRight className="icon" />
                 Milan
               </li>

               <li className="footerList flex">
                 <FiChevronRight className="icon" />
                 Paris
               </li>

               <li className="footerList flex">
                 <FiChevronRight className="icon" />
                 Dubai
               </li>

               <li className="footerList flex">
                 <FiChevronRight className="icon" />
                 New York
               </li>
               
             </div>

              {/* fourth group */}
              <div  data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
               <span className="groupTitle socialTitle">
                Følg oss på sosiale medier
               </span>

               <div  data-aos="fade-up" className="footerSocials flex">
               <AiOutlineTwitter className="icon" />
               <AiFillYoutube className="icon" />
               <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
              </div>
               
             </div>

             
          </div>

          <div className="footerDiv flex">
             <small>TRAVLR {year} &copy; Alle rettigheter reservert.</small>
          </div>
       </div>
      </div>
    </section>
  )
}

export default Footer