<template>
  <div id="header">
    <img src="/favicon.png" alt="" id="titleImg" width="30" height="30" />
    <h1 id="appTitle"><NuxtLink to="/">席替え革命</NuxtLink></h1>
    <div id="linkArea">
      <NuxtLink to="">作成</NuxtLink>
      <NuxtLink to="">アップロード</NuxtLink>
      <NuxtLink to="/about">このサイトについて</NuxtLink>
      <NuxtLink
        to="https://iyqzbugtwfgzyugaybuxxa.on.drv.tw/Indorde%20top/InT.html"
        >Inforde</NuxtLink
      >
    </div>
  </div>
  <div id="body">
    <slot />
  </div>
</template>

<style>
#body {
  margin-top: 100px;
}
#header {
  top: 0px;
  background-color: #d1ffdd;
  position: fixed;
  width: 100%;
  z-index: 100;
}
#titleImg {
  width: 30px;
  height: 30px;
  margin: 0 20px;
  margin-right: 10px;
}
#appTitle {
  font-size: 25px;
}
#appTitle a {
  color: black;
  text-decoration: none;
}
#header {
  display: flex;
  align-items: center;
}
#linkArea {
  display: flex;
  gap: 20px;
  margin-right: 50px;
  margin-left: auto;
}
#linkArea a {
  color: black;
  text-decoration: none;
}
</style>
