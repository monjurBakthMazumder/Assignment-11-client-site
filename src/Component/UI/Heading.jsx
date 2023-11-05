import PropTypes from 'prop-types';

const Heading = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

Heading.propTypes = {
    children: PropTypes.node,
};

export default Heading;