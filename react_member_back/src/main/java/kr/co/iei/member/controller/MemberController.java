package kr.co.iei.member.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.iei.member.model.dto.MemberDTO;
import kr.co.iei.member.model.service.MemberService;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/member")
public class MemberController {
	@Autowired
	private MemberService memberService;
	
	@GetMapping(value = "/memberList")
	public List memberList() {
		List list = memberService.selectMemberList();
		return list;
	}
	
	@PostMapping(value = "/memberInsert")
	public int memberInsert(@RequestBody MemberDTO member) {
		int result = memberService.memberInsert(member);
		return result;
	}
	
	@GetMapping(value = "/memberView/{memberId}")
	public MemberDTO memberView(@PathVariable String memberId) {
		MemberDTO member = memberService.selectOneMember(memberId);
		return member;
	}
	
	@GetMapping(value = "/memberDelete/{memberId}")
	public int memberDelete(@PathVariable String memberId) {
		int result = memberService.memberDelete(memberId);
		return result;
	}
	
	@PostMapping(value = "/memberUpdate")
	public int memberUpdate(@RequestBody MemberDTO member) {
		System.out.println(member);
		int result = memberService.memberUpdate(member);
		return result;
	}
	
}
