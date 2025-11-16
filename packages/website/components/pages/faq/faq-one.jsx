import React from 'react';

const FaqOne = () => {
    return (
        <>
        <div id="accordionExample1">
            <div className="faq__area-item">
                <h6 className="icon" data-bs-toggle="collapse" data-bs-target="#collapseOne1"><span>01.</span>Can modular mobile substations reduce costs?</h6>
                <div id="collapseOne1" className="faq__area-item-body collapse show" data-bs-parent="#accordionExample1">
                    <p>Factory production and modular design reduce the difficulty and cost of on-site construction, and decrease the investment of manpower, materials, and time. In addition, since prefabricated modules can be reused or flexibly configured, long-term operating costs are further reduced.</p>
                </div>
            </div>
            <div className="faq__area-item">
                <h6 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo2"><span>02.</span>Can modular mobile substations save construction time?</h6>
                <div id="collapseTwo2" className="faq__area-item-body collapse" data-bs-parent="#accordionExample1">
                    <p>Core concept of prefabricated modular substations is to "maximize factory workload and minimize on-site workload." They adopt modular design, factory integration, one-stop transportation, and modular construction to save customers construction time.</p>
                </div>
            </div>
            <div className="faq__area-item">
                <h6 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree3"><span>03.</span>Are modular mobile substations environmentally friendly?</h6>
                <div id="collapseThree3" className="faq__area-item-body collapse" data-bs-parent="#accordionExample1">
                    <p>The prefabricated substation uses environmentally friendly materials to manufacture the cabin, reducing environmental pollution during construction. At the same time, due to the efficient operation and intelligent management of the equipment, energy consumption and carbon emissions are reduced, meeting the requirements of sustainable development.</p>
                </div>
            </div>
        </div> 
        </>
    );
};

export default FaqOne;