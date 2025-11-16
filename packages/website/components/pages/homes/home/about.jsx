import image1 from "../../../../public/assets/img/about/about-3.jpg";
import bannerBg1 from "../../../../public/assets/img/shape/shape-14.png";
import Count from "../../common/count";
import Link from "next/link";

const About = () => {
    return (
        <>
            <div className="about__two section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="about__two-area" style={{backgroundImage: `url(${bannerBg1.src})`}}>
                                <div className="about__two-left lg-mb-25">
                                    <div className="about__two-left-image dark_image">
                                        <img src={image1.src} alt="about" />
                                        <div className="about__two-left-image-experience">
                                            <h2><Count number={32}/> +</h2>
                                            <h6>Working Experience</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="about__two-right">
                                    <div className="about__two-right-title">
                                        <span className="subtitle-two">Our Company</span>
                                        <h2>Making electricity within easy reach</h2>
                                        <p>Our design and manufacturing represent the highest level in the industry.</p>
                                    </div>
                                    <div className="about__two-right-list">
                                        <i className="flaticon-profit"></i>
                                        <div>
                                            <h6>Financial and Time Savings</h6>
                                            <p>You can deploy your power equipment more cheaply and faster.</p>
                                        </div>
                                    </div>
                                    <div className="about__two-right-bottom">
                                        <Link className="btn-two" href="/about-us">Discover more</Link>								
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="counter__one section-padding pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="counter__one-grid">
                                <div className="counter__one-item">
                                    <h2><Count number={98}/>%</h2>
                                    <span>Project Success Rate</span>
                                </div>
                                <div className="counter__one-item">
                                    <h2><Count number={93}/>%</h2>
                                    <span>Satisfaction Clients</span>
                                </div>
                                <div className="counter__one-item">
                                    <h2><Count number={21}/>k</h2>
                                    <span>Installed Capacity</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;