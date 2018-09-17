/**
 * 
 */
var addr=[
"8eb0a2be-2c3e-422e-a5ee-e30e47b7c5c3-에잇디_강혜원_메인.jpg"
,"d0dc4372-b906-4b7c-9727-fb864e82dd32-블루베리_고유진_메인.jpg"
,"08a39e79-9a37-4fde-93f0-7f63e73f5a0e-고토_모에.JPG"
,"6601fe41-05a7-4518-b59b-2f33a3458348-바나나컬쳐_김나영.png"
,"6d1d4546-f136-40e4-90b1-2cb6d191bb6c-CNC_김다연.jpg"
,"f805ff12-0c14-425b-8650-e68393098f7b-얼반웍스_김민주.png"
,"43295195-4fe2-44eb-a64c-4cf154edc4a5-위에화_김시현_메인.png"
,"6d24a79e-f263-4a75-bb05-6dde9f8db22c-콜라주컴퍼니-김현아.jpg"
,"1875250a-16b1-445c-9c0e-f04892ec6d86-SKE48_마츠이_쥬리나_메인.png"
,"878a5693-2214-421b-9f29-dd0e6f9aacfb-HKT48_모토무라_아오이_메인.png"
,"6863c824-e02b-4d6f-9714-2566870d7311-NMB48-무라세-사에.jpg"
,"f05efd4f-4e75-4502-b8b7-61c0123f20c6-HKT48_무라카와_비비안_메인.png"
,"19f35527-6fbe-404b-a83d-abfcd7122628-무토_토무.jpg"
,"e94e4149-d6a6-47be-8826-6f94b1b5e627-HKT48_미야와키_사쿠라_메인.png"
,"7665a996-44c9-46f4-baaa-119512c1c614-미야자키_미호.jpg"
,"47ced0e1-11b6-4912-85ce-9de0c90564ee-개인연습생_박진희.jpg"
,"bb9db263-3b7b-4f31-84f0-ed48d41ab9d4-스톤뮤직_배은영.png"
,"370b8abb-6f0a-4149-b58e-2071c9959b81-사토_미나미.jpg"
,"8ed5c153-75fb-44bd-aa1e-f2efa4eb8d8f-NMB48-시로마-미루.jpg"
,"0d23065e-5152-47b3-b870-1a8790d588df-시타오_미우.jpg"
,"594fd2cc-1414-4416-9837-a1c9ab75e528-HKT48_아라마키_미사키_메인.png"
,"d70f8f96-b705-48a2-9a39-47a7d6b34190-아사이_나나미.jpg"
,"6edeea2e-e6b7-4646-97d8-85b7fa2effe3-스타쉽_안유진.jpg"
,"d52589a8-7691-466c-9d1b-750ef1c07d03-HKT48_아부키_나코_메인.png"
,"2cff8b1a-28fa-4d61-a566-707342d1fadb-플레디스_이가은_메인.jpg"
,"950065fe-0ea0-430c-b0d0-b8144e0bacbe-스톤뮤직_이시안.png"
,"d1202879-41f0-491b-ab3c-ff0bb2416b16-이와타테_시호.jpg"
,"ccaab139-a57d-4826-a917-26ae7bd196f0-스톤뮤직_장규리.png"
,"c9829387-a09f-4c79-9360-5331fc9eee14-스타쉽_장원영.jpg"
,"abdd7fee-bd2f-4200-bb44-05bac35e6689-스톤뮤직_조유리.png"
,"cec08c22-8af7-4039-87b0-5a9bdb11f6d5-위에화_최예나_메인.png"
,"0d00fdfa-8715-4fd9-aa6e-7c8b92eeaefc-치바_에리이.jpg"
,"b184fb59-d9ed-4329-b4a2-4fa70fdecc86-코지마_마코.jpg"
,"bd4fd17e-a4a3-42dd-b7c3-df9d3dccdf37-HKT48_쿠리하라_사에_메인.png"
,"a7d80621-5791-48d9-a3ad-b2d837bd8405-HKT48_타나카_미쿠_메인.png"
,"921e89ee-1f51-4ffd-aadd-1ed5f2a659d3-타카히시_쥬리.jpg"
,"e31e5268-19d4-4e9a-b599-8643639d9c31-타케우치_미유.jpg"
,"e1bb1bb8-a366-46de-a322-533858eb33d5-플레디스_허윤진_메인.jpg"
,"2cf24c93-8293-4483-b470-902d8ab5889f-혼다_히토미.jpg"
];
var name2=[
 "강혜원"
,"고유진"
,"고토 모에"
,"김나영"
,"김다연"
,"김민주"
,"김시현"
,"김현아"
,"마츠이 쥬리나"
,"모토무라 아오이"
,"무라세 사에"
,"무라카와 비비안"
,"무토 토무"
,"미야와키 사쿠라"
,"미야자키 미호"
,"박진희"
,"배은영"
,"사토 미나미"
,"시로마 미루"
,"시타오 미우"
,"아라마키 미사키"
,"아사이 나나미"
,"안유진"
,"야부키 나코"
,"이가은"
,"이시안"
,"이와타테 사호"
,"장규리"
,"장원영"
,"조유리"
,"최예나"
,"치바 에리이"
,"코지마 마코"
,"쿠리하라 사에"
,"타나카 미쿠"
,"타카하시 쥬리"
,"타케우치 미유"
,"허윤진"
,"혼다 히토미"];
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
			if(i==3){
				aTag.setAttribute("href","/main/goRank");
			}
			if(i==1){
				aTag.setAttribute("href","/");
			}
				aTag.appendChild(txt);
				li1.appendChild(aTag);

			head.appendChild(li1);
			}
		return head;
		}
	var z=1;
	function makeCircle(n){
		var showBox=document.getElementById("box");
		var ulhead=document.createElement('ul');
		showBox.innerHTML="";
		for(var i=3*n;i<3+3*n;i++){
			var div1=document.createElement("div");
			var pname=document.createElement('p');
			if(arr[i][0]==""){
			pname.innerHTML="untitle";
			pname.setAttribute("class", "name2");
			div1.remove();
			div1.setAttribute("class","vote");
			}else{
			pname.innerHTML=arr[i][0];	
			pname.setAttribute("class", "name2");
			div1.setAttribute("class","vote");
			var copyImg =document.createElement('img');
			copyImg.setAttribute("src",arr[i][1]);
			copyImg.setAttribute("style","width:58px;height:58px;border-radius:130px;");
			div1.appendChild(copyImg);
			}
			var liBody=document.createElement("li");
			liBody.appendChild(div1);
			liBody.appendChild(pname);
			ulhead.appendChild(liBody);
		}
		showBox.appendChild(ulhead);
	}
	function move(r){
		var numPage=document.getElementById("pNum");
		if(r==1){z--;
		if(z<=0){z=3;}
		numPage.innerHTML="";
		makeCircle(z-1);
		var txt=document.createTextNode(z);numPage.appendChild(txt); }
		if(r==2){z++;if(z>3){z=1;}
		numPage.innerHTML="";
		makeCircle(z-1);
		var txt=document.createTextNode(z);numPage.appendChild(txt); }
		}
		var c=0;

		window.onload=function(){
			makeCircle(z-1);
			var box=document.getElementById("header");
			var head=makeMenu(naviInTag);
			box.appendChild(head);
			var headAddr="http://static.global.mnet.com/data/od/images/globalmnet/program/produce48/config/";
			var circleBody=document.getElementById('circle');
			for(i=0;i<addr.length/6;i++){
				var ulH=document.createElement('ul');
					for(j=0;j<6;j++){
				var llH=document.createElement('li');
				var div1=document.createElement("div");
					div1.setAttribute("class","th");
				var sp=document.createElement("span");
				sp.setAttribute("class","mask_vote");
				var im=document.createElement("img");
				im.src=headAddr+addr[6*i+j];
				im.style="width:156px;height:156px;";
				var pname=document.createElement("p");
				var txt=document.createTextNode(name2[6*i+j]);
					pname.setAttribute("class","name")
					pname.appendChild(txt);
				div1.appendChild(sp);
				div1.appendChild(im);
				div1.appendChild(pname);
				llH.appendChild(div1);
				ulH.appendChild(llH);
				if((6*i+j)>10&&(6*i+j)%12==0){
					c++;
					var imageLine=document.createElement('img');
					var imgAddr="http://produce48.mnet.com/images/bg_group_line"+c+".gif";
					imageLine.setAttribute("src", imgAddr);
					circleBody.appendChild(imageLine);
					}
				}
				circleBody.appendChild(ulH);
			}
			var btnSub=document.getElementById("btn");
			btnSub.onclick=function(){
				var nameList="";
				if(t==9){
					var form=document.getElementById("fff");
					for(var i=0;i<arr.length;i++){
						nameList+=arr[i][0]+",";		
					}
					nameList=nameList.substring(0,nameList.lastIndexOf(","));
					var text=document.createElement("input");
					text.setAttribute("type", "text");
					text.setAttribute("value", nameList);						
					text.setAttribute("name", "pick");
					form.appendChild(text); 
					form.onsubmit();
				}else{
					alert("다 선택하지 않았습니다.");
				}
				
			}
			$("span").hover(function(){
				$(this).attr("stlye","background-position:0px -155px;");
			});
			var t=0;
			var k=0;
			var check=true;
		 	 $("span").click(function(){
				for(var i=0;i<arr.length;i++){
					if($(this).siblings(".name").text()==arr[i][0]){
						check=false;
						break;}else{check=true;}};
				if(check){
				if(t<9){
						for(k=0;k<arr.length;k++){
						if(arr[k][0]==""){
						break;}else{check=true;}};
						arr[k]=[$(this).siblings(".name").text(),$(this).siblings("img").attr("src")];
						$(this).css({"background":"url(http://produce48.mnet.com/images/mask_vote_unselected_hover2.png)"
							,"background-position":"0px -155px"});
						makeCircle(0);
						t++;
						}else{
						alert("모두 선택했습니다.");
					}
			}else{	
				for(k=0;k<arr.length;k++){
					if($(this).siblings(".name").text()==arr[k][0]){
						break;}else{check=true;}};
				t--;
				$(this).css({"background":"url(http://produce48.mnet.com/images/mask_vote2.png)"
					,"background-position":"0px 0px"});
				arr[k][0]="";
				arr[k][1]="";
				makeCircle(0);
			}});  
		
		}