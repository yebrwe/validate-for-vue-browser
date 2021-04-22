# Validate for Vue(browser)

---

## 사용 예시

```jsx
var vm;
$(function(){
	vm = new Vue({
		el: "#wrap",
		data: function() {
			return {
				sample: {
					id: "",
					name: ""
				}
			}
		}
	});
});

function regist() {
	if(Valid.validate(vm, vm.sample)) return;
	if(Modal.REGIST()) return;
	var request = $.ajax({
		method: "POST",
		url: "/create.do",
		contentType: "application/json",
		data: JSON.stringify(vm.sample)
	});

	request.done(function(data){
		Modal.OK();
	});

	request.fail(console.log);
}
```