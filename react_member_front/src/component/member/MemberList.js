import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./member.css";

const MemberList = () => {
  const [memberList, setMemberList] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.10.53:9999/member/memberList")
      .then((res) => {
        setMemberList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="member-list-wrap">
      <h3>멤버 목록</h3>
      <div className="insert">
        <Link to="/memberInsert">회원 정보 등록</Link>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>아이디</th>
              <th>이름</th>
              <th>핸드폰</th>
              <th>가입일</th>
            </tr>
          </thead>
          <tbody>
            {memberList.map((member, index) => {
              return (
                <tr key={"member" + index}>
                  <td>
                    <Link to={"/memberView/" + member.memberId}>
                      {member.memberId}
                    </Link>
                  </td>
                  <td>{member.memberName}</td>
                  <td>{member.memberPhone}</td>
                  <td>{member.enrollDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MemberList;
