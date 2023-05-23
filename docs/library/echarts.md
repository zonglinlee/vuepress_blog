---
title: echarts
---

## You need to know

- canvas 是基于像素进行绘图的，所以使用canvas绘图要么写死宽高，要么监听 canvas 元素的宽高并且重绘。
- canvas 元素隐藏的时候 Echarts 并不知道需要多大宽高，或者获取到一个最小宽高，而设置canvas元素显示又不会触发宽高变化的事件，呈现的图表还是隐藏市的大小。
  所以最好在 canvas 显示之后再绘制 Echarts 图表，或者在显示canvas的时候调用 Echarts 的resize 方法，或者用 dispatchEvent 触发一个原生的resize事件。
- echarts 不显示 title,legend,legendScroll,tooltip等，可能是没引入相应的echarts包
- vue-echarts 设置 `.echarts{ width:100%;height:100% }` 时，echarts高度为0，可以尝试设置为 `.echarts{ width:100%; }` 试试。
- echarts 中 geo 是地理坐标系组件，需要 geoJson 数据在 `echarts.registerMap('mapName', geoJson)`
- bmap 是引入百度地图组件之后，百度地图的地理坐标系组件

```javascript
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/legendScroll'
import 'echarts/lib/component/tooltip'
```

## vue-echarts example(vue2)

package.json version

```text
"echarts": "^4.9.0",
"vue-echarts": "^5.0.0-beta.0",
```

vue.config.js

```text
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ]
```

```vue

<template>
  <v-chart autoresize ref="chart1" :options="titlePieData"/>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/legendScroll'
import 'echarts/lib/component/tooltip'

export default {
  components: {
    'v-chart': ECharts
  },
  data() {
    return {
      titlePieData: {
        title: {
          text: 'Pie chart Example',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {d}%'
        },
        // legend过长后滚动
        legend: {
          type: 'scroll',
          left: 'center',
          bottom: 0
        },
        series: [
          {
            name: '职称',
            type: 'pie',
            radius: '50%',
            label: {
              formatter: '{b}: {d}%'
            },
            data: [
              {value: 0, name: 'share1'},
              {value: 0, name: 'share2'},
              {value: 0, name: 'share3'},
              {value: 0, name: 'share4'},
              {value: 0, name: 'share5'},
              {value: 0, name: 'share6'},
              {value: 0, name: 'share7'},
              {value: 0, name: 'share8'},
              {value: 0, name: 'share9'},
              {value: 0, name: 'share10'},
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.$refs.chart1.showLoading({text: '数据加载中...'})
    setTimeout(() => {
      this.titlePieData.series[0].data = [
        {value: 48, name: 'share1'},
        {value: 250, name: 'share2'},
        {value: 300, name: 'share3'},
        {value: 25, name: 'share4'},
        {value: 111, name: 'share5'},
        {value: 63, name: 'share6'},
        {value: 99, name: 'share7'},
        {value: 6, name: 'share8'},
        {value: 170, name: 'share9'},
        {value: 132, name: 'share10'},
      ]
      this.$refs.chart1.hideLoading()
    }, 2000)
  }
}
</script>
<style>
.echarts {
  width: 100%
}
</style>
```

## reference

- [echarts v4 文档](https://echarts.apache.org/v4/en/index.html)
- [vue-echarts v5(for vue2)](https://github.com/ecomfe/vue-echarts/tree/5.x)
