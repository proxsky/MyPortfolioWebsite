import React from 'react'
import SpringBoot from "../../assets/springboot.png"
import Flask from "../../assets/flask.png"
import AndroidStudio from "../../assets/androidstudio.png"
import Xcode from "../../assets/xcode.png"
import Unity from "../../assets/unity.png"
import Git from "../../assets/git.png"
import Bootstrape from "../../assets/bootstrape.png"
import ReactJs from "../../assets/react.png"
import Azure from "../../assets/azure.png"
import Net from "../../assets/net.png"

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Technologies</h3>
        <div className="skills__box">
            {/* first column */}
            <div className="skills__group">
                <div className="skills__data">
                    <img src={SpringBoot} className="icon__size"/>
                    <div>
                        <p className="skills__name">Spring&nbsp;Boot</p>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={Flask} className="icon__size"/>
                    <div>
                        <h3 className="skills__name">Flask</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={AndroidStudio} className="icon__size"/>
                    <div>
                        <h3 className="skills__name">Android&nbsp;Studio</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={Xcode} className="icon__size"/>
                    <div>
                        <h3 className="skills__name">Xcode</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={Net} className="icon__size"/>
                    <div>
                        <h3 className="skills__name">.NET&nbsp;Framework</h3>
                    </div>
                </div>
            </div>
            {/* second column */}
            <div className="skills__group">
                <div className="skills__data">
                    <img src={Unity} className="icon__size"/>
                    <div>
                        <h3 className="skills__name">Unity&nbsp;Game</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={Git} className="icon__size"/>
                    <div>
                        <h3 className="skills__name">Git</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={Bootstrape} className="icon__size"/>
                    <div>
                        <h3 className="skills__name">Bootstrape</h3>
                    </div>
                </div>
                <div className="skills__data">
                    <img src={ReactJs} className="icon__size"/>
                    <div>
                        <h3 className="skills__name">React&nbsp;Js</h3>
                    </div>
                </div>
                <div className="skills__data">
                    <img src={Azure} className="icon__size"/>
                    <div>
                        <h3 className="skills__name">Azure&nbsp;DevOps</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default Frontend
