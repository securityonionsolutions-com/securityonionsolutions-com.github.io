import { reactive } from 'vue'

export const sos = reactive({
  showModal: false,
  modalType: '',
  imageName: '',
  imageType: '',
  contactText: '',
  domainDetailText: '',
  domainName: '',
  domainTestPercent: '',
  eventSource: '',
  courseDetailText: '',
  courseName: '',
  registerText: '',
  
  showContactModal: (event) => {
    sos.contactText = event.text
    sos.eventSource = event.source
    if (window.innerWidth >= 640 || window.innerHeight >= 800) {
      sos.modalType = 'form'
      sos.showModal = true
    } else {
      const route = useRouter();

      route.push({
        name: 'contact_us',
        query: {
          event_source: sos.eventSource,
          text: window.btoa(sos.contactText)
        }
      })
    }
  },
  showDomainDetails (event) {
    sos.domainDetailText = event.domainDetailText
    sos.domainName = event.domainName
    sos.domainTestPercent = event.domainTestPercent
    if (window.innerWidth >= 350 || window.innerHeight >= 650) {
      sos.modalType = 'domainDetails'
      sos.showModal = true
    }    
  },
  showCourseDetails: (event) => {
    sos.courseDetailText = event.courseDetailText
    sos.courseName = event.courseName
    sos.registerText = event.registerText
    if (window.innerWidth >= 350 || window.innerHeight >= 650) {
      sos.modalType = 'courseDetails'
      sos.showModal = true
    }
  },    
  showImageZoom (event) {
    sos.imageName = event.imageName
    sos.imageType = event.imageType
    if (window.innerWidth >= 640 || window.innerHeight >= 800) {
      sos.modalType = 'image'
      sos.showModal = true
    } else {
      let fileName
      let folder

      if (event.imageType === 'appliance') {
        fileName = event.imageName.replace('-thumb', '')
        folder = 'appliances'
      } else if (sos.imageType === 'course') {
        fileName = event.imageName.replace('-thumb', '')
        folder = 'course'
      } else if (sos.imageType === 'fullsize') {
        fileName = event.imageName.replace('-thumb', '')
        folder = 'graphics'
      } else if (sos.imageType === 'screenshot') {
        fileName = event.imageName
        folder = 'graphics'
      } else {
        fileName = event.imageName
        folder = 'graphics'
      }

      window.location.href = `/img/${folder}/${fileName}`
    }
  },
})