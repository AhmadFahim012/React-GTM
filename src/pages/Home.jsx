import React, { useEffect } from "react";
import TagManager from "react-gtm-module";
import { Link } from "react-router-dom";

const Home = () => {
    useEffect(() => {
        const trackLinks = () => {
          const links = document.querySelectorAll('a');
          links.forEach(link => {
            link.addEventListener('click', () => {
              TagManager.dataLayer({
                dataLayer: {
                  event: 'linkClick',
                  linkType: link.getAttribute('href'),
                  clickType: 'Link'
                }
              });
            });
          });
        };
    
        trackLinks(); // Run initially
    
        return () => {
          const links = document.querySelectorAll('a');
          links.forEach(link => {
            link.removeEventListener('click', () => {
              TagManager.dataLayer({
                dataLayer: {
                  event: 'linkClick',
                  linkType: link.getAttribute('href'),
                  clickType: 'Link'
                }
              });
            });
          });
        };
      }, []);
    
      const trackButtonClick = (buttonType) => {
        TagManager.dataLayer({
          dataLayer: {
            event: 'buttonClick',
            buttonType: buttonType
          }
        });
        console.log(`Button clicked: ${buttonType}`);
        // Any additional actions related to button clicks
      };
  return (
    <div className="card">
      <button onClick={() => trackButtonClick("Download")}>Download</button>
      <button onClick={() => trackButtonClick("Subscribe")}>Subscribe</button>
      <Link to="/example">Example Link</Link>
    </div>
  );
};

export default Home;
