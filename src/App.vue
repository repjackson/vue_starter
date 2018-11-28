/* eslint-disable */ 

<template lang="pug">
  v-app(dark)
    v-navigation-drawer(app fixed :clipped='$vuetify.breakpoint.smAndUp' v-model='drawer', :mini-variant.sync='mini')
      v-list(dense).mt-0.pt-0
        v-divider.mt-0(dark)
        v-list-tile(to='/' @click.stop='mini = !mini').grey--text.text--darken-1
          v-list-tile-action#home
            v-icon#home_icon.grey--text fa-home
          v-list-tile-content
            v-list-tile-title.grey--text.text--darken-1 Home
          v-icon(icon v-if='!mini') chevron_left
        v-divider.mt-0(dark)
        template(v-for='(item, i) in items')
          v-list-group(v-if='item.children' v-model='item.model' :key='item.text' :prepend-icon='item.pic')
            v-list-tile(slot='activator' ripple)
              v-list-tile-content
                v-list-tile-title.grey--text {{ item.text }}
            v-list-tile(v-for='(child, i) in item.children' :key='i' :to='{path: child.link}')
              v-list-tile-content
                v-list-tile-title.blue-grey--text {{ child.text }}
          v-list-tile(v-else :key='item.text' :to='{path: item.link}')
            v-list-tile-action(v-if='item.pic')
              v-icon {{ item.pic }}
            v-list-tile-content
              v-list-tile-title.grey--text
                | {{ item.text }}

    v-toolbar#main-toolbar(app fixed clipped-left dense dark)
      v-toolbar-side-icon(@click.stop='drawer = !drawer')
      v-toolbar-title#title_bar

    v-content
      router-view

    v-footer(app fixed dark)
      v-spacer
      span {{ new Date().getFullYear() }}
      v-spacer
</template>

<script>
// import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    drawer:true
  }),
  props: {
    source: String
  }
}
</script>
