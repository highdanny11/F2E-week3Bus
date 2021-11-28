<template>
<div class="bg-img">
    <div class="container">
      <nav class="position-relative d-sm-flex d-none justify-content-between pt-6">
        <h1 class="helloBus text-white text-shadow">Hello, Bus !</h1>
        <ul class="list-unstyled mb-0 d-flex translate-middle-auto mb-0
        position-xl-absolute start-50 mt-5 translate-middle-xl-x">
          <li><router-link to="/ResultSearch" class="px-xl-5 px-3 text-decoration-none text-white letterSp-15 fs-5">公車動態</router-link></li>
          <li><a href="#" class="px-xl-5 px-3 text-decoration-none text-white letterSp-15 fs-5">附近站點</a></li>
          <li><a href="#" class="px-xl-5 px-3 text-decoration-none text-white letterSp-15 fs-5">班表查詢</a></li>
          <li><a href="#" class="px-xl-5 px-3 text-decoration-none text-white letterSp-15 fs-5">我的收藏</a></li>
        </ul>
      </nav>
    </div>
      <div class="position-relative h-100">
        <div class="position-absolute start-50 top-25 translate-middle">
          <h2 class="text-shadow text-white text-center helloBus mb-0">
            Hello, Bus !
          </h2>
          <p class="mb-0 text-white text-center fs-sm-26 fs-8 letterSp-45">全台公車動態時刻查詢網</p>
        </div>
      </div>
  </div>
  <div class="container">
    <div class="position-relative">
      <div class="optionaList">
        <ul class="d-flex justify-content-between align-items-center list-unstyled">
          <li class="text-center text-primary">
            <router-link to="/ResultSearch" class="btn btn-secondary mb-2 d-block rounded-circle text-white optionalBtn">
              <i class="fas fa-bus"></i>
            </router-link>
            公車動態
          </li>
          <li class="text-center text-primary">
            <a href="#" class="btn btn-secondary mb-2 d-block rounded-circle text-white optionalBtn">
              <i class="fas fa-map-marker-alt"></i>
            </a>
            附近站點
          </li>
          <li class="text-center text-primary">
            <a href="#" class="btn btn-secondary mb-2 d-block rounded-circle text-white optionalBtn">
              <i class="fas fa-clock"></i>
            </a>
            班表查詢
          </li>
          <li class="text-center text-primary">
            <a href="#" class="btn btn-secondary mb-2 d-block rounded-circle text-white optionalBtn">
              <i class="fas fa-heart"></i>
            </a>
            我的收藏
          </li>
        </ul>
      </div>
    </div>
  </div>
  <footer class="bg-primary py-5 text-white text-center fs-lg-5 fs-8 position-absolute bottom-0 w-100">
    <div class="container">
    HelloBus © 2021 Designer Vum. Engineer Sam. All rights reserved.
    </div>
  </footer>
</template>
