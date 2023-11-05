import PropTypes from 'prop-types';

const Heading = ({children}) => {
    return (
        <h1 className='text-3xl sm:text-4xl lg:text-5xl text-center font-bold'>
            {children}
        </h1>
    );
};

Heading.propTypes = {
    children: PropTypes.node,
};

export default Heading;