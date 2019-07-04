import React, { PropTypes } from 'react';

const Dashboard = ({title, user, data= {}}) => {
    const { departure, flight, forecast } = data;
    const displayUserName = () => {
        return (!!user) ? user.email : null;
    }
    return (
        <div className="o-dashboard panel panel-default">
        <div className="panel-heading"><h4>{title}</h4></div>
        <div className="panel-body">
            <div className="user-name">
                <h5>Here is your itinerary:</h5>
                <span className="glyphicon glyphicon-user" aria-hidden="true"></span>&nbsp;
                {displayUserName() || <span className="loading"></span>}
            </div>
        </div>
        </div>
    )
};

Dashboard.propTypes = {
    user : PropTypes.object,
    data : PropTypes.object,
    title : PropTypes.string
  };
  
  export default Dashboard;