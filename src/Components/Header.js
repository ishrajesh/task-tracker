import PropTypes from 'prop-types'
import Button from "./Button"

const Header = ({title,onAdd}) => {
  return (
    <div>
        <h1 className="header">{title}</h1>
        <Button text="Add" color="green" onClick={onAdd} />
    </div>
  )
}

Header.defaultProps = {
    title:'No Title Found',  
}

Header.propTypes = {
    title: PropTypes.string,  
}

export default Header