import data from '../../Data/accordion';
import {Accordion} from 'react-accessible-accordion';
import MyAccordionItems from './MyAccordionItems';

const MyAccordion = () => {
    return (
        <Accordion
        className="accordion"
        allowMultipleExpanded={false}
        preExpanded={[0]}
        >
            {
                data.map((item, i) => {
                    return (
                        <MyAccordionItems item={item} i={i}/>
                    );
                })
            }
        </Accordion>
    );
};

export default MyAccordion;
