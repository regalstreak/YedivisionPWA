<template>

  <div>
    <div 
      v-for="(picture, index) in pictures" 
      :key="index"
      class="container"
    >
      <div class="demo-card-wide mdl-card mdl-shadow--3dp">
        <div class="mdl-card__title">
          <h2 class="mdl-card__title-text">{{ picture.comment }}</h2>
        </div>
        
        <div class="mdl-card__supporting-text">
          {{ picture.info }}
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import data from "../data.js";

export default {
  data() {
    return {
      pictures: data.pictures
    };
  },
  methods: {
    displayDetails(id) {
      this.$router.push({ name: "detail", params: { id: id } });
    }
  }
};
</script>

<style scoped>
.container {
  padding: 8px;
}
.demo-card-wide.mdl-card {
  width: 100%;
  min-height: 0;
  height: 100px;
}
.demo-card-wide > .mdl-card__menu {
  color: #fff;
}
</style>