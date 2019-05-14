# AloeMovie

<a name="YmLjA"></a>

## 项目概览

### 基本功能

- 查看影片基本信息
- 个人收藏功能

### 使用第三方库及依赖

- 豆瓣API
- UI-Vant

### 页面结构

- movie-电影信息页
- profile-个人信息页


## vant安装与使用

### vant的安装

- 安装npm依赖(miniprogram文件夹)

  ```npm
  npm init
  ```

- 安装`vant`

- 小程序开发工具设置

  ```npm
  npm i vant-weapp -S --production
  ```

  - 工具-构建npm
  - 详情-使用npm模块
### vant组件使用

#### 引入vant内置样式

```css
@import "miniprogram_npm/vant-weapp/common/index.wxss";
```

### 使用vant组件

```json
"usingComponents": {
    "van-button": "vant-weapp/button"
}
```