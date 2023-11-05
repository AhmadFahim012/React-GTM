import TagManager from "react-gtm-module";
import "./App.css";

function App() {
  const trackButtonClick = (buttonType) => {
    const dataLayer = window.dataLayer || [];
    console.log('Entire dataLayer:', dataLayer);
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
    <>
      <h1>React-GTM</h1>
      <div className="card">
        <button onClick={() => trackButtonClick('Download')}>Download</button>
        <button onClick={() => trackButtonClick('Subscribe')}>Subscribe</button>
      </div>
    </>
  );
}

export default App;
