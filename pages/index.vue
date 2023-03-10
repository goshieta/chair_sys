<template>
  <div id="topPage">
    <div id="startArea">
      <h2>席替えに革命を！</h2>
      <div id="revolutionButtonArea">
        <NuxtLink to="/project">新しく作成</NuxtLink>
        <NuxtLink to="">アップロード</NuxtLink>
      </div>
      <p>
        使い方が分かりませんか？<NuxtLink to="/about">使い方</NuxtLink>を見る
      </p>
    </div>
  </div>
</template>

<style>
#topPage {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: showAnimeTop 0.5s;
}
@keyframes showAnimeTop {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
#startArea > p {
  margin-top: 50px;
  display: block;
}
#topPage p a {
  color: #00d94f;
}
#startArea {
  text-align: center;
  width: fit-content;
}
#startArea h2 {
  font-size: 40px;
  margin: 100px 0;
}
#revolutionButtonArea {
  display: flex;
  gap: 10px;
  justify-content: center;
}
#revolutionButtonArea a {
  width: 150px;
  padding: 5px 0;
  border: solid 1px white;
  background-color: #03fc5e;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  color: black;
  text-decoration: none;
}
#revolutionButtonArea a:hover {
  outline: solid 1px #03fc5e;
}
</style>
