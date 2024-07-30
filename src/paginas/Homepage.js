import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import '../estilos/home.css';

const Homepage = (props) => {
    const settings = {
        arrows: false,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        fade: true,
        autoplay: true
    };

    return (
        <div className="home">
            <Slider {...settings}>
                <img src="/images/img01.jpg" alt="avión"/>
                <img src="/images/img02.jpg" alt="camión"/>
                <img src="/images/img03.jpg" alt="barco"/>
                <img src="/images/img04.jpg" alt="ruta"/>
                <img src="/images/img05.jpg" alt="pick up"/>
            </Slider>
        </div>
    )
}

export default Homepage;