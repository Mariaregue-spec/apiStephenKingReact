import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importar imágenes directamente
import itCover from "../assets/images/bookCovers/it.png";
import shiningCover from "../assets/images/bookCovers/theShining.png";
import miseryCover from "../assets/images/bookCovers/misery.png";
import petCover from "../assets/images/bookCovers/petSematary.png";
import revival from "../assets/images/bookCovers/revival.png";
import salemsLot from "../assets/images/bookCovers/salemsLot.png";
import theDarkTower from "../assets/images/bookCovers/theDarkTower.png";
import theDeadZone from "../assets/images/bookCovers/theDeadZone.png";
import theLongWalk from "../assets/images/bookCovers/theLongWalk.png";
import theShining from "../assets/images/bookCovers/theShining.png";
import theStand from "../assets/images/bookCovers/theStand.png";

// Ejemplo de libros
const books = [
    { title: "It", image: itCover },
    { title: "The Shining", image: shiningCover },
    { title: "Carrie", image: miseryCover },
    { title: "Pet Sematary", image: petCover },
    { title: "Revival", image: revival },
    { title: "Salem's Lot", image: salemsLot },
    { title: "The Dark Tower", image: theDarkTower },
    { title: "The Dead Zone", image: theDeadZone },
    { title: "The Long Walk", image: theLongWalk },
    { title: "The Shining", image: theShining },
    { title: "The Stand", image: theStand },

];

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <main className="container mx-auto py-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Bienvenido al universo de Stephen King</h2>
            <p className="text-lg mb-8">
                Explora sus novelas, adaptaciones al cine y curiosidades de su carrera literaria.
            </p>

            <div className="max-w-5xl mx-auto">
                <Slider {...settings}>
                    {books.map((book, index) => (
                        <div key={index} className="px-2">
                            <div className="border rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                                {/* Imagen sin recorte */}
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className="w-full object-contain bg-gray-100"
                                />
                                <h3 className="text-stone-200 font-bold mt-2">{book.title}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </main>
    );
};

export default Home;
