<template>
  <div id="app">
    <vs-navbar
        color="#111111"
        text-white
        square
        center-collapsed
      >
        <template #left>
          <img
            @click="activeSidebar = !activeSidebar"
            src="./assets/deshik.png"
            style="height: 5vh;"
            alt="logi"
          />
        </template>
      </vs-navbar>

      <vs-sidebar
        absolute
        :open.sync="activeSidebar"
        background="dark"
      ></vs-sidebar>
    <router-view/>
    <footer>
      Developed by <a href="https://iresharma.me">iresharma</a>♥️
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

footer {
  position: absolute;
  bottom: 0;
  color: rgb(150, 150, 150);
}
</style>


<script>
export default {
  data() {
    return {
      activeSidebar: false,
    }
  }
}
</script>