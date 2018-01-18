## IE11

* 内边距padding值比起其他浏览器大一倍

解决方法：   正常是：div{padding:0 12px}

` @media screen and(-ms-high-contrast:active),(-ms-high-contrast:none){div{padding:0 6px}}`

* 一行解决所有兼容问题

`* {box-sizing: content-box;-moz-box-sizing: inherit;-webkit-box-sizing: inherit;}`

## IE8

* `display:inline-block`引起横向padding值重叠

解决方法：float代替

* 不支持placeholder

* 不支持a标签里有button,input元素的跳转

* a标签中有img,img会有边框

## IE6

* float引起横向margin值加倍（`display:inline-block`）

* float引起3像素（`display:inline -3px`）

* hover链接失效（使用正确书写顺序：link，visited，hover，active）

* min-hight无效（添加！important）

* select遮盖（使用iframe嵌套）