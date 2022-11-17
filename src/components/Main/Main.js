import './main.css';
import { HiOutlineArrowCircleDown } from 'react-icons/hi';
const Main = () => {

    return (
        <div className="main">
            <div className="heading-container">
                <h1 className="main-heading">
                    Katherine Law
                </h1>
            </div>
            <div className="title">
                Web Developer
            </div>
            <div className="arrow-down">
                <a href="#"><HiOutlineArrowCircleDown/></a>
            </div>
        </div>
    )
}

export default Main;