import FaqOne from './faq-one';
import FaqTwo from './faq-two';
import image1 from "../../../public/assets/img/pages/faq-1.jpg";
import image2 from "../../../public/assets/img/pages/faq-2.jpg";

const FaqPage = () => {
    return (
        <>
            <div className="faq-area section-padding pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 lg-mb-20">
                            <FaqOne />	
                        </div>
                        <div className="col-lg-6">
                            <FaqTwo />	
                        </div>
                    </div>
                </div>
            </div>   
            <div className="faq__page section-padding">
                <div className="container">
                    <div className="row al-center">
                        <div className="col-lg-6 lg-mb-30">
                            <div className="faq__page-left">
                                <div className="faq__page-left-image dark_image">
                                    <img src={image1.src} alt="faq-image" />
                                    <img className="faq__page-left-image-one" src={image2.src} alt="faq-image" />
                                    <div className="faq__page-left-image-question left-right-animate">
                                        <div className="faq__page-left-image-question-icon page">
                                            <i className="fa-sharp fa-solid fa-question"></i>
                                        </div>
                                        <h6>Have any questions?</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="faq__page-right">
                                <div className="faq__page-right-title mb-40">
                                    <span className="subtitle-one">Faq Questions</span>
                                    <h2>Unlock Answers Explore FAQs</h2>
                                </div>
                                <div id="accordionExample">
                                    <div className="faq__area-item">
                                        <h6 className="icon" data-bs-toggle="collapse" data-bs-target="#collapseOne"><span>01.</span>Can modular mobile substations reduce costs?</h6>
                                        <div id="collapseOne" className="faq__area-item-body collapse show" data-bs-parent="#accordionExample">
                                            <p>Factory production and modular design reduce the difficulty and cost of on-site construction, and decrease the investment of manpower, materials, and time. In addition, since prefabricated modules can be reused or flexibly configured, long-term operating costs are further reduced.</p>
                                        </div>
                                    </div>
                                    <div className="faq__area-item">
                                        <h6 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo"><span>02.</span>Can modular mobile substations save construction time?</h6>
                                        <div id="collapseTwo" className="faq__area-item-body collapse" data-bs-parent="#accordionExample">
                                            <p>Core concept of prefabricated modular substations is to "maximize factory workload and minimize on-site workload." They adopt modular design, factory integration, one-stop transportation, and modular construction to save customers construction time.</p>
                                        </div>
                                    </div>
                                    <div className="faq__area-item">
                                        <h6 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree"><span>03.</span>Are modular mobile substations environmentally friendly?</h6>
                                        <div id="collapseThree" className="faq__area-item-body collapse" data-bs-parent="#accordionExample">
                                            <p>The prefabricated substation uses environmentally friendly materials to manufacture the cabin, reducing environmental pollution during construction. At the same time, due to the efficient operation and intelligent management of the equipment, energy consumption and carbon emissions are reduced, meeting the requirements of sustainable development.</p>
                                        </div>
                                    </div>
                                </div>                     
                            </div>
                        </div>
                    </div>
                </div>        
            </div>         
        </>
    );
};

export default FaqPage;