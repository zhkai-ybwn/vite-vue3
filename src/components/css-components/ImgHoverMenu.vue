<!--
 * @Description: 图片菜单
 * @Author: zhangkai
-->
<template>
    <div class="img-container">
        <figure>
            <img src="../../assets/imgs/1.jpg" alt="">
            <figcaption>
                <h2>这里是<span>标题</span>哦</h2>
                <p>
                    <i class="fa fa-download"></i>
                    <i class="fa fa-heart"></i>
                    <i class="fa fa-share"></i>
                    <i class="fa fa-tags"></i>
                </p>
            </figcaption>
        </figure>
        <figure>
            <img src="../../assets/imgs/2.jpg" alt="">
            <figcaption>
                <h2>这里是<span>标题</span>哦</h2>
                <p>
                    <i class="fa fa-download"></i>
                    <i class="fa fa-heart"></i>
                    <i class="fa fa-share"></i>
                    <i class="fa fa-tags"></i>
                </p>
            </figcaption>
        </figure>
    </div>
</template>
<script>

export default ({
    setup() {

    },
});
</script>

<style lang="scss" scoped>
.img-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  figure {
    /* 相对定位 */
    position: relative;
    margin: 10px 1%;
    width: 480px;
    height: 360px;

    /* 溢出隐藏 */
    overflow: hidden;
    background-color: #34495e;

    figcaption {
      color: #fff;
    }

    figcaption::before,
    figcaption::after {
      content: "";
      width: 200%;
      height: 200%;
      position: absolute;
      border-style: solid;
      border-color: #101010;
      transition: transform 0.35s;
      pointer-events: none;
    }

    figcaption::before {
      right: 0;
      bottom: 0;
      border-width: 0 70px 60px 0;
      transform: translate(70px, 60px);
    }

    figcaption::after {
      top: 0;
      left: 0;
      border-width: 15px 0 0 15px;
      transform: translate(-15px, -15px);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      left: 0;
      top: 0;
      transition: 0.35s;
    }

    h2 {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 50%;
      height: 60px;
      line-height: 60px;
      text-align: center;
      letter-spacing: 5px;
      font-weight: 300;
      text-shadow: 0 2px 0 rgb(0 0 0 / 50%);
      transform: translate(100%, 0);
      transition: transform 0.35s;

      span {
        font-weight: 700;
      }
    }

    p {
      position: absolute;
      top: 25px;
      right: 0;
      display: flex;
      flex-direction: column;
      width: 70px;
      justify-content: center;
      align-items: center;

      i {
        margin-bottom: 30px;
        font-size: 22px !important;
        cursor: pointer;
        transform: translate(90px, 0);
        opacity: 0;
        transition: opacity 0.5s, transform 0.35s;
      }

      i:hover {
        color: #f3cf3f;
      }
    }
  }

  /* 接下来是鼠标悬停时的样式变化 */
  figure:hover figcaption::before,
  figure:hover figcaption::after {
    transform: translate(0, 0);
  }

  figure:hover img {
    opacity: 0.8;
    width: 95%;
    height: 95%;
  }

  figure:hover h2,
  figure:hover p i {
    transform: translate(0, 0);
  }

  figure:hover p i {
    opacity: 1;
  }

  figure:hover p i:nth-child(1) {
    transition-delay: 0.025s;
  }

  figure:hover p i:nth-child(2) {
    transition-delay: 0.05s;
  }

  figure:hover p i:nth-child(3) {
    transition-delay: 0.075s;
  }

  figure:hover p i:nth-child(4) {
    transition-delay: 0.1s;
  }
}
</style>
