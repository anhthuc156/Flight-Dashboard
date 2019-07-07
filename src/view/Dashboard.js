import React from 'react';
import { connect } from 'react-redux';
import ActionCreator from '../actions/ActionCreators';


class Dashboard extends React.Component {
    
    componentDidMount() {
        console.log(this.props);
        const { dispatch } = this.props;
        dispatch(ActionCreator.fetchUsers());
        dispatch(ActionCreator.fetchDeparture());
        dispatch(ActionCreator.fetchFlight());
        dispatch(ActionCreator.fetchForecast());
    }
    
    
    // handleFetchUser= () => {
    //     const { dispatch } = this.props;
    //     dispatch(ActionCreator.fetchUsers());
    // };

    // handleFetchFlight = () => {
    //     const { dispatch } = this.props;
    //     dispatch(ActionCreator.fetchFlight());
    // }

    // handleFetchDeparture = () => {
    //     const { dispatch } = this.props;
    //     dispatch(ActionCreator.fetchDeparture());
    // }

    // handleFetchForecast = () => {
    //     const { dispatch } = this.props;
    //     dispatch(ActionCreator.fetchForecast());
    // }
    
    render() {
        const { user, departure, flight, forecast } = this.props;
        return (
            
            <>
                <div>Traveller: {user.email}</div>
                <div>FlightID: {departure.flightID}</div>
                <div>State: {flight.state}</div>
                <div>Weather: {forecast.forecast}</div>
            </>
        )
    }
}

const mapStateToProps = ({ user, departure, flight, forecast }) => {
    return { user, departure, flight, forecast }
}

export default connect(mapStateToProps)(Dashboard);