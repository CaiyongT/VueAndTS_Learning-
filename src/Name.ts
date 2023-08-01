import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      names: 'Vue3 + TS + Vite',
    };
  },
  methods: {
    changeName(name: string) {
      this.names = name;
    },
  },
});
