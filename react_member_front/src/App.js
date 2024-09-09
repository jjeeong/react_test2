import { Route, Routes } from "react-router-dom";
import Main from "./component/common/Main";
import MemberList from "./component/member/MemberList";
import MemberInsert from "./component/member/MemberInsert";
import MemberView from "./component/member/MemberView";
import MemberDelete from "./component/member/MemberDelete";
import MemberUpdate from "./component/member/MemberUpdate";

function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/memberList" element={<MemberList />} />
          <Route path="/memberInsert" element={<MemberInsert />} />
          <Route path="/memberView/:memberId" element={<MemberView />} />
          <Route path="/memberDelete/:memberId" element={<MemberDelete />} />
          <Route path="/memberUpdate/:memberId" element={<MemberUpdate />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
