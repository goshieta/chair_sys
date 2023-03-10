<template>
  <div id="header">
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
  <slot />
</template>

<style>
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
