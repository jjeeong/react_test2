package kr.co.iei.member.model.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import kr.co.iei.member.model.dto.MemberDTO;

@Mapper
public interface MemberDao {
	List selectMemberList();

	int memberInsert(MemberDTO member);
	MemberDTO selectOneMember(String memberId);

	int memberDelete(String memberId);

	int memberUpdate(MemberDTO member);

}
