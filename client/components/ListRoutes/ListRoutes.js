import React from "react";
import styled from "styled-components";
import Route from "../Route/Route";
import PropTypes from "prop-types";

const RoutesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

`;

const Container = styled.div`
      border-left: thin solid #282C2E;
      padding-left: 10px;
      width: 50%;
`

const ListRoutes = function (props) {

        return(
            <Container>
                <h1>List of routes</h1>
                <RoutesContainer>
                    {
                        props.routes && props.routes.length > 0 && props.routes.map((item, index) =>
                            <Route
                                key={index}
                                id={item.id}
                                origin={item.origin_id}
                                companyName={item.company_name}
                                destination={item.destination_id}
                                departureDate={item.departure_time}
                                arrivalDate={item.arrival_time}
                                onClose={(id) => props.onDeleteRoute && props.onDeleteRoute(id)}
                            />
                        )
                    }
                </RoutesContainer>
            </Container>
        )
}


export default ListRoutes;

ListRoutes.propTypes = {
        routes: PropTypes.array,
        onDeleteRoute: PropTypes.func
}