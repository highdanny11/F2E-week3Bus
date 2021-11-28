<template>
<div class="position-relative vh-100">
  <div class="container resultMap" :class="{'open' : switchMap}">
      <nav class="position-relative d-flex justify-content-between align-items-center pt-6 mb-4">
        <!-- 打開sidebar -->
      <a href="#" class="text-decoration-none d-sm-none" @click.prevent="openSide()">
        <i class="fas fa-align-left fs-42"></i>
      </a>
      <!-- 回到首頁 -->
      <a href="#" class="text-decoration-none"><h1 class="helloBus text-shadow mb-0">Hello, Bus !</h1></a>
      <ul class="list-unstyled mb-0 d-sm-flex translate-middle-auto mb-0 d-none
      position-xl-absolute start-50 mt-5 translate-middle-xl-x">
        <li><a href="#" class="px-xl-5 px-3 text-decoration-none letterSp-15 fs-5">公車動態</a></li>
        <li><a href="#" class="px-xl-5 px-3 text-decoration-none letterSp-15 fs-5">附近站點</a></li>
        <li><a href="#" class="px-xl-5 px-3 text-decoration-none letterSp-15 fs-5">班表查詢</a></li>
        <li><a href="#" class="px-xl-5 px-3 text-decoration-none letterSp-15 fs-5">我的收藏</a></li>
      </ul>
      </nav>
      <nav class="text-white mb-5" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item fs-8"><a href="#" class="text-decoration-none">首頁</a></li>
          <li class="breadcrumb-item fs-8 text-primary" aria-current="page">公車動態</li>
        </ol>
      </nav>
  </div>
  <!-- 手機側邊打開的 -->
  <div class="bg-primary vh-100 position-absolute top-0 sideBar
  w-100 d-flex justify-content-center align-items-center" :class="{'open':switchSide}">
    <div class="position-absolute top-10 d-flex justify-content-between align-items-center px-5 w-100">
      <a href="#" class="text-decoration-none text-white" @click.prevent="openSide()">
        <i class="bi bi-x-lg"></i>
      </a>
      <a href="#" class="text-decoration-none">
        <h1 class="helloBus text-white text-shadow mb-0">Hello, Bus !</h1>
      </a>
    </div>
      <div class="h-50 d-flex justiy-content-between flex-column">
        <a href="#" class="text-white text-decoration-none px-7 py-2 btnOptiinal mb-5">公車動態</a>
        <a href="#" class="text-white text-decoration-none px-7 py-2 btnOptiinal mb-5">附近站點</a>
        <a href="#" class="text-white text-decoration-none px-7 py-2 btnOptiinal mb-5">班表查詢</a>
        <a href="#" class="text-white text-decoration-none px-7 py-2 btnOptiinal mb-5">我的收藏</a>
      </div>
  </div>
  <div class="bg-primary rounded-top-sm-20 text-white resultMap-wrap" :class="{'open' : switchMap}">
    <div class="container pt-5 pb-2">
      <div class="row justify-content-center">
        <div class="col-12 d-sm-none">
          <!-- 回上一頁 -->
          <a href="#" class="text-white"><i class="bi bi-arrow-left"></i></a>
        </div>
        <div class="col-6 col-md-5 d-flex">
          <p class="mb-0 align-self-end fs-5 d-flex align-items-center">
            <!-- 打開地圖 resultMap resultMap-wrap往上提 本身會消失-->
            <a href="#" @click.prevent="switchMap = !switchMap" class="bg-secondary me-2 d-flex justify-content-center align-items-center rounded-circle text-white
            optionalBtn-small d-sm-none">
                <i class="bi bi-cursor-fill"></i>
            </a>
            <span class="bg-secondary me-2 d-flex justify-content-center align-items-center rounded-circle text-white optionalBtn-small">
                <i class="fas fa-clock"></i>
            </span>
            <span class="d-none d-sm-inline">公車班表</span></p>
        </div>
        <div class="col-6 col-md-5">
          <h3 class="text-end fw-bold fs-1 mb-1">5053</h3>
          <p class=" fs-sm-5 fs-7 mb-0 text-end">桃園<i class="fas fa-arrows-alt-h"></i>龍潭(經九龍里)</p>
        </div>
      </div>
      <nav class="position-relative justify-content-between align-items-center pt-6 mb-4">
        <!-- 打開sidebar -->
        <a href="#" class="text-decoration-none d-sm-none text-white" @click.prevent="openSide()">
          <i class="fas fa-align-left fs-42"></i>
        </a>
        <!-- 回到首頁 -->
        <a href="#" class="text-decoration-none"><h1 class="helloBus text-shadow mb-0 text-white">Hello, Bus !</h1></a>
      </nav>
      <!-- 打開地圖才會出現 -->
    </div>
    <div class="resultMap-secondWrap d-flex flex-wrap position-relative" :class="{'open' : switchMap}">
      <div class="w-100 w-sm-50 order-2 order-sm-1 rounded-top-20
      boxshadow boxshadow-smHide bg-white">
        <div class="ms-auto resultMap-main px-3">
          <!-- 行駛方向和切換 -->
          <div class="resultMap-mainHeader border-info border-1 border-bottom position-relative">
            <a href="#" class="text-decoration-none position-absolute start-50 top-0"
            @click.prevent="switchMap = !switchMap">
              <i class="bi bi-caret-down-fill downUpBtn d-sm-none" :class="{'open': !switchMap}"></i>
            </a>
            <div>
              <p class="mb-2 text-info">行駛方向</p>
              <p class="mb-0 text-success"><span class="text-secondary">往</span>  龍潭站</p>
            </div>
            <!-- 可以切換顯示 -->
            <a href="#" class="bg-secondary me-2 d-flex justify-content-center align-items-center rounded-circle text-white optionalBtn-small">
                <i class="bi bi-arrow-left-right"></i>
            </a>
          </div>
          <div class="resultMap-mainList text-info">
            <ul class="list-unstyled timeLine mb-0 pt-2">
              <!-- 即將到站arrive，10分鐘內到comming-->
              <!-- 即將到站arrive，顯示車牌， -->
              <!-- 殘障 <i class="fas fa-wheelchair me-1">-->
              <!-- 普通<i class="fas fa-bus me-1"></i> -->
              <li :class="{'arrive' : showArriveBusTime(item.EstimateTime) === '即將到站','comming' : showArriveBusTime(item.EstimateTime).includes('分')}"
              v-for = "item in filterData" :key = "item.StopID"><span class="me-2">
                <!-- 3分鐘內顯示即將到站，大於顯示確切時間 -->
                {{item?.EstimateTime === undefined ? getNextBusTime(item.NextBusTime): showArriveBusTime(item.EstimateTime )}}</span> {{item.StopName.Zh_tw}}
                {{item?.StopStatus === 4 ? '今日未營運' : item?.StopStatus === 1 ? '尚未發車' : item?.StopStatus === 3 ? '末班車已過' : item?.StopStatus === 2 ? '交管不停靠' : ''}}
                <div class="position-absolute end-5" v-if="item?.PlateNumb !== undefined && (item?.EstimateTime !== undefined && item?.EstimateTime <= 120)">
                  <div class="busOptional text-secondary px-1"><i class="fas fa-bus me-1"></i>{{item.PlateNumb}}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 放地圖 -->
      <div class="w-100 w-sm-50 order-1 order-sm-2">
        <div class="bg-white text-primary px-3 d-flex align-items-center justify-content-between d-sm-none">
          <!-- 關閉地圖 -->
          <a href="#" @click.prevent="switchMap = !switchMap" class="text-primary"><i class="bi bi-arrow-left"></i></a>
          <h4 class="mb-0">5053 路線圖</h4>
          <div class="invisible"></div>
        </div>
        <div id="map" class="map w-100 busMap"></div>
      </div>
    </div>
  </div>
  <footer class="bg-primary py-5 text-white text-center fs-lg-5 fs-8 d-none d-sm-block">
    <div class="container">
    HelloBus © 2021 Designer Vum. Engineer Sam. All rights reserved.
    </div>
  </footer>
