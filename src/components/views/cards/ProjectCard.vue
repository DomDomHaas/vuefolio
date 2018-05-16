<template>

  <v-card
    ripple
    hover
    dark
    @click.native="cardClick"
    >

    <v-card-actions class="pa-0" style="height: 0px">
    </v-card-actions>

    <v-card-media
      class="imagezoom"
      height="350px"
      v-bind:style="'background-image: url(' + this.nosiyImg + ') !important;'"
      >      
      <v-container fill-height full-width grid-list-xs fluid>
        <v-layout row justify-end>
          <v-flex xs2 >
          <v-btn icon @click.native="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
          </v-btn>
          </v-flex>
        </v-layout>
      </v-container>

      <!--img :src="noisyImg" /-->

      <v-container v-if="tags">
        <v-layout row>
          <v-flex v-for="tag in tags" :key="tag.id">
            <tag-chip :id="tag.id"
                      :name="tag.name"
                      :closeable="tag.closeable" />
          </v-flex>

          <v-flex v-if="maxTagsReached">
            <tag-chip :name="'...'" />
          </v-flex>
          
        </v-layout>
      </v-container>

    </v-card-media>

    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ title }}</h3>
        <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
      </div>
    </v-card-title>

    
    <v-slide-y-transition>
      <v-card-text v-show="show">
        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
      </v-card-text>
    </v-slide-y-transition>

  </v-card>

</template>


<script>
import noisyImg from '@/assets/cards/noisy.png';
// import woodImg from '@/assets/cards/wood_background.jpg';
// import landImg from '@/assets/cards/landscape_background.jpg';
import TagChip from './TagChip';

// checkout possible transition animation
// https://codepen.io/balapa/pen/embYYB
// https://codepen.io/zavoloklom/pen/eNaEBM

// this one maybe for the guided content scrolling
// https://codepen.io/pgreg/pen/EDoFB

// Card design #2 probably only the header would be doable?
// https://codepen.io/marlenesco/pen/NqOozj

// Card opening animation
// https://codepen.io/luizotcarvalho/pen/yyQNRO

export default {
  props: {
    title: String,
    year: String,
    tags:[{
      id: String,
      name: String,
    }],
  },
  components: {
    TagChip,
  },
  methods: {
    cardClick: function cardClick() {
      this.$emit('clickedEvent', this.datasetname);
    },
  },
  computed:{
    maxTagsReached: function maxTagsReached() {
      return this.tags !== undefined && this.tags.length > 3;
    }
  },
  data: () => ({
    show: false,
    showDataText: 'SHOW DATA',
    noisyImg,
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .imagezoom,
  .imagezoom img {
    transition: all .2s;
  }

  .imagezoom img:hover,
  .imagezoom img:focus {
    transform: scale(1.2);
  }
</style>
