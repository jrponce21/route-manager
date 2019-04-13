import React from "react";
import ListRoutes from "./components/ListRoutes/ListRoutes";
import RouteForm from "./components/RouteForm/RouteForm";
import RouteManager from "./services/manager";
import {API_URL} from "./constants/constants";

class App extends React.Component{
    constructor(props){
        super(props)

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


    onAddRoute = (route) => {
        console.log(route)
    }

    render() {
        return (
            <div className={"app"}>
                <RouteForm onSubmit={this.onAddRoute} />
                <ListRoutes routes={this.state.routes}/>
            </div>
        )
    }

}

export default App