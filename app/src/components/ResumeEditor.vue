<template>
  <div class="resumeEditor" :class="{htmlMode:enableHtml}" ref="container">
    <div v-if="showRose">
      <div v-if="enableHtml" v-html="result" id="names"></div>
      <pre v-else>{{result}}</pre>
    </div>
  </div>
</template>

<script>
import marked from "marked";
export default {
  data() {
    return {
      showRose: true
    };
  },
  props: ["markdown", "enableHtml"],
  name: "ResumeEditor",
  computed: {
    result: function() {
      this.$nextTick(() => {
        let names = document.getElementById(`names`).firstChild;
        if (names && this.enableHtml) {
          names.onclick = () => {
            alert("哈哈哈，恭喜你触发了一个彩蛋");
            document.getElementById("app").style.display = "none";
            document.getElementById("rose").style.display = "block";
          };
        }
      });
      return this.enableHtml ? marked(this.markdown) : this.markdown;
    }
  },
  methods: {
    goBottom: function() {
      this.$refs.container.scrollTop = 100000;
    }
  },
  updated() {}
};
</script>

<style scoped>
.htmlMode {
  animation: flip 2s;
}

@keyframes flip {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>