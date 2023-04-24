import bf4 from "../assets/img/bf4.png";
import bf5 from "../assets/img/bf5.png";
import codm from "../assets/img/codm.png";
import gta from "../assets/img/gta.png";
import dbd from "../assets/img/dbd.png";
import warzone from "../assets/img/warzone.png";
import l4d2 from "../assets/img/l4d2.png";
import ml from "../assets/img/ml.png";
import genshin from "../assets/img/genshin.png";
import rdr2 from "../assets/img/rdr2.png";
import valo from "../assets/img/valo.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import bf3 from "../assets/img/bf3.png";
import bf1 from "../assets/img/bf1.ico";
import fh4 from "../assets/img/fh4.png";
import csgo from "../assets/img/csgo.png";
import forest from "../assets/img/forest.ico";
import sons from "../assets/img/sons.ico";
import re6 from "../assets/img/re6.ico";
import pou from "../assets/img/pou.png";
import tlou2 from "../assets/img/tlou2.ico";
import tlou from "../assets/img/tlou.ico";
import basara3 from "../assets/img/basara3.png";
import basara4 from "../assets/img/basara4.png";
import nsuns3 from "../assets/img/nsuns3.ico";
import nsuns2 from "../assets/img/nsuns2.ico";
import nsuns4 from "../assets/img/nsuns4.png";
import watchdogs2 from "../assets/img/watchdogs2.png";
import watchdogs from "../assets/img/watchdogs.png";
import codmw2022 from "../assets/img/codmw2022.ico";
import codwwii from "../assets/img/codwwii.ico";
import codiw from "../assets/img/codiw.png";
import codmw2019 from "../assets/img/codmw2019.ico";
import codmw2 from "../assets/img/codmw2.ico";
import codaw from "../assets/img/codaw.png";
import codmw3 from "../assets/img/codmw3.ico";
import codmw1 from "../assets/img/codmw1.jpg";
import codbo3 from "../assets/img/codbo3.png";
import codbo2 from "../assets/img/codbo2.png";
import codbo1 from "../assets/img/codbo1.png";
import codghosts from "../assets/img/codghosts.png";
import nfsmw from "../assets/img/nfsmw.png";
import gtav from "../assets/img/gtav.ico";
import gta4 from "../assets/img/gta4.png";
import gta3 from "../assets/img/gta3.png";
import gtavc from "../assets/img/gtavc.ico";
import gtasa from "../assets/img/gtasa.ico";
import re8 from "../assets/img/re8.png";
import re7 from "../assets/img/re7.png";
import unturn from "../assets/img/unturn.ico";
import carx from "../assets/img/carx.jpg";
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
                        <h6>Online Games Played</h6>
                        <p>玩過的遊戲列表 PC/iOS/PS3/PS4（在線）</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={bf4} alt="Image" />
                                <h5>Battlefield 4 (PC)</h5>
                                <p>Username : ElegiacaI</p>
                                <a href="https://battlelog.battlefield.com/bf4/soldier/ElegiacaI/stats/1004774611527/pc/"> View Profile</a>
                            </div>
							<div className="item">
                                <img src={bf4} alt="Image" />
                                <h5>Battlefield 4 (PS3)</h5>
                                <p>Username : XierraCFW</p>
                                <a href="hhttps://battlelog.battlefield.com/bf4/soldier/XierraCFW/stats/1004774811527/ps3/"> View Profile</a>
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
                                <img src={genshin} alt="Image" />
                                <h5>YuukiPS Private Server (PC)</h5>
                                <p>Username : XierraOW.</p>
                                <p>ID : 10607</p>
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
							<div className="item">
                                <img src={valo} alt="Image" />
                                <h5>Valorant (PC)</h5>
                                <p>Last Played : 4 Month ago</p>
                                <p>No Data.</p>
                            </div>
							<div className="item">
                                <img src={rdr2} alt="Image" />
                                <h5>RDR 2 Online (PC)</h5>
                                <p>Last Played : 8 Month ago</p>
                                <p>No Data.</p>
                            </div>
							<div className="item">
                                <img src={bf3} alt="Image" />
                                <h5>Battlefield 3 (PS3)</h5>
                                <p>Username : XierraCFW</p>
                                <p>No Data.</p>
                            </div>
							<div className="item">
                                <img src={bf1} alt="Image" />
                                <h5>Battlefield I (PC)</h5>
                                <p>Username : ELEGiACAL</p>
                                <p>SteamID : 76561199311393206</p>
                            </div>
							<div className="item">
                                <img src={fh4} alt="Image" />
                                <h5>Forza Horizon 4 (PC)</h5>
                                <p>Username : OhMySupraxxx</p>
                                <p>SteamID : 76561199311393206</p>
                            </div>
							<div className="item">
                                <img src={csgo} alt="Image" />
                                <h5>CS:GO (PC)</h5>
                                <p>Last Played : 2 Years ago</p>
                                <p>No Data.</p>
                            </div>
							<div className="item">
                                <img src={carx} alt="Image" />
                                <h5>CarX Street (IOS)</h5>
                                <p>Username : uwuman</p>
                                <p>ID : Unsynced</p>
                            </div>
							<div className="item">
                                <img src={unturn} alt="Image" />
                                <h5>Unturned (PC)</h5>
                                <p>Username : holdmybattlefield</p>
                                <p>ID : Unsynced</p>
                            </div>
							<div className="item">
                                <img src={forest} alt="Image" />
                                <h5>The Forest (PC)</h5>
                                <p>Username : ElegiacaI</p>
                                <p>SteamID : 76561199311393206</p>
                            </div>
                            <div className="item">
                                <img src={sons} alt="Image" />
                                <h5>Sons of The Forest (PC)</h5>
                                <p>Username : ERAawrrr</p>
                                <p>SteamID : 76561199311393206</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
                    <div className="skill-bx wow zoomIn">
                        <h6>Offline Games Played</h6>
                        <p>玩過的遊戲列表 PC/iOS/PS3/PS4（離線）</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
							<div className="item">
                                <img src={re7} alt="Image" />
                                <h5>Resident Evil 7 (PS4)</h5>
								<p>Status Campaign Finished at 2-19-2021</p>
                            </div>
                            <div className="item">
                                <img src={re6} alt="Image" />
                                <h5>Resident Evil 6 (PS3)</h5>
								<p>Status : Campaign Finished at 7-10-2019</p>
                            </div>
							<div className="item">
                                <img src={re8} alt="Image" />
                                <h5>Resident Evil 8 (XBOX SX)</h5>
								<p>Status Campaign Finished at 1-19-2023</p>
                            </div>
							<div className="item">
                                <img src={gtasa} alt="Image" />
                                <h5>GTA : SANANDREAS (PS3)</h5>
								<p>Status Story Finished at 6-28-2015</p>
                            </div>
							<div className="item">
                                <img src={gtavc} alt="Image" />
                                <h5>GTA : VICE CITY (IOS)</h5>
								<p>Status Story Finished at 4-21-2015</p>
                            </div>
							<div className="item">
                                <img src={gta3} alt="Image" />
                                <h5>GTA 3 (PS2)</h5>
								<p>Status Story Finished at 3-21-2015</p>
                            </div>
							<div className="item">
                                <img src={gta4} alt="Image" />
                                <h5>GTA 4 (PS3)</h5>
								<p>Status Story Finished at 9-13-2017</p>
                            </div>
							<div className="item">
                                <img src={gtav} alt="Image" />
                                <h5>GTA V (PS4)</h5>
								<p>Status Story Finished at 3-22-2019</p>
                            </div>
							<div className="item">
                                <img src={nfsmw} alt="Image" />
                                <h5>NFS : MOST WANTED (PS2)</h5>
								<p>Status Campaign Finished at 8-23-2016</p>
                            </div>
							<div className="item">
                                <img src={pou} alt="Image" />
                                <h5>Pou (IOS)</h5>
								<p>Status : Stopped Play at 9-12-2014</p>
                            </div>
							<div className="item">
                                <img src={codaw} alt="Image" />
                                <h5>COD : Advanced Warfare (PS3)</h5>
								<p>Status : Campaign Finished at 2-12-2020</p>
                            </div>
							<div className="item">
                                <img src={codghosts} alt="Image" />
                                <h5>COD : Ghosts (PS4)</h5>
								<p>Status : Campaign Finished at 12-17-2019</p>
                            </div>
							<div className="item">
                                <img src={codbo1} alt="Image" />
                                <h5>COD : Black OPS I (PC)</h5>
								<p>Status : Campaign Finished at 12-20-2020</p>
                            </div>
							<div className="item">
                                <img src={codbo2} alt="Image" />
                                <h5>COD : Black OPS II (PC)</h5>
								<p>Status : Campaign Finished at 2-23-2021</p>
                            </div>
							<div className="item">
                                <img src={codbo3} alt="Image" />
                                <h5>COD : Black OPS III (PS4)</h5>
								<p>Status : Campaign Finished at 1-11-2021</p>
                            </div>
							<div className="item">
                                <img src={codmw1} alt="Image" />
                                <h5>COD : Modern Warfare 1 (PC)</h5>
								<p>Status : Campaign Finished at 1-3-2015</p>
                            </div>
							<div className="item">
                                <img src={codmw2} alt="Image" />
                                <h5>COD : Modern Warfare 2 (PC)</h5>
								<p>Status : Campaign Finished at 2-22-2015</p>
                            </div>
							<div className="item">
                                <img src={codmw3} alt="Image" />
                                <h5>COD : Modern Warfare 3 (PC)</h5>
								<p>Status : Campaign Finished at 2-29-2017</p>
                            </div>
							<div className="item">
                                <img src={codmw2019} alt="Image" />
                                <h5>COD : Modern Warfare 2019 (PS4)</h5>
								<p>Status : Campaign Finished at 6-1-2021</p>
                            </div>
							<div className="item">
                                <img src={codiw} alt="Image" />
                                <h5>COD : Infinite Warfare (PS4)</h5>
								<p>Status : Campaign Finished at 1-5-2019</p>
                            </div>
							<div className="item">
                                <img src={codwwii} alt="Image" />
                                <h5>COD : World at War 2 (PS4)</h5>
								<p>Status : Campaign Finished at 4-25-2018</p>
                            </div>
							<div className="item">
                                <img src={codmw2022} alt="Image" />
                                <h5>COD : Modern Warfare 2 2022 (XBOX SX)</h5>
								<p>Status Campaign Finished at 1-22-2023</p>
                            </div>
							<div className="item">
                                <img src={watchdogs} alt="Image" />
                                <h5>Watch Dogs (PS3)</h5>
								<p>Status Campaign Finished at 8-23-2018</p>
                            </div>
							<div className="item">
                                <img src={watchdogs2} alt="Image" />
                                <h5>Watch Dogs 2 (PC)</h5>
								<p>Status Campaign Finished at 2-7-2020</p>
                            </div>
							<div className="item">
                                <img src={nsuns2} alt="Image" />
                                <h5>NSUNS 2</h5>
								<p>Status Story Finished at 5-21-2018</p>
                            </div>
							<div className="item">
                                <img src={nsuns3} alt="Image" />
                                <h5>NSUNS 3</h5>
								<p>Status Story Finished at 3-17-2020</p>
                            </div>
							<div className="item">
                                <img src={nsuns4} alt="Image" />
                                <h5>NSUNS 4</h5>
								<p>Status Story Finished at 9-20-2020</p>
                            </div>
							<div className="item">
                                <img src={basara4} alt="Image" />
                                <h5>BASARA 4 : SUMERAGI</h5>
								<p>Status Story Finished at 11-14-2019</p>
                            </div>
							<div className="item">
                                <img src={basara3} alt="Image" />
                                <h5>BASARA 3 : UTAGI</h5>
								<p>Status Campaign Finished at 7-28-2019</p>
                            </div>
							<div className="item">
                                <img src={tlou} alt="Image" />
                                <h5>TLOU</h5>
								<p>Status Campaign Finished at 12-28-2019</p>
                            </div>
							<div className="item">
                                <img src={tlou2} alt="Image" />
                                <h5>TLOU PART II</h5>
								<p>Status Campaign Finished at 4-15-2020</p>
                            </div>
                        </Carousel>
                    </div>
            </div>
        </div>
		<div className="skill-bx wow zoomIn">
                        <h6>Xierra's PC Specs :</h6>
												<h2>⠀</h2>
						<h4>MOTHERBOARD : MSI MPG Z690 LGA1700</h4>
						<h4>CPU : Intel Core i9-12900K CPU @ 5.2GHz</h4>
						<h4>COOLER : NZXT Kraken Z73 RGB</h4>
						<h4>GPU0 : Intel UHD Graphics 770</h4>
						<h4>GPU1 : MSI GeForce RTX 3090 Ti GAMING X TRIO</h4>
						<h4>RAM 1 : CORSAIR VENGEANCE RGB RS 16GB DDR4</h4>
						<h4>RAM 2 : CORSAIR VENGEANCE RGB RS 16GB DDR4</h4>
						<h4>STORAGE 1 : Samsung 980 PRO M.2 2TB SSD</h4>
						<h4>STORAGE 2 : SEAGATE BARRACUDA 8TB HARDISK</h4>
						<h4>PSU : ROG THOR 850WATT 80 Platinum</h4>
						<h4>MONITOR : Samsung Odyyssey Neo G9</h4>
						<h4>HEADPHONES : ROG Centurion</h4>
						<h4>KEYBOARD : SteelSeries Apex Pro (Mechanical)</h4>
						<h2>⠀</h2>
						<h6>Devices :</h6>
												<h2>⠀</h2>
						<h4>Phone 1 : POCO F4 GT 256GB/12GB (Snapdragon 8 Gen 1)</h4>
						<h4>Phone 2 : iPhone 11 Pro Max 64GB</h4>
						<h4>Console 1 : PlayStation 3 (500GB)</h4>
						<h4>Console 2 : PlayStation 4 (1TB)</h4>
						<h4>Console 3 : XBOX Series X (2TB)</h4>
						<h4>Laptop : ASUS TUF A16</h4>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
	
  )
}
