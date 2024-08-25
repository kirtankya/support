import React, { useState } from "react";
import "./header.scss";

export default function Header() {
    const [isMenu, setIsMenu] = useState(false);

    const toggleMenu = () => {
        setIsMenu(!isMenu);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header_Aligment">
                    <div className="header_Logo">
                        <p>Vine Themes</p>
                    </div>
                    <div className="header_Items">
                        <div className="header_Icon_aligment">
                            <div className="header_Icon">
                                {/* SVG Icons */}
                            </div>
                        </div>
                        <div className="header_Item">
                            <div onClick={toggleMenu} className="header_MenuIcon">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 24 24"
                                    height="25px"
                                    width="25px"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M18 18V20H6V18H18ZM21 11V13H3V11H21ZM18 4V6H6V4H18Z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`menu_Items ${isMenu ? 'show' : ''}`}>
                    <div onClick={toggleMenu} className="close_Btn">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            height="30px"
                            width="30px"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"></path>
                        </svg>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="/" title="About">About</a></li>
                            <li><a href="/" title="Features">Features</a></li>
                            <li><a href="/" title="Tokenomics">Tokenomics</a></li>
                            <li><a href="/" title="How To Buy">How To Buy</a></li>
                            <li><a href="/" title="How To Buy">How To Buy</a></li>
                            <li><a href="/" title="FAQs">FAQs</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
