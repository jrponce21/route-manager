import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MaterialIcon from "react-material-iconic-font";

const RouteContainer = styled.div`
    position: relative;
    border: thin solid #282C2E;
    border-radius: 5px;
    background: #FFFFFF;
    padding: 10px 20px;
    margin-top: 10px;
    margin-right: 10px;
    
    :hover{
      box-shadow: 0 0 10px 2px rgba(46,54,68,0.2);
    }
`;

const Locations = styled.div`
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
`;

const Dates = styled.div`
    font-size: 14px;
    margin-top: 5px;
`;

const Company = styled.div`
    margin-top: 5px;
`;

const CloseIcon = styled.span`
  position: absolute;
  right: -10px;
  top: -15px;
  padding: 2px 7px;
  background: #FFFFFF;
  border-radius: 30px;
  border: thin solid #282C2E;
  
`

class Route extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hover: false
        }
    }

    handleMouseHover = () => {
        this.setState({
            hover: true
        })
    }

    handleMouseLeave =  () => {
        this.setState({
            hover: false
        })
    }


    render() {
        return (
            <RouteContainer onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseLeave}>
                {this.state.hover && <CloseIcon onClick={() => this.props.onClose && this.props.onClose(this.props.id)}>
                    <MaterialIcon type={'close'}/>
                </CloseIcon>}
                <Locations>{this.props.origin} - {this.props.destination}</Locations>
                <Dates>{this.props.departureDate} - {this.props.arrivalDate}</Dates>
                <Company>{this.props.companyName}</Company>
            </RouteContainer>
        )
    }
}

export default Route;

Route.propTypes = {
    id: PropTypes.string,
    origin: PropTypes.string,
    destination: PropTypes.string,
    companyName: PropTypes.string,
    departureDate: PropTypes.string,
    arrivalDate: PropTypes.string,
    onClose: PropTypes.func
}