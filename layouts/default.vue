<template>
  <div id="header">
    <h1 id="appTitle">席替え革命</h1>
    <div id="linkArea">
      <a href="">作成</a>
      <a href="">アップロード</a>
      <a href="">このサイトについて</a>
      <a href="https://iyqzbugtwfgzyugaybuxxa.on.drv.tw/Indorde%20top/InT.html"
        >Inforde</a
      >
    </div>
  </div>
  <slot />
</template>

<style>
* {
  font-family: '游ゴシック体', 'YuGothic', '游ゴシック', 'Yu Gothic',
    'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'メイリオ', 'Meiryo',
    sans-serif;
}
#appTitle {
  font-size: 25px;
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
