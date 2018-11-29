/* eslint-disable */ 

<template lang="pug">
  v-app(light)
    v-navigation-drawer(app extended dark class="primary darken-3" :clipped='$vuetify.breakpoint.smAndUp' v-model='drawer', :mini-variant.sync='mini')
      v-list(dense).mt-0.pt-0
        v-divider.mt-0(dark)
        v-list-tile(to='/' @click.stop='mini = !mini').white--text.text--darken-1
          v-list-tile-action#home
            v-icon#home_icon.white--text home
          v-list-tile-content
            v-list-tile-title.white--text.text--darken-1 Home
          v-icon(icon v-if='!mini') chevron_left
        v-divider.mt-0(dark)
        template(v-for='(item, i) in items')
          v-list-group(v-if='item.children' v-model='item.model' :key='item.text' :prepend-icon='item.pic')
            v-list-tile(slot='activator')
              v-list-tile-content
                v-list-tile-title.white--text {{ item.text }}
            v-list-tile(v-for='(child, i) in item.children' :key='i' :to='{path: child.link}')
              v-list-tile-content
                v-list-tile-title.blue-white--text {{ child.text }}
          v-list-tile(v-else :key='item.text' :to='{path: item.link}')
            v-list-tile-action(v-if='item.pic')
              v-icon {{ item.pic }}
            v-list-tile-content
              v-list-tile-title.white--text
                | {{ item.text }}

    v-toolbar#main-toolbar(app fixed clipped-left dark class="primary darken-3")
      v-toolbar-side-icon(@click.stop='drawer = !drawer')
        v-icon menu
      v-img(src="https://jan-pro.com/wp-content/themes/underboot/img/jan-pro-white.svg" aspect-ratio="1" contain @click.stop='drawer = !drawer')
      v-btn(icon)
        v-icon calendar_today
      v-btn(icon)
        v-icon people
      v-btn(icon)
        v-icon attach_money
      v-btn(icon)
        v-icon list
      v-btn(icon)
        v-icon shopping_cart
      v-btn(icon)
        v-icon headset
      v-btn(icon)
        v-icon mail
      v-btn(icon)
        v-icon notifications
      v-spacer
    
      v-btn(icon)
        v-icon search
      v-btn(icon)
        v-icon apps
      v-toolbar-side-icon(@click.stop='drawer_right = !drawer_right')
        v-icon menu

    v-navigation-drawer(temporary v-model="left" fixed)
    v-navigation-drawer(temporary v-model="right" right clipped fixed)
    v-navigation-drawer(fixed v-model="drawer_right" right clipped app)
      v-list(dense)
        v-list-tile(@click.stop="right = !right")
          v-list-tile-action
            v-icon exit_to_app
          v-list-tile-content
            v-list-tile-title Open Temporary Drawer
  
    v-container(fluid grid-list-lg)
      v-layout(row wrap)
        v-content
          v-flex
            router-view
            v-btn(absolute='' dark='' fab='' top='' right='' color='pink')
              v-icon add
            v-speed-dial(v-model='fab' top=false bottom=true right=true left=false direction='top' open-on-hover=false transition='scale')
              v-btn(slot='activator' v-model='fab' color='blue darken-2' dark='' fab='')
                v-icon account_circle
                v-icon close
              v-btn(fab='' dark='' small='' color='green')
                v-icon edit
              v-btn(fab='' dark='' small='' color='indigo')
                v-icon add
              v-btn(fab='' dark='' small='' color='red')
                v-icon delete
          
    vue-accordion
      vue-accordion-item(title='Item 1' :initopen='true')
        | Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        | labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
        | et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        | Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        | labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
        | et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      vue-accordion-item(title='Item 2')
        | et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        | Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        | labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
        | et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

    v-bottom-nav(:active.sync='bottomNav' :color='color' :value='true' absolute='' shift='')
      v-btn(dark='')
        span Video
        v-icon ondemand_video
      v-btn(dark='')
        span Music
        v-icon music_note
      v-btn(dark='')
        span Book
        v-icon book
      v-btn(dark='')
        span Image
        v-icon image


    <!--v-footer(app fixed dark class="primary darken-3")-->
    <!--  v-spacer-->
    <!--  v-icon copyright -->
    <!--  | JAN-PRO, Franchising, LLC-->
    <!--  span {{ new Date().getFullYear() }}-->
    <!--  v-spacer-->
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    drawer: false,
    drawer_right: false,
    mini: false,
    direction: 'top',
    fab: false,
    fling: false,
    hover: false,
    tabs: null,
    bottom: true,
    left: false,
    right: false,
    bottomNav: 3,
    items: [
        {
          pic: 'supervised_user_circle',
          text: 'Human Resources',
          model: false,
          children: [
            { text: 'Guards', link: '/hr/guards' },
            { text: 'Guarantors', link: '/hr/guarantors' },
            { text: 'Leave Applications', link: '/hr/leave-applications' },
            { text: 'Offences', link: '/hr/offences' },
            { text: 'Bonuses', link: '/hr/bonuses' }
          ]
        },
        {
          pic: 'linear_scale',
          text: 'Operations',
          model: false,
          children: [
            { text: 'Clients', link: '/ops/clients' },
            { text: 'Client Sites', link: '/ops/sites' },
            { text: 'Client Contracts', link: '/ops/contracts' },
            { text: 'Deployments', link: '/ops/deployments' },
            { text: 'TimeSheets', link: '/ops/timesheets' },
            { text: 'Client Feedback', link: '/ops/client-feedback' }
          ]
        },
        {
          pic: 'attach_money',
          text: 'Finance',
          model: false,
          children: [
            { text: 'Client Payments', link: '/finance/payments' },
            { text: 'Guard Salaries', link: '/finance/salaries' },
            { text: 'Salary Sheet', link: '/finance/salary-sheet' }
          ]
        },
        {
          pic: 'show_chart',
          text: 'Reports',
          model: false,
          children: [
            { text: 'Broadsheet', link: '/reports/payments' },
            { text: 'Attendance', link: '/reports/attendance' },
            { text: 'Net Position', link: '/reports/net-position' },
            { text: 'Disciplinary', link: '/reports/disciplinary' },
            { text: 'Guards Deployed', link: '/reports/guards-deployed' },
            { text: 'Guards Traning', link: '/reports/guards-training' },
            { text: 'Leave Taken', link: '/reports/leave-taken' },
            { text: 'Guard Rankings', link: '/reports/ranking' }
          ]
        },
        {
          pic: 'shopping_cart',
          text: 'Store',
          model: false,
          children: [
            { text: 'Inventory', link: '/store/inventory' },
            { text: 'Outstanding Disbursments', link: '/store/outstanding-disbursments' }
          ]
        },
        {
          pic: 'settings',
          text: 'Administration',
          model: false,
          children: [
            { text: 'Users', link: '/admin/users' },
            { text: 'System Log', link: '/admin/systemlog' }
          ]
        },
        { pic: 'view_list', text: 'Todo', link: '/todo' },
        { pic: 'person', text: 'Profile', link: '/profile' },
        { pic: 'book', text: 'User Guide', link: '/guide' },
        { pic: 'power_settings_new', text: 'Sign Out', link: '/sign-out' }
      ]
  }),
  computed: {
    color () {
      switch (this.bottomNav) {
        case 0: return 'blue-grey'
        case 1: return 'teal'
        case 2: return 'brown'
        case 3: return 'indigo'
      }
    }
  },
  props: {
    source: String
  }
}
</script>
