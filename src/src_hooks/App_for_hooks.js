// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import "./App.css";

// class App extends Component {
//   state = {
//     count: 0,
//   };
//   // state를 정의해야하고
//   modify = (n) => {
//     this.setState({
//       const: n,
//     });
//   };
//   // 그걸 정의해야하고
//   render() {
//     const { count } = this.state;
//     // 패스해야하고
//     return (
//       <>
//         <div>{count}</div>
//         <button onClick={() => this.modify(count + 1)}>Increment</button>
//       </>
//     );
//   }
// }
// export default App;

import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const updateEmail = (e) => {
    const {
      target: { value },
    } = e;
    setEmail(value);
    // event로부터 target을 value로 넣어서 가져온 뒤 setEmail에 가져온 그 value를 넣음
  };
  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>increment</button>
      <input placeholder="Email" value={email} onChange={updateEmail} />
    </>
  );
};
export default App;

// 이렇게 간단하게 정리가 된다
