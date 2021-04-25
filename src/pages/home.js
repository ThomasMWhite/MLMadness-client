import { Component, Fragment } from "react";
import {withStyles} from '@material-ui/core/styles'
import {Button} from '@material-ui/core'
import Header from '../components/Header'
import FeatureSelector from "../components/FeatureSelector";
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import MatchupManager from "../components/MatchupManager";
import axios from "axios";
import LoadingBar from '../components/LoadingBar'
import {Row, Col} from '../layout/Flexbox'
import Text from '../components/Text'


const styles=(theme)=>({
    ...theme.spreadThis,
    select:{
        height: '40px',
        width:'120px',
        marginRight:'20px'
    }
})

class home extends Component{
    state = {
        year: 2021,
        model: 'Forest',
        loading: false,
        selected: ['pf','pa','or','dr','ast','fga','fga3','blk','to','seed'],
        resData:{
            accuracy:'',
            round1:[],
            round2:[],
            round3:[],
            round4:[],
            round5:[],
            round6:[]
        }
    }

    changeFeatures = (featureList)=>{
        this.setState({selected:featureList})
        console.log(featureList)
    }
  //["pf", "pa", "stls", "blk", "fga"]
    testGenerate = ()=>{
        if(this.state.selected.length===0)
        {
            return
        }

        this.setState({loading:true})
        console.log('here')
        console.log(this.state.selected)
        
        axios.post('https://us-central1-mlmadness-4c218.cloudfunctions.net/api/calculate', {'factors': this.state.selected})
            .then(res=>{
                console.log('got some data back')
                console.log(res)
                this.setState({resData: res.data.results, loading:false})
            })
            .catch(err=>{
                console.log(err)
                this.setState({loading:false})
            })
    }
    
    render(){
        const {classes} = this.props;

        return (
            <Fragment>
                <Header/>
                <div style={{backgroundColor:'#065fc0', minHeight:'40px'}}>
                    <FeatureSelector changeFeatures={this.changeFeatures}/>
                </div>
                <div className="center-page">
                    <div style={{padding:'25px'}}>
                        {/* <Select value={this.state.model} className={classes.select}>
                            <MenuItem value='Forest'>Forest</MenuItem>
                            <MenuItem value='SVM'>SVM</MenuItem>
                            <MenuItem value='Neural Network'>Neural Network</MenuItem>
                        </Select> */}
                        
                        {/* <Select value={this.state.year} className={classes.select}>
                            <MenuItem value='2021'>2021</MenuItem>
                            <MenuItem value='2020'>2020</MenuItem>
                        </Select> */}
                        <Row>
                            <Col size={4} style={{paddingTop:'15px'}}>
                                <LoadingBar loading={this.state.loading}/>
                                {this.state.resData.accuracy!=='' && (
                                    <div>
                                    <Text fontWeight={500} fontSize={16}>
                                        Historical Accuracy 
                                    </Text>
                                    <Text fontWeight={300} fontSize={16}>
                                        {this.state.resData.accuracy}
                                    </Text>
                                    </div>
                                )}
                            </Col>
                            <Col size={1}>
                                <Button variant="contained" color="primary" onClick={this.testGenerate} className={classes.generateButton} style={{float:'right'}}>
                                    Generate Bracket
                                </Button>
                            </Col>
                        </Row>
                        
                        
                    </div>
                    
                </div>
                <div className="center2-page">
                    <MatchupManager data={this.state.resData}/>
                </div>
                
            </Fragment>
            
        )
    }
}

export default withStyles(styles)(home)