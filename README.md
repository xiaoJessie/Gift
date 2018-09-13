# Gift


## [dva](https://dvajs.com/)
### 写给菜啾
建议先用dva搭建一个自己的页面，遇到问题后借鉴一下pro。Ant-design Pro 对于初学者稍复杂，适合之后的晋级。

### 安装
通过 npm 安装 dva-cli 并确保版本是 0.9.1 或以上。
```
$ npm install dva
$ dva -v
dva-cli version 0.9.2
```
### 创建新应用
```
$ dva new dva-quickstart
$ cd dva-quickstart
$ npm start
```
在浏览器里打开 http://localhost:8000 ，你会看到 dva 的欢迎界面。




## [Ant-design Pro V2.0](https://pro.ant.design/docs/getting-started-cn)
### 前序准备
你的本地环境需要安装 node 和 git。我们的技术栈基于 

+ ES2015+
+ [React](https://react.docschina.org/docs/hello-world.html)
+ UmiJS
+ [dva](https://dvajs.com/)
+ g2
+ antd

提前了解和学习这些知识会非常有帮助。

### 安装
直接 clone git 仓库
```
$ git clone --depth=1 https://github.com/ant-design/ant-design-pro.git my-project
$ cd my-project
```

删除my-project目录下的 .git 文件，方便在sourcetree中检测更新
```
$ find . -name ".git" | xargs rm -Rf
```

第一次安装依赖
```
$ sudo npm install
```

启动，成功后会弹出浏览器窗口
```
$ sudo npm start
```