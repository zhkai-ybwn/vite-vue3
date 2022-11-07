<!--
 * @Description: 自定义图标 https://developer.aliyun.com/article/975701
 * @Author: zhangkai
-->
<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconClassName" :fill="color"></use>
    </svg>
</template>
<script>
import { computed } from 'vue';

export default ({
    props: {
        iconName: {
            type: String,
            required: true,
        },
        className: {
            type: String,
            default: '',
        },
        color: {
            type: String,
            default: '#409eff',
        },
    },
    setup(props) {
        const iconClassName = computed(() => `#${props.iconName}`);
        const svgClass = computed(() => {
            if (props.className) {
                return `svg-icon ${props.className}`;
            }
            return 'svg-icon';
        });
        return { iconClassName, svgClass };
    },
});
</script>

<style lang="scss" scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    position: relative;
    fill: currentcolor;
    vertical-align: -2px;
  }
    </style>