</div>

</template>

<script>
import L from 'leaflet';
import AuthorizationHeader from '@/assets/javascript/AuthorizationHeader.js';

let map = {};
export default {
  data() {
    return {
      switchSide: false,
      switchMap: false,
      goData: null,
      backData: null,
      filterData: null,
      areaName: '',
      routeName: '',
      routeGoName: '',
      routeBackName: '',
    };
  },
  methods: {
    openSide() {
      this.switchSide = !this.switchSide;
    },
    getRouteDetail() {
      // 跟實際上站牌有差別
      const url = `https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/${this.areaName}/${this.routeName}?&$format=JSON`;
      this.$http.get(url, AuthorizationHeader)
        .then((res) => {
          // this.goData = res.data.filter((item) => item.Direction === 0);
          // this.backData = res.data.filter((item) => item.Direction === 1);
          this.filterData = res.data.filter((item) => item.Direction === 0 && item.RouteName.Zh_tw === this.routeName);
          console.log(this.filterData)
          // this.getRouteBusStopPosition();
          const aaa = []
          this.goData.forEach((item) => {
            this.filterData.forEach((ooo) => {
              if(item.StopName.Zh_tw === ooo.StopName.Zh_tw) {
                const data = {
                  ...item,
                  ...ooo,
                }
                aaa.push(data);
              }
            })
            
          })
          console.log(aaa);
          this.filterData = aaa;
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getRouteBusPosition() { // 暫時沒有使用
      const url = `https://ptx.transportdata.tw/MOTC/v2/Bus/RealTimeByFrequency/City/${this.areaName}/${this.routeName}?$format=JSON`;
      this.$http.get(url, AuthorizationHeader)
        .then((res) => {
          console.log(res.data);
          const godata = res.data.filter((item) => item.Direction === 0)
          console.log(godata);
        })
    },
    getRouteBusStopPosition() {
      // 有分去程站牌
      const url = `https://ptx.transportdata.tw/MOTC/v2/Bus/StopOfRoute/City/${this.areaName}/${this.routeName}?$format=JSON`
      this.$http.get(url, AuthorizationHeader)
      .then((res) => {
        console.log(res.data[0].Stops);
        // 需要stops的排序和訂位資料
        this.goData = res.data[0].Stops;
        this.backData = res.data[1].stops;
        this.getRouteDetail()
      })
    },
    getNextBusTime(str) {
      // 下一次抵達時間
      if(str) {
        const data = str.slice(11,16)
        return data
      }
    },
    showArriveBusTime(num) {
      if(num <= 150) {
        return '即將到站';
      }else if(num > 120){
        return `${Math.floor(num / 60)} 分`;
      }else {
        return '';
      }
    }
  },
  mounted() {
    console.log(this.$route.params.id);
    const data = this.$route.params.id.split(',')
    this.areaName = data[0];
    this.routeName = data[1];
    this.routeGoName = data[2];
    this.routeBackName = data[3];
    // this.getRouteDetail();
    this.getRouteBusStopPosition();
    map = L.map('map',{
      center:[24.2451603,120.7118819],
      zoom: 16,
    });
    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      },
    ).addTo(map);
  }
};
</script>