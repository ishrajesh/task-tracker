import PropTypes from 'prop-types'
import Button from "./Button"

const Header = ({title,onAdd,showAddTask}) => {
  return (
    <div>
        <h1 className="header">{title}</h1>
        <Button text={showAddTask? "Close": "Add"} color={showAddTask? "red": "green"} onClick={onAdd} />
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