package com.spring.main.dao.impl;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.spring.main.dao.MainDao;
import com.spring.main.vo.MainVo;

@Repository("mainDao")
public class MainDaoImple implements MainDao {
	@Autowired
	private SqlSession sqlSession;
	@Override
	public void goVote(HashMap<String, Object> map) {
		sqlSession.insert("main.insertVote", map);

	}
	@Override
	public List<MainVo> getRankList(HashMap<String, Object> map) {
		sqlSession.selectList("main.rankList", map);
		return (List<MainVo>)map.get("result");
	}

}
