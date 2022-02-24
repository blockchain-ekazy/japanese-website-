import React, { useEffect, useState } from "react";
import "./Home.css";
import Img2 from "../Components/imgs/image2.png";
import Img3 from "../Components/imgs/image2.png";
import Img4 from "../Components/imgs/image3.png";
import Img5 from "../Components/imgs/image4.png";
import Img6 from "../Components/imgs/image6.gif";
import Img7 from "../Components/imgs/image7.png";
import Img8 from "../Components/imgs/image8.svg";
import Img9 from "../Components/imgs/image9.png";
import Img10 from "../Components/imgs/image10.gif";

import Imggif from "../Components/imgs/imagegif.gif";
import ImgTop from "../Components/imgs/removebg.png";

import Mintbtn from "./mintbtn";

export default function Home() {
  let i = 0;
  useEffect(() => {
    setInterval(function () {
      //   console.log(i);
      document.getElementsByClassName("Home")[0].style.backgroundPositionX =
        i + "px";
      i += 1;
    }, 30);
  });

  return (
    <div className="Home">
      {/* <div className="container-fluid navbg">
        <nav className="navbar container navbar-expand-lg navbar-light navv">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
            <img
              src={Img9}
              className="log rounded mx-auto d-block Imgs"
              alt="..."
            ></img>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mob-navbar"
              aria-label="Toggle"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mob-navbar">
              <ul className="navbar-nav mb-2 mb-lg-0 "> */}
                {/* <li className="nav-item">
                  <a className="nav-link NavBtn" aria-current="page" href="/">
                    Home
                  </a>
                </li> */}
                  {/* <li className="nav-item">
                    <a className="nav-link NavBtn" href="#About">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link NavBtn" href="#Roadmap">
                      Road Map
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link NavBtn" href="#Team">
                      Team
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link NavBtn" href="#FAQ">
                      FAQ
                    </a>
                  </li>
                </ul>
                <div className="social-buttons text-center">
                  <span className="neo-button px-2">
                    <a href="https://discord.gg/85d2cDkpFU" target="_blank">
                      <i className="buttons fab fa-discord  NavBtn"></i>
                    </a>
                  </span>
                  <span className="neo-button px-2">
                    <a href="https://twitter.com/worldoverwater" target="_blank">
                      <i className="fa fa-twitter NavBtn"></i>
                    </a>
                  </span>
                  <span className="neo-button px-2">
                    <a href="https://www.instagram.com/world.overwater/" target="_blank">
                      <i className="fa fa-instagram NavBtn"></i>
                    </a>
                  </span>
                  <span className="neo-button px-2">
                  <a href="https://opensea.io/worldoverwater  ">
              <img
                src={Img8}
                className=" mxiom"
                alt="..."
              ></img>
              
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div> */}
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mt-5"> <img 
                src={Img9}
                className=" mxiot"
                alt="..."
              ></img></div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row meta align-items-center">
            <div className="col-md-4"><img
                src={Imggif}
                className=" gifi w-100"
                alt="..."
              ></img>
              </div>
            <div className="col-md-4 kio">
              <h2 className="text-center mt-4">GENESIS MINT PASS</h2>
              <h5 className="text-center mt-4">Max: 5 Per Transaction<br></br><br></br>No Wallet Limit</h5>
              <h6 className="text-center mt-4"><u>Contract Address</u></h6>
             <div className="text-center mt-4"> <button className="btni">CONNECT</button></div>
              <h6 className="text-center mt-4"><u>Install MetaMask</u></h6>
            </div>
            <div className="col-md-4">
            <img
                src={Img6}
                className=" gifi w-100"
                alt="..."
              ></img>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row ra">
            <div className="col-md-5">
            <h3 className="gold" > Genesis Mint Gold Pass</h3>
            <ul className="mask">
              <li>Exclusive Anime Collaborations.</li>
              <li>Free Airdrop of Every Kanji Collection For LIFE.</li>
              <li>Exclusive Giveaways For Holders Only.</li>
              <li>$KAN Token Multiplier.</li>
            </ul>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <h3 className="platinum">Genesis Mint Platinum Pass</h3>
              <ul className="mask">
              <li>Exclusive Anime Collaborations.</li>
              <li>Free Airdrop of Every Kanji Collection For LIFE.</li>
              <li>Exclusive Giveaways For Holders Only.</li>
              <li>$KAN Token Multiplier.</li>
              <li>2% Royalties for LIFE2% Royalties for LIFE</li>
            </ul>
            </div>
          </div>
        </div>
     

      

      {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<,Roadmap>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div className="container py-5">
        <a id="Roadmap"></a>
        <h2 className="text-center pb-5 ">ROADMAP</h2>
        <div className="main-timeline">
          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <i className="fas fa-dice-one icons"></i>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title ">Stage 1: Global Expansion</h5>
              <p className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
              </p>
            </div>
          </div>

          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <i className="fas fa-dice-two icons"></i>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title ">Stage 2: High-end partnerships</h5>
              <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
            </div>
          </div>

          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <i className="fas fa-dice-three icons"></i>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title ">Stage 3: Upload yourself into the metaverse !</h5>
              <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
            </div>
          </div>

          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <i className="fas fa-dice-four icons"></i>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title ">Stage 4: Real world utility and mass adoption</h5>
              <p className="decription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>

            </div>
          </div>
        </div>
      </div>

      {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<Team>>>>>>>>>>>>>>>>>>>>>>>>>>>>></Team> */}

      <div className="container py-5">
        <a id="Team"></a>
        <h1 className="text-center">TEAM</h1>
        <div className="row ">
          <div className="col-12 col-md-4 pt-4">
            <img
              src={Img9}
              className=" mx-auto d-block TeamImgs TeamImg ImgBorder"
              alt="..."
            ></img>
            <h3 className="text-center pt-3">K. Riley </h3>
           <p className="text-center">This multiple Emmy Award© winning industry veteran has been creating animation, illustration, and games for over 25 years. He's animated many of the characters you know and love, and is currently directing multiple original feature films and series for streaming, network, and movie-going audiences worldwide.</p>
          </div>
          <div className="col-12 col-md-4 pt-4">
            <img
              src={Img9}
              className=" mx-auto d-block TeamImgs TeamImg ImgBorder"
              alt="..."
            ></img>
            <h3 className="text-center pt-3">R.Mora</h3>
            <p className="text-center"> I am a short American Chilean. I flew from the south of South America to be in the cold of Utah and to spend time with seagulls, which happens to be the state bird. I am also a graphic designer with heart eyes for a couple ventures. </p>
          </div>
          <div className="col-12 col-md-4 pt-4">
            <img
              src={Img9}
              className=" mx-auto d-block TeamImgs TeamImg ImgBorder"
              alt="..."
            ></img>
            <h3 className="text-center pt-3">R. Jennings</h3>
            <p className="text-center">Lazy Pelican Project lead and visionary of World Overwater. Engineer / Builder of Award Winning Overwater projects around the world both in reality as well as augmented reality. Metaverse pioneer bringing utility to the NFT world inviting all the experience the world from a new perspective.</p>
          </div>

        </div>
        {/* <img src={Img2} className="img-fluid" alt="Responsive image"></img> */}
      </div>

      {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<faqs>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>></faqs> */}
      <a id="FAQ"></a>
      <div className="container px-5 pb-5">
        <div className="row">
          <div className="col-md-offset-3 col-md-12">
            <h3 className="text-center pt-5">Frequently Asked Questions</h3>
            <br />
            <br />

            <div
              className="panel-group"
              id="accordion"
              role="tablist"
              aria-multiselectable="true"
            >
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingOne">
                  <h4 className="panel-title">
                    <a
                      className="Sec"
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      HOW MANY MINTABLE OLPS ARE THERE ?
                    </a>
                  </h4>
                </div>
                <div
                  id="collapseOne"
                  className="panel-collapse collapse in"
                  role="tabpanel"
                  aria-labelledby="headingOne"
                >
                  <div className="panel-body text-white">
                    There will be 10,000 mintable NFT’s available as ERC-721 tokens on the Ethereum blockchain.


                  </div>
                  <br />
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingTwo">
                  <h4 className="panel-title">
                    <a
                      className="collapsed Sec"
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      WHAT IS THE SMART CONTRACT ADRESS ?
                    </a>
                  </h4>
                </div>
                <div
                  id="collapseTwo"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="headingTwo"
                >
                  <div className="panel-body text-white ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas mattis ac leo vel rutrum. Integer varius tristique
                    magna vel dictum. Vestibulum augue magna, convallis id velit
                    a, porttitor fermentum sem.
                  </div>
                  <br />
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingThree">
                  <h4 className="panel-title">
                    <a
                      className="collapsed Sec"
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How much is the minting price ?
                    </a>
                  </h4>
                </div>
                <div
                  id="collapseThree"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="headingThree"
                >
                  <div className="panel-body text-white">
                    The mint price is .1 ETH
                  </div>
                  <br />
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingfour">
                  <h4 className="panel-title">
                    <a
                      className="collapsed Sec"
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapsefour"
                      aria-expanded="false"
                      aria-controls="collapsefour"
                    >
                      WHEN IS THE MINTING DATE ?
                    </a>
                  </h4>
                </div>
                <div
                  id="collapsefour"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="four"
                >
                  <div className="panel-body text-white">
                    March 1, 2022
                  </div>
                  <br />
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingfive">
                  <h4 className="panel-title">
                    <a
                      className="collapsed Sec"
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapsefive"
                      aria-expanded="false"
                      aria-controls="collapsefive"
                    >
                      Where can i view my NFTs ?
                    </a>
                  </h4>
                </div>
                <div
                  id="collapsefive"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="five"
                >
                  <div className="panel-body text-white">
                    Once minted, simply connect your wallet to your Open Sea account to view your NFTs.
                  </div>
                  <br />
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingsix">
                  {/* <h4 className="panel-title"> */}
                    {/* <a
                      className="collapsed Sec"
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapsesix"
                      aria-expanded="false"
                      aria-controls="collapsesix"
                    > */}
                      <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingsix">
                          <h4 className="panel-title">
                            <a
                              className="collapsed Sec"
                              role="button"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapsesix"
                              aria-expanded="false"
                              aria-controls="collapsesix"
                            >
                              What is the metaverse ?
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapsesix"
                          className="panel-collapse collapse"
                          role="tabpanel"
                          aria-labelledby="six"
                        >
                          <div className="panel-body text-white">
                            The Metaverse refers to a shared virtual experience where land, avatars and names can be bought and sold, often using cryptocurrency. The future phases in the Overwater Lazy Pelican Squad roadmap will allow you to join this Metaverse using the assets you own.

                            If you have any other questions or concerns, you can
                            open a ticket on the discord support-channel.
                            A team member will get back to you shortly.

                          </div>
                          <br />
                        </div>
                      </div>
                    {/* </a> */}
                  {/* </h4> */}
                </div>
                <div
                  id="collapsefive"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="five"
                >
                  <div className="panel-body text-white">
                    Once minted, simply connect your wallet to your Open Sea account to view your NFTs.
                  </div>
                  <br />
                </div>
              </div>




            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid footer py-3">
        <div className="container d-flex justify-content-center">
          <div className="row">
            <h6 className="px-4" href="https://twitter.com/worldoverwater">
              <i className="fab fa-twitter Ficons"></i>
            </h6>
          </div>
          <div className="row">
            <h6 className="px-4" href="https://discord.gg/85d2cDkpFU">
              <i className="fab fa-discord Ficons"></i>
            </h6>
          </div>
          <div className="row">
            <h6 className="px-4" href="https://www.instagram.com/world.overwater/">
              <i className="fab fa-instagram Ficons"></i>
            </h6>
          </div>
         
          <div className="row">
            <h6 className="px-4" href="https://opensea.io/worldoverwater ">
            <img
              src={Img8}
              className=" mxio"
              alt="..."
            ></img>
            </h6>
          </div>
         
        </div>
        <p className="px-4 text-center  text-white mb-0 ">
          Copyright © OLPS 2022.
        </p>
      </div>
    </div>
  );
}
