class Broadcast {
  constructor(channelName = 'tagMessage') {
    this.broadCast = new BroadcastChannel(channelName);
    this.listeners = [];
  }

  /**
   * 发送消息
   * @param: type(string) 消息类型
   * @param: content(Object/Array/String...) 消息内容
   * @author: mhf
   * @time: 2024-06-25 11:19:46
   **/
  sendMessage(type, content) {
    this.broadCast.postMessage({type, content});
  }

  /**
   * 接收消息
   * @param: callback(Function) 回调函数
   * @author: mhf
   * @time: 2024-06-25 13:12:59
   **/
  addListener(callback) {
    const handler = (event) => {
      callback(event.data);
    };

    this.broadCast.addEventListener('message', handler);
    this.listeners.push(handler); // 保存句柄以便于后续移除
  }

  /**
   * 移除监听
   * @author: mhf
   * @time: 2024-06-25 13:13:52
   **/
  removeListeners() {
    this.listeners.forEach((handler) => {
      this.broadCast.removeEventListener('message', handler);
    });
    this.listeners = []; // 清空句柄数组
    this.broadCast.close();
  }
}

// 支持模块化导入
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Broadcast;
} else if (typeof define === 'function' && define.amd) {
  define(function () {
    return Broadcast;
  });
  // define(['BroadcastChannel'], function (BroadcastChannel) {
  //   return Broadcast;
  // });
} else {
  // 支持<script>标签直接导入
  if (typeof window !== 'undefined') {
    window.Broadcast = Broadcast;
  }
}
