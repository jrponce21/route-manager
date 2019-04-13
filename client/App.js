import React from "react";
import ListRoutes from "./components/ListRoutes/ListRoutes";
import RouteForm from "./components/RouteForm/RouteForm";
import RouteManager from "./services/manager";
import {API_URL} from "./constants/constants";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            routes: []
        }
    }

    componentDidMount() {
        this.requestRoutes();
    }

    requestRoutes = () => {
        RouteManager.get(API_URL,(data) => {
            if(data){
                const routes = data.routes || []
                this.setState({
                    routes
                })
            }
        })
    }


    onAddRoute = (route) => {
        RouteManager.post(API_URL, route, () => {
            this.requestRoutes();
        })
    }

    handleRouteDelete = (id) => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure you want to delete this route?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => RouteManager.delete(`${API_URL}/${id}`, () => {
                        this.requestRoutes();
                    })
                },
                {
                    label: 'No'
                }
            ]
        });
    }

    render() {
        return (
            <div className={"app"}>
                <RouteForm onSubmit={this.onAddRoute} />
                <ListRoutes routes={this.state.routes} onDeleteRoute={this.handleRouteDelete}/>
            </div>
        )
    }

}

export default App