package com.spring.main.dao;

import java.util.HashMap;
import java.util.List;

import com.spring.main.vo.MainVo;

public interface MainDao {
	public void goVote(HashMap<String,Object> map);

	public List<MainVo> getRankList(HashMap<String, Object> map);
}
