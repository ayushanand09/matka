import React, { useState, useEffect } from "react";
import "../CSS/Home.css";
import "../CSS/Responsive.css";
import {playing_card} from "../DATA/data";
const ButtonContent = ({ content, onBack, id }) => {
  return (
    <div>
      <div>{content}</div>
      {/* {id == 1 ? (
        ""
      ) 
      : (
        <button className="backANK" onClick={onBack}>
          BACK
        </button>
      )
      } */}
    </div>
  );
};

const Home = () => {
  const [displaySPBtns, setDisplaySPBtns] = useState(true);
  const [hideExceptSP, setHideExceptSP] = useState(true);
  
  
  const [showSPButtons1, setShowButtons1] = useState(false);
  const [isClicked1, setIsClicked1] = useState(false);
  const [showSPButtons2, setShowButtons2] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [showSPButtons3, setShowButtons3] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [showSPButtons4, setShowButtons4] = useState(false);
  const [isClicked4, setIsClicked4] = useState(false);
  const [showSPButtons5, setShowButtons5] = useState(false);
  const [isClicked5, setIsClicked5] = useState(false);
  const [showSPButtons6, setShowButtons6] = useState(false);
  const [isClicked6, setIsClicked6] = useState(false);
  const [showSPButtons7, setShowButtons7] = useState(false);
  const [isClicked7, setIsClicked7] = useState(false);
  const [showSPButtons8, setShowButtons8] = useState(false);
  const [isClicked8, setIsClicked8] = useState(false);
  const [showSPButtons9, setShowButtons9] = useState(false);
  const [isClicked9, setIsClicked9] = useState(false);

  const showSPBtns = () => {
    setDisplaySPBtns(true);
  };
  const hideSPBtns = () => {
    setDisplaySPBtns(false);
  };

  var click = 0;
  const handleTriggerClick1 = () => {
    console.log(click);
    click = click + 1;
    if (click % 2 == 0) {
      setIsClicked1(false);
      setShowButtons1(false);
    } else {
      setIsClicked1(true);
      setShowButtons1(true);
    }
  };
  const handleTriggerClick2 = () => {
    click = click + 1;
    if (click % 2 == 0) {
      setIsClicked2(false);
      setShowButtons2(false);
    } else {
      setIsClicked2(true);
      setShowButtons2(true);
    }
  };
  const handleTriggerClick3 = () => {
    click = click + 1;
    if (click % 2 == 0) {
      setIsClicked3(false);
      setShowButtons3(false);
    } else {
      setIsClicked3(true);
      setShowButtons3(true);
    }
  };
  const handleTriggerClick4 = () => {
    click = click + 1;
    if (click % 2 == 0) {
      setIsClicked4(false);
      setShowButtons4(false);
    } else {
      setIsClicked4(true);
      setShowButtons4(true);
    }
  };
  const handleTriggerClick5 = () => {
    click = click + 1;
    if (click % 2 == 0) {
      setIsClicked5(false);
      setShowButtons5(false);
    } else {
      setIsClicked5(true);
      setShowButtons5(true);
    }
  };
  const handleTriggerClick6 = () => {
    click = click + 1;
    if (click % 2 == 0) {
      setIsClicked6(false);
      setShowButtons6(false);
    } else {
      setIsClicked6(true);
      setShowButtons6(true);
    }
  };
  const handleTriggerClick7 = () => {
    click = click + 1;
    if (click % 2 == 0) {
      setIsClicked7(false);
      setShowButtons7(false);
    } else {
      setIsClicked7(true);
      setShowButtons7(true);
    }
  };
  const handleTriggerClick8 = () => {
    click = click + 1;
    if (click % 2 == 0) {
      setIsClicked8(false);
      setShowButtons8(false);
    } else {
      setIsClicked8(true);
      setShowButtons8(true);
    }
  };
  const handleTriggerClick9 = () => {
    click = click + 1;
    if (click % 2 == 0) {
      setIsClicked9(false);
      setShowButtons9(false);
    } else {
      setIsClicked9(true);
      setShowButtons9(true);
    }
  };

  const [activeButton, setActiveButton] = useState(null);
  // const hideANKBtns = () => {
  //   setHideExceptANK(false);
  // };
  // const showANK = () => {
  //   setDisplayANK(true);
  // };
  const handleBack = () => {
    setActiveButton(null);
  };
  const [objects, setObjects] = useState({});
  const handleClick = (id) => {
    setActiveButton(id);
    if(id === 1){
      console.log("hi");
      setObjects({'type' : 'ANK'})
      // setObjects(...objects, {"type": "ANK"})
    }
    console.log(objects);
  };
  


  const buttons = [
    {
      name: "ANK",
      id: 1,
      // className: "Primary-btn",
      nestedClasses: ["buttons", "Primary-btn", "btn1"],
      content: (
        <>
          <div className="buttons">
            <div className="ANK">
              <button className="ANK2">ANK</button>
              <button value = {1}>1</button>
              <button value = {2}>2</button>
              <button value = {3}>3</button>
              <button value = {4}>4</button>
              <button value = {5}>5</button>
              <br></br>
              <button className="backANK" onClick={handleBack}>
                BACK
              </button>
              <button value = {6}>6</button>
              <button value = {7}>7</button>
              <button value = {8}>8</button>
              <button value = {9}>9</button>
              <button value = {0}>0</button>
            </div>
          </div>
        </>
      ),
    },
    {
      name: "SP",
      id: 2,
      nestedClasses: ["buttons", "Primary-btn"],
      // className: "Primary-btn",
      content: (
        <>
          <div className="new-sp-set">
            <button className="SP-New">SP</button>
            <button
              className="backANK"
              onClick={() => {
                handleBack();
              }}
            >
              BACK
            </button>
          </div>
          <div id="SP-btns">
            <button className="SP1" onClick={handleTriggerClick1}>
              {" "}
              {/* SELECT ALL 1 <span className={`angle ${isClicked ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "} */}
              SELECT ALL 1 <span className={`angle ${isClicked1 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons1 && (
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
            <button className="SP2" onClick={handleTriggerClick2}>
              {" "}
              SELECT ALL 2<span className={`angle ${isClicked2 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons2 && (
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
            <button className="SP3" onClick={handleTriggerClick3}>
              {" "}
              SELECT ALL 3<span className={`angle ${isClicked3 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons3 && (
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
            <button className="SP4" onClick={handleTriggerClick4}>
              {" "}
              SELECT ALL 4<span className={`angle ${isClicked4 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons4 && (
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
            <button className="SP5" onClick={handleTriggerClick5}>
              {" "}
              SELECT ALL 5<span className={`angle ${isClicked5 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons5 && (
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
            <button className="SP6" onClick={handleTriggerClick6}>
              {" "}
              SELECT ALL 6<span className={`angle ${isClicked6 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons6 && (
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
            <button className="SP7" onClick={handleTriggerClick7}>
              {" "}
              SELECT ALL 7<span className={`angle ${isClicked7 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons7 && (
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
            <button className="SP8" onClick={handleTriggerClick8}>
              {" "}
              SELECT ALL 8<span className={`angle ${isClicked8 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons8 && (
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
            <button className="SP9" onClick={handleTriggerClick9}>
              {" "}
              SELECT ALL 9<span className={`angle ${isClicked9 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons9 && (
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
          </div>
          <br></br>
        </>
      ),
    },
    {
      name: "DP",
      id: 3,
      nestedClasses: ["buttons", "Primary-btn"],
      content: (
        <>
          <div className="new-sp-set">
            <button className="SP-New">DP</button>
            <button
              className="backANK"
              onClick={() => {
                handleBack();
              }}
            >
              BACK
            </button>
          </div>
          <div id="SP-btns">
            <button className="SP1" onClick={handleTriggerClick1}>
              {" "}
              SELECT ALL 1 <span className={`angle ${isClicked1 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons1 && (
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
            <button className="SP2" onClick={handleTriggerClick2}>
              {" "}
              SELECT ALL 2<span className={`angle ${isClicked2 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons2 && (
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
            <button className="SP3" onClick={handleTriggerClick3}>
              {" "}
              SELECT ALL 3<span className={`angle ${isClicked3 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons3 && (
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
            <button className="SP4" onClick={handleTriggerClick4}>
              {" "}
              SELECT ALL 4<span className={`angle ${isClicked4 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons4 && (
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
            <button className="SP5" onClick={handleTriggerClick5}>
              {" "}
              SELECT ALL 5<span className={`angle ${isClicked5 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons5 && (
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
            <button className="SP6" onClick={handleTriggerClick6}>
              {" "}
              SELECT ALL 6<span className={`angle ${isClicked6 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons6 && (
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
            <button className="SP7" onClick={handleTriggerClick7}>
              {" "}
              SELECT ALL 7<span className={`angle ${isClicked7 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons7 && (
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
            <button className="SP8" onClick={handleTriggerClick8}>
              {" "}
              SELECT ALL 8<span className={`angle ${isClicked8 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons8 && (
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
            <button className="SP9" onClick={handleTriggerClick9}>
              {" "}
              SELECT ALL 9<span className={`angle ${isClicked9 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons9 && (
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
          </div>
          <br></br>
        </>
      ),
    },
    {
      name: "TP",
      id: 4,
      nestedClasses: ["buttons", "Primary-btn"],
      content: (
        <>
          <div className="new-sp-set">
            <button className="SP-New">TP</button>
            <button
              className="backANK"
              onClick={() => {
                handleBack();
              }}
            >
              BACK
            </button>
          </div>
          <div id="SP-btns">
            <button className="SP1" onClick={handleTriggerClick1}>
              {" "}
              SELECT ALL 1 <span className={`angle ${isClicked1 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons1 && (
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
            <button className="SP2" onClick={handleTriggerClick2}>
              {" "}
              SELECT ALL 2<span className={`angle ${isClicked2 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons2 && (
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
            <button className="SP3" onClick={handleTriggerClick3}>
              {" "}
              SELECT ALL 3<span className={`angle ${isClicked3 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons3 && (
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
            <button className="SP4" onClick={handleTriggerClick4}>
              {" "}
              SELECT ALL 4<span className={`angle ${isClicked4 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons4 && (
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
            <button className="SP5" onClick={handleTriggerClick5}>
              {" "}
              SELECT ALL 5<span className={`angle ${isClicked5 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons5 && (
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
            <button className="SP6" onClick={handleTriggerClick6}>
              {" "}
              SELECT ALL 6<span className={`angle ${isClicked6 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons6 && (
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
            <button className="SP7" onClick={handleTriggerClick7}>
              {" "}
              SELECT ALL 7<span className={`angle ${isClicked7 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons7 && (
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
            <button className="SP8" onClick={handleTriggerClick8}>
              {" "}
              SELECT ALL 8<span className={`angle ${isClicked8 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons8 && (
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
            <button className="SP9" onClick={handleTriggerClick9}>
              {" "}
              SELECT ALL 9<span className={`angle ${isClicked9 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons9 && (
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
          </div>
          <br></br>
        </>
      ),
    },
    {
      name: "JODI",
      id: 5,
      nestedClasses: ["buttons", "Primary-btn"],
      content: (
        <>
          <div className="new-sp-set">
            <button className="SP-New">JODI</button>
            <button
              className="backANK"
              onClick={() => {
                handleBack();
              }}
            >
              BACK
            </button>
          </div>
          <div id="SP-btns">
            <button className="SP1" onClick={handleTriggerClick1}>
              {" "}
              SELECT ALL 1 <span className={`angle ${isClicked1 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons1 && (
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
            <button className="SP2" onClick={handleTriggerClick2}>
              {" "}
              SELECT ALL 2<span className={`angle ${isClicked2 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons2 && (
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
            <button className="SP3" onClick={handleTriggerClick3}>
              {" "}
              SELECT ALL 3<span className={`angle ${isClicked3 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons3 && (
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
            <button className="SP4" onClick={handleTriggerClick4}>
              {" "}
              SELECT ALL 4<span className={`angle ${isClicked4 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons4 && (
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
            <button className="SP5" onClick={handleTriggerClick5}>
              {" "}
              SELECT ALL 5<span className={`angle ${isClicked5 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons5 && (
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
            <button className="SP6" onClick={handleTriggerClick6}>
              {" "}
              SELECT ALL 6<span className={`angle ${isClicked6 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons6 && (
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
            <button className="SP7" onClick={handleTriggerClick7}>
              {" "}
              SELECT ALL 7<span className={`angle ${isClicked7 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons7 && (
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
            <button className="SP8" onClick={handleTriggerClick8}>
              {" "}
              SELECT ALL 8<span className={`angle ${isClicked8 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons8 && (
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
            <button className="SP9" onClick={handleTriggerClick9}>
              {" "}
              SELECT ALL 9<span className={`angle ${isClicked9 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons9 && (
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
          </div>
          <br></br>
        </>
      ),
    },
    {
      name: "HALF SANGAM",
      id: 6,
      nestedClasses: ["buttons", "Primary-btn"],
      content: (
        <>
          <div className="new-sp-set">
            <button className="SP-New">HALF SANGAM</button>
            <button
              className="backANK"
              onClick={() => {
                handleBack();
              }}
            >
              BACK
            </button>
          </div>
          <div id="SP-btns">
            <button className="SP1" onClick={handleTriggerClick1}>
              {" "}
              SELECT ALL 1 <span className={`angle ${isClicked1 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons1 && (
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
            <button className="SP2" onClick={handleTriggerClick2}>
              {" "}
              SELECT ALL 2<span className={`angle ${isClicked2 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons2 && (
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
            <button className="SP3" onClick={handleTriggerClick3}>
              {" "}
              SELECT ALL 3<span className={`angle ${isClicked3 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons3 && (
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
            <button className="SP4" onClick={handleTriggerClick4}>
              {" "}
              SELECT ALL 4<span className={`angle ${isClicked4 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons4 && (
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
            <button className="SP5" onClick={handleTriggerClick5}>
              {" "}
              SELECT ALL 5<span className={`angle ${isClicked5 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons5 && (
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
            <button className="SP6" onClick={handleTriggerClick6}>
              {" "}
              SELECT ALL 6<span className={`angle ${isClicked6 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons6 && (
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
            <button className="SP7" onClick={handleTriggerClick7}>
              {" "}
              SELECT ALL 7<span className={`angle ${isClicked7 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons7 && (
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
            <button className="SP8" onClick={handleTriggerClick8}>
              {" "}
              SELECT ALL 8<span className={`angle ${isClicked8 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons8 && (
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
            <button className="SP9" onClick={handleTriggerClick9}>
              {" "}
              SELECT ALL 9<span className={`angle ${isClicked9 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons9 && (
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
          </div>
          <br></br>
        </>
      ),
    },
    {
      name: "FULL SANGAM",
      id: 7,
      nestedClasses: ["buttons", "Primary-btn"],
      content: (
        <>
          <div className="new-sp-set">
            <button className="SP-New">FULL SANGAM</button>
            <button
              className="backANK"
              onClick={() => {
                handleBack();
              }}
            >
              BACK
            </button>
          </div>
          <div id="SP-btns">
            <button className="SP1" onClick={handleTriggerClick1}>
              {" "}
              SELECT ALL 1 <span className={`angle ${isClicked1 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons1 && (
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
            <button className="SP2" onClick={handleTriggerClick2}>
              {" "}
              SELECT ALL 2<span className={`angle ${isClicked2 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons2 && (
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
            <button className="SP3" onClick={handleTriggerClick3}>
              {" "}
              SELECT ALL 3<span className={`angle ${isClicked3 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons3 && (
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
            <button className="SP4" onClick={handleTriggerClick4}>
              {" "}
              SELECT ALL 4<span className={`angle ${isClicked4 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons4 && (
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
            <button className="SP5" onClick={handleTriggerClick5}>
              {" "}
              SELECT ALL 5<span className={`angle ${isClicked5 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons5 && (
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
            <button className="SP6" onClick={handleTriggerClick6}>
              {" "}
              SELECT ALL 6<span className={`angle ${isClicked6 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons6 && (
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
            <button className="SP7" onClick={handleTriggerClick7}>
              {" "}
              SELECT ALL 7<span className={`angle ${isClicked7 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons7 && (
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
            <button className="SP8" onClick={handleTriggerClick8}>
              {" "}
              SELECT ALL 8<span className={`angle ${isClicked8 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons8 && (
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
            <button className="SP9" onClick={handleTriggerClick9}>
              {" "}
              SELECT ALL 9<span className={`angle ${isClicked9 ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            {showSPButtons9 && (
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
          </div>
          <br></br>
        </>
      ),
    },
  ];

  
  // const [displayANK, setDisplayANK] = useState(false);
  // const [hideExceptANK, setHideExceptANK] = useState(true);
  // const [displaySP, setDisplaySP] = useState(false);
  // const [displaySPBtns, setDisplaySPBtns] = useState(false);
  // const [hideExceptSP, setHideExceptSP] = useState(true);
  // const [showButtons, setShowButtons] = useState(false);
  const [displayToken, setdisplayToken] = useState(false);
  const [displayBet, setdisplayBet] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [animation, setAnimation] = useState(false);

  const [currentText, setCurrentText] = useState("");
  const [timer, setTimer] = useState(0);

  // const hideANK = () => {
  //   setDisplayANK(false);
  // };

  // const showANKBtns = () => {
  //   setHideExceptANK(true);
  // };

  // const showSP = () => {
  //   setDisplaySP(true);
  //   setHideExceptSP(true);
  // };
  // const hideSP = () => {
  //   setDisplaySP(false);
  //   setHideExceptSP(false);
  // };

  // const handleTriggerClick = () => {
  //   setShowButtons(true);
  // };
  // const handleHideButtons = () => {
  //   setShowButtons(false);
  // };

  useEffect(() => {
    const showTimeout = setTimeout(() => {
      setdisplayToken(true);
      setdisplayBet(true);
    }, 15000);

    const hideTimeout = setTimeout(() => {
      setdisplayToken(false);
      setdisplayBet(false);
    }, 55000);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);
  useEffect(() => {
    const texts = [
      { id: "txt",text: "Cards Shuffling", duration: 15000 }, //Shuffling time: approx 27s
      {  id: "txt",text: "Place your bets", duration: 40000 }, //Betting time: approx1min:20s
      {  id: "txt",text: "Wait for the result", duration: 15000 }, //Result Declaration time: approx 30s
    ];
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1000);
    }, 1000);

    texts.forEach((text, index) => {
      const textStartTime = texts
        .slice(0, index)
        .reduce((acc, t) => acc + t.duration, 0);
      const textEndTime = textStartTime + text.duration;

      if (timer >= textStartTime && timer < textEndTime) {
        setCurrentText(text.text);
      }
    });
    const totalDuration = texts.reduce((acc, text) => acc + text.duration, 0);

    if (timer >= totalDuration) {
      clearInterval(interval);
      window.location.reload();
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <>
      <div className="container">
        <h1>MATKA UI</h1>
        {displayToken && (
          <>
            <div className="tokens-outer">
              <div className="tokens">
                <button className="token1" value={1}></button>
                <button className="token2" value={5}></button>
                <button className="token3" value={10}></button>
                <button className="token4" value={20}></button>
                <button className="token5" value={50}></button>
                <button className="token6" value={100}></button>
                <button className="token7" value={250}></button>
              </div>
            </div>
          </>
        )}

        <div className="cards">
          {playing_card.slice(0, 5).map((card) => (
            <div key = {card.code}>
              <div id={card.value}> <img src = {card.image} /> </div>
              <div >{card.suit}</div>
            </div>
          ))}
        </div>

        {/* <div className="cards">
          <div id="card-1">
            <img
              src={require("./Cards/card_spades_10.png")}
              alt="Not displaying image1"
            />
            <img
              src={require("./Cards/card_hearts_09.png")}
              alt="Not displaying image2"
            />
            <img
              src={require("./Cards/card_spades_A.png")}
              alt="Not displaying image3"
            />
            190-0
          </div>
          <div id="card-2">
            <img
              src={require("./Cards/card_spades_06.png")}
              alt="Not displaying image4"
            />
            <img
              src={require("./Cards/card_hearts_03.png")}
              alt="Not displaying image5"
            />
            <img
              src={require("./Cards/card_hearts_06.png")}
              alt="Not displaying image6"
            />
            366-5
          </div>
          <div id="card-3">
            <img
              src={require("./Cards/card_hearts_09.png")}
              alt="Not displaying image7"
            />
            <img
              src={require("./Cards/card_clubs_04.png")}
              alt="Not displaying image8"
            />
            <img
              src={require("./Cards/card_hearts_A.png")}
              alt="Not displaying image9"
            />
            149-4
          </div>
          <div id="card-4">
            <img
              src={require("./Cards/card_spades_06.png")}
              alt="Not displaying image"
            />
            <img
              src={require("./Cards/card_clubs_03.png")}
              alt="Not displaying image"
            />
            <img
              src={require("./Cards/card_diamonds_10.png")}
              alt="Not displaying image"
            />
            360-9
          </div>
          <div id="card-5">
            <img
              src={require("./Cards/card_hearts_02.png")}
              alt="Not displaying image"
            />
            <img
              src={require("./Cards/card_spades_05.png")}
              alt="Not displaying image"
            />
            <img
              src={require("./Cards/card_hearts_02.png")}
              alt="Not displaying image"
            />
            235-0
          </div>


        </div> */}
        {/* <div className="time-bar-outer-container"> */}
          <div className="timer-bar-container">
            <div className={`timer-bar ${animation ? "animate" : ""}`}></div>
          </div>
          {/* <span id="txt">Place your bets</span> */}
          <div className="display-bet-three-buttons">
            <div>
              {/* <span className="txt" style={{ marginTop: "15px" }}> */}
              <span className="txt">
                {currentText}
              </span>{" "}
            </div>
            {displayBet && (
              <>
                <div className="bet-add-drop">
                  <button className="rebet">Rebet</button>
                  <button className="remove">Remove</button>
                  <button className="rebetX2">Rebet x2</button>
                </div>
              </>
            )}
          </div>
        {/* </div> */}
        {/* <div className="buttons">
          <div className="ANK">
            <button
              className="btn1"
              onClick={() => {
                showANK();
                hideANKBtns();
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
                    // showToken();
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
                        // hideToken();
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
              <br />
              <br />
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
        </div> */}
        {/* ****************************************************************************************************************************************** */}
        {/* NEW BUTTONS */}
        {/* ****************************************************************************************************************************************** */}
        <div className="new-buttons">
          {activeButton ? (
            <ButtonContent
              content={
                buttons.find((button) => button.id === activeButton).content
              }
              onBack={handleBack}
              id={activeButton}
            />
          ) : (
            buttons.map((button) => (
              <button
                key={button.id}
                className={button.nestedClasses.join(" ")}
                onClick={() => handleClick(button.id)}
              >
                {button.name}
              </button>
            ))
          )}
        </div>
        {/* ****************************************************************************************************************************************** */}
        {/* ****************************************************************************************************************************************** */}
      </div>
      {/* {displaySPBtns && (
        <>
          <div id="SP-btns">
            <button
              className="SP1"
              onClick={() => {
                handleClick();
              }}
            >
              {" "}
              SELECT ALL 1 <span className={`angle ${isClicked ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
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

            <button
              className="SP2"
              onClick={() => {
                handleClick();
              }}
            >
              {" "}
              SELECT ALL 2<span className={`angle ${isClicked ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
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
              SELECT ALL 3<span className={`angle ${isClicked ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            <button className="SP4">
              {" "}
              SELECT ALL 4<span className={`angle ${isClicked ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            <button className="SP5">
              {" "}
              SELECT ALL 5<span className={`angle ${isClicked ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            <button className="SP6">
              {" "}
              SELECT ALL 6<span className={`angle ${isClicked ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            <button className="SP7">
              {" "}
              SELECT ALL 7<span className={`angle ${isClicked ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            <button className="SP8">
              {" "}
              SELECT ALL 8<span className={`angle ${isClicked ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
            <button className="SP9">
              {" "}
              SELECT ALL 9<span className={`angle ${isClicked ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "}
            </button>
          </div>
          <br></br>
        </>
      )} */}
    </>
  );
};

export default Home;
