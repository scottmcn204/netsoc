import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import whiteLogo from "./netsocLogoWhite.png"
import instagram from "./instagram.png"
import discord from "./discord.png"
import facebook from "./facebook.png"
import github from "./github.png"
import linkedin from "./linkedin.png"
import twitter from "./twitter.png"

function App() {
    const particlesInit = useCallback(main => {
        
        loadFull(main);
    }, [])

    return (
        <body>
            <section class="h-screen">
                <div className="particles">
                    <Particles options={particlesOptions} init={particlesInit}/>
                </div>
                <nav class="absolute z-30">
                    <h1 class=" pt-5 text-xl text-slate-300 px-5" >Dublin University Inter<b>Net Soc</b>iety</h1> 
                </nav>
        
                <div class="flex h-screen items-center justify-center z-50">
                    <img src={whiteLogo} alt="image1" class=" h-20 relative"></img> 
                    <div class="absolute mt-96">
                        <div class=" bg-gradient-to-t from-gray-400 to-gray-100 p-2 rounded-2xl inline-block mx-7 w-24 text-center">
                            <button>
                                <h1 class="text-black font-bold">About Us</h1>
                            </button>
                        </div>
                        <div class=" bg-gradient-to-t from-gray-400 to-gray-100 p-2 rounded-2xl inline-block mx-7 w-24 text-center">
                            <button>
                                <h1 class="text-black font-bold">Sign Up</h1>
                            </button>
                        </div>
                    </div>
                    <div class="absolute mt-96">
                        <img src={discord} alt="image1" class="h-8 bg-gradient-to-t from-gray-400 to-gray-100 rounded-full p-1 inline-block mx-4 text-center mt-48"/>
                        <img src={instagram} alt="image1" class="h-8 bg-gradient-to-t from-gray-400 to-gray-100 rounded-full p-1 inline-block mx-4 text-center mt-48"/>
                        <img src={facebook} alt="image1" class="h-8 bg-gradient-to-t from-gray-400 to-gray-100 rounded-full p-1 inline-block mx-4 text-center mt-48"/>
                        <img src={twitter} alt="image1" class="h-8 bg-gradient-to-t from-gray-400 to-gray-100 rounded-full p-1 inline-block mx-4 text-center mt-48"/>
                        <img src={github} alt="image1" class="h-8 bg-gradient-to-t from-gray-400 to-gray-100 rounded-full p-1 inline-block mx-4 text-center mt-48"/>
                        <img src={linkedin} alt="image1" class="h-8 bg-gradient-to-t from-gray-400 to-gray-100 rounded-full p-1 inline-block mx-4 text-center mt-48"/>
                    </div>



                </div>
            </section>

            <section class="h-screen">
                <div class="relative z-50 mx-auto bg-back md:w-6/12 sm:w-10/12 xs: w-11/12 text-slate-300 mt-8 p-8 rounded-3xl text-center opacity-80">
                    <h1 class="text-center pb-2 text-2xl font-bold">Commitee Members</h1>
                    <hr class="pb-2 border-t-1"></hr>
                    <h1 class=""><b>Auditor: (King of Internet)</b> Alex Zamolotskikh</h1>
                    <h1 class=""><b>Secratary:</b> Rishi</h1>
                    <h1 class=""><b>Treasurer:</b> Maïlé </h1>
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
                <div class="relative z-50 mx-auto bg-back md:w-6/12 sm:w-10/12 xs: w-11/12 text-slate-300 mt-8 p-8 rounded-3xl text-center opacity-80">
                    <h1 class="text-center pb-2 text-2xl font-bold ">About Us</h1>
                    <hr class="pb-4 border-t-1"></hr>
                    <p class="mb-10"><b>Netsoc</b> was founded back in 1996 to promote the Internet. 
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