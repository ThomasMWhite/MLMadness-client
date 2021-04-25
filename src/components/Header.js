import { withStyles } from "@material-ui/core";
import { Component } from "react";

const styles=(theme)=>({
    ...theme.spreadThis
})

class Header extends Component{
    render(){
        return(
            <div className="behind-navbar" style={{height:'80px', backgroundColor:'#ecececeb'}}>

            </div>
        )
    }
}

export default withStyles(styles)(Header)