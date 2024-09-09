import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MemberUpdate = () => {
  const params = useParams();
  const navigate = useNavigate();
  const memberId = params.memberId;

  const [memberName, setMemberName] = useState("");
  const [memberPhone, setMemberPhone] = useState("");
  const [memberIntro, setMemberIntro] = useState("");

  useEffect(() => {
    axios
      .get("http://192.168.10.53:9999/member/memberView/" + memberId)
      .then((res) => {
        console.log(res);
        setMemberName(res.data.memberName);
        setMemberPhone(res.data.memberPhone);
        setMemberIntro(res.data.memberIntro);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const changeMemberName = (e) => {
    setMemberName(e.target.value);
  };
  const changeMemberPhone = (e) => {
    setMemberPhone(e.target.value);
  };
  const changeMemberIntro = (e) => {
    setMemberIntro(e.target.value);
  };
  const updateMember = () => {
    const member = { memberId, memberName, memberPhone, memberIntro };
    axios
      .post("http://192.168.10.53:9999/member/memberUpdate", member)
      .then((res) => {
        console.log(res);
        navigate("/memberView/" + memberId);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h3>회원 정보 수정</h3>
      <div className="member-insert">
        <label>아이디 : {memberId}</label>
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
      <div>
        <button onClick={updateMember}>수정하기</button>
      </div>
    </div>
  );
};

export default MemberUpdate;
