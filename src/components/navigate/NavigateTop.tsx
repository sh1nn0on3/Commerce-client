import { Link } from 'react-router-dom'

interface INavigateTopProps {
  path: String | any
  name: String
}

const NavigateTop = ({ path, name }: INavigateTopProps) => {
  return (
    <>
      <Link to={path}>
        <span className='text-white text-[12px] transition-all hover:text-secondary'>{name}</span>
      </Link>
    </>
  )
}

export default NavigateTop
