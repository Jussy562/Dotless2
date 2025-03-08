import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
Button.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

function Button({title, path}) {
    
  return (
    <Link to={path}>
      <a  className='w-full md:w-auto bg-blue-400 hover:bg-blue-300
      py-3 px-6 rounded-lg text-white text-center text-s md:text-xl font-bold transition:ease-in'>
          {title}
      </a>
    </Link>
  )
}

export default Button;