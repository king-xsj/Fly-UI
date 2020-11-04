
## Welcome to Fly-UI


### How to used

```
npm i Fly-UI
```

###文件夹说明
examples用来写组件相关文档和事例。
src目录里面只放一个main.js用来作为打包入口
packages 文件夹，我们组件的编写都在packages文件夹中进行


在main.js 中

```
import orange from 'orange_collect'
import 'orange_collect/lib/orange_collect.css'

Vue.use(orange)
```

### doc

See doc [doc](https://czkm.github.io/Orange-Collect/).

### Github

Give a ⭐️ if this project helped you!

```
https://github.com/czkm/Orange-Collect
```

核心命名规则
版本号通常称为 x.y.z

x 主版本号,一般向下不兼容时增加此值
y 次版本号,向下兼容,添加新特性时增加此值
z 补丁号,修复问题为改变特性时增加此值
a,b,γ,rc 分别表示 内测,公测,相当成熟的测试版，于发行版相差无几,发行状态
版本限定
~ 在依赖版本兼容下,最近的补丁版
^ 在依赖版本兼容下,最近的次版本
~1.1.1      >=1.1.1 <1.2.0
~1.1        >=1.1.0 <1.2.0
~1          >=1.0.0 <2.0.0
^1.1.1      >=1.1.1 <2.0.0
^0.1.1      >=0.1.1 <0.2.0 注意这里,不要以为是 0.1.1-1.0.0 之间
^0.0.1      >=0.0.1 <0.0.2 同上,请注意