import React from 'react'
import Header from '../Header/Header'
import './About.css'

export default function About() {
    return (
        <div>
            <Header />
            <div className='description'>
                <center>
                    <h1>Welcome to Buvons – Your Daily Coffee Ritual</h1>
                </center> <br />

                At Buvons, we’re more than just a coffee shop—we’re your cozy corner for connection, comfort, and craft coffee. Since opening our first store in 2015, our mission has been simple: to serve exceptional coffee made from ethically sourced beans, roasted to perfection and brewed with care.

                With over 50 locations across the country, Buvons brings a consistent, high-quality café experience to every neighborhood. Whether you’re grabbing a quick espresso on the go, catching up with friends over a caramel latte, or settling in with your laptop and a fresh croissant, we’ve got the perfect space and the perfect cup for you.

                We’re passionate about sustainability, supporting local communities, and creating welcoming spaces for everyone. Stop by any of our locations and discover why Brew & Bean has become a favorite daily stop for coffee lovers everywhere
            </div>
        </div>
    )
}
