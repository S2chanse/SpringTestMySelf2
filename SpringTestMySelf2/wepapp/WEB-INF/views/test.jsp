<%@ page language='java' contentType='text/html; charset=UTF-8'
    pageEncoding='UTF-8'%>
<%@ taglib prefix='c' uri='http://java.sun.com/jsp/jstl/core'%>	
<!DOCTYPE html>
<html>
<head>
<meta charset='UTF-8'>
<title>Insert title here</title>
<link rel='stylesheet' href='//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css'>
<link type="text/css" rel="stylesheet" href="/css/pd48_2.css" />
<link type="text/css" rel="stylesheet" href="/css/common.css" />
<script src='https://code.jquery.com/jquery-1.12.4.js'></script>
<script src='https://code.jquery.com/ui/1.12.1/jquery-ui.js'></script>
<script src="/js/menuBar.js"></script>

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
					<table class="t01">
					<tr>
						<th>순위</th>
						<th>득표수</th>
						<th>이름</th>
					</tr>
						<c:forEach var="ranker" items="${rankList }">
							<tr>
								<td>
									${ranker.rankNum}
								</td>
								<td>
									${ranker.voteNum}
								</td>
								<td>
								${ranker.chalName}
								</td>
							</tr>
						</c:forEach>
					</table>
				</div>			
			
</div>
</body>
</html>