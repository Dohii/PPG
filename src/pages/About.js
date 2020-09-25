import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Funfact from "../components/Funfact";
import TeamMemberGrid from "../components/TeamMemberGrid";
import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import ModalVideo from "react-modal-video";
class About extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <div>
        {/* Navigation bar */}
        <NavBar />

        {/* breadcrumb */}
        {/*====================  breadcrumb area ====================*/}
        <div className="breadcrumb-area breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>About Us</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        <div className="page-wrapper section-space--inner--top--120">
          {/*About section start*/}
          <div className="about-section section-space--inner--bottom--120">
            <div className="container">
              <div className="row row-25 align-items-center">
                <div className="col-lg-6 col-12 mb-30">
                  <div className="about-image-two">
                    <img src="assets/img/about/about-3.jpg" alt="" />
                    <span className="video-popup">
                      <ModalVideo
                        channel="youtube"
                        isOpen={this.state.isOpen}
                        videoId="OrS-93U4AYQ"
                        onClose={() => this.setState({ isOpen: false })}
                      />
                      <button onClick={this.openModal}>
                        <i className="ion-ios-play-outline" />
                      </button>
                    </span>
                  </div>
                </div>
                <div className="col-lg-6 col-12 mb-30">
                  <div className="about-content-two">
                    <h3>Welcome to PPG</h3>
                    <h1>Providing high-quality consulting services</h1>
                    <h4>
                      PPG was founded in 2012 with the aim of providing
                      high-quality consulting services in the field of civil
                      engineering and project management, with key focus
                      retained on transport infrastructure.
                    </h4>
                    <p>
                      Through enagement of skilled international and local
                      experts we provide services in the field of planning and
                      studies, design, works supervision, technical assistance,
                      project management and procurement of high profile
                      infrastructure projects. We have maintained constant
                      presence in the construction sector, collaborating closely
                      with public enterprises, government agencies and worlds’
                      largest engineering companies as our clients and
                      partners..
                    </p>
                    <a
                      href="services"
                      className="ht-btn--default ht-btn--default--dark-hover section-space--top--20"
                    >
                      Our Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*About section end*/}
          {/*About section start*/}
          <div className="about-section section-space--inner--120">
            <div className="container">
              <div className="about-wrapper row">
                <div className="col-sm-6 col-12 order-1 order-lg-2">
                  <div className="about-image about-image-1">
                    <img src="assets/img/team/team.jpg" alt="" />
                  </div>
                </div>

                <div className="col-lg-6 col-12 order-3 order-lg-1">
                  <div className="about-content about-content-1">
                    <h1>FOREWORDS FROM THE MANAGING DIRECTOR</h1>
                    <p>
                      In a changing world, constantly striving toward
                      improvement, infrastructural development and better
                      connectivity among the people, we have allocated an area
                      where we feel we can contribute and add value in pursuit
                      of this global mission. Since its founding, powered by a
                      talented, passionate and experienced team of experts, PPG
                      has swiftly got involved in some of the most complex and
                      demanding projects of its kind in the infrastructure
                      sector.
                      <br />
                      Through the years, we have established ourselves as a
                      highly reliable and competent partner to our clients who
                      kept trusting us with a number of equally demanding
                      projects and most challenging assignments. Today we can
                      say that PPG has been involved in the vast majority of
                      motorway/road construction projects on the domestic
                      market, including the currently longest tunnels and
                      bridges in BiH and has significantly expanded its scope of
                      activities and areas of expertise, beyond the original
                      geotechnics consulting and works supervision focus.
                      <br />
                      With such internal growth of competences PPG has opened
                      new markets and has been awarded with projects in
                      Montenegro, Moldova, Serbia and Turkey. Our aim is to
                      retain our passion and service excellence in the field of
                      Engineering consultancy and to too further expand our
                      knowledge and geographies we are working in.
                      <br />
                      Looking forward to continuing doing what we love, for the
                      benefit of communities we work and live in…
                      <br />
                      <br />
                      <b>Emina Ramčić</b> Manging Director
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*About section end*/}

          {/* Fun fact */}
          <Funfact />

          {/* Team member */}
          <TeamMemberGrid />

          {/* Brand logo */}
          <BrandLogoSlider background="" />
        </div>

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default About;
