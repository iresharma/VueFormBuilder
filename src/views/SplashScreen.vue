<template>
    <div class="center grid">
        <vs-row align="center">
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
                <img src="https://vuesax.com/vuesax-dark-3.svg" alt="loadImage">
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
                <h1>Form builder</h1>
                <p>Focus on development while we handle the forms</p>
                <vs-button size="xl" ref="button" success flat @click="openLoadingButton">Get started <i class='bx bxs-paper-plane' ></i></vs-button>
            </vs-col>
        </vs-row>
    </div>
</template>

<style scoped>
img {
    height: 80vh;
}
h1 {
    font-size: 5em;
}
p {
    font-size: 1.5em;
} 
p {
    color: rgb(150, 150, 150);
}
</style>

<script>
export default {
    name: 'Splash',
    methods: {
        openLoadingButton() {
          console.log(this.$refs.button.$el)
          const loading = this.$vs.loading({
            target: this.$refs.button,
            scale: '0.5',
            background: 'success',
            opacity: 0.5,
            color: '#fff',
            type: 'circles'
          })
          setTimeout(() => {
            loading.close()
            this.$router.push('/builder')
          }, 3000)
        }
    }
}
</script>