import React, { useState } from "react";
import BootstrapAlert from "./BootstrapAlert";
import { Navbar } from "./Navbar";

export const TextAnalyzer = ({ mode, toggle, alert }) => {
  const [val, setVal] = useState("");
  const myStyle = {
    color: mode === "light" ? "black" : "white",
  };
  const toUpper = () => {
    let upper = val.toUpperCase();
    setVal(upper);
  };
  const toLower = () => {
    let upper = val.toLowerCase();
    setVal(upper);
  };
  const inputValue = (e) => {
    setVal(e.target.value);
  };
  const clearText = () => {
    setVal("");
  };
  return (
    <div className="App">
      <Navbar mode={mode} toggle={toggle} />
      <BootstrapAlert alert={alert} />

      <div className="container">
        <h1 className="my-3" style={myStyle}>
          Text Analyzer
        </h1>
        <textarea
          className="form-control"
          rows="8"
          type="text"
          value={val}
          onChange={inputValue}
        ></textarea>

        <div className="row">
          <div className="col-md-6">
            <button className="btn btn-primary my-3 mx-1" onClick={toUpper}>
              {" "}
              Convert to Upper
            </button>
            <button className="btn btn-primary my-3 mx-1" onClick={toLower}>
              {" "}
              Convert to Lower
            </button>
            <button className="btn btn-primary my-3 mx-1" onClick={clearText}>
              {" "}
              Clear Text
            </button>
          </div>
        </div>

        <h3 style={myStyle}>Summary</h3>
        <p className="my-3" style={myStyle}>
          {
            val.split(" ").filter((element) => {
              return element != 0;
            }).length
          }{" "}
          and {val.length} charachters
        </p>
        <p style={myStyle}>{0.008 * val.length} minutes </p>
        <h3 className="my-3" style={myStyle}>
          Preview
        </h3>
        <p style={myStyle}>{val}</p>
      </div>
    </div>
  );
};
// const myArray = ["Apple", "Banana", "Mango"];
// myArray.map((item) => {
//   console.log(item);
// });
// function calculate(a, b) {
//   const add = a + b;
//   const div = a / b;
//   const mul = a * b;
//   const sub = a - b;
//   return [add, div, sub, mul];
// }
// const [add, div, sub, mul] = calculate(4, 7);
// console.log(add + " " + div + " " + sub + " " + mul);
// };

// import React, { useState } from "react";

// export const TextAnalyzer = () => {
//   const [count, setCount] = useState(0);
//   const incremeant = () => {
//     setCount(count + 1);
//   };
//   const decremeant = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     } else {
//       alert("Cannot Decrease More");
//     }
//   };
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={incremeant}>Increase</button>
//       <button onClick={decremeant}>Decrease</button>
//     </div>
//   );
// };

// Text  Transform to Upper And Lower Case
// import React, { useState } from "react";
// export const TextAnalyzer = () => {
//   const [text, setText] = useState("");
//   const upperCase = (e) => {
//     setText(e.target.value);
//   };
//   const changeToUpper = () => {
//     let lower = text.toLowerCase();
//     let upper = text.toUpperCase();
//     setText(lower);
//   };

//   return (
//     <div>
//       <div className="container">
//         <div className="form-group mb-3">
//           <label htmlFor="">{text}</label>

//           <textarea
//             type="text"
//             className="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             placeholder="Enter email"
//             onChange={upperCase}
//           ></textarea>
//         </div>

//         <button
//           type="submit"
//           className="btn btn-primary"
//           onClick={changeToUpper}
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };
