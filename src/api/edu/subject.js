import request from '@/utils/request'

const api_name = '/eduservice/subject'

export default {
  getSubjectTreeList() {
    return request({
      url: `${api_name}/tree`,
      method: 'get'
    })
  }
}
