## 容器组件

按指定设计稿尺寸布局，以下为 3840*2160 (16:9) 设计尺寸，每个组件都需要指定高度和宽度，当窗口组件 resize 时候，组件会自动缩放以适应屏幕尺寸

```vue

<container :options="{width: 3840, height: 2160}">
<div class="header">
  <top-header/>
</div>
<div class="separator-wrapper">
  <separator/>
</div>
<div class="center">
  <div class="left">
    <div class="left1">

    </div>
    <div class="left2">

    </div>
    <div class="left3">
    </div>
    <div class="left4">
    </div>
    <div class="left5">
    </div>
    <div class="left6">
    </div>
  </div>
  <div class="right">
    <div class="right-top1">
    </div>
    <div class="right-top2">

    </div>
    <div class="right-bottom">
      <div class="right-left">
        <div class="right-left1">

        </div>
        <div class="right-left2">

        </div>
        <div class="right-left3">

        </div>
        <div class="right-left4">

        </div>
      </div>
      <div class="right-right">
        <div class="right-right1">

        </div>
        <div class="right-right2">

        </div>
      </div>
    </div>
  </div>
</div>
</container>
<script>
import Container from '../../components/Container'

export default {
  components: {
    Container,
  }
}
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  background: rgb(29, 29, 29);
  color: #fff;
  font-size: 48px;

  #screen-container {
    display: flex;
    flex-direction: column;

    .header {
      height: 167px;
      margin-top: 10px;
    }

    .separator-wrapper {
      height: 10px;
    }

    .center {
      flex: 1;
      display: flex;

      .left {
        flex: 0 0 860px;
        display: flex;
        flex-direction: column;
        width: 860px;
        height: 100%;
        margin: 0 10px;
        box-sizing: border-box;
        background: rgb(60, 61, 64);

        .left1, .left2, .left3, .left4, .left5, .left6 {
          padding-bottom: 20px;
        }

        .left1 {
          height: 300px;
        }

        .left2 {
          height: 320px;
        }

        .left3 {
          height: 280px;
        }

        .left4 {
          height: 230px;
        }

        .left5 {
          height: 360px;
        }

        .left6 {
          height: 360px;
        }
      }

      .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 0 10px;
        max-width: 2960px;
        overflow: hidden;

        .right-top1 {
          height: 206px;
          margin-bottom: 20px;
        }

        .right-top2 {
          height: 48px;
          margin-bottom: 20px;
        }

        .right-bottom {
          flex: 1;
          display: flex;

          .right-left {
            display: flex;
            flex-direction: column;
            width: 1917px;

            .right-left1 {
              height: 999px;
            }

            .right-left2 {
              height: 80px;
              padding-top: 20px;
              box-sizing: border-box;
            }

            .right-left3 {
              height: 350px;
              margin-top: 10px;
            }

            .right-left4 {
              height: 220px;
              margin-top: 10px;
            }
          }

          .right-right {
            flex: 1;
            display: flex;
            flex-direction: column;
            margin-left: 10px;

            .right-right1 {
              width: 100%;
              height: 999px;
              padding-right: 10px;
              box-sizing: border-box;
            }

            .right-right2 {
              width: 100%;
              height: 650px;
              margin-top: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
```
