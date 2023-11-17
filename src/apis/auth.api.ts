import http from '~/utils/http'

interface LoginData {
  email: string
  password: string
}

interface RegisterData {
  name: string
  email: string
  mobile: string
  password: string
}
interface Ihttp {
  msg: string
  success: boolean
  data?: any
}

const getLogin = (data: LoginData) => http.post<Ihttp>('auth/login', data)

const getRegister = (data: RegisterData) => http.post('auth/register', data)

export { getLogin, getRegister }
