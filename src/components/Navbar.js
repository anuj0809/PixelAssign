import React from 'react'
import "./style/Navbar.css"
const Navbar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg">

                <div className="container">

                    <a class="navbar-brand me-2" href="https://mdbgo.com/">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_3_81)">
                                <path d="M40 0H8C3.58172 0 0 3.58172 0 8V40C0 44.4183 3.58172 48 8 48H40C44.4183 48 48 44.4183 48 40V8C48 3.58172 44.4183 0 40 0Z" fill="#0C0D0E" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1945 8.78516C13.9043 8.78516 12.8584 9.83106 12.8584 11.1213V34.5822C12.8584 37.1626 14.9502 39.2544 17.5306 39.2544V13.4574H35.1412C35.1412 10.877 33.0494 8.78516 30.469 8.78516L15.2012 8.78517C15.1989 8.78516 15.1967 8.78516 15.1945 8.78516Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.5645 17.5708V22.243H30.4697V27.1946H21.5645V31.8668V31.9068V39.2545C24.1449 39.2545 26.2367 37.1627 26.2367 34.5823V31.8668H30.4696C33.05 31.8668 35.1419 29.775 35.1419 27.1946H35.1013C35.1281 26.9921 35.1419 26.7854 35.1419 26.5755V20.7053C35.1419 19.5189 34.2574 18.539 33.1118 18.3891C32.3603 17.8729 31.4503 17.5708 30.4697 17.5708H21.5645Z" fill="url(#paint0_linear_3_81)" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_3_81" x1="25.3781" y1="28.4326" x2="-23.4426" y2="2.77132" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#3DF2D2" />
                                    <stop offset="1" />
                                </linearGradient>
                                <clipPath id="clip0_3_81">
                                    <rect width="48" height="48" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarButtonsExample"
                        aria-controls="navbarButtonsExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarButtonsExample">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" style={{ fontSize:"20px !important",color: "white !important" }} href="#">FilterPixel</a>
                            </li>
                        </ul>


                        <div className="d-flex align-items-center">

                            <button type="button" id="signUp" className="btn">
                                Sign up
                            </button>

                        </div>
                    </div>

                </div>

            </nav>

        </div>
    )
}

export default Navbar
