import React from "react";

export function Home () {
    return (
        <>
            <div className="homepage">
                <div className="homepage_banner" ><img src="../src/assets/Hero_Image.png" alt="Box of stuff"/></div>
                <div className="homepage_info" >
                    <div className="homepage_login">
                        <div className="homepage_login-element">Zaloguj</div>
                        <div className="homepage_login-element">Załóż konto</div>
                    </div>
                    <div className="homepage_nav">
                        <div>Start</div>
                        <div>O co chodzi?</div>
                        <div>O nas</div>
                        <div>Fundacja i organizacja</div>
                        <div>Kontakt</div>
                    </div>
                    <div className="homepage_quote">
                        <div>Zacznij pomagać!</div>
                        <div>Oddaj niechciane rzeczy w zaufane ręce</div>
                        <div><img src="../src/assets/Decoration.png" alt="decoration"/></div>
                    </div>
                    <div className="homepage_buttons">
                        <div className="homepage_buttons-elements">ODDAJ RZECZY</div>
                        <div className="homepage_buttons-elements">ZORGANIZUJ ZBIÓRKĘ</div>
                    </div>
                </div>
                <div className="homepage_details">
                    <div className="homepage_stats">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}
