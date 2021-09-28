import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  // reactcomponent에서 확장된 App
  /** camera,screen,charger를 cell phone class에 넣은 다음
   * 그 cell phone class에서 확장된 samsung class와 apple class
   * 그럼 samsung class는 cell phone class에서 모든 것을 가져올 수 있다
   * 통틀어서 추상화한 거라고 생각(밀가루 붓는 틀 -> 빵틀 -> 붕어빵틀, 와플틀, 계란빵틀...) */
  constructor(props) {
    /** constructor는 render의 전에 호출된다.
     *    컴포넌트가 mount될 때, 컴포넌트가 screen에 표시될 때, 컴포넌트가 웹사이트에 갈 때 constructor를 호출한다
     */
    super(props);
    console.log("hello");
  }
  state = {
    count: 0,
  };
  add = () => {
    /*
    this.state.count = 1; (X)
    //Do not mutate state directly. Use setState().
    그리고 이렇게 하면 react가 render function을 refresh하지 않는다
    매번 state의 상태를 변경할 때마다, react가 render function을 호출해서 바꾸게 해야한다
    => state를 변경하고, 바뀔 때마다 react가 refresh 해줘야하니까 setState를 쓴다!
    setState를 할 때마다, react는 새로운 state와 함께 render function을 호출한다!!!!!!!!
    */
    this.setState((current) => ({ count: current.count + 1 }));
    // this.setState(() => ({ count: this.state.count + 1 })); state(외부)에 너무 의존하기때문에 좋지않음
    // 그래서 function 방식으로 현재의 state를 가져올 수 있음
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  /** Component의 Life cycle */
  componentDidMount() {
    // 컴포넌트가 처음 render된건지 알려줌
    console.log("component rendered ");
  }
  componentDidUpdate() {
    console.log("I just updated ");
  }
  componentWillUnmount() {
    console.log("Goodbye, cruel world");
  }

  render() {
    console.log("I am rendering");
    // react는 자동적으로 class component의 render method를 실행한다!
    return (
      <div>
        <h1> The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
    /** 이 render method는 react.component가 가지고 있었지만, 확장했기 때문에 App component도 가지게 되었다 */
  }
}

export default App;

/**Function Component와 Class Component의 차이점
 *  Function Component는 function이고, 뭔가를 return한 뒤 screen에 표시됨
 *  Class Component는 class이고, react component로부터 확장되어서 screen에 표시됨 -> 이걸 render method에 넣어야함
 *
 */
