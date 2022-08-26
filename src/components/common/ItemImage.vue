<template>
  <img :src="$lib.getItemImage(item)" style="max-width: 250px;">
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>
