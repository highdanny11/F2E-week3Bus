<template>
  <div class="container-fluid mt-5">
    <div class="row justify-content-center overflow-hidden
    position-relative">
      <div class="col-xxl-4 col-sm-6 col-md-5">
        <div class="rounded-20 boxshadow-sm mb-1 pb-2">
            <!-- 結果的title -->
          <div class="bg-primary text-white text-center rounded-top-20 py-2 mb-4 d-none d-sm-block">
            搜尋結果
          </div>
          <div class="searchResult pe-2">
          <!-- 結果內容 :預設和找不到-->
          <div class="h-100 d-flex d-none
            justify-content-center align-items-center flex-column">
            <!-- 預設畫面Group8 找不到就Group 9 -->
            <img :src="require('@/assets/img/Group 8.png')" alt="" />
            <!--  預設文字:尋找您的公車路線。找不到文字: 很抱歉，找不到符合的路線-->
            <p class="mb-0 mt-2 text-info">尋找您的公車路線</p>
          </div>
          <!-- 有結果內容 -->
          <div class="h-100 px-xxl-8 px-lg-6 searchResult-main position-relative">
            <div class="d-flex justify-content-end px-2 position-sticky top-0 bg-white pb-4">
              <p class="mb-0 me-2 text-primary fs-8">僅顯示提供無障礙車輛之路線</p>
            <input type="checkbox" id="toggle" class="offscreen" />
            <label for="toggle" class="switch"></label>
          </div>
            <ul class="list-unstyled mb-0 px-2">
              <li class="rounded-12 boxshadow py-3 px-4 mb-4">
                <div class="d-flex justify-content-between align-items-center mb-1">
                <h3 class="mb-0">5053</h3>
                <!-- 為勾選 far 以勾選fas -->
                <i class="far fa-heart"></i>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <p class="mb-0 text-success">桃園<i class="fas fa-arrows-alt-h mx-1"></i>龍潭(經九龍里)</p>
                  <p class="mb-0 text-warning">桃園</p>
                </div>
              </li>
               <li class="rounded-12 boxshadow py-3 px-4 mb-4">
                <div class="d-flex justify-content-between align-items-center mb-1">
                <h3 class="mb-0">5053</h3>
                <!-- 為勾選 far 以勾選fas -->
                <i class="far fa-heart"></i>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <p class="mb-0 text-success">桃園<i class="fas fa-arrows-alt-h mx-1"></i>龍潭(經九龍里)</p>
                  <p class="mb-0 text-warning">桃園</p>
                </div>
              </li>
               <li class="rounded-12 boxshadow py-3 px-4 mb-4">
                <div class="d-flex justify-content-between align-items-center mb-1">
                <h3 class="mb-0">5053</h3>
                <!-- 為勾選 far 以勾選fas -->
                <i class="far fa-heart"></i>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <p class="mb-0 text-success">桃園<i class="fas fa-arrows-alt-h mx-1"></i>龍潭(經九龍里)</p>
                  <p class="mb-0 text-warning">桃園</p>
                </div>
              </li>
               <li class="rounded-12 boxshadow py-3 px-4 mb-4">
                <div class="d-flex justify-content-between align-items-center mb-1">
                <h3 class="mb-0">5053</h3>
                <!-- 為勾選 far 以勾選fas -->
                <i class="far fa-heart"></i>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <p class="mb-0 text-success">桃園<i class="fas fa-arrows-alt-h mx-1"></i>龍潭(經九龍里)</p>
                  <p class="mb-0 text-warning">桃園</p>
                </div>
              </li>
               <li class="rounded-12 boxshadow py-3 px-4 mb-4">
                <div class="d-flex justify-content-between align-items-center mb-1">
                <h3 class="mb-0">5053</h3>
                <!-- 為勾選 far 以勾選fas -->
                <i class="far fa-heart"></i>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <p class="mb-0 text-success">桃園<i class="fas fa-arrows-alt-h mx-1"></i>龍潭(經九龍里)</p>
                  <p class="mb-0 text-warning">桃園</p>
                </div>
              </li>
               <li class="rounded-12 boxshadow py-3 px-4 mb-4">
                <div class="d-flex justify-content-between align-items-center mb-1">
                <h3 class="mb-0">5053</h3>
                <!-- 為勾選 far 以勾選fas -->
                <i class="far fa-heart"></i>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <p class="mb-0 text-success">桃園<i class="fas fa-arrows-alt-h mx-1"></i>龍潭(經九龍里)</p>
                  <p class="mb-0 text-warning">桃園</p>
                </div>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
      <div class="col-xxl-4 col-sm-6 col-md-5 enterList-wrap" :class="{'open' : switchUpDown}">
        <div class="rounded-md-20 boxshadow bg-white position-relative
        py-md-8 px-md-6 px-4 pt-9 pb-4 rounded-top-20">
        <!-- 上下拉開關 -->
        <a href="#" class="text-decoration-none" @click.prevent="switchUpDown = !switchUpDown">
          <i class="bi bi-caret-down-fill downUpBtn d-sm-none" :class="{'open':switchUpDown}"></i>
        </a>
          <ul class="row row-cols-5 gx-2 gy-4 list-unstyled enterList">
            <li class="col"><a href="#" class="px-0 rounded-10 w-100">紅</a></li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100">藍</a></li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100">1</a></li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100">2</a></li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100">3</a></li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100">棕</a></li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100">綠</a></li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100">4</a></li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100">5</a></li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100">6</a></li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100">黃</a></li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100">橘</a></li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100">7</a></li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100">8</a></li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100">9</a></li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100">F</a></li>
            <li class="col">
              <a href="#" class="rounded-10 px-0 w-100">更多</a>
            </li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100">C</a></li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100">0</a></li>
            <li class="col">
              <a href="#" class="rounded-10 w-100 px-0"
                ><i class="fas fa-backspace"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switchUpDown: false,
    };
  },
};
</script>