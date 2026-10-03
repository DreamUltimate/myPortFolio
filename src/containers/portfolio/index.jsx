import React, { useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import PageHeaderContent from "../../components/pageHeaderContent";

import ImageOne from '../../images/image1.jpg';
import ImageTwo from '../../images/image2.jpg';
import ImageThree from '../../images/image3.jpg';
import ImageFour from '../../images/image4.jpg';
import ImageFive from '../../images/image5.jpg';
import ImageSix from '../../images/image6.jpg';
import "./styles.scss";


const portfoliodata =[
    {
        id : 2,
        name: "Ecommerce",
        link: '',
        image: ImageOne
    },
    {
        id : 3,
        name: "Notes App",
        link: '',
        image: ImageTwo
    },
    {
        id : 2,
        name: "Supplier Design",
        link: '',
        image: ImageThree
    },
    {
        id : 2,
        name: "Todo App",
        link: '',
        image: ImageFour
    },
    {
        id : 3,
        name: "Shopping Cart",
        link: '',
        image: ImageFive
    },
    {
        id : 2,
        name: "Banking",
        link: '',
        image: ImageSix
    }
]

const filterData = [
    {
        filterId : 1,
        level : 'All'
    },
    {
        filterId : 2,
        level : 'Development'
    },
    {
        filterId : 3,
        level : 'Design'
    }
]

const Portfolio=()=>{

const [filteredvalue, setFilteredValue] = useState(1)
const [hoveredvalue, setHoveredValue] = useState(null)

function handleFiler(currentId){
    setFilteredValue(currentId)
};

function handleHover(index){
    setHoveredValue(index)
}

console.log("************" + hoveredvalue);

const filteredItems = filteredvalue === 1 ? portfoliodata :
portfoliodata.filter(item=>item.id === filteredvalue)

console.log("************" + filteredItems);

    return(
        <section id="portfolio" className="portfolio">
        <PageHeaderContent
            headerText="My Protfolio"
            icon={<FaLaptopCode size={40} />}

        />

        <div className="portfolio__content">
            <ul className="portfolio__content__filter">
                {
                    filterData.map((item) =>(
                        <li className={item.filterId === filteredvalue ? 'active' : ''} onClick={()=>handleFiler(item.filterId)} key={item.filterId}>
                            {item.level}

                        </li>
                    ))
                }

            </ul>
            <div className="portfolio__content__cards">
                {filteredItems.map((item,index) =>(
                    <div className="portfolio__content__cards__item" key={`cardItem${item.name.trim()}`}
                    onMouseEnter={()=> handleHover(index)}
                    onMouseLeave={()=> handleHover(null)}
                    > 
                    <div className="portfolio__content__cards__item__img-wrapper">
                        <a href="https://www.proximus.com/">
                            <img alt="dummy data" src={item.image}></img>
                        </a>

                    </div>
                    <div className="overlay">
                    {
                        index === hoveredvalue && (
                            <div>
                                <p>
                                    {item.name}
                                </p>
                                <button>Visit</button>
                            </div>
                        )
                    }

                    </div>

                    </div>
                ))}

            </div>


        </div>
    </section>
    )
}
export default Portfolio;