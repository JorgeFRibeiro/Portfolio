import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hello, I'm Jorge
                        <br className="hidden lg:inline-block" />Welcome to my tiny piece of the internet.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I am a Computer Science student at Purdue University. I take great interest in developing
                        software projects of all different kinds. Recently I have done a lot of web development so
                        I hope you enjoy a couple of my projects I have layed out on this site.
                    </p>
                    <div className="flex-justify-center">
                        <a href="#projects" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        See My Past Projects
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}