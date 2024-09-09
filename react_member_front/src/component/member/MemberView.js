import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const MemberView = () => {
  const params = useParams();
  const memberId = params.memberId;
  const [member, setMember] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://192.168.10.53:9999/member/memberView/" + memberId)
      .then((res) => {
        console.log(res);
        setMember(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteMember = () => {
    axios
      .get("http://192.168.10.53:9999/member/memberDelete/" + memberId)
      .then((res) => {
        console.log(res);
        navigate("/memberList");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h3>회원 상세정보</h3>
      <table>
        <tbody>
          <tr>
            <th>회원 아이디</th>
            <td>{member.memberId}</td>
          </tr>
          <tr>
            <th>회원 이름</th>
            <td>{member.memberName}</td>
          </tr>
          <tr>
            <th>회원 전화번호</th>
            <td>{member.memberPhone}</td>
          </tr>
          <tr>
            <th>회원 가입일</th>
            <td>{member.enrollDate}</td>
          </tr>
          <tr>
            <th colSpan={2}>소개</th>
          </tr>
          <tr>
            <td colSpan={2}>{member.memberIntro}</td>
          </tr>
          <tr>
            <td>
              <div className="link-zone">
                <Link to={"/memberUpdate/" + member.memberId}>수정</Link>
                <button onClick={deleteMember}>탈퇴</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MemberView;
