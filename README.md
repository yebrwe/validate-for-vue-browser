# Validate for Vue(browser)


## 사용 예시

```html
<div id="content">
  <form name="sampleForm">
    <input type="text" v-model="sample.id" ref="id" title="ID" required/>
    <input type="text" v-model="sample.name" ref="name" title="Name"/>
    <button @click="regist">Save</button>
  </form>
</div>
```

```jsx
var vm;
$(function(){
  vm = new Vue({
    el: "#content",
    data: function() {
      return {
        sample: {
          id: "",
          name: ""
        }
      }
    },
    methods: {
      regist: function(){
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
    }
  });
});
```