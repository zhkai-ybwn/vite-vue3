<!--
 * @Description: 轮播组件
 * @Author: zhangkai
-->
<template>
    <div class="swiper-list-container">
        <!-- 列标题 -->
        <div class="list-title">
            <div class="title" v-for="(item, index) in column" :key="index">
                <div class="title-name" :style="{width: `${item.width}px`}">
                    {{item.title}}
                </div>
            </div>
        </div>
        <!-- 内容 -->
        <div class="swiper-container list-content">
            <div class="swiper-wrapper">
                <div v-for="(item, index) in data" :key="index" class="swiper-slide list-line">
                    <div v-for="val in column" :key="val.key" :style="{ width: `${val.width}px` }" class="item">
                        {{item[val.key]}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.min.css';
import 'swiper/dist/js/swiper.min';
import Swiper from 'swiper';
import { onMounted, reactive } from 'vue';

export default ({
    props: {
        // 列标题
        column: {
            type: Array,
            default: () => [
                { title: '姓名', key: 'name', width: 100 },
                { title: '年龄', key: 'age', width: 100 },
                { title: '性别', key: 'sex', width: 100 },
            ],
        },
        // 数据
        data: {
            type: Array,
            default: () => [
                { name: 'Nicholas', age: '18', sex: '男' },
                { name: 'Hetty', age: '18', sex: '男' },
                { name: 'Graham', age: '18', sex: '女' },
                { name: 'Harley', age: '18', sex: '男' },
                { name: 'Finbar', age: '18', sex: '女' },
                { name: 'Oliver', age: '18', sex: '男' },
            ],
        },
    },
    setup(props) {
        const data = reactive({
            swipers: null,
        });
        const createSwiper = () => {
            data.swipers = new Swiper('.swiper-container', {
                height: 150,
                speed: 2000, // 匀速时间
                autoplay: {
                    delay: 0,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                freeMode: true,
                loop: props.data.length > 5,
                direction: 'vertical',
                slidesPerView: 'auto',
            });
        };
        const init = () => {
            if (!data.swipers) {
                createSwiper();
            } else if ((data.swipers.passedParams.loop === true && props.data.length <= 5)
                || (data.swipers.passedParams.loop === false && data.listData.length > 5)) {
                data.swipers.destroy();
                data.swipers = null;
                setTimeout(() => {
                    createSwiper();
                }, 0);
            } else {
                data.swipers.update();
            }
        };
        onMounted(() => {
            init();
        });
    },
});
</script>

<style lang="scss" scoped>
.swiper-list-container {
  width: 300px;
  height: 185;

  .list-title {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 30px;
    color: #d59701;
    background-color: #1a6975;

    .title-name {
      width: 120px;
      overflow: hidden;
      line-height: 30px;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .list-content {
    width: 100%;
    height: 150px;
    overflow: hidden;
    background-color: #e9caa6;

    .list-line {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      height: 30px;
      line-height: 30px;
      color: #d59701;

      .item {
        overflow: hidden;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
