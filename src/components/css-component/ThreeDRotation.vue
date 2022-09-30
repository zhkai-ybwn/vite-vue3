<template>
    <div class="card-container">
        <div class="front">
            <p>缘分让我们遇到！</p>
        </div>
        <div class="back">
            <p>求点赞~</p>
            <p>求关注~</p>
            <p>求评论~</p>
            <p>求收藏~</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.card-container {
  position: relative;
  width: 300px;
  height: 450px;
  border-radius: 30px;
  cursor: pointer;
  background-color: #a1c4fd;
  box-shadow: 1px 1px 20px rgb(176 213 252 / 10%);
  transform-style: preserve-3d;
  animation: rotate-reverse 1.2s cubic-bezier(0.66, -0.47, 0.33, 1.5) forwards;
}

.card-container:hover {
  animation: rotate 1.2s cubic-bezier(0.66, -0.47, 0.33, 1.5) forwards;
}

.front,
.back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 20px;
  background-color: #fff;
  border-radius: 30px;
  backface-visibility: hidden;
}

.back {
  transform: rotateY(180deg);
}

@keyframes rotate {
  0% {
    transform: rotateY(0deg);
  }

  100% {
    transform: rotateY(180deg);
  }
}

@keyframes rotate-reverse {
  0% {
    transform: rotateY(180deg);
  }

  100% {
    transform: rotateY(0deg);
  }
}
</style>
