<!--
 * @Author: your name
 * @Date: 2020-03-24 15:11:35
 * @LastEditTime: 2020-03-24 17:01:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\Tools\Git.md
 -->

# Git

## SVN vs Git

SVN 是集中式版本管理，项目的开发人员需要远程中央服务器来共享文件。Git 是分布式版本管理，每个人只用本地分支上开发，最后 push 到远程服务器与其他人员文件保持一致。

git 中工作区(workplace)、暂存区(stage)、本地仓库(repository)、远程(remote)之间的关系

- ![git](./../img/git.png)

工作区与暂存区与本地仓库间的操作

- ![operate](./../img/workplace.png)

## 基本命令

- 设置全局参数，git config --global user.name 'Nancy2013'
- 设置全局参数，git config --globabl user.email 'wangnannangg@gmail.com'
- 初始化，git init
- 添加所有文件，git add .
- 提交到暂存区，git commit -m '备注'
- 从远程拉取，git fetch
- 合并到本地，git merge `<remote-name>/<baranch-name>`
- 切换本地分支，git checkout `<baranch-name>`
- 查看本地分支，git branch
- 推送到远程，git push
- 移除远程仓库，git remote rm `[remote-name]`
- 查看项目文件状态，git status
- 查看操作日志，git log
- 本地生成 SSH 密钥，ssh-keygen -t rsa –C “wangnannangg@gmail.com”
- 首次拉取远程仓库，git remote add origin https://github.com/Nancy2013/test.git
- 克隆远程仓库，git clone https://github.com/Nancy2013/test.git

## .git

创建 git 项目后，在文件夹内都会生成一个.git 文件进行本地的版本管理

## .gitignore

可以通过.gitignore 配置忽略上传文件

- 忽略所有已.js 结尾的文件，\*.js
- 忽略.js 结尾，但是 a.js 除外，!a.js
- 忽略根目录下的 build 文件，/build
- 忽略 node_module 下的所有文件，node_module/