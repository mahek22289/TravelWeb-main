import React, {useEffect} from 'react'
import './footer.css'
import video1 from '../../Assets/video1.mp4'
import { FiSend } from "react-icons/fi"
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import {FaTripadvisor} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";

import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

	useEffect(() => {
		Aos.init({duration:2000})
	}, [])
	
  return (
	<section className='footer'>
		<div className="videoDiv">
			<video src={video1} loop autoPlay muted type="video/mp4"></video>
		</div>

		<div className="secContent container">
			<div className="contactDiv flex">
				<div data-aos="fade-up" className="text">
					<small>KEEP IN TOUCH</small>
					<h2>Travel with us</h2>
				</div>

				<div className="inputDiv flex">
					<input data-aos="fade-up" type="text" placeholder='Enter Email Address'/>
					<button data-aos="fade-up" className="btn flex" type='submit'>
						SEND <FiSend className="icon"/>
					</button>
				</div>
			</div>

			<div className="footerCard flex">
				<div className="footerIntro flex">
					<div className="logoDiv">
						<a href="#" className='logo flex'>
							<MdOutlineTravelExplore className="icon"/>Travel.
						</a>
					</div>

					<div data-aos="fade-up" className="footerParagraph">
					Discover the world's wonders through our expertly designed travel experiences. Whether you're looking for tranquil solitude or an adventure in exotic locales, our comprehensive travel services will guide you to your dream destination. Connect with cultures, taste new cuisines, and forge unforgettable memories, all while we handle the logistics seamlessly. Stay updated with our latest offers and stories by subscribing to our newsletter.
					</div>

					<div data-aos="fade-up" className="footerSocials flex">
						<FaSquareXTwitter className="icon"/>
						<AiFillYoutube className="icon"/>
						<AiFillInstagram className="icon"/>
						<FaTripadvisor className="icon"/>
					</div>
				</div>

				<div className="footerLinks grid">
					<div data-aos="fade-up" dara-aos-duration="3000" className="linkGroup">
						<span className="groupTitle">
							OUR AGENCY
						</span>

						<li className="footerList flex">
							<FaChevronRight className="icon"/>
							Services
						</li>
						<li className="footerList flex">
							<FaChevronRight className="icon"/>
							Insurance
						</li>
						<li className="footerList flex">
							<FaChevronRight className="icon"/>
							Agency
						</li>
						<li className="footerList flex">
							<FaChevronRight className="icon"/>
							Tourism
						</li>
						<li className="footerList flex">
							<FaChevronRight className="icon"/>
							Payment
						</li>
					</div>

					<div data-aos="fade-up" dara-aos-duration="4000" className="linkGroup">
						<span className="groupTitle">
							PARTNERS
						</span>

						<li className="footerList flex">
							<FaChevronRight className="icon"/>
							Bookings
						</li>
						<li className="footerList flex">
							<FaChevronRight className="icon"/>
							Rentcars
						</li>
						<li className="footerList flex">
							<FaChevronRight className="icon"/>
							HostelWorld
						</li>
						<li className="footerList flex">
							<FaChevronRight className="icon"/>
							Trivago
						</li>
						<li className="footerList flex">
							<FaChevronRight className="icon"/>
							TripAdvisor
						</li>
					</div>

					<div data-aos="fade-up" dara-aos-duration="5000" className="linkGroup">
						<span className="groupTitle">
							LAST MINUTE
						</span>

						<li className="footerList flex">
							<FaChevronRight className="icon"/>
							London
						</li>
						<li className="footerList flex">
							<FaChevronRight className="icon"/>
							California
						</li>
						<li className="footerList flex">
							<FaChevronRight className="icon"/>
							Indonesia
						</li>
						<li className="footerList flex">
							<FaChevronRight className="icon"/>
							Spain
						</li>
						<li className="footerList flex">
							<FaChevronRight className="icon"/>
							Oceania
						</li>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Footer