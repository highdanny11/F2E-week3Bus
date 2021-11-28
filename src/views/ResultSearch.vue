<template>
<div class="position-relative">
  <div class="bg-primary rounded-bottom-20">
    <div class="container">
      <nav class="position-relative d-flex justify-content-between align-items-center pt-6 mb-4">
        <!-- 打開sidebar -->
      <a href="#" class="text-decoration-none d-sm-none" @click.prevent="openSide()">
        <i class="fas fa-align-left text-white fs-42"></i>
      </a>
      <!-- 回到首頁 -->
      <a href="#" class="text-decoration-none"><h1 class="helloBus text-white text-shadow mb-0">Hello, Bus !</h1></a>
      <ul class="list-unstyled mb-0 d-sm-flex translate-middle-auto mb-0 d-none
      position-xl-absolute start-50 mt-5 translate-middle-xl-x">
        <li><a href="#" class="px-xl-5 px-3 text-decoration-none text-white letterSp-15 fs-5">公車動態</a></li>
        <li><a href="#" class="px-xl-5 px-3 text-decoration-none text-white letterSp-15 fs-5">附近站點</a></li>
        <li><a href="#" class="px-xl-5 px-3 text-decoration-none text-white letterSp-15 fs-5">班表查詢</a></li>
        <li><a href="#" class="px-xl-5 px-3 text-decoration-none text-white letterSp-15 fs-5">我的收藏</a></li>
      </ul>
      </nav>
      <nav class="text-white mb-5" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item fs-8"><a href="#" class="text-white text-decoration-none">首頁</a></li>
          <li class="breadcrumb-item text-white fs-8" aria-current="page">公車動態</li>
        </ol>
      </nav>
      <div class="row">
        <div class="col-sm-4 offset-sm-2">
          <p class="mb-2 text-secondary fs-8">*選擇縣市有助於您更快找到路線</p>
        </div>
      </div>
      <div class="row g-3 justify-content-center pb-7">
        <div class="col-sm-4">
          <select class="form-select rounded-12 text-warning" v-model="area" @change="getAreaBusRoute()">
            <option value="">請選擇縣市</option>
            <option :value="item.City" v-for="(item, i) in CityArea" :key="i">{{item.CityName}}</option>
          </select>
        </div>
        <div class="col-sm-4">
          <div class="position-relative">
            <input type="text" class="form-control rounded-12 text-warning" v-model="searchStr"
            :placeholder="area === '' ? '請先選擇縣市':'請選擇路線或手動輸入關鍵字'" :disabled="area === ''">
            <i class="bi bi-search position-absolute top-0 end-0 me-3 fs-6 mt-2 text-warning"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
