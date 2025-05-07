import React from 'react'
import "./footer.css"
import { NavLink } from 'react-router-dom'

const Footer = () => {

    const links =[
        {
            item: "About Us", path: "/about"
        },

        {
            item: "Our Services", path: "/services"
        }
    ]
  return (
    <div>
            <div className="footer">
                    <div className="footer_top">
                        <div className="footer_section">
                        <h4>FADAMOS STORE</h4>
                        <p>Your one-stop shop for premium products and quality service.</p>
                        </div>
                        <div className="footer_section">
                        <h4>Quick Links</h4>
                          <div className="footer_linkss">
                            {links.map(({item, path}) => (
                                <NavLink
                                    key={item}
                                    to={path}
                                    className='pathh'
                                >
                                    {item}
                                </NavLink>
                            ))}
                          </div>
                        </div>
                        <div className="footer_section">
                        <h4>Contact Us</h4>
                        <p>Email: support@fadamos.com</p>
                        <p>Phone: +234 801 234 5678</p>
                        <p>Mon - Sun: 24hrs</p>
                        </div>
                    </div>
                    <div className="footer_bottom">
                        <p>&copy; {new Date().getFullYear()} FADAMOS STORE. All rights reserved.</p>
                    </div>
            </div>
    </div>
  )
}

export default Footer
