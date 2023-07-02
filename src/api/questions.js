const APIS = {
  questionURL: () => {
    return 'https://script.google.com/macros/s/AKfycbxfirZYIPkO-qDQweyVJxGh_WvU6dMudsKTTaC4K5NLTX-HqFyxgXe_HV1NdsxSCu4s7Q/exec'
  },
  postResponse: () => {
    return 'https://script.google.com/macros/s/AKfycbxSoZ3CmsHhL65BiM-Bh3BwMbnP_m9q3ESTqfWOnTwKTY2YU83FL4RwG_1C7QPnc0g8/exec'
  },
}

function objectToUrlParams(obj) {
  var params = Object.keys(obj)
    .map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])
    })
    .join('&')

  return params
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
  postEvent: (data) => {
    return new Promise((resolve, reject) => {
      fetch(`${APIS.postResponse()}?${objectToUrlParams(data)}`)
        .then((res) => res.json())
        .then((data) => {
          resolve(data)
        })
        .catch((err) => {})
    })
  },
}
