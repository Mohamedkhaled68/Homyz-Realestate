import React, {useState} from 'react'
import {
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion';
import { MdOutlineArrowDropDown } from 'react-icons/md';


const MyAccordionItems = ({item, i}) => {
    const [className, setClassName] = useState(null)
    return (
        <AccordionItem
            className={`accordionItem ${className}`}
            key={i}
            uuid={i}
        >
            <AccordionItemHeading>
                <AccordionItemButton className="flexCenter accordionButton">
                    <AccordionItemState>
                        {({ expanded }) => {
                            expanded
                                ? setClassName('expanded')
                                : setClassName('collapsed');
                        }}
                    </AccordionItemState>
                    <div className="flexCenter icon">
                        {item.icon}
                    </div>
                    <span className="primaryText">
                        {item.heading}
                    </span>
                    <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                    </div>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="accordionPannle">
                <span className="secondaryText">{item.detail}</span>
            </AccordionItemPanel>
        </AccordionItem>
    )
}

export default MyAccordionItems