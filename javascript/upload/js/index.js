//导出数据
function daochu(){
	{
		var arr=""
		arr+='&type='+$("#type").val();
		arr+='&name='+$("#name").val();
		layer.open({
			  type: 2,
			  title:'<span style="font-size:18px;color:#999"><strong>导出列表</strong></span>',
			  maxmin:true,
			  anim:1,//0-6 动画效果
			  shadeClose:false,//是否点击遮罩关闭
			  area: ['540px', '90%'],
			  content: 'export.html?'+arr, 
			  end : function(index){
				  if(closeW==false){
					  toastr["success"]("", "信息导出成功！");
					  return false;
				  }else{
					  //初始化值
					  closeW=false
				  }
			  },
			  cancel: function(index){ 
				  closeW=true;
				  layer.close(index)
				  return false; 
			  }
		});
	}
}	