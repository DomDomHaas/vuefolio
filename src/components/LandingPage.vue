<template>
  <v-container fluid grid-list-xs>

    <v-layout row wrap>
      <v-flex px-3 py-2 xs12 sm3 v-for="project in projects" :key="project.title">
        <project-card
                      :title="project.title"
                      :year="project.year"
                      :tags="project.tags"
                      :cardClick="cardClicked"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ProjectCard from './views/cards/ProjectCard';

export default {
  methods: {
    cardClicked: function cardClicked(project) {
      alert('clicked ' + project.title);
    },
  },
  data: () => ({
    projects:[
      {title: 'project 12', tags: [{id: '0', name: 'design'}, {id: '1', name: 'programming'}], year: '2018'},
      {title: 'project 2', tags: [{id: '0', name: 'design'}, ], year: '2018'},
      {title: 'project 3', tags: [{id: '1', name: 'programming'}], year: '2018'},
      {title: 'project 41', tags: [{id: '0', name: 'design'}, {id: '1', name: 'programming'}, {id: '2', name: 'drawing'}, {id: '2', name: 'animation'}], year: '2018'},
      {title: 'project 34535', tags: [{id: '0', name: 'design'}, {id: '1', name: 'programming'}], year: '2018'},
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
