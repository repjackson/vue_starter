<template lang="pug">
    v-container(style='max-width: 500px')
      v-text-field(v-model='task' label='What are you working on?' solo='' @keydown.enter='create')
        v-fade-transition(slot='append')
          v-icon(v-if='task' @click='create')
            | add_circle
      v-card        
        h2.display-1.success--text.pl-3
          | Tasks:&nbsp;
          v-fade-transition(leave-absolute='')
            span(:key='`tasks-${tasks.length}`')
              | {{ tasks.length }}
        v-divider.mt-3
        v-layout(my-1='' align-center='')
          strong.mx-3.info--text.text--darken-3
            | Remaining: {{ remainingTasks }}
          v-divider(vertical='')
          strong.mx-3.black--text
            | Completed: {{ completedTasks }}
          v-spacer
          v-progress-circular.mr-2(:value='progress')
        v-divider.mb-3
      v-card(v-if='tasks.length > 0')
        v-slide-y-transition.py-0(group='' tag='v-list')
          template(v-for='(task, i) in tasks')
            v-divider(v-if='i !== 0' :key='`${i}-divider`')
            v-list-tile(:key='`${i}-${task.text}`')
              v-list-tile-action
                v-checkbox(v-model='task.done' color='info darken-3')
                  .ml-3(slot='label' :class="task.done && 'grey--text' || 'text--primary'" v-text='task.text')
              v-spacer
              v-scroll-x-transition
                v-icon(v-if='task.done' color='success')
                  | check
</template>

<script>
  export default {
    data: () => ({
      tasks: [
        {
          done: false,
          text: 'Foobar'
        },
        {
          done: false,
          text: 'Fizzbuzz'
        }
      ],
      task: null
    }),

    computed: {
      completedTasks () {
        return this.tasks.filter(task => task.done).length
      },
      progress () {
        return this.completedTasks / this.tasks.length * 100
      },
      remainingTasks () {
        return this.tasks.length - this.completedTasks
      }
    },

    methods: {
      create () {
        this.tasks.push({
          done: false,
          text: this.task
        })

        this.task = null
      }
    }
  }
</script>s