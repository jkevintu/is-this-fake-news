import axios from 'axios'

const APIS = {
  questionURL: () => {
    return 'https://script.google.com/macros/s/AKfycbxfirZYIPkO-qDQweyVJxGh_WvU6dMudsKTTaC4K5NLTX-HqFyxgXe_HV1NdsxSCu4s7Q/exec'
  },
}

export default {
  getQuestions: () => {
    return new Promise((resolve, reject) => {
      fetch(APIS.questionURL())
        .then((res) => res.json())
        .then((data) => {
          resolve(data)
        })
        .catch((err) => {})
    })
  },
}
