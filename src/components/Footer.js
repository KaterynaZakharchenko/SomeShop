import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <section>
                <footer className="text-center text-white" style={{backgroundColor: "#CAE4DB "}}>

                    <div className="text-center p-3" style={{backgroundColor: " #3f3f3f"}}>
                        © 2024 &nbsp;
                        <NavLink className="text-light text-decoration-none" to="/">
                            FakeShop
                        </NavLink>
                    </div>
                </footer>
            </section>
        </div>
    )
}

export default Footer;
