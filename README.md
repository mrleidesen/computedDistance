# 根据经纬度计算距离
## 使用方法
`安装`
> npm i computeddistance 

`js文件中引入`
```js
import {getDistance} from "computeddistance"

// 单位 千米
console.log(getDistance(120.682866, 28.006224, 120.684937, 28.005762))
```

## 计算多个位置的距离
请引入`computedMultiDistance`
```js
import {computedMultiDistance} from "computeddistance"

const arr = [
    [120.682866, 28.006224],
    [120.684937, 28.005762],
    [120.684938, 28.005763],
]

console.log(computedMultiDistance(arr))
```