import React from "react"
import dongseok from "../assets/img/dongseok.jpg";

const introText = {
  title: "port developer" ,
  desc: ["tlaent is", "found at the end of the", "effort" ],

};

const Intro = () => {
  return (
    <section id="intro">
            <div className="intro_inner">
                <h2 className="intro_title">
                    {introText.title}
                </h2>
                <div className="intro_lines" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className="intro_text">
                    <div className="text">
                        <div>{introText.desc[0]}</div>
                        <div>{introText.desc[1]}</div>
                        <div>{introText.desc[2]}</div>
                    </div>
                    <div className="img">
                        <img src={dongseok} alt="어바웃미"/>
                    </div>
                </div>
                <div className="intro_lines bottom" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
        </section>
  )
}

export default Intro
