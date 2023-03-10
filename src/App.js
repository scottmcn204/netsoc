import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
//import particlesOptions from "./particles.json";
import whiteLogo from "./netsocLogoWhite.png"
import instagram from "./instagram.png"
import discord from "./discord.png"
import facebook from "./facebook.png"
import github from "./github.png"
import linkedin from "./linkedin.png"
import twitter from "./twitter.png"
import {useRef} from 'react';

function App() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);
  const ref = useRef(null);
  const handleClick = () => {
    ref?.current.scrollIntoView({behavior: 'smooth'});
  };

    return (
        <body>
            <section class="h-screen">
                <div className="particles">
                    <Particles options={
                        {
                            "autoPlay": true,
                            "delay": 0,
                            "background": {
                              "color": "#121212"
                            },
                            "fullScreen":{
                              "enable" : true,
                              "zIndex" : 0
                            },
                            
                            "interactivity": {
                              "events": {
                                "onClick": {
                                  "enable": true,
                                  "mode": "push"
                                },
                                "onHover": {
                                  "enable": true,
                                  "mode": "repulse"
                                }
                              }, 
                              "modes": {
                                "push": {
                                  "quantity": 5
                                }, 
                                "repulse": {
                                  "radius": 100
                                }
                              }
                            },
                            "particles": {
                              "links": {
                                "blink": false,
                                "color": {
                                  "value": "#ff0000"
                                },
                                "consent": false,
                                "distance": 100,
                                "enable": true,
                                "frequency": 1,
                                "opacity": 0.4,
                                "shadow": {
                                  "blur": 5,
                                  "color": {
                                    "value": "#000"
                                  },
                                  "enable": false
                                },
                                "triangles": {
                                  "enable": false,
                                  "frequency": 1
                                },
                                "width": 1,
                                "warp": false
                              },
                              "number": {
                                "value": 50
                              },
                              "move": {
                                "enable": true,
                                "speed": {"min": 1, "max": 5}
                              },
                              "opacity": {
                                "value": {"min": 0.4, "max": 0.9}
                              },
                              "size": {
                                "value": {"min": 1, "max": 3}
                              },
                              "color": {
                                "value": "#ff0000",
                                "animation": {
                                    "enable": true,
                                    "speed": 40,
                                    "sync": true
                                }
                              }
                          
                            }
                          }
                    } init={particlesInit}/>
                </div>
                <nav class="absolute z-30">
                    <h1 class=" pt-5 text-sm md:text-xl text-white px-5 animate-float-slow" >Dublin University Inter<b>Net Soc</b>iety</h1> 
                </nav>
        
                <div class="flex h-screen items-center justify-center z-50 shadow-2xl ">
                    <img src={whiteLogo} alt="netsoc logo" class="mb-48 h-20 relative animate-appearfade"></img> 
                    <div class="absolute mt-44">
                        <div class=" bg-gradient-to-t from-gray-400 to-gray-100 p-2 rounded-2xl inline-block mx-4 sm:mx-7 w-24 text-center animate-appearfadeslow">
                            <button onClick={handleClick}>
                                <h1 class="text-black font-bold md:text-base text-sm">About Us</h1>
                            </button>
                        </div>
                        <div class=" bg-gradient-to-t from-gray-400 to-gray-100 p-2 rounded-2xl inline-block mx-4 sm:mx-7 w-24 text-center animate-appearfadeslow">
                            <a href="https://trinitysocietieshub.com/collections/science-technology/products/netsoc"><button>
                                <h1 class="text-black font-bold md:text-base text-sm">Sign Up</h1>
                            </button></a>
                        </div>
                    </div>
                    <div class="absolute mt-96 h-8 bg-gradient-to-t from-gray-400 to-gray-100 rounded-full animate-appearfadeslow">
                        <a href='https://discord.gg/GrW6a6mc'><img src={discord} alt="discord logo" class=" mb-48 h-8 p-1 inline-block mx-1  text-center"/></a>
                        <a href='https://www.instagram.com/tcdnetsoc/'><img src={instagram} alt="instagram logo" class= "mb-48 h-8 p-1 inline-block mx-1  text-center"/></a>
                        <a href='https://www.facebook.com/dunetsoc/'><img src={facebook} alt="facebook logo" class=" mb-48 h-8 p-1 inline-block mx-1  text-center"/></a>
                        <a href='https://twitter.com/netsoc?lang=en'><img src={twitter} alt="twitter logo" class=" mb-48 h-8 p-1 inline-block mx-1  text-center"/></a>
                        <a href='https://github.com/netsoc'><img src={github} alt="github logo" class=" mb-48 h-8 p-1 inline-block mx-1  text-center"/></a>
                        <a href='https://www.linkedin.com/company/du-netsoc/about/'><img src={linkedin} alt="linkedin logo" class=" mb-48 h-8 p-1 inline-block mx-1 text-center"/></a>
                    </div>



                </div>
            </section>

            <section ref={ref}  class="min-h-screen">
                <div class="relative z-50 mx-auto bg-back md:w-6/12 sm:w-10/12 xs: w-11/12 text-slate-300 mt-14 p-8 rounded-3xl text-center opacity-80 md:text-base text-sm">
                    <h1 class="text-center pb-2 text-2xl font-bold">Commitee Members</h1>
                    <hr class="pb-2 border-t-1"></hr>
                    <h1 class=""><b>Auditor: (King of Internet)</b> Alex Zamolotskikh</h1>
                    <h1 class=""><b>Secratary:</b> Rishi</h1>
                    <h1 class=""><b>Treasurer:</b> Ma??l?? </h1>
                    <h1 class=""><b>Amenities Officer:</b> Kate</h1>
                    <h1 class=""><b>Public Relations Officer:</b> Yiou Wu</h1>
                    <h1 class=""><b>Events Officer:</b> Jacob Barron</h1>
                    <h1 class=""><b>Inter Society Officer:</b> Mila Graham</h1>
                    <h1 class=""><b>Webmaster:</b> Scott McNally</h1>
                    <h1 class=""><b>Commitee Member:</b> Peter Looney</h1>
                    <h1 class=""><b>Commitee Member (Mage):</b> Tuathal Kelly</h1>
                    <h1 class=""><b>Commitee Member:</b> Jack Herssens</h1>
                    <h1 class=""><b>Commitee Member:</b> Aaron Dinesh</h1>
                </div>
                <div class="relative z-50 mx-auto bg-back md:w-6/12 sm:w-10/12 xs: w-11/12 text-slate-300 mt-8 mb-12 p-8 rounded-3xl text-center opacity-80 md:text-base text-sm">
                    <h1 class="text-center pb-2 text-2xl font-bold ">About Us</h1>
                    <hr class="pb-4 border-t-1"></hr>
                    <p><b>Netsoc</b> was founded back in 1996 to promote the Internet. 
                        We run our own servers that we keep on campus, which we use 
                        to provide a range of services to our members. Membership comes 
                        with your very own Webspace, which you can use to host your own 
                        website on our servers. You will also have access to our Matrix 
                        server, where you can chat online with other members. We run 
                        loads of events throughout the year, from tech tutorials, 
                        to talks from companies, to social events. If you're interested 
                        in web development, system administration, or just the Internet 
                        in general, join Netsoc! We are currently undergoing significant maintenance
                        and administrative restructuring, we thank you for your patience during this 
                        trying time.</p>
                </div>
            </section>

        </body>
        
    );
}

export default App;