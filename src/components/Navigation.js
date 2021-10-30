import React from "react";
import { Link } from "react-router-dom";
// import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {/* a href를 사용하면 페이지가 새로고침 되어버림. 그래서 새로고침 되지 않는 Link를 사용
          Link는 router 밖에서는 사용할 수 없다!
          (모든걸 router안에서 할 필요는 없음)
          여기서 Link의 to는 string으로 교체할 수 있다. object로 가능
      <Link
        to={{
          // about 페이지로 object를 보낸다
          pathname: "/about",
          state: { fromNavigation: true },
        }}
      >
          이런식으로
      */}
    </div>
  );
}

export default Navigation;

// https://reactrouter.com/web/api/Link/to-string 공식문서 참조
