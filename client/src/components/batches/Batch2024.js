import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import girl from"./image/girl.jpg";
import boy from "./image/boy.jpg";

import "../assets/cards.css";
import "./batch.css";

import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import VerifiedIcon from "@mui/icons-material/Verified";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
// import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Batch2024() {
  return (
    <>
      <Navbar />

      <div className="batch_container">
        {" "}
        <h1> Batch 2020-24</h1>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team ">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="https://pbs.twimg.com/profile_images/1784856757527076864/qClEWx8X_400x400.jpg"
                  alt="Vikash's Profile"
                />
              </div>
              <div className="team-content">
                <h3 className="name">
                  Vikash Kaushik <VerifiedIcon />
                </h3>
                <h4 className="title">Batch 2020-24(IT)</h4>
              </div>
              <ul className="social">
                {/* <li>
                  <a href="https://theneoalpha.vercel.app/">
                    <LanguageIcon/>
                  </a>
                </li> */}
                <li>
                  <a href="https://www.linkedin.com/in/vikashkaushik79/">
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="mailto:vikashkaushik910@gmail.com">
                    <EmailIcon />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/theneoalpha">
                    <GitHubIcon />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/theneoalpha/">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="https://scontent.cdninstagram.com/v/t51.2885-19/401786787_254300204286671_3854906606076386958_n.jpg?stp=dst-jpg_s80x80&_nc_cat=105&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=EkGvlE4cc3oQ7kNvgEUHL7b&_nc_ht=scontent.cdninstagram.com&oh=00_AYDmGTSGzVWgHTVpr5orFJa8wVba7zAXw22zHUWR2CwjPA&oe=66693B9D"
                  alt="Avinash"
                />
              </div>
              <div className="team-content">
                <h3 className="name">Avinash Singh</h3>
                <h4 className="title">Batch 2020-24(IT)</h4>
              </div>
              <ul className="social">
                <li>
                  <a href="https://www.instagram.com/avinash__117/">
                    <InstagramIcon />
                  </a>
                </li>
                {/* <li>
                  <a href="#">
                    <GitHubIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <LinkedInIcon />
                  </a>
                </li> */}
                <li>
                  <a href="mailto:avinash1221@gmail.com">
                    <EmailIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="https://scontent.cdninstagram.com/v/t51.2885-19/417458204_739762701055289_483173472118831536_n.jpg?stp=dst-jpg_s80x80&_nc_cat=108&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=IIorxIx0qBMQ7kNvgGfK3QY&_nc_ht=scontent.cdninstagram.com&oh=00_AYBy-8IILSLqpRx5rYt8pczNBbNPWvxJ1kG8CoUTaMg8NQ&oe=666B4B6D"
                  alt="Tikesh Profile"
                />
              </div>
              <div className="team-content">
                <h3 className="name">Tikesh Usendi</h3>
                <h4 className="title">Batch 2020-24(IT)</h4>
              </div>
              <ul className="social">
                <li>
                  <a href="https://www.instagram.com/itst_ikesh?igsh=NzYzYzVsaTZmcTJk">
                    <InstagramIcon />
                  </a>
                </li>
                {/* <li>
                  <a href="#">
                    <GitHubIcon />
                  </a>
                </li> */}
                <li>
                  <a href="https://www.linkedin.com/in/tikesh-kumar-usendi-284356234/">
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="mailto:tikeshbhilai1234@gmail.com">
                    <EmailIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src={boy} alt="Boy Profile" />
              </div>
              <div className="team-content">
                <h3 className="name">Tushar Sahu</h3>
                <h4 className="title">Batch 2020-24</h4>
              </div>
              <ul className="social">
                {/* <li>
                  <a href="#">
                    <InstagramIcon />
                  </a>
                </li> */}
                {/* <li>
                  <a href="#">
                    <GitHubIcon />
                  </a>
                </li> */}
                <li>
                  <a href="https://www.linkedin.com/in/tushar-sahu-6b15b4231/">
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="mailto:tusharsahu0212@gmail.com">
                    <EmailIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team ">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="https://scontent.cdninstagram.com/v/t51.2885-19/364986967_988438875737810_1281060800323658394_n.jpg?stp=dst-jpg_s80x80&_nc_cat=111&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=ZIKK_UUXeWMQ7kNvgElUYTG&_nc_ht=scontent.cdninstagram.com&oh=00_AYAKfDF6YBycEjOoFDwq_gXU9Hw-lTlLJCUuPHZXWM5VnA&oe=666B7689"
                  alt="Neetish's Profile"
                />
              </div>
              <div className="team-content">
                <h3 className="name">
                  Neetish Yadu
                </h3>
                <h4 className="title">Batch 2020-24(IT)</h4>
              </div>
              <ul className="social">
               
                
                <li>
                  <a href="mailto:neetishyadu123456@gmail.com">
                    <EmailIcon />
                  </a>
                </li>
                
                <li>
                  <a href="https://www.instagram.com/neetishyadu/">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team ">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="https://scontent.cdninstagram.com/v/t51.2885-19/325523709_906817996989975_4764213422704557047_n.jpg?stp=dst-jpg_s80x80&_nc_cat=100&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=-s2blJCah7wQ7kNvgGp7zuH&_nc_ht=scontent.cdninstagram.com&oh=00_AYBhSBWk_HM5kHWM_ZzYhB-5P26Fc00-9FVfLMGcjiQueA&oe=666B5C5A"
                  alt="Dushyant's Profile"
                />
              </div>
              <div className="team-content">
                <h3 className="name">
                  Dushyant Verma
                </h3>
                <h4 className="title">Batch 2020-24(IT)</h4>
              </div>
              <ul className="social">
               
                <li>
                  <a href="https://www.linkedin.com/in/dushyant-verma-3679021bb/">
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="mailto:dushyantkuverma2001@gmail.com">
                    <EmailIcon />
                  </a>
                </li>
                
                <li>
                  <a href="https://www.instagram.com/dush_yantverma/">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team ">
              <div className="picture">
                <img
                  className="img-fluid"
                  src={boy}
                  alt="Vikash's Profile"
                />
              </div>
              <div className="team-content">
                <h3 className="name">
                  Derhu Joshi
                </h3>
                <h4 className="title">Batch 2020-24(IT)</h4>
              </div>
              <ul className="social">
               
                
                <li>
                  <a href="mailto:dpiitian181149@gmail.com">
                    <EmailIcon />
                  </a>
                </li>
                
                <li>
                  <a href="https://www.instagram.com/thejoshi31/">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team ">
              <div className="picture">
                <img
                  className="img-fluid"
                  src={girl}
                  alt="Vikash's Profile"
                />
              </div>
              <div className="team-content">
                <h3 className="name">
                  Riddhi Netam
                </h3>
                <h4 className="title">Batch 2020-24(IT)</h4>
              </div>
              <ul className="social">
                
                
                <li>
                  <a href="mailto:netamriddhi@gmail.com">
                    <EmailIcon />
                  </a>
                </li>
                
                <li>
                  <a href="https://www.instagram.com/netam_riddhi/">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team ">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="https://scontent.cdninstagram.com/v/t51.2885-19/433079012_941854817519327_295563120362339637_n.jpg?stp=dst-jpg_s80x80&_nc_cat=107&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=JkmD5oJ6g0oQ7kNvgF4iJwI&_nc_ht=scontent.cdninstagram.com&oh=00_AYDKqIsPEZzaog6xFOcDtZoHd4dQMOJeeT80g3YZx_7_FA&oe=666B603B"
                  alt="Damini's Profile"
                />
              </div>
              <div className="team-content">
                <h3 className="name">
                 Damini Sahu
                </h3>
                <h4 className="title">Batch 2020-24(IT)</h4>
              </div>
              <ul className="social">
                
               
                <li>
                  <a href="mailto:daminisahu2608@gmail.com">
                    <EmailIcon />
                  </a>
                </li>
                
                <li>
                  <a href="https://www.instagram.com/sdamini293/">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team ">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="https://scontent.cdninstagram.com/v/t51.2885-19/426612992_756617686565270_7933362326464200121_n.jpg?stp=dst-jpg_s80x80&_nc_cat=105&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=w93ZZGqc3TsQ7kNvgFj8jnb&_nc_ht=scontent.cdninstagram.com&oh=00_AYAcXrANfAlDDS8agRinmBHxyv2z2zwHJjQML7tVzH1iNg&oe=666B7895"
                  alt="Ajay's Profile"
                />
              </div>
              <div className="team-content">
                <h3 className="name">
                 Ajay Patel
                </h3>
                <h4 className="title">Batch 2020-24(IT)</h4>
              </div>
              <ul className="social">
             
                <li>
                  <a href="https://www.linkedin.com/in/ajay-patel-9b4125222/">
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="mailto:ajaypatel30080@gmail.com">
                    <EmailIcon />
                  </a>
                </li>
                
                <li>
                  <a href="https://www.instagram.com/ajaykashyap_a01/">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team ">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="https://scontent.cdninstagram.com/v/t51.2885-19/368570501_226530489977635_9181775051503537678_n.jpg?stp=dst-jpg_s80x80&_nc_cat=106&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=-sEUfpus0swQ7kNvgG1RIwC&_nc_ht=scontent.cdninstagram.com&oh=00_AYBHF-BdObHeHPkEw44Fk934i-5wKyIeGsxYG8bWPsStgw&oe=666B80F8"
                  alt="Lisha's Profile"
                />
              </div>
              <div className="team-content">
                <h3 className="name">
                  Lisha Palia
                </h3>
                <h4 className="title">Batch 2020-24(IT)</h4>
              </div>
              <ul className="social">
               
               
                <li>
                  <a href="mailto:lisha.palia@gmail.com">
                    <EmailIcon />
                  </a>
                </li>
               
                <li>
                  <a href="https://www.instagram.com/er.lishapalia/">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team ">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="https://scontent.cdninstagram.com/v/t51.2885-19/447616349_971014927801911_3709372004715915467_n.jpg?stp=dst-jpg_s80x80&_nc_cat=104&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=tJOQ8asJLLUQ7kNvgFlNrt5&_nc_ht=scontent.cdninstagram.com&oh=00_AYCqriRPwuiMnx0e9gAcKLVcsew66VY2OnULsjV-82z1dQ&oe=666B6888"
                  alt="Dooman's Profile"
                />
              </div>
              <div className="team-content">
                <h3 className="name">
                  Dooman Maitry
                </h3>
                <h4 className="title">Batch 2020-24(IT)</h4>
              </div>
              <ul className="social">
               
               
                <li>
                  <a href="mailto:doomanmaitry287@gmail.com">
                    <EmailIcon />
                  </a>
                </li>
                
                <li>
                  <a href="https://www.instagram.com/dooman.maitry/">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team ">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="https://scontent.cdninstagram.com/v/t51.2885-19/433138870_1077955253421786_384397419465140552_n.jpg?stp=dst-jpg_s80x80&_nc_cat=110&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=j1np16yxbLsQ7kNvgGYjBkm&_nc_ht=scontent.cdninstagram.com&oh=00_AYDJ1mFtWHugzhISvSCUhIL6U7XbNxe1g-GpQ8c7aJ61Sg&oe=666B66D3"
                  alt="Aayush's Profile"
                />
              </div>
              <div className="team-content">
                <h3 className="name">
                  Aayush Verma
                </h3>
                <h4 className="title">Batch 2020-24(IT)</h4>
              </div>
              <ul className="social">
               
               
                <li>
                  <a href="mailto:aayushverma1708@gmail.com">
                    <EmailIcon />
                  </a>
                </li>
                
                <li>
                  <a href="https://www.instagram.com/aayush__verma__21/">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team ">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="https://scontent.cdninstagram.com/v/t51.2885-19/436528045_1860302534382948_2121481013753574726_n.jpg?stp=dst-jpg_s80x80&_nc_cat=107&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=aQefC4bIMDEQ7kNvgGzcaTD&_nc_ht=scontent.cdninstagram.com&oh=00_AYAv2pdGewiUgh39WTQ67Sn-Tedsa-VlfWwtX82zI1i9iQ&oe=666B5F16"
                  alt="Ankit's Profile"
                />
              </div>
              <div className="team-content">
                <h3 className="name">
                  Ankit Kumar Jha
                </h3>
                <h4 className="title">Batch 2020-24(IT)</h4>
              </div>
              <ul className="social">
               
                
                <li>
                  <a href="mailto:vikashkaushik910@gmail.com">
                    <EmailIcon />
                  </a>
                </li>
               
                <li>
                  <a href="https://www.instagram.com/ajkj0816/">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team ">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="https://scontent.cdninstagram.com/v/t51.2885-19/387748545_327224103223841_7826806371998385996_n.jpg?stp=dst-jpg_s80x80&_nc_cat=110&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=mJRO14BPk4wQ7kNvgGY52a8&_nc_ht=scontent.cdninstagram.com&oh=00_AYBQBTKn4Xy4fpWo1Oj4SLIULG5l5glLhHlVPGQyLmqIvQ&oe=666B8EFE"
                  alt="Japneet's Profile"
                />
              </div>
              <div className="team-content">
                <h3 className="name">
                japneet Singh Dadiala
                </h3>
                <h4 className="title">Batch 2020-24(IT)</h4>
              </div>
              <ul className="social">
               
                
                <li>
                  <a href="mailto:japneetsinghjdp@gmail.com">
                    <EmailIcon />
                  </a>
                </li>
                
                <li>
                  <a href="https://www.instagram.com/japneet_singh_at_jdp/">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team ">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="https://scontent.cdninstagram.com/v/t51.2885-19/434078906_1487898482075306_1870443392034563340_n.jpg?stp=dst-jpg_s80x80&_nc_cat=110&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=ewLTDnGaaPIQ7kNvgGpJMCb&_nc_ht=scontent.cdninstagram.com&oh=00_AYCwfH-W7MhhUPWFMH4lOyvJKekeQPfKXvfl8Pc9HmBykg&oe=666B5B11"
                  alt="Khageshwar's Profile"
                />
              </div>
              <div className="team-content">
                <h3 className="name">
                 Khageshwar Nag
                </h3>
                <h4 className="title">Batch 2020-24(IT)</h4>
              </div>
              <ul className="social">
               
                <li>
                  <a href="mailto:khageshwarnag31@gmail.com">
                    <EmailIcon />
                  </a>
                </li>
                
                <li>
                  <a href="https://www.instagram.com/k.n._vinayak_31/">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>

      <Footer />
    </>
  );
}
