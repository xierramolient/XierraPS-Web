import bf4 from "../assets/img/bf4.png";
import bf5 from "../assets/img/bf5.png";
import codm from "../assets/img/codm.png";
import gta from "../assets/img/gta.png";
import dbd from "../assets/img/dbd.png";
import warzone from "../assets/img/warzone.png";
import l4d2 from "../assets/img/l4d2.png";
import ml from "../assets/img/ml.png";
import genshin from "../assets/img/genshin.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Games Played</h2>
                        <p>List of games played PC/iOS/PS3/PS4</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={bf4} alt="Image" />
                                <h5>Battlefield 4 (PC)</h5>
                                <p>Username : ElegiacaI</p>
                                <a href="https://battlelog.battlefield.com/bf4/soldier/ElegiacaI/stats/1004774611527/pc/"> VREiew Profile</a>
                            </div>
                            <div className="item">
                                <img src={ml} alt="Image" />
                                <h5>MLBB (IOS)</h5>
                                <p>Username : ps.xierraps.xyz</p>
                                <p>ID : 79663628 (2149)</p>
                            </div>
                            <div className="item">
                                <img src={gta} alt="Image" />
                                <h5>GTA Online (PC)</h5>
                                <p>Username : ELEGIACAL</p>
                                <a href="https://socialclub.rockstargames.com/member/Elegiacal/"> View Profile</a>
                            </div>
                            <div className="item">
                                <img src={dbd} alt="Image" />
                                <h5>Dead by Daylight (PC)</h5>
                                <p>Username : Elegiacal 世界</p>
                                <p>SteamID : 76561199311393206</p>
                            </div>
                            <div className="item">
                                <img src={genshin} alt="Image" />
                                <h5>Genshin Impact (PC)</h5>
                                <p>Username : Moraxxx</p>
                                <a href="https://enka.network/u/819625090/"> View Profile</a>
                            </div>
                            <div className="item">
                                <img src={codm} alt="Image" />
                                <h5>Call of Duty Mobile (IOS)</h5>
                                <p>Username : Elegiacal</p>
                                <p>ID : 6765370692729831425</p>
                            </div>
                            <div className="item">
                                <img src={warzone} alt="Image" />
                                <h5>COD Warzone 2.0 (PC)</h5>
                                <p>Username : XIERRA BATAGOR</p>
                                <p>ID : Xierra Batagor#6467740</p>
                            </div>
                            <div className="item">
                                <img src={l4d2} alt="Image" />
                                <h5>Left 4 Dead 2 (PC)</h5>
                                <p>Username : Elegiacal 世界</p>
                                <p>SteamID : 76561199311393206</p>
                            </div>
                            <div className="item">
                                <img src={bf5} alt="Image" />
                                <h5>Battlefield V (PC)</h5>
                                <p>Username : ElegiacaI</p>
                                <p>SteamID : 76561199311393206</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
