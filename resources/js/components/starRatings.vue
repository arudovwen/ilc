<template>
  <div class="star-rating">
    <label
      class="star-rating__star"
      v-for="(rating,idx) in ratings"
      :key="idx"
      :class="{'is-selected': ((value >= rating) && value != null), 'is-disabled': disabled}"
      v-on:click="set(rating)"
      v-on:mouseover="star_over(rating)"
      v-on:mouseout="star_out"
    >
      <input
        class="star-rating star-rating__checkbox"
        type="radio"
        :value="rating"
        v-model="value"
        :disabled="disabled"
      />★
    </label>
  </div>
</template>

<script>
export default {
 props: {
    'name': String,
    'value': null,
    'id': String,
    'disabled': Boolean,
    'required': Boolean
  },


  /*
   * Initial state of the component's data.
   */
  data: function () {
    return {
      temp_value: null,
      ratings: [1, 2, 3, 4, 5],
    
    };
  },

  methods: {
    /*
     * Behaviour of the stars on mouseover.
     */
    star_over(index) {
      if (!this.disabled) {
        this.temp_value = this.$props.value;
         this.$emit('handleRating', index)
      }
    },

    /*
     * Behaviour of the stars on mouseout.
     */
    star_out() {
      if (!this.disabled) {
        this.$emit('handleRating', this.temp_value)
      }
    },

    /*
     * Set the rating.
     */
    set(value) {
      if (!this.disabled) {
        this.temp_value = value;
        this.$emit('handleRating', value)
        
      }
    },
  },
};
</script>
<style scoped lang="scss">
%visually-hidden {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}

.star-rating {
  &__star {
    display: inline-block;
    padding: 3px;
    vertical-align: middle;
    line-height: 1;
    font-size: 1.1em;
    color: #ababab;
    transition: color 0.2s ease-out;

    &:hover {
      cursor: pointer;
    }

    &.is-selected {
      color: #ffd700;
    }

    &.is-disabled:hover {
      cursor: default;
    }
  }

  &__checkbox {
    @extend %visually-hidden;
  }
}
</style>