import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {API_URL, API_KEY} from "../../constants/constants";
import RouteManager from "../../services/manager"
import Route from "../Route/Route";

const RoutesContainer = styled.div`
    width: 50%;
    display: flex;
    flex-wrap: wrap;
`;

class ListRoutes extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            routes:  [
                {
                    "id": "[object Undefined]",
                    "origin_id": "78",
                    "destination_id": "80",
                    "departure_time": "2018-09-21",
                    "arrival_time": "2018-09-21",
                    "company_name": "Pac�fico"
                },
                {
                    "id": "613",
                    "origin_id": "Monterrey",
                    "destination_id": "Nuevo Laredo",
                    "departure_time": "16/01/2019",
                    "arrival_time": "29/01/2019",
                    "company_name": "Chihuahuense Select"
                },
                {
                    "id": "513",
                    "origin_id": "Iguala",
                    "destination_id": "Veracruz",
                    "departure_time": "12/01/2019",
                    "arrival_time": "22/01/2019",
                    "company_name": "Elite"
                },
                {
                    "id": "705",
                    "origin_id": "Hermosillo",
                    "destination_id": "Sinaloa",
                    "departure_time": "20/01/2019",
                    "arrival_time": "22/01/2019",
                    "company_name": "Rojo de los altos"
                },
                {
                    "id": "931",
                    "origin_id": "Hermosillo",
                    "destination_id": "Coahuila",
                    "departure_time": "16/01/2019",
                    "arrival_time": "29/01/2019",
                    "company_name": "Rojo de los altos"
                },
                {
                    "id": "967",
                    "origin_id": "Guadalajara",
                    "destination_id": "Sonora",
                    "departure_time": "12/01/2019",
                    "arrival_time": "22/01/2019",
                    "company_name": "Pac�fico"
                },
                {
                    "id": "389",
                    "origin_id": "Nogales",
                    "destination_id": "Nuevo Laredo",
                    "departure_time": "12/01/2019",
                    "arrival_time": "22/01/2019",
                    "company_name": "Pac�fico"
                }
            ] //Todo mocked values to work offline
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
                {
                    this.state.routes && this.state.routes.length > 0 && this.state.routes.map((item, index) =>
                        <Route
                            key={index}
                            id={item.id}
                            origin={item.origin_id}
                            companyName={item.company_name}
                            destination={item.destination_id}
                            departureDate={item.departure_time}
                            arrivalDate={item.arrival_time}
                            onClose={(id) => console.log("closing route with id", id)}
                        />
                    )
                }
            </RoutesContainer>
        )
    }
}


export default ListRoutes;

ListRoutes.propTypes = {

}