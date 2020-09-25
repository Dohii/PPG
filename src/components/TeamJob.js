import React, { Component } from "react";

class TeamJob extends Component {
  render() {
    let data = [
      {
        jobTitle: "Meliha Avdagić",
        jobDesc: "Engineer | Project Management",
        jobLink: "/",
      },
      {
        jobTitle: "Nermin Šehagić",
        jobDesc: "Engineer | Tunnel Engineer & Designer",
        jobLink: "/",
      },
      {
        jobTitle: "Nedžad Begić",
        jobDesc: "Engineer | Design Management",
        jobLink: "/",
      },
      {
        jobTitle: "Daria Njemčević",
        jobDesc: "Architect | Architecture and BIM modeling",
        jobLink: "/",
      },
    ];

    let DataList = data.map((val, i) => {
      return (
        <div className="team-job__single" key={i}>
          <h3 className="title">
            {" "}
            <a href={`${process.env.PUBLIC_URL}/staff`}>{val.jobTitle}</a>
          </h3>
          <p className="text">{val.jobDesc}</p>
        </div>
      );
    });
    return (
      <div>
        {/*====================  team job area ====================*/}
        <div className="team-job-area section-space--inner--120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="team-job__content">
                  <div className="team-job__title-wrapper">
                    <h2 className="team-job__title">
                      Meet Our <br /> Honorable Employees.
                    </h2>
                  </div>
                  <div className="team-job__content-wrapper">
                    <h2 className="team-job__title">
                      Key Personel{" "}
                      <span>
                        <button
                          onClick={null}
                          className="see-more-link see-more-link--color"
                        >
                          Meet Our Team
                        </button>
                      </span>
                    </h2>
                    <div className="team-job__list-wrapper">{DataList}</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="team-job__image team-job__desktop text-center text-lg-right">
                  <img
                    src="assets/img/team/team.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of team job area  ====================*/}
      </div>
    );
  }
}

export default TeamJob;
