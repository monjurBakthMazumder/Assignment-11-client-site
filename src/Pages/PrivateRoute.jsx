import PropTypes from 'prop-types';
import UseAuth from '../Hock/UseAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Component/Loading/Loading';

const PrivateRoute = ({children}) => {
    const {user, isLoading} = UseAuth()
    const loc = useLocation()
    console.log(loc);

    if(isLoading){
        return <Loading/>
    }

    if(!user){
        return <Navigate to={'/sing-in'} />
    }
    return children
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;