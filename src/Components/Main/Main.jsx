import React, {useEffect} from 'react'
import './main.css'
import {GrLocation} from "react-icons/gr";
import { LuClipboardCheck } from "react-icons/lu";
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'

import Aos from 'aos';
import 'aos/dist/aos.css';

const Data = [
    {
        id: 1,
        imgSrc: img1,
		destTitle: 'Nyhavn',
		location: 'Copenhagen, Denmark',
		grade: 'CULTURAL RELAX',
		fees: '€700', 
		description: 'Nyhavn, characterized by its colorful facade and historical wooden ships, is a 17th-century waterfront, canal and entertainment district in Copenhagen, Denmark. It is lined with bustling bars and cafes and is known for its charming aesthetic, making it a popular spot for tourists and photographers alike.'
    },
    {
        id: 2,
        imgSrc: img2,
		destTitle: 'Mountain Lake',
		location: 'Patagonia, Argentina', 
		grade: 'NATURE RELAX',
		fees: '€3500',
		description: 'Nestled in the heart of the Patagonian wilderness, this secluded lake offers a tranquil escape for nature lovers. Surrounded by dense forests and towering mountains, it is an ideal spot for hiking, photography, and soul-searching in the serene beauty of unspoiled nature.'
	},
    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Tropical Beach',
        location: 'Maldives',
        grade: 'NATURE RELAX',
        fees: '€5000',
        description: 'Experience the ultimate serenity and breathtaking beauty of Maldives tropical beaches, where the sky meets crystal clear waters. Ideal for snorkeling, sunbathing, and escaping into paradise.'
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Sandy Paradise',
        location: 'Seychelles',
        grade: 'NATURE RELAX',
        fees: '€3000',
        description: 'Seychelles boasts some of the best untouched beaches in the world, perfect for honeymooners and nature lovers alike. Discover the unique granite boulders, lush palm trees, and soft white sands.'
    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Rocky Beach',
        location: 'California, USA',
        grade: 'ADVENTURE',
        fees: '€3000',
        description: 'Explore the rugged landscapes of California\'s rocky beaches. Perfect for hiking and photography, these beaches offer dramatic scenery and a strong sense of nature\'s power.'
    },
    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Andean Lake',
        location: 'Peru',
        grade: 'TREKKING',
        fees: '€4500',
        description: 'Nestled in the high Andes, this serene lake provides a tranquil setting for trekkers looking to explore the majestic landscapes and rich cultural heritage of the Peruvian highlands.'
    },
    {
        id: 7,
        imgSrc: img7,
        destTitle: 'Desert Cliffs',
        location: 'Arizona, USA',
        grade: 'ADVENTURE',
        fees: '€2500',
        description: 'The stark and rugged landscape of Arizona\'s desert cliffs offers a dramatic backdrop for hiking and photography. Experience the raw beauty and solitude of these ancient formations.'
    },
    {
        id: 8,
        imgSrc: img8,
        destTitle: 'Coastal Rainbow',
        location: 'Mallorca, Spain',
        grade: 'NATURE RELAX',
        fees: '€1500',
        description: 'Witness a rare coastal rainbow along the rocky shores of Mallorca, Spain. This stunning natural phenomenon complements the lush landscapes and crystal-clear waters, ideal for a peaceful getaway.'
    },
    {
        id: 9,
        imgSrc: img9,
		destTitle: 'Vibrant Beach',
		location: 'California, USA',
		grade: 'NATURE EXPLORE',
		fees: '€2500',
		description: 'Discover the bustling activity and natural beauty of one of California\'s most vibrant beaches. This coastal hotspot is perfect for those looking to engage in water sports, explore tidal pools, or simply enjoy a day under the sun with family and friends.'
	}
];


const Main = () => {

	useEffect(() => {
		Aos.init({duration:2000})
	}, [])

  return (
	<section className='main container section'>
		<div className="secTitle">
			<h3 data-aos="fade-right" className="title">
				Most visited destinations
			</h3>
		</div>

		<div className="secContent grid">
			{
				Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
					return (
						<div key={id} data-aos="fade-up" className="singleDestination">

							<div className="imageDiv">
								<img src={imgSrc} alt={destTitle} />
							</div>

							<div className="cardInfo">

								<h4 className="destTitle">
									{destTitle}
								</h4>

								<span className="continent flex">
									<GrLocation className="icon"/>
									<span className="name">
										{location}
									</span>
								</span>

								<div className="fees flex">
									<div className="grade">
										<span>{grade}<small>+1</small></span>
									</div>
									<div className="price">
										<h5>
											{fees}
										</h5>
									</div>
								</div>

								<div className="desc">
									<p>{description}</p>
								</div>

								<button className="btn flex">
									DETAILS <LuClipboardCheck className="icon"/>
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