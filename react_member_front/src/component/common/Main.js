import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main-wrap">
      <h1>메인페이지</h1>
      <Link to="/memberList">회원 목록</Link>
    </div>
  );
};

export default Main;
