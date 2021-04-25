import { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox'
import Text from './Text'

import update from 'react-addons-update'

const styles=(theme)=>({
    ...theme.spreadThis,
    checkBox:{
        // color: 'rgb(255 255 255 / 64%)'
    }
})

class FeatureSelector extends Component{

    state = {
        factors: ['pf','pa','or','dr','ast','fga','fga3','blk','to','seed'],
        values: [true,true,true,true,true,true,true,true,true, true]       
    }

    handleChange = (event)=>{
        this.setState(update(this.state, {
            values: {
                [event.target.name]:{
                    $set: event.target.checked
                }
            }
        }))
        
        let list = []
        for(var i=0;i<this.state.factors.length;i++){
            if(this.state.values[i]){
                list.push(this.state.factors[i])
            }
        }
        if(event.target.checked){
            list.push(this.state.factors[event.target.name])
        }
        else{
            var index = list.indexOf(this.state.factors[event.target.name])
            if(index!==-1){
                list.splice(index, 1)
            }
        }
        // console.log(list)
        this.props.changeFeatures(list)
    }

    render(){

        let checkBoxes = this.state.factors.map((factor, i) =>(
            <Fragment>
                <li className="wrap-grid" style={{flex: '0 0 80px'}}>
                <Text fontWeight={600} fontSize={16} color={this.state.values[i] ? ("white"):('rgba(0, 0, 0, 0.74)')}>{factor} 
                    <Checkbox color='secondary' name={i} valIndex={i} checked={this.state.values[i]} onChange={this.handleChange} inputProps={{ 'aria-label': 'primary checkbox' }}/>
                </Text>
                </li>
                
                
            </Fragment>
        ))
        return(
            <div className="center-page">
                <ul className="wrap-container">
                    {checkBoxes}
                </ul>
                
            </div>
        )
    }

}

export default withStyles(styles)(FeatureSelector)