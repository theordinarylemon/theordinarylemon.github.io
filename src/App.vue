<template>
  <div>
  <NavBar/>
  <main>
    <router-view/>
  </main>
 
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default ({
    methods:{
    handle(){
      console.log("clicked!")
},
 }, 
  name: 'App',

  components: {
    NavBar
  }

 

})
function handle(){
  console.log("clicked!")
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*, *::before, *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        main {
    padding-top: 90px;
}

        html {
            scroll-behavior: smooth;
            font-size: 16px;
        }

        body {
            font-family: var(--font-body);
            background-color: var(--light-beige);
            color: var(--drak-gray);
            line-height: 1.7;
            overflow-x: hidden; 
        }

        img {
            max-width: 100%;
            height: auto;
            display: block;
        }

        a {
            text-decoration: none;
            color: inherit;
            transition: var(--transition-smooth);
        }

        ul, ol {
            list-style: none;
        }

        button{
height: 30px;
width: 30px;
        }


 </style>
