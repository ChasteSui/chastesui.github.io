window.onload = function(){
	var select_tab_obj = document.getElementById("tab-title");
	var tabs = select_tab_obj.getElementsByTagName("li"); //所有标签对象
	var content_div = document.getElementById("tab-contents");
	var divs = content_div.getElementsByTagName("div");//目标内容
	var index;//选中的索引
	if(tabs.length!=divs.length)return;//如果标签数量和内容不一样 停止脚本
	for(var i=0;i<tabs.length;i++){
		tabs[i].dataset.index = i; //使用data-*为元素添加索引
		tabs[i].onmouseover = function(){
			index = this.getAttribute("data-index");//赋值索引
			//清除所有的高亮样式
			for(var j=0;j<tabs.length;j++){
				tabs[j].className="";
				divs[j].style.display = "none";
			}
			this.className = "select";//为选中的标签添加样式
			
			//显示对应的内容区域
			
			divs[index].style.display = "block";
		}
	}
	
}
