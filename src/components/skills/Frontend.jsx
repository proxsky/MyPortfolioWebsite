import React from 'react'
import JavaImg from "../../assets/java.png"
import Kotlin from "../../assets/kotlin.png"
import Python from "../../assets/python.png"
import CSharp from "../../assets/csharp.png"
import Swift from "../../assets/swift.png"
import Cplusplus from "../../assets/cplusplus.png"
import Javascript from "../../assets/javascript.png"
import HtmlCss from "../../assets/htmlcss.png"
import Sql from "../../assets/sql.png"
import Vba from "../../assets/vba.png"

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Languages</h3>
        <div className="skills__box">
            {/* first column */}
            <div className="skills__group">
                <div className="skills__data">
                    <img src={JavaImg} className="icon__size"/>
                    <div>
                        <h3 className="skills__name">Java</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={Kotlin} className="icon__size"/>
                    <div>
                        <h3 className="skills__name">Kotlin</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={Python} className="icon__size"/>
                    <div>
                        <h3 className="skills__name">Python</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={CSharp} className="icon__size"/>
                    <div>
                        <h3 className="skills__name">C#</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={Swift} className="icon__size"/>
                    <div>
                        <h3 className="skills__name">Swift</h3>
                    </div>
                </div>
            </div>
            {/* second column */}
            <div className="skills__group">
                <div className="skills__data">
                    <img src={Cplusplus} className="icon__size"/>
                    <div>
                        <h3 className="skills__name">C/C++</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={Javascript} className="icon__size"/>
                    <div>
                        <h3 className="skills__name">Javascript</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={HtmlCss} className="icon__size"/>
                    <div>
                        <h3 className="skills__name">Html/Css</h3>
                    </div>
                </div>
                <div className="skills__data">
                    <img src={Sql} className="icon__size"/>
                    <div>
                        <h3 className="skills__name">SQL</h3>
                    </div>
                </div>
                <div className="skills__data">
                    <img src={Vba} className="icon__size"/>
                    <div>
                        <h3 className="skills__name">VBA</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default Frontend
