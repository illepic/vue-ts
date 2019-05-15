<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="text-center my-5">
          <App />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import App from './App';

export default {
  name: 'Wrapper',
  components: {
    App,
  },
};
</script>
