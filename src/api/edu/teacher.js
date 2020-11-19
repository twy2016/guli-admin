import request from '@/utils/request'

const api_name = '/eduservice/teacher'

export default {

  getPageList(current, size, searchObj) {
    return request({
      url: `${api_name}/pageTeacherByCondition?current=${current}&size=${size}`,
      method: 'get',
      params: searchObj
    })
  }
}
