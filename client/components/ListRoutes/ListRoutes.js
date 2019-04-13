import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {API_URL, API_KEY} from "../../constants/constants";
import RouteManager from "../../services/manager"

const RoutesContainer = styled.div`
   
`;

class ListRoutes extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            routes: []
        }

    }

    componentDidMount() {

        RouteManager.get(API_URL,(data) => {
            if(data){
                console.log("data", data.routes);
                const routes = data.routes || []
                this.setState({
                    routes
                })
            }
        })
    }

    render() {
        return(
            <RoutesContainer>

            </RoutesContainer>
        )
    }
}


export default ListRoutes;

ListRoutes.propTypes = {

}