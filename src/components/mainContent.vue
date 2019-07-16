<template>
  <div class="page-body">
    <div class="navi-bar">
      <div class="navi-text">关于我们</div>
      <div class="navi-text">北京大学学生模拟联合国交流会</div>
      <div class="navi-text">世界模拟联合国大会</div>
      <div class="navi-text">联系我们</div>
      <div class="navi-text">常见问题</div>
    </div>
    <div class="content">
      在传统的JavaScript应用程序中，需要查看哪些数据已更改，并且必须对DOM进行更改以使其保持最新状态。频繁的 DOM 操作会导致浏览器对 DOM 树进行大量计算，性能降低。因此，合并多次的 DOM 操作，然后适时的，一次性的对 DOM 树集中进行一次操作，就可以大大提升前端性能。

      对于 React 而言，实现这一思路的方案即是使用 虚拟 DOM。

      我们所谓的 DOM 树其实就是一个树状结构嵌套的 JavaScript 对象。而在浏览器中，DOM 树的改动会造成浏览器一系列的计算，因此我们可以基于现有的 DOM 树结构，克隆出一份一模一样的 DOM 树，即“虚拟 DOM ”，将所有的改动都实现在这棵虚拟 DOM 上，然后统一合并至浏览器中的 DOM 树中。

      组件化
      组件化是一种代码设计模式，通过组件化能够将一些简单的函数构建为一个更加复杂的函数加以使用。

      组件化有两个显著的特点：
      1. 封装：一个组件所需的数据封装于组件内部；
      2. 组合：一个组件可以与其他组件通过组合的方式实现更加复杂的业务逻辑；

      在 React 中一切 UI 元素皆是组件，而组件又只是一个 JavaScript 函数。只是相较于传统函数接收一些参数并返回一个值的模式而言，React 函数将会接收一些参数，返回界面中的 UI 元素。

      UI = render(data)

      这样一来，在 React 中，构成复杂视图的方式就变得很简单：组合组件

      声明式代码

      “声明式代码”“命令式代码”的不同（What & How）：
      - 声明式代码： 感受到天气太热，编写代码： 1. 调用“开空调(27)”函数；
      - 命令式代码： 感受到天气太热，编写代码： 1. 拿起空调遥控器； 2. 打开空调； 3. 设置温度为 27 摄氏度；

      声明式代码对封装了的命令式代码进行调用，它能够让我们不再仅仅着眼于如何通过代码实现功能，而是更多的思考为了实现业务逻辑，代码需要哪些功能（函数）。

      一次学习，随处编写
      React利用其自身强大的虚拟DOM作为页面描述语法，能实现UI组件的跨端渲染，同样也可以用在客户端开发（react native）和服务端渲染（ssr）
    </div> 
  </div>
</template>

<style lang="stylus">
.page-body
  width 100%
  margin-top 60px
  .navi-bar
    font-size 20px
    display flex
    flex-direction row
    justify-content space-evenly
    align-items center
    .navi-text
      width 200px
  .content
    font-size 18px
    line-height 24px
    margin 40px
    text-indent 36px
</style>

