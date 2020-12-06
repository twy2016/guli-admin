import request from '@/utils/request'

const api_name = '/eduservice/course'

export default {
  saveCourseInfo(courseInfo) {
    return request({
      url: `${api_name}`,
      method: 'post',
      data: courseInfo
    })
  },
  updateCourseInfoById(courseInfo) {
    return request({
      url: `${api_name}`,
      method: 'put',
      data: courseInfo
    })
  },
  getCourseInfoById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'get'
    })
  }
}
