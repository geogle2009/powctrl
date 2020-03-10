let $mqtt = require('@/utils/js/mqttws31-auto.js');

var messageAll = [{"content":"初始化"}];

let options = {
	timeout: 1000 * 1000,
	userName: 'admin',
	password: 'admin',
	useSSL: false, //如果使用 HTTPS 加密则配置为 true
	keepAliveInterval: 10,
	mqttVersion: 4,
	reconnect:true,
	onSuccess: function onConnect() { //连接成功
		console.log('连接成功');
		client.subscribe('aa2', {
			qos: 0
		});
		
		var message = new $mqtt.Message(JSON.stringify({ type: 0x10, target: 'To', content: '连接成功', extend: '扩展信息' }));
		message.qos = 1;
		message.destinationName = 'aa2';
		client.send(message);
		
		
	},
	onFailure: function(message) { //连接失败
		console.log('连接失败', JSON.stringify(message));
	}
};
let clientId = Math.floor(Math.random() * 10000) + "";

let url = '47.104.177.95';
let port = 61614;

let client = new $mqtt.Client(url, port, clientId);

client.onConnectionLost = function onConnectionLost(response) {
	console.log('onConnectionLost', JSON.stringify(response));
};
client.onMessageArrived = function onMessageArrived(message) {
	let payload = message.payloadString;
	let chat = JSON.parse(payload.toString());
	console.log('收到来自', chat.target, '的消息', payload.toString())
	addMessage('home', JSON.parse(payload).content, false)
	console.log(messageAll[0].content)
	saveMsg();
};



/* uni.getStorage({
	key: 'storage_msg',
	success: function (res) {
		console.log(res.data)
		 messageAll= res.data;
	}
}); */

function addMessage(user, content, hasSub, subcontent) {
	messageAll.push({
		user: user,
		content: content,
		hasSub: hasSub,
		subcontent: subcontent
	});
}

function saveMsg() {
	// uni.setStorage({
	// 	key: 'storage_msg',
	// 	data: messageAll,
	// 	success: function () {
	// 		console.log('消息已存储');
	// 		// console.log(messageAll)
	// 	}
	// });
}

export {
	client,
	options,
	messageAll,
	addMessage,
	saveMsg
}
