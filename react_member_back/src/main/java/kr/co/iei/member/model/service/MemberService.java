package kr.co.iei.member.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.co.iei.member.model.dao.MemberDao;
import kr.co.iei.member.model.dto.MemberDTO;

@Service
public class MemberService {
	@Autowired
	private MemberDao memberDao;

	public List selectMemberList() {
		List list = memberDao.selectMemberList();
		return list;
	}

	@Transactional
	public int memberInsert(MemberDTO member) {
		int result = memberDao.memberInsert(member);
		return result;
	}

	public MemberDTO selectOneMember(String memberId) {
		MemberDTO member = memberDao.selectOneMember(memberId);
		return member;
	}

	@Transactional
	public int memberDelete(String memberId) {
		int result = memberDao.memberDelete(memberId);
		return result;
	}

	@Transactional
	public int memberUpdate(MemberDTO member) {
		int result = memberDao.memberUpdate(member);
		return result;
	}

}
