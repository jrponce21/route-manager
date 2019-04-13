import React from "react";
import ListRoutes from "./components/ListRoutes/ListRoutes";
import RouteForm from "./components/RouteForm/RouteForm";
import RouteManager from "./services/manager";
import {API_URL} from "./constants/constants";
import Route from "./components/Route/Route";

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
                console.log("data", data.routes);
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
        RouteManager.delete(`${API_URL}/${id}`, () => {
            this.requestRoutes();
        })
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