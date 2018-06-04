<template>
    <v-container fluid >

      <v-layout row wrap>
        <v-flex xs12 >

          <v-card-media :src="logopic"
          height="200px"
          alt="main picture">
          </v-card-media>

          <header
            :title="title"
            :subtitle="subtitle"
            :tags="tags">
          </header>

        <!-- Galleria View -->

        <!-- Video View ? -->

        <!-- DataViz View ? -->

        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import Header from './views/Header';
import logopic from '../assets/logo.png';

export default {
  props: {
    id: String,
    title: String,
    subtitle: String,
    year: String,
    tags: Array, 
  },
  data: () => ({
    logopic,
  }),
  methods: {
    cardClicked: function cardClicked(project) {
      alert('clicked ' + project.title);
    },
  },
  components: {
    Header,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
