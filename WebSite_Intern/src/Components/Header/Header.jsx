import React from "react";



export default function Header() {
    return (
        <header className="bg-[#DEFCEC]">
            <nav className="bg-gray border-gray-200 px-4 lg:px-6 py-2.5 text-white" >
                <div className=" text-3xl font-thin flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                   
                        <img
                            src="https://bhawaniind.com/_nuxt/img/bhwni.1343394.webp"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    
                    <div className="flex k items-center lg:order-2">
                    <a href ="#Home"><button  className="text-black flex px-6 ">Home</button></a>
                    <a href ="#about"><button  className="text-black flex px-6 ">About Us</button></a>
                    <a href ="#Product"><button  className="text-black flex px-6 ">Product</button></a>
                    <a href ="#Process"><button  className="text-black flex px-6 ">Process</button></a>
                    <a href ="#Contact"><button  className="text-black flex px-6 ">Contact</button></a>   
                    </div>
                   
                   
                </div>
            </nav>
        </header>
    );
}