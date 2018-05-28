<template>
  <v-container fluid >

    <v-layout row wrap>
      <v-flex xs12 >
        <v-card
          dark
          @click.native="cardClick"
          style="background-color:rgba(0, 0, 0, 0);"
          >
          <v-card-title>
            {{ title }}
          </v-card-title>
        </v-card>

        <!-- Galleria View -->

        <!-- Video View ? -->

        <!-- DataViz View ? -->

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ProjectCard from './views/cards/ProjectCard';
import TagChip from './views/cards/TagChip';

export default {
  props: {
    id: String,
    title: String,
    subtitle: String,
    year: String,
    tags: Array, 
  },
  methods: {
    cardClicked: function cardClicked(project) {
      alert('clicked ' + project.title);
    },
  },
  components: {
    TagChip,
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
