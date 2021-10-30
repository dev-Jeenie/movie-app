import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    // console.log(location);
    // movie를 클릭해서 detail 페이지에 들어오는게 아니면 state가 전달이 안됨.
    if (location.state === undefined) {
      // 그래서 만약 주소를 그냥 쳐서 들어오는 유저는 리다이렉트 시킬거다
      history.push("/");
      // history안에있는 go, goback,goForward 등이 url을 변경함
    }
  }
  render() {
    // render가 먼저 일어난 뒤 componentDidMount가 일어나는 걸 잊지말것
    // render가 먼저 존재하기 때문에 location이 존재하지 않으면 에러가 난다.
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
    /** 스크린 사이에서 정보를 공유하는 방법
     *
     * 1. 만약 location.state가 존재한다면 title을 출력하고
     * 2. 없으면 빈값을 출력하고
     * 3. 그런데 render가 먼저 끝났다면(=클릭해서 전달하지 않아서 location.state가 없다면) home으로 돌아간다
     */
  }
}

export default Detail;

/**
 * class 컴포넌트로 변환하는 이유
 * 
react컴포넌트를 상속받아야 render()메소드를 사용 할 수 있기 때문에 클래스를 만들어서 사용하는거 같아요!
클래스를 만들지 않고 render()메소드를 사용하기 위해서는 Hook을 이용하는 방법도 있다고 하셨어요!

여기서 render()메소드를 사용하는 이유는 사용자가 url주소를 입력해서 접속하는 경우에
props 이용해서 데이터가 넘어오지 못해서 데이터를 이용한 설정한 화면이 보이지 않을거에요.
그런 경우를 처리해주기 위해서 render()와 componentDidMount()를 이용해서 처리해주는 거 같습니다!
 */
