import "./App.css";
import React, { useRef } from "react";
import h795 from "./Images/h795.png";
import h97 from "./Images/h97.png";
import h310 from "./Images/h310.png";
import h399 from "./Images/h399.png";

function App() {

  const dash = useRef(null);
  const date = useRef(null);
  const team = useRef(null);


  const executeScrollDash = () => dash.current.scrollIntoView({behavior: 'smooth'});
  const executeScrollDate = () => date.current.scrollIntoView({behavior: 'smooth'});
  const executeScrollTeam = () => team.current.scrollIntoView({behavior: 'smooth'});


  return (
    <div className="App">
      <nav class="  justify-center  justify-center flex md:text-right md:justify-between flex-wrap  bg-white p-6">
        <div class=" ml-0 inline-block flex-shrink-0 md:mr-6 w-40">
          <h1 className="font3 text-2xl text-[#333333]">Cool Horses</h1>
        </div>
        <div class="hidden md:grid w-full block flex-grow flex items-center w-auto text-xl flex-grow text-right font2 text-[#474747] grid justify-items-end">
          <div className="text-right">
            <p onClick={executeScrollDash} class="  block mt-4 inline-block mt-0 mr-10 text-center cursor-pointer ">
              Dashboard
            </p>
            <p onClick={executeScrollDate} class="  block mt-4 inline-block mt-0 mr-10 text-center cursor-pointer ">
              Sale Date
            </p>
            <p  onClick={executeScrollDate} class="  block mt-4 inline-block mt-0 mr-10 text-center cursor-pointer ">
              Roadmap
            </p>
            <p onClick={executeScrollTeam} class="  block mt-4 inline-block mt-0 mr-10 text-center cursor-pointer ">
              Team
            </p>
  
          </div>
 
        </div>
      </nav>
      <div class="bg-[#9cb5fe] pt-36 flex w-100 h-3/5">
        <div class=" grid  lg:flex">
          <img class=" w-2/6 h-100  hidden lg:block -mr-24" src={h795} alt=""></img>
          <img class=" w-2/6 h-100 hidden lg:block -ml-24 mr-24" src={h97} alt=""></img>

          <div className="xl:mt-16 text-center lg:text-left pb-16 lg:pb-0">
            <div className="font2 text-2xl xl:text-4xl font-serif text-[#63639c]">
              Introducing
            </div>
            <hl className="text-4xl xl:text-8xl font3 text-[#333333]">Cool Horses</hl>
            <div className="mt-8">
              <a
                className="font2 rounded-2xl pt-4 pb-4 pl-8 pr-8 mr-4 lg:mr-0 bg-[#fcd424] text-[#232425]"
                href="/"
              >
                Mint Coming Soon
              </a>
              <a
                className="font2 rounded-2xl pt-4 pb-4 pl-8 pr-8 text-center ml-4 lg:ml-8 bg-[#fcd424] text-[#232425]"
                href="/"
              >
                Join The Discord
              </a>
            </div>
            <div className="text-lg  xl:text-xl text-[#232425] mt-8 ml-8 mr-8 lg:ml-0 lg:mr-0 lg:mr-36">
              Cool Horses are a unique set of 1000 cartoon horses that live on
              the Ethereum Blockchain. Each horse is unique and has their own
              style. Aiming to bring a strong community of NFT enthusiast
              together.
            </div>
            <div className="mt-4">
              <a href="https://twitter.com">
                <i className="fab fa-twitter text-center text-[#333333] text-2xl xl:text-3xl"></i>
              </a>
              <a href="https://discord.gg">
                <i className="ml-8 fab fa-discord text-center text-[#333333] text-2xl xl:text-3xl"></i>
              </a>
              <a href="https://opensea.io">
                <i className="ml-8 fas fa-anchor text-center text-[#333333] text-2xl xl:text-3xl"></i>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2">
          <img class=" w-100 h-100  lg:hidden" src={h795} alt=""></img>
          <img class=" w-100 h-100 lg:hidden " src={h97} alt=""></img>
          </div>
        </div>
      </div>
      <div className="grid">
        <div ref={dash} className="font3 text-7xl mt-8 text-center text-[#333333]">
        
          What is a Cool Horse?
        </div>
        <div className=" mt-8 mb-8  grid  lg:grid-cols-3 gap-8 ml-8 mr-8 xl:ml-44 xl:mr-44">
          <div className="bg-[#fa3c6a] pb-36 pl-8 border text-left mb-8  md:mb-0">
            <h1 className="font3 text-6xl md:text-3xl xl:text-6xl text-left text-[#333333] mt-4 ">
              A set of <h1 className="text-white">1000</h1>NFTs
            </h1>

            <p className="text-2xl xl:text-3xl font2 text-[#232425] mt-4 ">
              Cool Horses are a set of <span className="text-white">1000</span>{" "}
              NFTs coming to a barn near you!
            </p>
          </div>

          <div className="bg-[#fb91b7] pb-36 pl-8 border text-left  mb-8  md:mb-0">
            <h1 className="font3 text-6xl md:text-3xl xl:text-6xl text-left text-[#333333] mt-4">
              Made From<h1 className="text-white">60+</h1>Traits
            </h1>

            <p className="text-2xl xl:text-3xl font2 text-[#232425] mt-4 mr-8">
              Every single Cool Horse is unique and is made from{" "}
              <span className="text-white">60+</span> posible traits. Our Artist
              went through by hand to make sure each horse has it's own style!
            </p>
          </div>
          <div className="bg-[#3d52b6] pb-36 pl-8 border text-left ">
            <h1 className="font3 text-6xl md:text-3xl xl:text-6xl text-left text-[#333333] mt-4">
              Unique <h1 className="text-white">referral</h1>System
            </h1>

            <p className="text-2xl xl:text-3xl font2 text-[#232425] mt-4 mr-8">
              Using our one of a kind{" "}
              <span className="text-white">refferal</span> system, users can
              refer friends to benefit from the mint!
            </p>
          </div>
        </div>
      </div>

      <div className="grid">
        <div ref={date} className="font3 text-7xl mt-8 text-center text-[#333333]">
          Roadmap
          
        </div>
        <div className=" mt-8 mb-8 grid lg:grid-cols-2 gap-8 ml-8 mr-8 xl:ml-44 xl:mr-44">
          <div className="bg-[#7bb3cf] pb-36 pl-8 border text-left  mb-8">
            <h1 className="font3 text-6xl text-left text-[#333333] mt-4">
              Public and Private <h1 className="text-white">Mint</h1>
            </h1>

            <p className="text-3xl font2 text-[#232425] mt-4 mr-8">
              <span className="text-white">1000</span> Cool Horse NFTs will be
              available to mint. We will have a whitelist guaranteeing users a
              mint as well as a refferal system to allow supporters to earn.
              Visit this webpage during the mint to be able to mint your horse.
            </p>
          </div>

          <div className="bg-[#9d5fc8] pb-36 pl-8 border text-left  mb-8">
            <h1 className="font3 text-6xl text-left text-[#333333] mt-4">
              Community <h1 className="text-white">Building</h1>
            </h1>

            <p className="text-3xl font2 text-[#232425] mt-4 mr-8">
              Private <span className="text-white">Discord</span> channels
              created for Cool Horse holders to share alpha and have a good
              time. We will be building community events for holders to help
              build value.
            </p>
          </div>
          <div className="bg-[#3d52b6] pb-36 pl-8 border text-left  mb-8">
            <h1 className="font3 text-6xl text-left text-[#333333] mt-4">
              Ticket Into The <h1 className="text-white">Metaverse</h1>
            </h1>

            <p className="text-3xl font2 text-[#232425] mt-4 mr-8">
              We will be reaching out and using mint funds to work with{" "}
              <span className="text-white">metaverse</span> companies to
              intergrate Cool Horses into the metaverse. Only Cool Horse holders
              will gain entry.
            </p>
          </div>
          <div className="bg-[#947a4c] pb-36 pl-8 border text-left  mb-8">
            <h1 className="font3 text-6xl text-left text-[#333333] mt-4">
              Cool Horse <h1 className="text-white">Merch</h1>
            </h1>

            <p className="text-3xl font2 text-[#232425] mt-4 mr-8">
              We will make high quality merchadise themed around Cool Horse that
              will only be available to Cool Horse{" "}
              <span className="text-white">holders.</span> Any additional funds
              made by selling merch will be donated to charity by vote.
            </p>
          </div>

          <div className="bg-[#3b5360] pb-36 pl-8 border text-left ">
            <h1 className="font3 text-6xl text-left text-[#333333] mt-4">
              Forming The <h1 className="text-white">Dao</h1>
            </h1>

            <p className="text-3xl font2 text-[#232425] mt-4 mr-8">
              Shortly after launch we will create a{" "}
              <span className="text-white">dao.</span> Cool Horse holders will
              be able to voice their opnions in our dao by participating in our
              voting proccess to shape how our project grows.
            </p>
          </div>

          <div className="bg-[#bab953] pb-36 pl-8 border text-left ">
            <h1 className="font3 text-6xl text-left text-[#333333] mt-4">
              Project <h1 className="text-white">Launchpad</h1>
            </h1>

            <p className="text-3xl font2 text-[#232425] mt-4 mr-8">
              We will work with other projects to secure{" "}
              <span className="text-white">whitelists</span> for our holders.
              This bring more value to our holders.
            </p>
          </div>
        </div>
      </div>

      <div className="grid">
        <div ref={team} className="font3 text-7xl mt-8 text-center text-[#333333]">
          Meet The Team
        </div>
        <div className=" mt-8 mb-8  grid md:grid-cols-2 gap-8 ml-8 mr-8 xl:ml-44 xl:mr-44">
          <div className="">
            <img className="border2 text-left " src={h310} alt=""></img>
            <h1 className="font3 text-4xl xl:text-6xl mt-8 text-left text-[#333333]">
              GeneralTed
            </h1>
            <div className="text-xl xl:text-2xl font3 text-[#fa3c6a]">
              Artist/Marketing
            </div>
            <p className="text-xl xl:text-2xl text-[#232425]">
              GenralTed is the artist who did all the drawing for the project.
              He has previously done art for other projects behind the seens. He
              also has exprience running discord servers and building fun
              communities for people to enjoy.
            </p>
          </div>
          <div className="">
            <img className="border2 text-left " src={h399} alt=""></img>
            <h1 className="font3 text-4xl xl:text-6xl mt-8 text-left text-[#333333]">
              0xDog
            </h1>
            <div className="text-xl xl:text-2xl font3 text-[#fa3c6a]">
              Developer/Advisor
            </div>
            <p className="text-xl xl:text-2xl text-[#232425]">
              0xDog is exprience developer in the NFT world. He has been working
              with solidity for a while and has spent the last year working with
              ERC721 tokens. He also has been in the NFT market for over a year
              now and is helping advide GeneralTed on his project.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3  text-center bg-[#333333] pt-12 pb-12 ">
      <div className="text-white font3">
        Cool Horses
      </div>
      <div className=" text-white font3">
        2022, Cool Horses NFT all rights reserved
      </div>
      <div className="">
              <a href="https://twitter.com">
                <i className="fab fa-twitter  text-[#fff] text-xl"></i>
              </a>
              <a href="https://discord.gg">
                <i className="ml-8 fab fa-discord  text-[#fff] text-xl"></i>
              </a>
              <a href="https://opensea.io">
                <i className="ml-8 fas fa-anchor text-[#fff] text-xl mr-8"></i>
              </a>
      </div>
      </div>
    </div>
  );
}

export default App;