<!-- 點擊手機漢堡顯示 -->
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
</div>
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
          <!-- 結果內容 :預設 selectResult =0-->
          <div class="h-100 d-flex
            justify-content-center align-items-center flex-column" v-if="selectResult === 0">
            <!-- 預設畫面Group8 -->
            <img :src="require('@/assets/img/Group 8.png')" alt="" />
            <p class="mb-0 mt-2 text-info">尋找您的公車路線</p>
          </div>
          <!-- 找不到就Group 9  selectResult =1-->
          <div class="h-100 d-flex
            justify-content-center align-items-center flex-column" v-else-if="selectResult === 1">
            <img :src="require('@/assets/img/Group 9.png')" alt="" />
            <p class="mb-0 mt-2 text-info">很抱歉，找不到符合的路線</p>
          </div>
          <!-- 有結果內容  selectResult =2-->
          <div class="h-100 px-xxl-8 px-lg-6 searchResult-main position-relative" v-else>
          <!-- 結果列表 -->
            <ul class="list-unstyled mb-0 px-2">
              <li class="rounded-12 boxshadow py-3 px-4 mb-4 position-relative"
              v-for="item in filterData" :key="item.RouteUID">
                <router-link class="stretched-link" :to="`/ResultMap/${item.City},${item.RouteName.Zh_tw},${item.DepartureStopNameZh},${item.DestinationStopNameZh}`"></router-link>
                <div class="d-flex justify-content-between align-items-center mb-1">
                <h3 class="mb-0">{{item.RouteName.Zh_tw}}</h3>
                <!-- 為勾選 far 以勾選fas -->
                <i class="far fa-heart"></i>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <p class="mb-0 text-success">{{item.DepartureStopNameZh}}<i class="fas fa-arrows-alt-h mx-1"></i>{{item.DestinationStopNameZh}}</p>
                  <p class="mb-0 text-warning">{{cheArea}}</p>
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
            <li class="col"><a href="#" class="px-0 rounded-10 w-100 btn" :class="{'disabled':area === ''}" @click.prevent="EnterSearch($event)">紅</a></li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100 btn" :class="{'disabled':area === ''}" @click.prevent="EnterSearch($event)">藍</a></li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100 btn" :class="{'disabled':area === ''}" @click.prevent="EnterSearch($event)">1</a></li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100 btn" :class="{'disabled':area === ''}" @click.prevent="EnterSearch($event)">2</a></li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100 btn" :class="{'disabled':area === ''}" @click.prevent="EnterSearch($event)">3</a></li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100 btn" :class="{'disabled':area === ''}" @click.prevent="EnterSearch($event)">棕</a></li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100 btn" :class="{'disabled':area === ''}" @click.prevent="EnterSearch($event)">綠</a></li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100 btn" :class="{'disabled':area === ''}" @click.prevent="EnterSearch($event)">4</a></li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100 btn" :class="{'disabled':area === ''}" @click.prevent="EnterSearch($event)">5</a></li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100 btn" :class="{'disabled':area === ''}" @click.prevent="EnterSearch($event)">6</a></li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100 btn" :class="{'disabled':area === ''}" @click.prevent="EnterSearch($event)">黃</a></li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100 btn" :class="{'disabled':area === ''}" @click.prevent="EnterSearch($event)">橘</a></li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100 btn" :class="{'disabled':area === ''}" @click.prevent="EnterSearch($event)">7</a></li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100 btn" :class="{'disabled':area === ''}" @click.prevent="EnterSearch($event)">8</a></li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100 btn" :class="{'disabled':area === ''}" @click.prevent="EnterSearch($event)">9</a></li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100 btn" :class="{'disabled':area === ''}" @click.prevent="EnterSearch($event)">F</a></li>
            <li class="col">
              <!-- 要做一個modal ，未完成。 -->
              <a href="#" class="rounded-10 px-0 w-100 btn" :class="{'disabled':area === ''}">更多</a>
            </li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100 btn" :class="{'disabled':area === ''}" @click.prevent="EnterSearch($event)">C</a></li>
            <li class="col"><a href="#" class="px-0 rounded-10 w-100 btn" :class="{'disabled':area === ''}" @click.prevent="EnterSearch($event)">0</a></li>
            <li class="col">
              <a href="#" class="rounded-10 w-100 px-0 btn" :class="{'disabled':area === ''}" @click.prevent="EnterSearch($event)"
                ><i class="fas fa-backspace"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</div>
<footer class="bg-primary mt-3 position-md-absolute position-xl-static bottom-0 w-100 py-5 text-white text-center fs-lg-5 fs-8 d-none d-sm-block">
    <div class="container">
    HelloBus © 2021 Designer Vum. Engineer Sam. All rights reserved.
    </div>
  </footer>
</template>

<script>
import AuthorizationHeader from '@/assets/javascript/AuthorizationHeader.js';
import CityName from '@/assets/json/CityName.json';

export default {
  data() {
    return {
      switchSide: false,
      switchUpDown: false,
      CityArea: [...CityName.data],
      area: '',
      searchStr: '',
      cheArea: '',
      data: null,
      selectResult: 0,
    };
  },
  methods: {
    openSide() {
      this.switchSide = !this.switchSide;
    },
    getAreaBusRoute() { // 取得縣市所有路線
      // 更換中文地區名
      this.changeCheName();
      // 取得市區所有公車路線
      const url = `https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/${this.area}?&$format=JSON`;
      this.$http.get(url, AuthorizationHeader)
        .then((res) => {
          this.selectResult = 2;
          const yyy = res.data;
          yyy.forEach((item) => {
            item.DestinationStopNameZh = this.changeString(item.DestinationStopNameZh);
            item?.DepartureStopNameZh === undefined ? '' : this.changeString(item.DepartureStopNameZh);
            item.RouteName.Zh_tw = this.chabgeRouteName(item.RouteName.Zh_tw);
          })
          this.data = yyy
        })
        .catch((err) => {
          this.selectResult = 1;
          console.log(err)
        })
    },
    changeCheName() {// 更換中文地區名
      const CheName = this.CityArea.find((item)=> item.City === this.area);
      this.cheArea =  CheName.CityName;
    },
    EnterSearch(e) { // 手動鍵盤輸入
      if(e.target.innerText === '') {
        if(this.searchStr !== '') {
          this.searchStr = this.searchStr.substring(0,this.searchStr.length -1);
        }
      }else {
        this.searchStr += e.target.innerText;
      }
    },
    changeString(str ='') {
      const changeStr = str.replace('/', '');
      return changeStr;
    },
    chabgeRouteName(str) {
      if(str.includes('/')) {
        const changeStr = str.replace('/', '');
        return changeStr;
      }else {
        return str
      }
    }
  },
  computed: {
    filterData() {
      return this.data.filter((item) => item.RouteName.Zh_tw.match(this.searchStr))
    }
  },
  mounted() {
    this.selectResult = 1;
  }
};
</script>
