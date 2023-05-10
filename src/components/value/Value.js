import React, { useState } from 'react';
import valueImg from '../imgs/value.png';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import data from '../../Data/accordion';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Value.css';

const Value = () => {
    const [className, setClassName] = useState(null);
    return (
        <div className="main-value">
            <div className="paddings innerWidth flexCenter value-container">
                <div className="flexCenter value-left">
                    <div className="img-container">
                        <img src={valueImg} />
                    </div>
                </div>
                <div className="flexColStart value-right">
                    <div className="flexColStart value-title">
                        <span className="orangeText">Our Value</span>
                        <span className="primaryText">
                            Value We Give to You
                        </span>
                        <span className="flexColStart value-des">
                            <span className="secondaryText">
                                We always ready to help by providijng the best
                                services for you.
                            </span>
                            <span className="secondaryText">
                                We beleive a good blace to live can make your
                                life better
                            </span>
                        </span>
                    </div>
                    <Accordion
                        className="accordion"
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                        >
                        {data.map((item, i) => {
                            return (
                                <AccordionItem
                                    className={`accordionItem ${className}`}
                                    key={i}
                                    uuid={i}
                                >
                                    <AccordionItemHeading>
                                        <AccordionItemButton className="flexCenter accordionButton">
                                            <AccordionItemState>
                                                {({expanded})=> {
                                                    expanded ? setClassName('expanded') : setClassName('collapsed')
                                                }}
                                            </AccordionItemState>
                                            <div className="flexCenter icon">
                                                {item.icon}
                                            </div>
                                            <span className="primaryText">
                                                {item.heading}
                                            </span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown
                                                    size={20}
                                                />
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="accordionPannle">
                                        <span className="secondaryText">
                                            {item.detail}
                                        </span>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Value;
