import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

/** react hooks가 있기 때문에 state를 위해서 class component를 가질 필요가 없다 */

class Home extends React.Component {
  /**
   * 순서
   * 1. isLoading: true이기 때문에 Loading이 랜더
   * 2. application이 마운트(태어남)되자마자 componentDidMount, getMovies를 호출
   * 3. getMovies는 axios.get을 사용하지만 시간이 필요해서 await를 넣음.
   *  */
  state = {
    isLoading: true,
    movies: [],
    // 이곳에 쓰는 future state는 필수가 아님
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );
    // console.log(movies.data.data.movies); 이건 너무 기니까 es6의 문법으로 축약
    console.log(movies);
    this.setState({ movies: movies, isLoading: false }); //state의 movie: axios의 movie
    // axios가 데이터를 가져오면 isLoading에 false를 전달

    /** axios.get는 시간이 걸린다. 기다리라고 전해줘야함.
     * async = "너는 비동기야 = 넌 기다려야해"
     * 뭐를 기다려?
     * await axios.get = axios를 기다려
     * => await 끝날때까지 기다렸다가 계속해라!
     * 의존성이 있을때 어싱크를 쓴다. 데이터를 받아오고 보여주는 올 때까지 안보여주다가 나오면 딱 보이게
     * 신청하기같은걸 눌렀어 그럼 완료알림이 뜨는데 비동기처리가 안되어있으면 그냥 바로 신청완료알림이 뜨는것
     * 그래서 기다리라고 하는거다
     */
  };
  componentDidMount() {
    // 컴포넌트가 업데이트 되었다면 getMovies를 실행해라
    this.getMovies();
    // setTimeout(() => {
    //   this.setState({ isLoading: false, book: true });
    //   // state에 있는 것들이 필수가 아니기때문에 book처럼 state를 추가해도 괜찮다
    // }, 2000);
  }
  render() {
    const { isLoading, movies } = this.state;
    // isLoading을 this의 state에서 객체구조분해해서 가져온다
    // return <div>{this.state.isLoading ? "Loading" : "We are ready"}</div>;
    // this.state.isLoading을 다 쓰지 않고
    return (
      <div>
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Home;

// https://yts.mx/api
// https://yts.mx/api/v2/list_movies.json 로 (니꼬가 만든것)
