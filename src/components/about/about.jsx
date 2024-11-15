
import img from '../../assets/neri_vela_CONTENIDO3.jpg'; 
import './about.css';

function About() {
    return (
        <>
            <div className="content">
                <div className="about-card">
                    <img src={img} alt="Neri Vela" />
                    <h2>Neri Vela</h2>
                    <span>@nerivela</span>
                    <p className="description">
                        Rodolfo Neri Vela es un ingeniero y astronauta mexicano. En 1985, se convirtió en el primer y único mexicano en viajar al espacio, como parte de la misión STS-61-B del transbordador espacial Atlantis. Es un símbolo del avance científico y tecnológico de México.
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;
