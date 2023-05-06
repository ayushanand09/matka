import React, { useState, useEffect } from "react";
import "../CSS/Home.css";
 
const Home = () => {

  // Creatin use states for displaying/hiding buttons and animating the timer bar
  const [displayANK, setDisplayANK] = useState(false);
  const [hideExceptANK, setHideExceptANK] = useState(true);
  const [displaySP, setDisplaySP] = useState(false);
  const [displaySPBtns, setDisplaySPBtns] = useState(false);
  const [hideExceptSP, setHideExceptSP] = useState(true);
  const [displayToken, setdisplayToken] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [animation, setAnimation] = useState(false);

  const showToken = () => {
    setdisplayToken(true);
  };
  const hideToken = () => {
    setdisplayToken(false);
  };

  const showANK = () => {
    setDisplayANK(true);
  };
  const hideANK = () => {
    setDisplayANK(false);
  };

  const showANKBtns = () => {
    setHideExceptANK(true);
  };
  const hideANKBtns = () => {
    setHideExceptANK(false);
  };

  const showSP = () => {
    setDisplaySP(true);
    setHideExceptSP(true);
  };
  const hideSP = () => {
    setDisplaySP(false);
    setHideExceptSP(false);
  };

  const showSPBtns = () => {
    setDisplaySPBtns(true);
  };
  const hideSPBtns = () => {
    setDisplaySPBtns(false);
  };

  const handleClick = () => {
    setClickCount(clickCount + 1);
    if (clickCount % 2 === 0) {
      handleTriggerClick();
    } else {
      handleHideButtons();
    }
  };

  const handleTriggerClick = () => {
    setShowButtons(true);
  };
  const handleHideButtons = () => {
    setShowButtons(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setAnimation(true);
    }, 1000);
  }, []);

  return (
    <>
      <div className="container">
        <h1>MATKA UI</h1>

        {displayToken && (
          <>
            <div className="tokens">
              <button className="token1"> 1 </button>
              <button className="token2"> 5 </button>
              <button className="token3"> 10 </button>
              <button className="token4"> 20 </button>
              <button className="token5"> 50 </button>
              <button className="token6"> 100 </button>
              <button className="token7"> 250 </button>
            </div>
          </>
        )}
        
        <div className="cards">
          <div id="card-1">
            <img
              className="img1"
              src={require("./queen.png")}
              alt="Not displaying image1"
            />
            <img
              className="img1"
              src={require("./queen.png")}
              alt="Not displaying image2"
            />
            <img
              className="img1"
              src={require("./queen.png")}
              alt="Not displaying image3"
            />
            190-0
          </div>
          <div id="card-2">
            <img src={require("./queen.png")} alt="Not displaying image4" />
            <img src={require("./queen.png")} alt="Not displaying image5" />
            <img src={require("./queen.png")} alt="Not displaying image6" />
            366-5
          </div>
          <div id="card-3">
            <img src={require("./queen.png")} alt="Not displaying image7" />
            <img src={require("./queen.png")} alt="Not displaying image8" />
            <img src={require("./queen.png")} alt="Not displaying image9" />
            149-4
          </div>
          <div id="card-4">
            <img src={require("./queen.png")} alt="Not displaying image" />
            <img src={require("./queen.png")} alt="Not displaying image" />
            <img src={require("./queen.png")} alt="Not displaying image" />
            360-9
          </div>
          <div id="card-5">
            <img src={require("./queen.png")} alt="Not displaying image" />
            <img src={require("./queen.png")} alt="Not displaying image" />
            <img src={require("./queen.png")} alt="Not displaying image" />
            235-0
          </div>
        </div>
        <div className="timer-bar-container">
          <div className={`timer-bar ${animation ? "animate" : ""}`}></div>
        </div>
        <span id="txt">
          Place your bets
        </span>

        <div className="buttons">
          <div className="ANK">
            <button
              className="btn1"
              onClick={() => {
                showANK();
                hideANKBtns();
              }}
              style={{
                paddingRight: "1.7rem",
                paddingLeft: "1.7rem",
                backgroundColor: "red",
              }}
            >
              ANK
            </button>
            {displayANK && (
              <>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <br></br>
                <button
                className="backANK"
                  onClick={() => {
                    hideANK();
                    showANKBtns();
                  }}
                  style={{ backgroundColor: "blue", marginTop: "10px" }}
                >
                  BACK
                </button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>0</button>
              </>
            )}
          </div>
          {hideExceptANK && (
            <>
              <div className="SP">
                <button
                  className="btn2"
                  onClick={() => {
                    showSP();
                    showSPBtns();
                    showToken();
                  }}
                  style={{
                    paddingRight: "1.7rem",
                    paddingLeft: "1.7rem",
                    backgroundColor: "red",
                  }}
                >
                  SP
                </button>
                {displaySP && (
                  <>
                    <button
                    className="backSP"
                      onClick={() => {
                        hideSP();
                        hideSPBtns();
                        hideToken();
                      }}
                      style={{ backgroundColor: "blue", marginTop: "10px" }}
                    >
                      BACK
                    </button>
                  </>
                )}
              </div>
              <div className="DP">
                <button className="btn3">DP</button>
              </div>
              <div className="TP">
                <button className="btn4">TP</button>
              </div>
              <div className="JODI">
                <button className="btn5">JODI</button>
              </div>
              <br></br>
              <div className="HSANGAM">
                <button className="btn6">HALF SANGAM</button>
              </div>
              <div className="FSANGAM">
                <button className="btn7">FULL SANGAM</button>
              </div>
              <div className="PATTI">
                <button className="btn8">CYCLE PATTI</button>
              </div>
            </>
          )}
        </div>
      </div>
      {displaySPBtns && (
        <>
          <div id="SP-btns">
            <button
              className="SP1"
              onClick={() => {
                handleClick();
              }}
            >
              {" "}
              SELECT ALL 1 <span id="angle"> ^ </span>{" "}
            </button>
            {showButtons && (
              <>
                <div className="SP1-options-set1">
                  <button> 137 </button>
                  <button> 146 </button>
                  <button> 236 </button>
                  <button> 245 </button>
                  <button> 290 </button>
                  <button> 380 </button>
                </div>
                <div className="SP1-options-set2">
                  <button> 470 </button>
                  <button> 489 </button>
                  <button> 560 </button>
                  <button> 579 </button>
                  <button> 678 </button>
                  <button> 128 </button>
                </div>
              </>
            )}

            <button className="SP2" onClick={handleClick}>
              {" "}
              SELECT ALL 2<span id="angle"> ^ </span>{" "}
            </button>
            {showButtons && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP3">
              {" "}
              SELECT ALL 3<span id="angle"> ^ </span>{" "}
            </button>
            <button className="SP4">
              {" "}
              SELECT ALL 4<span id="angle"> ^ </span>{" "}
            </button>
            <button className="SP5">
              {" "}
              SELECT ALL 5<span id="angle"> ^ </span>{" "}
            </button>
            <button className="SP6">
              {" "}
              SELECT ALL 6<span id="angle"> ^ </span>{" "}
            </button>
            <button className="SP7">
              {" "}
              SELECT ALL 7<span id="angle"> ^ </span>{" "}
            </button>
            <button className="SP8">
              {" "}
              SELECT ALL 8<span id="angle"> ^ </span>{" "}
            </button>
            <button className="SP9">
              {" "}
              SELECT ALL 9<span id="angle"> ^ </span>{" "}
            </button>
          </div>
          <br></br>
        </>
      )}
    </>
  );
};

export default Home;
