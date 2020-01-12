<template>
  <div class="main_container">
    <div class="wrapper">
      <div class="border-circle" id="one"></div>
      <div class="border-circle" id="two"></div>
      <div class="background-circle">
        <div class="triangle-light"></div>
        <div class="body"></div>
        <span class="shirt-text">I</span>
        <span class="shirt-text">♥</span>
        <span class="shirt-text">周</span>
        <span class="shirt-text">杰</span>
        <span class="shirt-text">伦</span>
        <div class="triangle-dark"></div>
      </div>
      <div class="head">
        <div class="ear" id="left"></div>
        <div class="ear" id="right"></div>
        <div class="hair-main">
          <div class="sideburn" id="left"></div>
          <div class="sideburn" id="right"></div>
          <div class="hair-top"></div>
        </div>
        <div class="face">
          <div class="hair-bottom"></div>
          <div class="nose"></div>
          <div class="eye-shadow" id="left">
            <div class="eyebrow"></div>
            <div class="eye"></div>
          </div>
          <div class="eye-shadow" id="right">
            <div class="eyebrow"></div>
            <div class="eye"></div>
          </div>
          <div class="mouth"></div>
          <div class="shadow-wrapper">
            <div class="shadow"></div>
          </div>
        </div>
      </div>
      <span class="music-note" id="one">&#9835;</span>
      <span class="music-note" id="two">&#9834;</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("./homeLayout.css");
</style>
