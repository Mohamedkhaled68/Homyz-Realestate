import React from 'react';
import contactImg from '../imgs/contact.jpg'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import './Contact.css';

const Contact = () => {
    return (
        <div className="main-contact">
            <div className="paddings innerWidth flexCenter contact-container">
                <div className="flexColStart contact-left">
                    <div className="flexColStart contact-title">
                        <span className="orangeText">Our Contact Us</span>
                        <span className="primaryText">Easy to contact us</span>
                        <div className="contact-des flexColStart">
                            <span className="secondaryText">We always ready to help by providijng the best services for you. We beleive a</span>
                            <span className="secondaryText">good blace to live can make your life better</span>
                        </div>
                    </div>
                    <div className="cards-container">
                        <div className="card flexColCenter">
                            <div className="flexCenter details">
                                <div className="flexCenter icon">
                                    <MdCall size={20}/>
                                </div>
                                <div className="flexColStart text">
                                    <span className='primaryText'>Call</span>
                                    <span className="secondaryText">
                                        021 123 145 14
                                    </span>
                                </div>
                            </div>
                            <button>Call now</button>
                        </div>
                        <div className="card flexColCenter">
                            <div className="flexCenter details">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={20}/>
                                </div>
                                <div className="flexColStart text">
                                    <span className='primaryText'>Chat</span>
                                    <span className="secondaryText">
                                        021 123 145 14
                                    </span>
                                </div>
                            </div>
                            <button>Chat now</button>
                        </div>
                        <div className="card flexColCenter">
                            <div className="flexCenter details">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={20}/>
                                </div>
                                <div className="flexColStart text">
                                    <span className='primaryText'>Video Call</span>
                                    <span className="secondaryText">
                                        021 123 145 14
                                    </span>
                                </div>
                            </div>
                            <button>Video Call now</button>
                        </div>
                        <div className="card flexColCenter">
                            <div className="flexCenter details">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={20}/>
                                </div>
                                <div className="flexColStart text">
                                    <span className='primaryText'>Message</span>
                                    <span className="secondaryText">
                                        021 123 145 14
                                    </span>
                                </div>
                            </div>
                            <button>Message now</button>
                        </div>
                    </div>
                </div>
                <div className="flexCenter contact-right">
                    <div className="img-container">
                        <img src={contactImg} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
