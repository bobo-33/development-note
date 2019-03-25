function upload(id){
	$("#myModal").modal('show')
	$("#SXFile").fileinput({
		language:'zh', 
		theme: "explorer-fa",                               // 主题
		enctype: 'multipart/form-data',
		uploadUrl: '/inspect/sysProjectBasic/uploadProSXFile', //上传的地址
		minFileCount: 1,                                        // 最小上传数量
        maxFileCount: 3,                                        // 最大上传数量
        overwriteInitial: false,                        // 覆盖初始预览内容和标题设置
        showCancel:false,                                       // 显示取消按钮
        showZoom:false,                                         // 显示预览按钮
        showCaption:false,                                  // 显示文件文本框
        dropZoneEnabled:false,                          // 是否可拖拽
        uploadLabel:"上传附件",                         // 上传按钮内容
        browseLabel: '选择附件',                            // 浏览按钮内容
        showRemove:false,                                       // 显示移除按钮
        browseClass:"layui-btn",                        // 浏览按钮样式
        uploadClass:"layui-btn",                        // 上传按钮样式
        uploadExtraData: {'id':id},   // 上传数据
        hideThumbnailContent:true,                  // 是否隐藏文件内容
        fileActionSettings: {                               // 在预览窗口中为新选择的文件缩略图设置文件操作的对象配置
            showRemove: true,                                   // 显示删除按钮
            showUpload: true,                                   // 显示上传按钮
            showDownload: false,                            // 显示下载按钮
            showZoom: false,                                    // 显示预览按钮
            showDrag: false,                                        // 显示拖拽
            removeIcon: '<i class="fa fa-trash"></i>',   // 删除图标 
            uploadIcon: '<i class="fa fa-upload"></i>',     // 上传图标
            uploadRetryIcon: '<i class="fa fa-repeat"></i>'  // 重试图标
        },
    });
	// 上传成功回调
    $("#SXFile").on("filebatchuploadcomplete", function() {
        toastr["success"]("", "上传附件成功");
        //initTable()
    });
    // 上传失败回调
    $('#SXFile').on('fileerror', function(event, data, msg) {
    	toastr["error"]("", data.msg);
        tokenTimeOut(data);
    });
}