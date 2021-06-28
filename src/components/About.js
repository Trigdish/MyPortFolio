import React from 'react'

const About = () => {
    const [header] = React.useState({
        mainHeader: "ABOUT ME !!",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem ipsim standard dummmy text",

    })
    return (
        <div className="about">
            <div className="container">
                <div className="common">
                    <h3 className="heading">
                        {header.mainHeader}
                    </h3>

                    <p className="mainContent">
                        {header.text}
                    </p>
                    <div className="commonBorder">

                    </div>

                </div>
                <div className="row h-650 alignCenter">
                    <div className="col-6">
                        <div className="about__img">
                            <img src="https://themebing.com/html/amike/assets/images/me-01-alt.png" alt="man" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about__info">
                            <h1>Hi There !!</h1>
                            <div className="about__info-p1">
                                In id nulla magna. Nullam posuere fermentum mattis.
                                Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis

                            </div>
                            <div className="about__info-p2">
                                nunc id efficitur sagittis, urna est ultricies eros,
                                ac porta sem turpis porta sem turpis quis leo. Nulla in feugiat elit
                            </div>
                            <div className="info__contacts">
                                <div className="row">
                                    <div className="col-6">
                                        <strong>Name:</strong>
                                        <p>Dishant Trighatia</p>
                                    </div>
                                    <div className="col-6">
                                        <strong>Email:</strong>
                                        <p>dishant@gmail.com</p>
                                    </div>
                                    <div className="col-6">
                                        <strong>Contact:</strong>
                                        <p>+917896541230</p>
                                    </div>
                                    <div className="col-6">
                                        <strong>HomeTown</strong>
                                        <p>Ambala Cantt</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default About
