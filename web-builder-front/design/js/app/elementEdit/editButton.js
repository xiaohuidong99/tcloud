// liumingren 2015.10.31

define(['elementInfo','popupEdit'],function(_ei,popupEdit) {
	var buttonEditor = {};
	buttonEditor.init = function () {
		this.bindEdit(".wqdelementEdit");
	}
	// 绑定编辑
	buttonEditor.bindEdit = function (elm) {
		var self = this;
		$(document).on("elmenentEdit",function (e,data) {
			window.a = data.element;
			var $node = data.element || $(".wqdelementEdit.onEditing");
			if($node.attr("data-elementtype") == "button") {
				setTimeout(function(){
					_ei.removeElementEditBtn();
					window.edit = $node;
					$.ajax({
				        url: '../js/app/JSON/designComponentEdit.json',
				        type: "GET",
				        dataType: "json",
				        success: function(json) {
				        	$.colorbox({
								transition:"none",
								opacity:0.5,
								html:json.edit.button,
								fixed:true,
								closeButton:false,
								onOpen:function(){
									window.scroll_top = $(document).scrollTop();
								},
								onComplete:function(){
									popupEdit.buttonInit();
								},
								onClosed:function(){
									window.scrollTo(0, window.scroll_top);
								}
							});
				        }
			    	});

				},0);
			}
		})
	};

	return buttonEditor;

});

