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
  },
  getCoursePublishInfoById(id) {
    return request({
      url: `${api_name}/publish/${id}`,
      method: 'get'
    })
  },
  publishCourse(id) {
    return request({
      url: `${api_name}/publish/${id}`,
      method: 'put'
    })
  },
  getPageList(current, size, searchObj) {
    return request({
      url: `${api_name}/page?current=${current}&size=${size}`,
      method: 'get',
      params: searchObj
    })
  },
  removeById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'delete'
    })
  }
}
