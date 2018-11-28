/* eslint-disable */ 

<template lang="pug">
  v-app(light)
    v-navigation-drawer(app fixed :clipped='$vuetify.breakpoint.smAndUp' v-model='drawer', :mini-variant.sync='mini' enable-resize-watcher dark class="primary darken-3")
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
            v-list-tile(slot='activator' ripple)
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

    v-toolbar#main-toolbar(app fixed clipped-left dense dark class="primary darken-3")
      v-toolbar-side-icon(@click.stop='drawer = !drawer')
        v-icon menu
      v-toolbar-title#title_bar
        | JAN-PRO

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
    drawer: false,
    mini: false,
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
  props: {
    source: String
  }
}
</script>
