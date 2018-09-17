/**
 * 
 */
var naviInTag=["투표","프로그램","48연습생","연습생순위","영상","다시보기","48포인트","이벤트"];
var arr=new Array(9);
for(var i=0;i<9;i++){
arr[i]=["",""];
}
	function makeMenu(arrM){
		var head=document.createElement('ul');
		head.setAttribute("class", "navi");
		for(var i=0;i<arrM.length;i++){
			var li1=document.createElement('li');
			li1.setAttribute("class", "block1");
			var txt=document.createTextNode(arrM[i]);
			var aTag=document.createElement("a");
			switch(i){
			case 0:
				aTag.setAttribute("href","/");
				break;
			case 3:
				aTag.setAttribute("href","/main/goRank");
				break;		
			}
				aTag.appendChild(txt);
				li1.appendChild(aTag);		
			head.appendChild(li1);
			}
		return head;
		}
		window.onload=function(){
			var box=document.getElementById("header");
			var head=makeMenu(naviInTag);
			box.appendChild(head);
		}