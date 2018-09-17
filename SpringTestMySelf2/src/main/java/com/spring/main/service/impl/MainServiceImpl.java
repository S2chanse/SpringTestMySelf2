package com.spring.main.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.main.dao.MainDao;
import com.spring.main.service.MainService;
import com.spring.main.vo.MainVo;

@Service("mainService")
public class MainServiceImpl implements MainService {
	@Autowired
	private MainDao mainDao;
	@Override
	public void goVote(HashMap<String, Object> map) {
		List<String> chalList=(List<String>) map.get("arrayList");
		System.out.println(chalList.size());
		for(int i=0;i<chalList.size();i++) {
			map.put("name",chalList.get(i));
			mainDao.goVote(map);			
		}

	}
	@Override
	public List<MainVo> getRankList(HashMap<String, Object> map) {
		List<MainVo> rankList=mainDao.getRankList(map);
		return rankList;
	}

}
