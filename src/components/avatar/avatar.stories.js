import avatar from "./avatar.vue";

export default {
  title: "avatar",
  components: { avatar }
};

export const defaultView = () => ({
  components: { avatar },
  template: `
    <avatar
      :avatarUrl='https://source.unsplash.com/300x300/?dog'
      :nickname="'Sam'"
    />
  `,
});

defaultView.story = {
  name: "Стандартный вид",
};
