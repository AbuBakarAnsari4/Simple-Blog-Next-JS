import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
    return (
        <>
            <Navbar />
            <div className='container mx-auto my-8'>
                <h1 className="text-3xl font-bold mb-4">About Hunting Coder</h1>
                <p className="text-lg">
                    Hunting Coder is a blog dedicated to exploring the world of coding and software development. Our mission is to provide valuable insights, tutorials, and resources to help aspiring and experienced developers enhance their coding skills and stay updated with the latest industry trends.
                </p>
                <p className="text-lg mt-4">
                    Whether you're a beginner taking your first steps in programming or a seasoned developer looking for advanced techniques, Hunting Coder has something for everyone. We cover a wide range of topics, including web development, mobile app development, algorithms, data structures, best practices, and much more.
                </p>
                <p className="text-lg mt-4">
                    Join us on this exciting journey as we delve into the fascinating world of coding, share our experiences, and help you become a better coder. Happy coding!
                </p>
            </div>
            <Footer/>
        </>
    )
}

export default About
