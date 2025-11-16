"use client"
import ModalVideo from "@/components/common/modal-video";
import Link from 'next/link';
import bannerBg1 from "../../../../public/assets/img/shape/shape-13.jpg";
import { useState } from "react";

const BannerTwo = () => {
    const [openVideo, setOpenVideo] = useState(false);
    const openVideoModal = () => {
        setOpenVideo(true);
    };

  	return (
		<>
			<div className="banner__two" style={{backgroundImage: `url(${bannerBg1.src})`}}>
				<div className="container">
					<div className="row">
						<div className="col-lg-10">
							<div className="banner__two-content">
								<span className="subtitle-two">Power Facilities</span>
								<h1>Rapid<br/>construction</h1>
								<p>Welcome to Volty Power Equipment, a company that provides mobile, rapidly deployable power transmission and transformation equipment and technology.</p>
								<Link className="btn-two" href="/about-us">installation plan</Link>
							</div>
						</div>
						<div className="col-lg-2">
							<div className="banner__two-video t-center sm-t-left sm-mt-35">
								<div className="banner__two-video-icon video video-pulse">
									<span onClick={openVideoModal}><i className="fas fa-play"></i></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ModalVideo isOpen={openVideo} videoId="SZEflIVnhH8" onClose={() => setOpenVideo(false)} autoplay />
		</>
	);
};

export default BannerTwo;
