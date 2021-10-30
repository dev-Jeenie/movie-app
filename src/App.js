import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import "./App.css";
import Detail from "./routes/Detail";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
      {/* Route안에 들어가는 prop에는 랜더링할 스크린과 뭘할지 결정하는 것을 넣는다.
      만약 /about으로 들어가면 About을 보여줘라
      그런데 동시에 랜더링 되어서 겹쳐보인다. 왜냐하면 route의 작동방식 때문이다
      router는 기본적으로 url을 가져온 뒤 router에 비교한다.
      /Home/introduction 를 가져와서 비교한다. 그럼 이 url에는 두개의 route가 일치하기 때문에 두개 가져오는 것. 
      그래서 <Route path="/" component={Home} />
      <Route path="/about" component={About} /> 이렇게 했을 때, / 를 route로 생각하고 home을 불러와버린거임
      그래서 가장 첫 route에 exact={true} 를 사용하는 것! 정확히 일치할 때만 가져오고 뒤에 뭔가가 있을 땐 가져오지 말라고 

    */}
    </HashRouter>
  );
  /** router란 간단한 react component인데,
   *
   * router는 url을 확인하고
   * 우리가 router에 뭘 명령했느냐에 따라서 불러올 컴포넌트를 결정한다.
   */
}

export default App;
