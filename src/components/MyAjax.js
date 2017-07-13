// 封装ajax操作函数
// 参数 options 为可配置项内容
// options = {
// 	type : "get|post", // 请求方式，默认为 get
// 	url : "http://xxx", // URL
// 	async : true, // 是否异步，默认为异步
// 	data : {username:""}, // 需要向服务器提交的数据
// 	dataType : "text|json", // 预期从服务器返回的数据格式
// 	headers : {"name":"value"}, // 额外设置的请求头
// 	success : function(respData){}, // 请求成功时执行的函数
// 	error : function(errMsg){}, // 请求失败时执行的函数
// 	complete : function(xhr){} // 不论成功/失败都会执行的函数
// }
function ajax(options) {
	options = options || {};
	// 判断是否有连接的URL
	var url = options.url;
	if (!url) // 如果没有连接的URL，则结束函数执行
		return;

	// 创建核心对象
	var xhr;
	if (window.XMLHttpRequest)
		xhr = new XMLHttpRequest();
	//else
	//	xhr = new ActiveXObject("Microsoft.XMLHTTP");
	// 设置请求方式
	var method = options.type || "get";
	// 设置是否异步
	var async = (typeof options.async === "boolean") ? options.async : true;
	// 判断是否有向服务器传递参数
	var param = null; // 保存查询字符串的变量
	if (options.data) { // 有传递参数
		var array = []; // 保存键值对结构的数组
		for (var attr in options.data) {
			array.push(attr + "=" + options.data[attr]); // ["key=value", "key=value"]
		}
		param = array.join("&"); // key=value&key=value&key=value
	}
	// 如果是 get 请求，则将查询字符串连接在 URL 后
	if (method === "get" && param){
		url += "?" + param;
		param = null;
	}
	// 建立连接
	xhr.open(method, url, async);
	// post传递参数时，设置请求头 Content-Type
	if (method === "post"){
		// 设置请求头信息
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	}
	// 其它额外设置的请求头
	if (options.headers) {
		for (var attr in options.headers) {
			xhr.setRequestHeader(attr, options.headers[attr]);
		}
	}
	// 发送请求
	xhr.send(param);
	// 处理响应
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4) {
			// 无论成功或失败都会执行的函数
			options.complete && options.complete(xhr);

			if (xhr.status === 200) { // 成功
				var data = xhr.responseText;
				// 判断配置中预期从服务器返回的数据类型
				// 如果是 json，则调用 JSON.parse() 解析
				if (options.dataType === "json")
					data = JSON.parse(data);
				// 处理响应数据逻辑
				options.success && options.success(data);
			} else { // 失败
				options.error && options.error(xhr.statusText);
			}
		}
	}
}
export default ajax