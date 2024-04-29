<template>
  <div class="flex flex-col">
    <SectionHeader class="mb-8">
      Course List
    </SectionHeader>

    <table class="mx-auto table-auto rounded-md border-separate border border-blue-400 bg-blue mb-12">
      <thead>
        <tr class="bg-blue-400 text-left text-white">
          <th class="hidden md:table-cell px-2 truncate" style="min-width: 1.3em">
            <div>&nbsp;</div>
          </th>
          <th class="hidden md:table-cell text-center px-2 truncate" />
          <th class="hidden xl:table-cell text-center px-2 truncate">
            <div>&nbsp;</div>
            <div>Course Title</div>
          </th>
          <th class="hidden xl:table-cell text-center px-2 truncate">
            <div>&nbsp;</div>
            <div>Course Summary</div>
          </th>
          <th class="hidden md:table-cell text-center px-2 truncate">
            <div>Delivery</div>
            <div>Method</div>
          </th>
          <th class="hidden md:table-cell text-center px-2 truncate">
            <div>Course</div>
            <div>Length</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in course"
          :key="index"
          @click="sos.showCourseDetails({ courseDetailText: item.info, courseName: item.popup_name  })"
        >
          <td v-if="item['category'] == 'Beginner'" class="hidden md:table-cell border-t border-blue-400 text-white bg-blue-400 pl-1 pr-1 pt-2 truncate vert-header text-center" v-text="item['category']" />
          <td v-if="item['category'] == 'Intermediate'" class="hidden md:table-cell border-t border-blue-400 text-white bg-blue-400 pl-1 pr-1 pt-2 truncate vert-header text-center" v-text="item['category']" />
          <td v-if="item['category'] == 'Fundamentals'" class="hidden md:table-cell border-t border-blue-400 text-white bg-blue-400 pl-1 pr-1 pt-2 truncate vert-header text-center" v-text="item['category']" />
          <td v-if="item['category'] == 'Advanced'" class="hidden md:table-cell border-t border-blue-400 text-white bg-blue-400 pl-1 pr-1 pt-2 truncate vert-header text-center" v-text="item['category']" />
          <td class="hidden xl:table-cell border-t border-blue-400 pl-2 truncate">
            <img :src="thumbnail(item)">
          </td>
          <td class="text-right border-t border-blue-400 px-2 truncate">
            <div class="flex flex-row">
              <span class="pt-1 pl-1 pr-1">{{ item['name'] }}</span>
              <span><icon name="fa6-solid:circle-info" class="mx-2 mt-1 text-base"/></span>

              <a v-if="item.registration_link":href="item.registration_link" @click.stop="">
                 <icon name="fa-solid:external-link-alt" class="mx-2 mt-1 text-base"/>
              </a>
              <a v-else @click.stop="sos.showContactModal({ text: 'Please contact me to discuss an Instructor-Led ' + item.name + ' course.' })">
                 <icon name="fa-solid:external-link-alt" class="mx-2 mt-1 text-base"/>
              </a>
            </div>
          </td>
          <td class="hidden xl:table-cell border-t border-blue-400 px-2 truncate">
            <div v-for="(summary, summaryIdx) in item.summary" :key="summaryIdx" v-text="summary" />
          </td>
          <td class="hidden md:table-cell border-t border-blue-400 px-2 truncate text-center" v-text="item['Delivery']" />
          <td class="hidden md:table-cell border-t border-blue-400 px-2 truncate text-center" v-text="item['time']" />
        </tr>
      </tbody>
    </table>
    <Footnotes />
  </div>
</template>

<script>
import { sos } from '~/lib/sos.js'

import Footnotes from '~/components/courses/Footnotes'
import course from '~/content/courses.json'

export default {
  components: {
    Footnotes,
  },
  data: () => ({
    sos,
    course: course.course,
  }),
  methods: {
    thumbnail (course) {
      return `/img/course/${course.img_course_title}`;
    },
  }
}
</script>

<style>
body {
  background-color: rgba(238, 238, 238, 0.60);
}
table {
  border-collapse: separate;
  border-spacing: 0;
}
.vert-header {
  writing-mode: vertical-lr;
  text-orientation: mixed;
}
</style>
