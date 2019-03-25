//采用正则表达式获取地址栏参数（防中文乱码方法）
function GetQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  decodeURI(r[2]); return null;
}

var type=GetQueryString("type");
var name=GetQueryString("name");
var exportColumnNameArray=[];

//存储当checkbox选中时field值
$("#dataTable").find(":checkbox").each(function () {
    $(this).change(function () {
        if ($(this).is(':checked')) {
        	exportColumnNameArray.push($(this).parent().next().next().attr('data-field'))
        }
        
    })
})


// 全选复选框
var $selectAll = $("#btSelectAll");
$selectAll.click(function() {
    if ($selectAll.prop("checked") == true) {
        // 上面的复选框已被选中
        $(":checkbox[name='btSelectItem']").prop("checked", true);
        $('input[name="btSelectItem"]:checked').each(function(){//遍历每一个名字为interest的复选框，其中选中的执行函数    
        	exportColumnNameArray.push($(this).parent().next().next().attr('field'));//将选中的值添加到数组chk_value中    
        });
    } else {
        // 上面的复选框没被选中
        $(":checkbox[name='btSelectItem']").prop("checked", false);
        exportColumnNameArray=[]
    }
});


//导出
$("#export").click(function(){
	exports()
})
function exports(){	
	if(exportColumnNameArray.length==0){
		toastr["warning"]("", "请您选择需要导出的列！");
		return false;
	}else{
		var url=''
		var params = JSON.stringify({
	    	"type":type,
	    	"name":name,
	    	"exportColumnNameArray":exportColumnNameArray,
       })
	      var xhr = new XMLHttpRequest();
	      xhr.open('POST', url, true);
	      xhr.responseType = "blob";
	      xhr.setRequestHeader("Content-type","application/json; charset=utf-8");
	      xhr.send(params);
	      xhr.onload = function () {
	          // 请求完成
	          if (this.status === 200) {
	              // 返回200
	              var blob = this.response;
	              var reader = new FileReader();
	              reader.readAsDataURL(blob);    // 转换为base64，可以直接放入a表情href
	              reader.onload = function (e) {
	                  // 转换完成，创建一个a标签用于下载
	                  var a = document.createElement('a');                  
	                  var timestamp = '教育地理数据-'+Date.parse(new Date());
	                  a.download = timestamp+'.xls';
	                  a.href = e.target.result;
	                 // window.location.href=a.href
	                  $("body").append(a);    // 修复firefox中无法触发click
	                  a.click();
	                  $(a).remove();
	              }
	              toastr["success"]("", "成功导出选中信息！");
	          } else {
	              toastr["error"]("", "导出信息失败！");
			  }
	      };

	}
}