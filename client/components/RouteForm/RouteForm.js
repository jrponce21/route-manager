import React from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import "react-datepicker/dist/react-datepicker.css";

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 10px;
  
  input {
      padding: 10px;
      border: thin solid black;
      border-radius: 3px;
      outline: none;
  }
`;

const Form = styled.form`
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100%;
`;

class RouteForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            departureDate: null,
            arrivalDate: null
        }
        this.IdInput = React.createRef();
        this.OriginInput = React.createRef();
        this.DestinationInput = React.createRef();
        this.CompanyInput = React.createRef();
    }

    handleDepartureChange = (date) => {
        this.setState({
            departureDate: date
        })
    }

    handleArrivalChange = (date) => {
        this.setState({
            arrivalDate: date
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("in submit")

        const arrival = this.state.arrivalDate.toLocaleString().split(' ');
        const departure = this.state.departureDate.toLocaleString().split(' ');

        const route = {
            id: this.IdInput.current.value,
            origin_id: this.OriginInput.current.value,
            destination_id: this.DestinationInput.current.value,
            company_name: this.CompanyInput.current.value,
            arrival_time: arrival[0],
            departure_time: departure[0]
        }

        this.props.onSubmit && this.props.onSubmit(route);
        // this.IdInput.current.value, this.OriginInput.current.value, this.DestinationInput.current.value, this.CompanyInput.current.value
    }

    render() {
        return (
            <div style={{width: '50%', paddingRight: "10px"}}>
                <Form onSubmit={this.handleSubmit}>
                    <h1>Add new Route</h1>
                    <div>
                    <Row>
                        <input
                            required={true}
                            placeholder={"id"}
                            ref={this.IdInput}
                        />
                        <input
                            style={{marginLeft: "20px"}}
                            required={true}
                            placeholder={"Origin Id"}
                            ref={this.OriginInput}
                        />
                        <input
                            style={{marginLeft: "20px"}}
                            required={true}
                            placeholder={"Destination Id"}
                            ref={this.DestinationInput}
                        />
                    </Row>
                    <Row style={{marginTop: "40px"}}>
                        <DatePicker
                            required={true}
                            selected={this.state.departureDate}
                            placeholderText={"Departure Date"}
                            onChange={this.handleDepartureChange}
                        />
                        <div style={{marginLeft: "20px"}}>
                            <DatePicker
                                required={true}
                                selected={this.state.arrivalDate}
                                placeholderText={"Arrival Date"}
                                onChange={this.handleArrivalChange}
                            />
                        </div>
                        <input
                            style={{marginLeft: "20px"}}
                            required={true}
                            placeholder={"Company Name"}
                            ref={this.CompanyInput}
                        />
                    </Row>
                    </div>
                    <button type={"submit"} role={"button"}>Add Route</button>
                </Form>
            </div>
        );
    }
}

export default RouteForm;

RouteForm.propTypes = {
    onSubmit: PropTypes.func
}