<template>
  <v-container>

    <v-layout>
      <v-flex xs4 v-for="project in projects" :key="project.title">
        <project-card :title="project.title"
        :year="project.year" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ProjectCard from './views/cards/ProjectCard';

export default {
  name: 'HelloWorld',
  data: () => ({
    projects:[
      {title: 'Portfolio Redesign', tags: [{id: 0, name: 'design'}, {id: 1, name: 'programming'}], year: '2018'},
    ],
  }),
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
