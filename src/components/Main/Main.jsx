import React, { useEffect } from 'react'
import './main.css'

/* Aos animations */
import Aos from 'aos'
import 'aos/dist/aos.css'

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
import img10 from '../../assets/img (10).jpg'
import img11 from '../../assets/img (11).jpg'
import img12 from '../../assets/img (12).jpg'

/* Icons */
 import { HiOutlineLocationMarker, HiOutlineClipboardCheck } from 'react-icons/hi'
 import { AiFillStar } from 'react-icons/ai'

const Data = [

  {
  id:1,
  imgSrc: img,
  destTitle: 'Bora Bora',
  destLocation: 'Stillehavet',
  grade: '',
  fees: 'kr 10500',
  description: 'Bora Bora er en fantastisk tropisk øy som ligger på Society Islands of French Polynesia, kjent for sitt turkise vann, frodige landskap og luksuriøse feriesteder. Enten du er ute etter avslapning, eventyr eller kulturelle opplevelser, har Bora Bora noe å tilby for alle.' 
  },


  {
  id:2,
  imgSrc: img2,
  destTitle: 'Machu Picchu',
  destLocation: 'Peru',
  grade: 'CULTURAL RELAX ',
  fees: 'kr 12000',
  description: 'Den mest kjente attraksjonen er Intihuatana-steinen, en unik utskåret stein som ble brukt av inkaene til astronomiske observasjoner. Den fantastiske utsikten over de omkringliggende fjellene og den unike arkitekturen gjør turistmålet til et must for enhver reisende.'  
  },


  {
  id:3,
  imgSrc: img3,
  destTitle: 'Great Barrier Reef',
  destLocation: 'Australia',
  grade: 'CULTURAL RELAX ',
  fees: 'kr 14000',
  description: 'Utforsk det mangfoldige marinelivet gjennom aktiviteter som snorkling, dykking og båtturer. Noen av de mest populære attraksjonene inkluderer de fargerike korallformasjonene, et mangfoldig utvalg av tropiske fisker, og møter med gigantiske havskilpadder og lekne delfiner.'  
  },


  {
  id:4,
  imgSrc: img4,
  destTitle: 'Kappadocia',
  destLocation: 'Turkey ',
  grade: 'CULTURAL RELAX ',
  fees: 'kr 4500',
  description: 'Kappadokia er en unik geologisk formasjon med fe skorsteiner, huleboliger og intrikate underjordiske byer. Luftballongturer gir en fantastisk utsikt over landskapet, mens Göreme friluftsmuseum og Zelve friluftsmuseum gir et innblikk i regionens rike historie og kultur.'
  },


  {
  id:5,
  imgSrc: img5,
  destTitle: 'Guanajuato',
  destLocation: 'Mexico',
  grade: 'CULTURAL RELAX ',
  fees: 'kr 13000',
  description: 'Guanajuato er en historisk by i Mexico kjent for sin fantastiske koloniale arkitektur, sjarmerende torg og livlige atmosfære. Noen av toppattraksjonene inkluderer Alhóndiga de Granaditas, et tidligere kornlager som nå huser et museum, og Templo de San Francisco, en vakker barokkkirke. '  
  },


  {
  id:6,
  imgSrc: img6,
  destTitle: 'Cinque Terre',
  destLocation: 'Italy ',
  grade: 'CULTURAL RELAX ',
  fees: 'kr 4800',
  description: 'Cinque Terre, en fantastisk kystregion som består av fem landsbyer som ligger på klipper med utsikt over Middelhavet. Besøkende kan gå de naturskjønne stiene som forbinder landsbyene og nyte den fantastiske utsikten, eller ta en båttur for å se regionen fra havet.'
  },


  {
  id:7,
  imgSrc: img7,
  destTitle: 'Angkor Wat',
  destLocation: 'Kambodsja',
  grade: 'CULTURAL RELAX ',
  fees: 'kr 4000',
  description: 'Angkor Wat er et kompleks av templer bygget på 1100-tallet og er det største religiøse monumentet i verden. De fantastiske steinutskjæringene og de intrikate detaljene i templene gir et glimt inn i Khmer-imperiets rike historie og kulturelle arv.'
  },


  {
  id:8,
  imgSrc: img8,
  destTitle: 'Taj Mahal',
  destLocation: 'India',
  grade: 'CULTURAL RELAX ',
  fees: 'kr 11000',
  description: 'Et av de mest kjente landemerkene i verden. Det unike mausoleet ble bygget på 1600-tallet av en Mughal-keiser til minne om sin kone og som et bevis på kjærlighet og hengivenhet. De intrikate utskjæringene og de fantastiske marmordetaljene gjør det til et must-besøk destinasjon.'
  },


  {
  id:9,
  imgSrc: img9,
  destTitle: 'Bali',
  destLocation: 'Indonesia',
  grade: 'CULTURAL RELAX ',
  fees: 'Kr 20000',
  description: 'Bali Island er kjent for sine fantastiske strender, pulserende kultur og åndelige atmosfære. Øya er også hjemsted for historiske templer, inkludert Uluwatu-tempelet, som tilbyr en fantastisk utsikt over kysten, og Tanah Lot-tempelet, som er bygget på en fjellformasjon omgitt av havet' 
  },


  {
    id:10,
    imgSrc: img10,
    destTitle: 'Gran Canaria',
    destLocation: 'Kanariøyene',
    grade: 'CULTURAL RELAX ',
    fees: 'kr 5000',
    description: 'Gran Canaria er kjent for sine vakre strender, fantastiske landskap og rike kulturarv. Noen av attraksjonene du må besøke inkluderer den livlige byen Las Palmas, den historiske byen Agaete og Roque Nublo, en vulkansk fjellformasjon som tilbyr panoramautsikt over øya.'
    },

    {
      id:11,
      imgSrc: img11,
      destTitle: 'Burj Al Arab',
      destLocation: 'Forente Arabiske Emirater',
      grade: 'CULTURAL RELAX ',
      fees: 'kr 16500',
      description: 'Kjent for sin unike seillignende design og luksuriøse fasiliteter, regnes Burj Al Arab som et av de mest ikoniske hotellene i verden. Ta en omvisning på hotellet, nyt måltider på et av dets flere spisesteder, eller bare beundre den fantastiske utsikten over Persiabukta.'
      },
      
      {
        id:12,
        imgSrc: img12,
        destTitle: 'Kuala Lumpur',
        destLocation: 'Malaysia',
        grade: 'CULTURAL RELAX ',
        fees: 'kr 8500',
        description: 'En av de mest populære attraksjonene i byen er Petronas Twin Towers, som tilbyr en fantastisk utsikt over byen fra observasjonsdekket. Byen er også hjemsted for en rekke hinduistiske templer og den nasjonale moskeen, et fantastisk stykke moderne islamsk arkitektur.' 
        },
]

const Main = () => {

  // scroll animation w/ useEffect
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Mest populære reisemål
        </h3>
      </div>
      <div className="secContent grid">

        {
          Data.map(({ id, imgSrc, destTitle, destLocation, grade, fees, description }) => {
            return (
              <div data-aos="fade-up" key={id} className="singleDestination">
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