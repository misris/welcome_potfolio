<template>
  <div class="works-component">
    <div class="my-work">
      <div class="my-work-img">
        <img src="@/assets/logo.png">
      </div>
    </div>
    <div class="my-work">
      <div class="my-work-img">
        <img src="@/assets/logo.png">
      </div>
    </div>
    <div class="my-work">
      <div class="my-work-img">
        <img src="@/assets/logo.png">
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.works-component {
  width: 100%;
  font-size: 0;
}

.my-work {
  font-size: 1rem;
  width: 50%;
  display: inline-block;
  /* border: 1px solid blue; */
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  vertical-align: top;
  padding: 0.5rem;
}


.my-work-title {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  background-color: white;
}

.my-work-img {
  width: 100%;
  border-radius: 10px;
}

.my-work-img img{
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

</style>
