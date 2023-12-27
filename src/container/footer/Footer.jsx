import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='footer-content'>
                <h1>- VWeb Market -</h1>
                <p>
                    "© 2023 VWeb Market | Pioneering Excellence in Themes, Web Development, and Mobile App Solutions. Crafting Digital Experiences since our Founding Year. Explore the Future of Digital Innovation with Us!"</p>
            </div>
            <div className='footer-icon-container'>
                <div className='footer-icon-box'>
                    <FacebookIcon />
                    <p>Facebook</p>
                </div>
                <div className='footer-icon-box'>
                    <InstagramIcon />
                    <p>Instagram</p>
                </div>
                <div className='footer-icon-box'>
                    <EmailIcon />
                    <p>Email</p>
                </div>
                <div className='footer-icon-box'>
                    <GitHubIcon />
                    <p>Github</p>
                </div>        
            </div>
        </footer>
    )
}

export default Footer