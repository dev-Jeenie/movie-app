import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  /** react-router에 의해 전송된 props => {history: {…}, location: {…}, match: {…}, staticContext: undefined}
   * router에 있는 모든 route들은 기본적으로 props를 가진다.
   * navigation을 통해 정보를 전달할 수 있다
   */
  return (
    <div className="about__container">
      <span>
        “Freedom is the freedom to say that two plus two make four. If that is
        granted, all else follows.”
      </span>
      <span>− George Orwell, 1984</span>
    </div>
  );
}

export default About;
