import valueImg from '../imgs/value.png';
import 'react-accessible-accordion/dist/fancy-example.css';
import MyAccordion from './MyAccordion';
import './Value.css';

const Value = () => {
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
                    <MyAccordion/>
                </div>
            </div>
        </div>
    );
};

export default Value;
