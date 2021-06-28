import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaGitSquare, FaPlay } from "react-icons/fa"

const Banner = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header__content">
                            <div className="header__section">
                                <ul className="header__ul">
                                    <li >
                                        <FaFacebookF />
                                    </li>
                                    <li>
                                        <FaTwitter />
                                    </li>
                                    <li>
                                        <FaInstagram />
                                    </li>
                                    <li>
                                        <FaGitSquare />
                                    </li>
                                </ul>
                                <h1>I am Dishant Trighatia</h1>
                                <p>
                                    By professional, I am Developer in TCS having one year above exprience
                                </p>
                                <div className="header__buttons">
                                    <a href="*" className="btn btn-outline">
                                        My PortFolio
                                    </a>
                                    &nbsp;&nbsp;&nbsp;
                                    <a href="*" className="btn btn-smart">
                                        <FaPlay className="play" />
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="col-6">
                            <div className="banner__img" >
                                
                            </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Banner
