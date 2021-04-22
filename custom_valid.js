//의존성
//jquery
//vue.js
//validate.js
var Valid = (function($, validate){
	return {
		init: function(vm, data){
			this.vm = vm;
			this.constraints = {};
			for(var key in data){
				this.constraints[key]={};
				var $elem = $(this.vm.$refs[key]);
				if($elem.prop('required')){
					this.constraints[key].presence={};
				}
				
			}
			//this.constraints['valid_manual']={presence:{message:"^메시지를 정의해주세요."}};
		},
		validate: function(vm, data){
			this.init(vm, data);
			var valid = validate(data, this.constraints);
			
			if(valid){	//유효성 판단
				var elem = "";
				var msg = "";
				var result = {}; 
				for(var key in valid){
					elem = key;
					result = valid[key][0];
					if($.isFunction(result.callback)){
						result.callback();
					}else{
						msg = valid[key][0];
						var $elem = $(this.vm.$refs[elem]);
						var label = $elem.attr('title');
						alert('['+ label + '] 은(는) ' + msg);			//유효성 메시지
						$elem.focus();
					}
					break;
				}
			}
			return valid;
		},
		getConstraints: function(){
			return this.constraints;
		}
	}
})(jQuery, validate); 