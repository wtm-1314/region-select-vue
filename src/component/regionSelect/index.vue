<template>
  <div class="region">
    <select
      class="setProvince"
      v-model="province"
      ref="pro"
      @change="proChange"
    >
      <option>省</option>
    </select>

    <select class="setProvince" v-model="city" @change="cityChange">
      <option v-for="(item, index) in cityList" :key="index">
        {{ item.name }}
      </option>
    </select>

    <select class="setProvince" v-model="area">
      <option v-for="(v, i) in areaList" :key="i">{{ v }}</option>
    </select>
  </div>
</template>

<script>
//引入地区选择
import { region } from "./city";
export default {
  data() {
    return {
      province: "省",
      city: "市",
      area: "区",
      cityList: [{ name: "市" }],
      areaList: ["区"],
    };
  },
  created() {},
  mounted() {
    this.getProvice();
  },
  methods: {
    // 省份渲染
    getProvice() {
      let pro = this.$refs.pro;
      let fragment = document.createDocumentFragment();
      region.forEach((item) => {
        let option = document.createElement("option");
        option.textContent = item.name;
        option.value = item.name;
        fragment.appendChild(option);
      });
      pro.appendChild(fragment);
    },
    /**
     * 省
     */
    proChange() {
      if (this.province == "省") {
        this.areaList = ["区"];
        this.area = "区";
        this.cityList = [{ name: "市" }];
        this.city = "市";
        return;
      }
      this.areaList = ["区"];
      this.area = "区";
      // 得到省，过滤省下面的市区
      let citys = region.find((item) => {
        return item.name == this.province;
      });
      if (!citys) {
        this.cityList = [{ name: "市" }];
        this.city = "市";
        return;
      }
      this.cityList = citys.city;
    },
    /**
     * 市
     */
    cityChange() {
      // 得到市区，过滤下面的区
      let areas = this.cityList.find((item) => {
        return item.name == this.city;
      });
      if (!areas) {
        console.log(areas, "areas");
      }
      this.areaList = areas.area;
    },
    /**
     * 区
     */
  },
};
</script>

<style lang="less" scoped>
.region {
  height: 1.6rem;
  line-height: 1.6rem;
}
.setProvince {
  min-width: 5rem;
  height: 1.6rem;
  line-height: 1.6rem;
  margin: 0;
  font-size: 1rem;
  border-radius: 4px;
  padding: 2px 6px;
  /* border-color: blueviolet; */
  /* border: none;  */
  outline: none;
  margin: 0 5px;
}
</style>