<template>
  <v-container fluid grid-list-xs grid-list-sm >

    <v-layout row wrap>
      <v-flex px-3 py-2 xs12 sm6 md3 v-for="project in projects" :key="project.title">
        <project-card
                      :id="project.id"
                      :title="project.title"
                      :subtitle="project.subtitle"
                      :year="project.year"
                      :tags="project.tags"
                      v-on:cardClick="cardClicked"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ProjectCard from './views/cards/ProjectCard';

export default {
  methods: {
    cardClicked: function cardClicked(projectid) {
      this.$router.push('/project/' + projectid);
    },
  },
  components: {
    ProjectCard,
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
