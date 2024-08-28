# 扫码接收/发送消息模块的实现

## 1. 动态嵌套页面

### 1. 动态iframe嵌套

```html

<iframe id="dynamicIframe" frameborder="0" width="100%" height="350"></iframe>
<script type="text/javascript">
  function getDecodedParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return decodeURIComponent(urlParams.get(name) || '');
  }

  const iframeSrc = getDecodedParameter('iframeSrc') || '默认嵌套页面地址';
  const dynamicTitle = getDecodedParameter('title') || '默认标题';

  document.getElementById('dynamicIframe').src = iframeSrc;
  document.title = dynamicTitle;
</script>
```

### 1.2 动态iframe页面使用

```html

<el-button @click="showPop">打开扫码窗口</el-button>

<script>
  export default {
    data() {
      return {}
    },

    methods: {
      showPop() {
        function openCenteredPopup(url, width, height) {
          var screenWidth = window.screen.width;
          var screenHeight = window.screen.height;
          var left = screenWidth / 2 - width / 2;
          var top = screenHeight / 2 - height / 2;
          window.open(
            url,
            "_blank",
            `width=${width},height=${height},left=${left},top=${top}`
          );
        }

        function getUrl(type) {
          let link = "";
          switch (type) {
            case "微信":
              return "https://open.weixin.qq.com/connect/qrconnect?appid=wxbdc5610cc59c1631&redirect_uri=https://element.eleme.cn/#/zh-CN/component/tooltip#attributes&response_type=code&scope=snsapi_login&state=3d6be0a4035d839573b04816624a415e#wechat_redirect";
            case "浙政钉":
              link = "https://login-pro.ding.zj.gov.cn/oauth2/auth.htm?response_type=code&client_id=lsyj_sm_dingoa&redirect_uri=https://lsjtj.linkcld.com:8008/tlxx-modules-system/system/login/dingTalkAuthCallback&scope=get_user_info&authType=QRCODE&embedMode=true";
              return `/libs/iframeNesting/index.html?iframeSrc=${encodeURIComponent(link)}&title=${encodeURIComponent("浙政钉扫码授权")}`;
          }
        }, // /libs/iframeNesting/index.html 文件路径【必须放在public目录下】!!!

        openCenteredPopup(getUrl("浙政钉"), 500, 400);
      },

    },
  }
</script>
```

## 2. Broadcast类封装【广播的导入和使用】

### 2.1 html 导入 -> 使用

```html

<script src="./index.js" async></script>

<script>
  const msgBroadcast = new Broadcast()
  msgBroadcast.sendMessage("浙政钉", {data: "你要传的内容"})
</script>
```

### 2.2 vue 模块化导入 -> 使用

```html

<script>
  import Broadcast from "outDic/public/libs/iframeNesting/index"

  export default {
    data() {
      return {
        broadcaster: null,
      }
    },

    mounted() {
      this.broadcaster = new Broadcast();
      this.broadcaster.addListener((message) => {
        console.log('接收到的消息:', message);
        // do something 
      });
    },

    beforeDestroy() {
      this.broadcaster.removeListeners()
    }
  }
</script>
```

## 3. 注意事项

### 3.1 Module not found: Error: Can't resolve 'BroadcastChannel'

``` html
1. 出现“Module not found: Error: Can't resolve 'BroadcastChannel'”错误，
表明Vue项目在编译时无法找到BroadcastChannel这个模块。
BroadcastChannel是浏览器提供的原生API，用于在同一个浏览器上下文中的多个文档（如iframe、web worker或tab）之间进行通信，并不是一个需要单独安装的npm包。
但在某些环境下，比如使用webpack打包时，可能需要对这些原生API进行polyfill或者告知webpack无需处理这些全局可用的对象。
解决这个问题的方法如下：

在Vue项目的webpack.config.js或vue.config.js（Vue CLI 3及以上版本）中，你可以通过externals配置告诉webpack不要去解析BroadcastChannel，因为它是一个全局可用的对象。
对于Vue CLI项目，你可以在vue.config.js中添加或修改配置：
在Vue项目的webpack.config.js或vue.config.js（Vue CLI 3及以上版本）中，你可以通过externals配置告诉webpack不要去解析BroadcastChannel，因为它是一个全局可用的对象。
对于Vue CLI项目，你可以在vue.config.js中添加或修改配置：
```

```javascript
module.exports = {
  configureWebpack: {
    externals: {
      // 告诉webpack无需处理BroadcastChannel，因为它是一个全局变量
      BroadcastChannel: 'BroadcastChannel',
    },
  },
};
```

### 3.2 路径别名

```html
2. 文件导入问题
// import Broadcast from "outDic/public/libs/iframeNesting/index"
otuDic 是在vue.config.js中配置的别名，用于简化文件路径。
```

```javascript
module.exports = {
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src'),
        outDic: path.resolve(__dirname, './')
      }
    },
  },
}
```

### 3.3 ERROR in ./public/libs/iframeNesting/index.js Module not found
```javascript
// 报错 ERROR in ./public/libs/iframeNesting/index.js 
// Module not found:

// 直接暴露Broadcast类给全局或模块系统，无需在AMD中定义BroadcastChannel
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Broadcast;
} else if (typeof define === 'function' && define.amd) {
    // 对于AMD，直接导出Broadcast类，不包含BroadcastChannel作为依赖
    define(function () {
        return Broadcast;
    });
} else {
    // 直接挂载到window，适用于<script>标签引入的情况
    if (typeof window !== 'undefined') {
        window.Broadcast = Broadcast;
    }
}
这样的修改之所以能够解决问题，是因为我们从根本上调整了对BroadcastChannel类和模块定义的理解与处理方式。下面详细解释为何这样修改就能解决你的问题：
原生浏览器API与模块系统：
BroadcastChannel是Web浏览器提供的原生API，它不是通过模块系统（如CommonJS、ES模块或AMD）加载的。这意味着你不能也不应该尝试通过require、import或AMD的define来引入它。
当你在AMD环境中尝试将BroadcastChannel作为依赖项列出时，打包工具（如Webpack）会尝试解析这个“依赖”，导致找不到对应的模块，从而引发错误。
修改后的逻辑：
模块暴露：在修正后的代码中，我们不再将BroadcastChannel作为模块依赖项。对于module.exports和window.Broadcast的处理没有变化，这些是正确且常见的模块暴露方式。
针对AMD的调整：对于AMD环境，现在我们使用了一个自执行函数（即匿名函数）作为define的工厂函数，这个函数内部直接返回Broadcast类，而没有尝试去定义或引入任何额外的依赖。这样做避免了将BroadcastChannel误识别为模块依赖，因为实际上它不需要通过AMD机制加载。
明确职责：
这样的修改明确了代码的责任边界：你的Broadcast类负责封装BroadcastChannel的功能，但不负责引入或定义BroadcastChannel本身，因为它是浏览器环境的一部分。
通过这种方式，无论是直接在浏览器中使用、通过<script>标签引入，还是在支持AMD的模块加载器中使用，都能确保Broadcast类能够正确导出，而不会因为尝试加载不存在的模块而失败。
综上所述，这次修改通过正确处理原生浏览器API与模块定义的关系，消除了打包和加载过程中的错误，保证了代码的兼容性和可维护性。
```

