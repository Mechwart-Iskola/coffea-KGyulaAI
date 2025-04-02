import BeanImg from "../../../public/img/bean-img.png"
import "./popularcard.css"

export type PopularProps = {
    name: string,
    description: string,
    price: string,
    image: string,
}
type coffeeType = {
    coffe: PopularProps
}

const PopularCard = ({ coffe }: coffeeType) => {
    return (
        <div className="popular__card">
            <div className="popular__images">
                <div className="popular__shape"></div>
                <img src={BeanImg} alt="" className="popular__bean-1" />
                <img src={BeanImg} alt="" className="popular__bean-2" />
                <img src={coffe.image} alt="" className="popular__coffee" />
            </div>
            <div className="popular__data">
                <h2 className="popular__name">{coffe.name}</h2>
                <p className="popular__description">{coffe.description}</p>
                <a href="" className="button button-dark">Order now: {coffe.price}</a>
            </div>
        </div>
    )
}

export default PopularCard