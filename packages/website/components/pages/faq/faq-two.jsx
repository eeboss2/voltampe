import React from 'react';

const FaqTwo = () => {
    return (
        <>
        <div id="accordionExamplePage">
            <div className="faq__area-item">
                <h6 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour"><span>04.</span>Can modular mobile substations reduce costs?</h6>
                <div id="collapseFour" className="faq__area-item-body collapse" data-bs-parent="#accordionExamplePage">
                    <p>Factory production and modular design reduce the difficulty and cost of on-site construction, and decrease the investment of manpower, materials, and time. In addition, since prefabricated modules can be reused or flexibly configured, long-term operating costs are further reduced.</p>
                </div>
            </div>
            <div className="faq__area-item">
                <h6 className="icon" data-bs-toggle="collapse" data-bs-target="#collapseFive"><span>05.</span>Can modular mobile substations save construction time?</h6>
                <div id="collapseFive" className="faq__area-item-body collapse show" data-bs-parent="#accordionExamplePage">
                    <p>Core concept of prefabricated modular substations is to "maximize factory workload and minimize on-site workload." They adopt modular design, factory integration, one-stop transportation, and modular construction to save customers construction time.</p>
                </div>
            </div>
            <div className="faq__area-item">
                <h6 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#collapseSix"><span>06.</span>Are modular mobile substations environmentally friendly?</h6>
                <div id="collapseSix" className="faq__area-item-body collapse" data-bs-parent="#accordionExamplePage">
                    <p>The prefabricated substation uses environmentally friendly materials to manufacture the cabin, reducing environmental pollution during construction. At the same time, due to the efficient operation and intelligent management of the equipment, energy consumption and carbon emissions are reduced, meeting the requirements of sustainable development.</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default FaqTwo;