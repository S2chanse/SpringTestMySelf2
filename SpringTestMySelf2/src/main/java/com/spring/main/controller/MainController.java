package com.spring.main.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.spring.main.service.MainService;
import com.spring.main.vo.MainVo;

@Controller
public class MainController {
	@Autowired
	private MainService mainService;
	@RequestMapping("/")
	public String goHome() {
		
		return "home";
	}
	@RequestMapping("/main/Vote")
	public ModelAndView getList(@RequestParam HashMap<String,Object> map) {
		String nameList=(String)map.get("pick");
		String[] nameArray=nameList.split(",");
		List<String>nameArrayList=new ArrayList<>(Arrays.asList(nameArray));
		map.put("arrayList", nameArrayList);
		System.out.println(map.toString());
		mainService.goVote(map);
		ModelAndView mv=new ModelAndView();
		mv.setViewName("redirect:/");
		return mv;
	}
	
	@RequestMapping("/main/goRank")
	public ModelAndView goRank(@RequestParam HashMap<String,Object> map) {
		ModelAndView mv=new ModelAndView();
		mv.setViewName("test");
		List<MainVo> mainList=mainService.getRankList(map);
		mv.addObject("rankList", mainList);
		return mv;
	}
}