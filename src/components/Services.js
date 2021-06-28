import React from 'react';
import { FaGithub,FaJava,FaCodepen,FaReacteurope,FaAngular,FaGuitar} from 'react-icons/fa'

const Services = () => {

    const[header]= React.useState({
        mainHeader:"SERVICES",
        subHeading:"My Services",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem ipsim standard dummmy text",
        
    });
    return (
        <div className="services">
            <div className="container">
                <div className="services__header">


                    <div className="common">
                        <h3 className="heading">
                            {header.mainHeader}
                        </h3>
                        <h1 className="mainHeader">
                            {header.subHeading}
                        </h1>
                        <p className="mainContent">
                            {header.text}
                        </p>
                        <div className="commonBorder">

                        </div>
                    </div>
                    <div className="row bgMain">
                        <div className="col-4 bgMain">
                            <div className="services__box">
                                <FaGithub className="commomIcons" />
                                <div className="services__box-header">Web Devlopment</div>
                                <div className="services__box-p">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. lorem ipsim standard dummmy text.

                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="services__box">
                                <FaGuitar className="commomIcons" />
                                <div className="services__box-header">Guitarist</div>
                                <div className="services__box-p">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. lorem ipsim standard dummmy text.

                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="services__box">
                                <FaJava className="commomIcons" />
                                <div className="services__box-header">Java</div>
                                <div className="services__box-p">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. lorem ipsim standard dummmy text.

                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="services__box">
                                <FaCodepen className="commomIcons" />
                                <div className="services__box-header">Web Design</div>
                                <div className="services__box-p">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. lorem ipsim standard dummmy text.

                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="services__box">
                                <FaAngular className="commomIcons" />
                                <div className="services__box-header">Angular</div>
                                <div className="services__box-p">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. lorem ipsim standard dummmy text.

                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="services__box">
                                <FaReacteurope className="commomIcons" />
                                <div className="services__box-header">React</div>
                                <div className="services__box-p">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. lorem ipsim standard dummmy text.

                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Services
