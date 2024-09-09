import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MemberInsert = () => {
  const [memberId, setMemberId] = useState("");
  const [memberName, setMemberName] = useState("");
  const [memberPhone, setMemberPhone] = useState("");
  const [memberIntro, setMemberIntro] = useState("");
  const navigate = useNavigate();
  const changeMemberId = (e) => {
    setMemberId(e.target.value);
  };
  const changeMemberName = (e) => {
    setMemberName(e.target.value);
  };
  const changeMemberPhone = (e) => {
    setMemberPhone(e.target.value);
  };
  const changeMemberIntro = (e) => {
    setMemberIntro(e.target.value);
  };

  const insertMember = () => {
    const member = { memberId, memberName, memberPhone, memberIntro };
    axios
      .post("http://192.168.10.53:9999/member/memberInsert", member)
      .then((res) => {
        console.log(res);
        navigate("/memberList");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="member-insert-wrap">
      <h3>회원 등록</h3>
      <div className="member-insert">
        <label htmlFor="memberId">아이디</label>
        <input
          type="text"
          id="memberId"
          value={memberId}
          onChange={changeMemberId}
        />
      </div>
      <div className="member-insert">
        <label htmlFor="memberName">이름</label>
        <input
          type="text"
          id="memberName"
          value={memberName}
          onChange={changeMemberName}
        />
      </div>
      <div className="member-insert">
        <label htmlFor="memberPhone">전화번호</label>
        <input
          type="text"
          id="memberPhone"
          value={memberPhone}
          onChange={changeMemberPhone}
        />
      </div>
      <div className="member-insert">
        <label htmlFor="memberIntro">소개</label>
        <textarea
          id="memberIntro"
          value={memberIntro}
          onChange={changeMemberIntro}
        />
      </div>
      <div className="input-wrap">
        <button onClick={insertMember}>등록하기</button>
      </div>
    </div>
  );
};
export default MemberInsert;
