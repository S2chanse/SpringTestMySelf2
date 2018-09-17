package com.spring.main.vo;

public class MainVo {
	//fields
	private int    rankNum;
	private String chalId;
	private int    voteNum;
	private String chalName;
	//getter&setter
	public int getRankNum() {
		return rankNum;
	}
	public void setRankNum(int rankNum) {
		this.rankNum = rankNum;
	}
	public String getChalId() {
		return chalId;
	}
	public void setChalId(String chalId) {
		this.chalId = chalId;
	}
	public int getVoteNum() {
		return voteNum;
	}
	public void setVoteNum(int voteNum) {
		this.voteNum = voteNum;
	}
	public String getChalName() {
		return chalName;
	}
	public void setChalName(String chalName) {
		this.chalName = chalName;
	}
	//Constructor
	public MainVo(int rankNum, String chalId, int voteNum, String chalName) {
		this.rankNum = rankNum;
		this.chalId = chalId;
		this.voteNum = voteNum;
		this.chalName = chalName;
	}
	public MainVo() {}
	
	
}
