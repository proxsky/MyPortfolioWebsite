import React from 'react'
import Linux from "../../assets/linux.png"
import Bash from "../../assets/bash.png"
import Restful from "../../assets/restful.png"
import Test from "../../assets/test.png"
import Agile from "../../assets/agile.png"

const Stack = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Others</h3>
        <div className="skills__box">
            {/* first column */}
            <div className="skills__group">
                <div  className="skills__data">
                    <img src={Linux} className="icon__size"/>
                    <div>
                        <h3 className="skills__name">Linux</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={Bash} className="icon__size"/>
                    <div>
                        <h3 className="skills__name">Bash&nbsp;Script</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={Restful} className="icon__size"/>
                    <div>
                        <h3 className="skills__name">Restful&nbsp;API</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={Test} className="icon__size"/>
                    <div>
                        <h3 className="skills__name">Unit&nbsp;Tests</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={Agile} className="icon__size"/>
                    <div>
                        <h3 className="skills__name">Agile</h3>
                    </div>
                </div>
            </div>
            {/* second column */}
            <div className="skills__group">
                {/* <div className="skills__data">
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
                </div> */}
            </div>

            </div>
        </div>

   
  )
}

export default Stack
