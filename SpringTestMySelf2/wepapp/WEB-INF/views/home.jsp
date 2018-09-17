<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>	
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<link rel="stylesheet" type="text/css" href="/css/pd48_2.css" />
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="/js/imgList.js"></script>
</head>
<body>
<div id="wrap">	
		<div id="topLineBlack">	
			<div style="padding-left:1000px;">
				<font color="white"><a href="http://localhost:9090/WebPij02/login.html"style="color:#dddddd;text-decoration:none">
				로그인</a></font>
			</div>
		</div>
		<div id="header">
			<div id="inner_wrap">
					<img src="http://produce48.mnet.com/images/logo.png" class="center"/>
				<div class="snsBtn">
					<a href="https://twitter.com/mnet_produce48" class="btn_t" target="_blank">twitter</a>
					<a href="https://www.facebook.com/produce101" class="btn_f" target="_blank">facebook</a>
					<a href="https://www.instagram.com/produce48_official/" class="btn_i" target="_blank">instagram</a>
				</div>

			</div>
		</div>
			<div class="contentInfo" style="clear:both;">
				<div id="innerwrap">
					<div class="title"></div>
					<div id="circle"></div>
				</div>
		</div>
		<div id="showVote">
			<div class="myVote"></div>	
			<div id="showVote">
		<div id="box" style="padding-top:20px;">
		</div>	
		<div style="width:120px;padding: 70px 0px 0px 15px;">
			<input type="button" style="background:url(http://produce48.mnet.com/images/p_prev_off.jpg) no-repeat 3px 5px" 
			onclick="move(1)"/>
			<span id="pNum">1</span><span>/3</span>
			<input type="button" style="background:url(http://produce48.mnet.com/images/p_next_off.jpg) no-repeat 3px 5px"
			onclick="move(2)" />
		</div>
			<div style="padding-top:40px;">
			<form id="fff" action="/main/Vote" method="post">
			<input type="image" id="btn" src="http://produce48.mnet.com/images/bgbtnMyVote_new.jpg"
			style="width:100px;height:60px;"/>
			</form>
			</div>
		</div>
		</div>
				
			
</div>
</body>
</html>