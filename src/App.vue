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
    drawer:true,
    mini:false,
    items: [
        {
          pic: 'fa-id-card',
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
          pic: 'fa-balance-scale',
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
          pic: 'fa-usd',
          text: 'Finance',
          model: false,
          children: [
            { text: 'Client Payments', link: '/finance/payments' },
            { text: 'Guard Salaries', link: '/finance/salaries' },
            { text: 'Salary Sheet', link: '/finance/salary-sheet' }
          ]
        },
        {
          pic: 'fa-line-chart',
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
          pic: 'fa-shopping-cart',
          text: 'Store',
          model: false,
          children: [
            { text: 'Inventory', link: '/store/inventory' },
            { text: 'Outstanding Disbursments', link: '/store/outstanding-disbursments' }
          ]
        },
        {
          pic: 'fa-cog',
          text: 'Administration',
          model: false,
          children: [
            { text: 'Users', link: '/admin/users' },
            { text: 'System Log', link: '/admin/systemlog' }
          ]
        },
        { pic: 'fa-code-fork', text: 'Test', link: '/test' },
        { pic: 'fa-user', text: 'Profile', link: '/profile' },
        { pic: 'fa-book', text: 'User Guide', link: '/guide' }
      ]
    
  }),
  props: {
    source: String
  }
}
</script>
