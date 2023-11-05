import React, { useEffect, useState } from "react";
import TagManager from "react-gtm-module";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const Home = () => {
    
  const [isButtonClicked, setIsButtonClicked] = useState([]);
  const [sidebarActivity, setSidebarActivity] = useState([]);

  useEffect(() => {
    const trackLinks = () => {
      const links = document.querySelectorAll("a");
      links.forEach((link) => {
        link.addEventListener("click", () => {
          TagManager.dataLayer({
            dataLayer: {
              event: "linkClick",
              linkType: link.getAttribute("href"),
              clickType: "Link",
            },
          });
        });
      });
    };

    trackLinks(); // Run initially

    return () => {
      const links = document.querySelectorAll("a");
      links.forEach((link) => {
        link.removeEventListener("click", () => {
          TagManager.dataLayer({
            dataLayer: {
              event: "linkClick",
              linkType: link.getAttribute("href"),
              clickType: "Link",
            },
          });
        });
      });
    };
  }, []);

  const trackButtonClick = (buttonType) => {
    
    setIsButtonClicked(prevState => [...prevState, buttonType]);

    const updatedSidebarActivity =
      isButtonClicked == buttonType
        ? sidebarActivity.filter((item) => item !== buttonType)
        : [...sidebarActivity, buttonType];
    setSidebarActivity(updatedSidebarActivity);
    TagManager.dataLayer({
      dataLayer: {
        event: "buttonClick",
        buttonType: buttonType,
      },
    });
    console.log(`Button clicked: ${buttonType}`);
  };
  return (
    <div className="container  py-5">
      <div className="row ">
        <div className="col-md-7 ">
          <div>
            <Button
              onClick={() => trackButtonClick("Subscribe")}
              variant="outline-primary"
              style={{marginRight:13}}
            >
              Subscribe
            </Button>
            <Button
              onClick={() => trackButtonClick("Download")}
              variant="outline-primary mx-3"
            >
              Download
            </Button>
            <Button
              onClick={() => trackButtonClick("ContactUs")}
              variant="outline-primary mx-3"
            >
              Contact Us
            </Button>
            <Link to="/example" className="mx-3">
              Read More
            </Link>
            <Link to="/example" className="mx-3">
              Visit our Store
            </Link>

            <iframe
              width="600"
              height="315"
              className="mt-5"
              src="https://www.youtube.com/embed/e2oCLoR-bvU?si=5eFFDxrDFW3Q3Co-"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="col-md-1">
          <div className="vr" style={{ height: "400px" }}></div>
        </div>
        <div className="col-md-4">
          <h1 className="display-6">Dashboard</h1>
          <ul>
            {sidebarActivity.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
