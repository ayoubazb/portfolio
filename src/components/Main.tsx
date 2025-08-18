import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profileImg from '../assets/images/profile.jpeg';


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImg} alt="Avatar" />

        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ayoubazb" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="http://linkedin.com/in/ayoub-elazzab/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Ayoub El Azzab</h1>
          <p>Data Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/ayoubazb" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="http://linkedin.com/in/ayoub-elazzab/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;