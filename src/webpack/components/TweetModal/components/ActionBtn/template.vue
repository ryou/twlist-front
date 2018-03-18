<template>
  <button class="m-actionBtn" @click="changeState">
    <i
      class="material-icons"
      :class="classObj"
    >{{ icon }}</i><br>{{ text }}
  </button>
</template>

<script>
const axios = require('axios');

const env = process.env;

export default {
  data() {
    return {
      isActive: null,
    };
  },
  props: ['activateUrl', 'deactivateUrl', 'icon', 'initialState', 'text', 'activeColor'],
  computed: {
    classObj() {
      const classArray = [];
      if (this.isActive) {
        classArray.push(`${this.activeColor}--text lighten-3`);
      }

      return classArray;
    },
  },
  created() {
    this.isActive = this.initialState;
  },
  methods: {
    changeState() {
      let url = env.apiBaseUrl;
      if (this.isActive) {
        url += this.deactivateUrl;
      } else {
        url += this.activateUrl;
      }
      this.isActive = !this.isActive;

      axios.post(url, {}, {
        withCredentials: true,
        headers: {
          // TODO: ajax/CORSでPOSTする場合この指定が必要だった
          // 理由を調べる
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
        .then((response) => {
          console.log(response.data);
        });
    },
  },
};
</script>
