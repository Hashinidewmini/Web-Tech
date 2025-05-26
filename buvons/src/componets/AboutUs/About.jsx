import React from 'react';
import Header from '../Header/Header';
import './About.css';

export default function About() {
    return (
        <div className="about-page">
            {/* Header */}
            <Header className="about-header" />
            
            {/* Section 1: About with Gradient Background */}
            <section className="about-hero">
                <div className="about-content">
                    <div className="about-text">
                        <h1>About Buvons</h1>
                        <p>
                            At Buvons, our journey began with a passion for exceptional coffee and a vision to create 
                            a cozy haven for coffee lovers. Since our establishment in 2015, we have been committed 
                            to sourcing the finest beans from around the world, expertly roasting them to perfection, 
                            and crafting delightful coffee experiences for our community.
                        </p>
                        
                        <h2>Our Story</h2>
                        <p>
                            What started as a small neighborhood cafe has grown into a beloved destination for coffee 
                            enthusiasts. Every cup tells a story of careful sourcing, artisanal roasting, and passionate 
                            brewing techniques that we've perfected over the years.
                        </p>
                    </div>
                    
                    <div className="story-images">
                        <img src="public/images/coffee-beans.jpg" alt="Coffee Beans" />
                        <img src="public/images/barista-pouring.jpg" alt="Barista Pouring Coffee" />
                        <img src="public/images/cafe-interior.jpg" alt="Cafe Interior" />
                    </div>
                </div>
            </section>
            
            {/* Section 2: Coffee & Mission */}
            <section className="coffee-mission-section">
                <div className="columns-container">
                    {/* Left Column - Our Coffee */}
                    <div className="column-content">
                        <h2>Our Coffee</h2>
                        <p>
                            We believe that great coffee starts with great beans. We source our coffee beans from 
                            renowned coffee-growing regions, ensuring they are ethically harvested and sustainably 
                            grown. Our skilled roasters meticulously roast each batch to bring out the unique 
                            flavors and aromas of every bean, delivering a rich and flavorful brew in every cup.
                        </p>
                        <p>
                            From light and fruity to dark and chocolatey, our selection caters to every palate, 
                            each with its own distinctive character and story.
                        </p>
                    </div>
                    
                    {/* Center Image */}
                    <div className="center-image">
                        <img src="public/images/lady-drinking-coffee.jpg" alt="Lady enjoying coffee" />
                    </div>
                    
                    {/* Right Column - Our Mission */}
                    <div className="column-content">
                        <h2>Our Mission</h2>
                        <p>
                            Our mission is to bring people together through the love of coffee. We strive to 
                            provide a welcoming atmosphere where everyone can enjoy high-quality coffee, engage 
                            in meaningful conversations, and create lasting memories.
                        </p>
                        <p>
                            Every cup of coffee at Buvons is a testament to our dedication to quality, 
                            sustainability, and customer satisfaction. We're not just serving coffee - we're 
                            cultivating community.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}