<template>
  <div class="bg-red-50 h-full">
    <h1 data-testid="title" class="text-5xl font-bold text-center py-5 text-green-50 mb-10">
      Vue CLI (vue3) WindiCSS Module
      <span>test</span>
    </h1>
    <img data-testid="smallImg" :src="require('./assets/image/small.svg')" alt="small svg" class="w-20 absolute left-1/2 top-45 z-20">
    <img data-testid="bigImg" :src="require('./assets/image/big.jpg')" alt="big jpg" class="w-120 h-120 transform transition-transform rounded-full mx-auto hover:(rotate-45)">
    <div class="prose mx-auto py-10">
      <h3>Prose test</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet cupiditate distinctio eveniet, illum inventore ipsum itaque molestiae molestias neque nobis porro quam quo recusandae reiciendis rerum saepe totam ut!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur debitis, excepturi fugiat id, illo inventore iure nam, nulla quae quaerat quisquam repellendus voluptates. Asperiores ducimus explicabo molestiae natus, nulla vitae.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta eos et eum eveniet exercitationem in iste itaque nam necessitatibus nemo porro, quam quo soluta ullam velit voluptatibus. Tempore, vitae!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dicta mollitia reiciendis soluta! A aliquam aliquid aperiam, assumenda, culpa esse, facilis iste maxime nam non provident sint? Ad, debitis soluta.</p>
    </div>
  </div>
</template>

<style scoped>
h1 {
  @apply bg-blue-800;
}
span {
  @apply text-green-400;
}
</style>
