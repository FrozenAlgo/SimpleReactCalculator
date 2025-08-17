import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [powerOn, setPowerOn] = useState(true);
  const [activeBtn, setActiveBtn] = useState(null);

  let isVisible = true;
  function power() {
    setPowerOn(!powerOn);
    if (powerOn) {
      setExpression("");
      setResult("");
    } else {
    }
  }
  function handleClick(value) {
    if (!powerOn) return;
    setExpression((prev) => prev + value);
    setActiveBtn(value);
  }
  function handleDel() {
    if (!powerOn) return;
    setExpression((prev) => prev.slice(0, -1));
    setResult("");
  }
  function handleEqual() {
    if (!powerOn) {
      return;
    } else {
      if (expression != "") {
        try {
          let evaluate = eval(expression);
          console.log(evaluate);
          setResult(evaluate);
          setExpression(" ");
        } catch (error) {
          setResult("Syntax error");
          setExpression(" ");
        }
      }
    }
  }

  useEffect(() => {
    if (!powerOn) return;
    console.log(expression);
    let blinkerInterval;
    if (expression == "") {
      blinkerInterval = setInterval(() => {
        var blinker = document.querySelector(".blinker");
        isVisible
          ? (blinker.style.visibility = "visible")
          : (blinker.style.visibility = "hidden");
        isVisible = !isVisible;
      }, 400);
    }

    return () => {
      clearInterval(blinkerInterval);
      var blinker = document.querySelector(".blinker");
      blinker.style.visibility = "hidden";
    };
  }, [expression, powerOn]);

  return (
    <>
      <div className="bg-[#ECEEFA] min-h-screen w-screen items-center flex flex-col lg:flex-row justify-evenly  lg:py-0 py-20 ">
        <div className="text text-[#3A1F5E] text-start  sm:text-center py-8 sm:py-12 lg:py-0 lg:text-start">
          <div>
            <h1 className="font-extrabold text-5xl md:text-6xl mb-1">Simple</h1>
            <h2 className="font-extrabold text-5xl md:text-6xl mb-1">
              Calculator
            </h2>
            <p className="text-[#5E4985] text-3xl font-bold">
              using Javascript
            </p>
          </div>
          <div className="flex mt-5 text-center w-full justify-center font-extrabold">
            <div className="-me-9 mt-2">
              <h4>CSS</h4>
              <img
                src={`${import.meta.env.BASE_URL}img/css.png`}
                alt="CSS"
                className="w-[90px]"
              />
            </div>
            <div className="z-10">
              <h4>HTML</h4>
              <img
                src={`${import.meta.env.BASE_URL}img/html.png`}
                className="w-[100px] "
                alt=""
              />
            </div>
            <div className="-ms-7 z-2 mt-3">
              <h4>JS</h4>
              <img
                src={`${import.meta.env.BASE_URL}img/js.png`}
                className="w-[80px] "
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="main-calculator">
          <div className="w-max md:w-[300px] lg:w-[330px] pt-3 px-2    bg-[#391C5A] shadow-lg shadow-black rounded-xl">
            <div className="bg-[#ECEEFA] rounded-xs mt-4   w-[90%] ms-[5%] px-1 text-[36px] ">
              <p className="flex items-center justify-end  overflow-x-auto overflow-y-hidden ">
                <span className=" text-[24px] font-md ">
                  {powerOn ? "" : "Calculator OFF"}
                </span>
                <span className=" text-[24px] font-md ">{result}</span>
                <span className="expression text-[24px] font-md ">
                  {expression}
                </span>
                <span className="blinker invisible font-light transition ease-in-out ">
                  I
                </span>
              </p>
            </div>
            <div className="keys py-8 text-white font-bold">
              <div className="flex mb-5  justify-center gap-5">
                <button
                  className=" bg-[#CC6530] sp-buttons hover:bg-[#e9763c]"
                  onClick={() => {
                    power();
                  }}
                >
                  {powerOn ? "OFF" : "ON"}
                </button>
                <button
                  className="calc-buttons"
                  onClick={() => {
                    handleClick("(");
                  }}
                >
                  (
                </button>
                <button
                  className="calc-buttons"
                  onClick={() => {
                    handleClick(")");
                  }}
                >
                  )
                </button>
                <button
                  className="calc-buttons"
                  onClick={() => {
                    handleClick("/");
                  }}
                >
                  /
                </button>
              </div>
              <div className="flex mb-5  justify-center gap-5">
                {[9, 8, 7].map((num) => (
                  <button
                    className={`calc-buttons ${
                      activeBtn === num.toString() ? "active" : ""
                    }`}
                    key={num}
                    onClick={() => {
                      handleClick(num.toString());
                    }}
                  >
                    {num}
                  </button>
                ))}
                <button
                  className={`calc-buttons ${
                    activeBtn === "*" ? "active" : ""
                  }`}
                  onClick={() => {
                    handleClick("*");
                  }}
                >
                  *
                </button>
              </div>
              <div className="flex mb-5  justify-center gap-5">
                {[6, 5, 4].map((num) => (
                  <button
                    className={`calc-buttons ${
                      activeBtn === num.toString() ? "active" : ""
                    }`}
                    key={num}
                    onClick={() => {
                      handleClick(num.toString());
                    }}
                  >
                    {num}
                  </button>
                ))}
                <button
                  className={`calc-buttons ${
                    activeBtn === "-" ? "active" : ""
                  }`}
                  onClick={() => {
                    handleClick("-");
                  }}
                >
                  -
                </button>
              </div>
              <div className="flex mb-5  justify-center gap-5">
                {[3, 2, 1].map((num) => (
                  <button
                    className={`calc-buttons ${
                      activeBtn === num.toString() ? "active" : ""
                    }`}
                    key={num}
                    onClick={() => {
                      handleClick(num.toString());
                    }}
                  >
                    {num}
                  </button>
                ))}
                <button
                  className={`calc-buttons ${
                    activeBtn === "+" ? "active" : ""
                  }`}
                  onClick={() => {
                    handleClick("+");
                  }}
                >
                  +
                </button>
              </div>
              <div className="flex mb-1  justify-center gap-5">
                <button
                  className={`bg-[#CE3E5C]  sp-buttons hover:bg-[#fc4166]  ${
                    activeBtn === "+" ? "active" : ""
                  }`}
                  onClick={() => {
                    handleDel();
                  }}
                >
                  DEL
                </button>
                <button
                  className={`calc-buttons ${
                    activeBtn === "0" ? "active" : ""
                  }`}
                  onClick={() => {
                    handleClick("0");
                  }}
                >
                  0
                </button>
                <button
                  className={`calc-buttons ${
                    activeBtn === "." ? "active" : ""
                  }`}
                  onClick={() => {
                    handleClick(".");
                  }}
                >
                  .
                </button>
                <button
                  className={`calc-buttons ${
                    activeBtn === "=" ? "active" : ""
                  }`}
                  onClick={() => {
                    handleEqual();
                  }}
                >
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
