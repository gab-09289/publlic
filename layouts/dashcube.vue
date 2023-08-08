<template>
  <div class="bg-slate-200 absolute top-0 left-0 w-full">
    <div class="flex flex-wrap">
      <Sidebar />
      <div class="w-full md:w-4/5 lg:w-4/5 h-[90px] block flex-wrap">
        <NavbarDashcube />
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/dashcube/sidebar'
import NavbarDashcube from '~/components/dashcube/navbar'

export default {
  name: 'DashcubeLayout',

  components: {
    Sidebar,
    NavbarDashcube
  }
}
</script>
