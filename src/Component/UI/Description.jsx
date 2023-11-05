import PropTypes from 'prop-types';

const Description = ({children}) => {
    return (
        <p className='font-light text-center px-[5%] md:px-[10%] lg:px-[15%] my-5'>
            {children}     
        </p>
    );
};

Description.propTypes = {
    children : PropTypes.node,
};

export default Description;