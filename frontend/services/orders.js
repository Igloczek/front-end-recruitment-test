import axiosInstance from './_instance'
import routes from './_routes'

export default {
  setOrder (data) {
    return axiosInstance.post(routes.setOrder, data)
  },
}
