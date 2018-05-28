<template>

  <v-card
    ripple
    hover
    dark
    @click.native="cardClick"
    style="background-color:rgba(0, 0, 0, 0);"
    >

    <v-card-media
      class="imagezoom"
      height="250px"
      v-bind:style="'background-image: url(' + this.noisyImg + ') !important; left: 16px;'"
      >      
      <v-container fill-height>
        <v-layout row wrap>
          <v-flex offset-xs10 xs2 offset-sm9 sm2 >
            <v-btn icon v-on:click.stop="show = !show">
              <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
            </v-btn>
          </v-flex>

      <!--img :src="noisyImg" /-->

          <v-layout row wrap>
            <v-flex xs4 v-for="tag in tags.slice(0,3)" :key="tag.id">
              <tag-chip :id="tag.id"
                        :name="tag.name"
                        :closeable="tag.closeable" />
            </v-flex>

            <v-flex xs2 v-if="maxTagsReached">
              <tag-chip :name="'...'" />
              </v-flex>
            
          </v-layout>
        </v-layout>
      </v-container>

    </v-card-media>

    <div class="card__title amber darken-4 ribbon_back" style="width: 105.25%; position: relative; left: -5.25%">
      <h3 class="headline mb-0">{{ title }}</h3>
      <div>{{ subtitle }}</div>
    </div>

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
    id: String,
    title: String,
    subtitle: String,
    year: String,
    tags: Array, 
  },
  components: {
    TagChip,
  },
  methods: {
    cardClick: function cardClick() {
      this.$emit('cardClick', this.id);
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
    noisyImg: noisyImg,
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

  .ribbon_back .headline::before {
    border-top-color: transparent !important;
    border-right-color: #B71C1C !important;
    border-bottom-color: #B71C1C !important;
    border-left-color: transparent !important;
  }

  .ribbon_back .headline::before{
    content: ' ';
    position: absolute;
    left: 0;
    top: -16px;
    width: 0;
    border: 8px solid;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  .ribbon_back .headline::before{
    top: auto;
    bottom: 64px;
  }



</style>
