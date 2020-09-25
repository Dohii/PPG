import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
class ServiceTabExample extends Component {
  render() {
    /* service tab menu */
    let serviceTabMenuData = [
      { iconName: "flaticon-002-welding", tabMenuName: "Design" },
      {
        iconName: "flaticon-004-walkie-talkie",
        tabMenuName: "Geotechnics",
      },
      { iconName: "flaticon-015-cart", tabMenuName: "Project management" },
      { iconName: "flaticon-010-tank-1", tabMenuName: "Calculations" },
      {
        iconName: "flaticon-010-tank-1",
        tabMenuName: "Construction works supervision",
      },
      { iconName: "flaticon-010-tank-1", tabMenuName: "BIM modeling" },
    ];

    let serviceTabMenuDatalist = serviceTabMenuData.map((val, i) => {
      return (
        <Tab key={i}>
          {" "}
          <span className="icon">
            <i className={val.iconName} />
          </span>{" "}
          <span className="text">{val.tabMenuName}</span>
        </Tab>
      );
    });

    /* service tab content */

    let serviceTabContentData = [
      {
        bgUrl: "service-tab1.jpg",
        contentTitle: "Design",
        contentDesc:
          "highway, railway, structures (bridges, tunnels, culverts, retaining walls) and structure of architectural buildings.",
        serviceLink: "service-details-left-sidebar",
      },
      {
        bgUrl: "service-tab1.jpg",
        contentTitle: "Geotechnics",
        contentDesc:
          "preparation of geotechnical studies and elaborates structure and soil settlement, shortand long-term stability analyses, soil improvement systems.",
        serviceLink: "service-details-left-sidebar",
      },
      {
        bgUrl: "service-tab1.jpg",
        contentTitle: "Project management",
        contentDesc:
          "specialization in project management and works contracts according to FIDIC conditions.",
        serviceLink: "service-details-left-sidebar",
      },
      {
        bgUrl: "service-tab1.jpg",
        contentTitle: "Calculations",
        contentDesc:
          "using specific structural and modeling programs concerning roads, railways, structures, foundations, drainage, concrete structures and geotechnics.",
        serviceLink: "service-details-left-sidebar",
      },
      {
        bgUrl: "service-tab1.jpg",
        contentTitle: "Construction works supervision",
        contentDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        serviceLink: "service-details-left-sidebar",
      },
      {
        bgUrl: "service-tab1.jpg",
        contentTitle: "BIM modeling",
        contentDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        serviceLink: "service-details-left-sidebar",
      },
    ];

    let serviceTabContentDatalist = serviceTabContentData.map((val, i) => {
      return (
        <TabPanel key={i}>
          <div
            className="service-tab__single-content-wrapper"
            style={{
              backgroundImage: `url(assets/img/backgrounds/${val.bgUrl})`,
            }}
          >
            <div className="service-tab__single-content">
              <h3 className="service-tab__title">{val.contentTitle}</h3>
              <p className="service-tab__text">{val.contentDesc}</p>
              <a
                href={`${process.env.PUBLIC_URL}/${val.serviceLink}`}
                className="see-more-link"
              >
                SEE MORE
              </a>
            </div>
          </div>
        </TabPanel>
      );
    });

    return (
      <div>
        {/*====================  service tab area ====================*/}
        <div className="service-tab-area section-space--inner--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area text-center">
                  <h2 className="section-title section-space--bottom--50">
                    Our Services <span className="title-icon" />
                  </h2>
                </div>
              </div>
              <div className="col-lg-12">
                {/* service tab wrapper */}

                <div className="service-tab-wrapper">
                  <Tabs>
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <TabList>
                          <div className="service-tab__link-wrapper">
                            {serviceTabMenuDatalist}
                          </div>
                        </TabList>
                      </div>

                      <div className="col-md-8">
                        {serviceTabContentDatalist}
                      </div>
                    </div>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of service tab area  ====================*/}
      </div>
    );
  }
}

export default ServiceTabExample;
