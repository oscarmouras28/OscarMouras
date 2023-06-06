import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import "../Styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon/>
            <LinkedInIcon/>
            <TwitterIcon/>
            <FacebookIcon/>
        </div>
        {/* que el año sea extraido automaticamente  */}
        <p> &copy; 2023 oscarmouras.com </p>

    </div>
  )
}

export default Footer