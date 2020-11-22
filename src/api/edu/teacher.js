import request from '@/utils/request'

const api_name = '/eduservice/teacher'

export default {

  getPageList(current, size, searchObj) {
    return request({
      url: `${api_name}/pageTeacherByCondition?current=${current}&size=${size}`,
      method: 'get',
      params: searchObj
    })
  },
  deleteById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'delete'
    })
  },
  addTeacher(teacher) {
    return request({
      url: `${api_name}`,
      method: 'post',
      data:teacher
    })
  },
  updateTeacher(teacher) {
    return request({
      url: `${api_name}`,
      method: 'put',
      data:teacher
    })
  },
  getTeacherInfo(id){
    return request({
      url: `${api_name}/${id}`,
      method: 'get',
    })
  }
}
