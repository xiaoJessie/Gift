# Gift


## [Ant-design Pro V2.0](https://pro.ant.design/docs/getting-started-cn)
### 前序准备
你的本地环境需要安装 node 和 git。我们的技术栈基于 

+ ES2015+
+ [React](https://react.docschina.org/docs/hello-world.html)
+ UmiJS
+ dva
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