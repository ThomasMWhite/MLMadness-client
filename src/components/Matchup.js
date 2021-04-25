import { Component, Fragment } from "react";
import { withStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import {Col, Row, Grid} from '../layout/Flexbox'
import Text from './Text'
import Box from '@material-ui/core/Box'
import HorizontalLine from '../images/jsx/horizontalLine'

const styles=(theme)=>({
    ...theme.spreadThis,
    card:{
        width:'240px',
        margin:'10px',
        boxShadow: '0px 0px 5px 0px rgb(0 0 0 / 9%), 0px 1px 1px 0px rgb(0 0 0 / 0%), 0px 1px 3px 0px rgb(0 0 0 / 0%)',
        "&:hover": {
            boxShadow: '0px 0px 9px 0px rgb(0 0 0 / 22%), 0px 1px 1px 0px rgb(0 0 0 / 0%), 0px 1px 3px 0px rgb(0 0 0 / 0%)',
            
          }
    },
    content:{
        padding:6,
        paddingLeft:14,
        "&:last-child": {
            paddingBottom: 10,
            paddingTop: 6,
            paddingRight: 10

        }
    },
    teamLogo:{
        width:'16px',
        height:'16px',
        marginRight:'4px',
        display:'block',
        marginBottom:'7px',
        marginTop:'1px'
    },
    rowHeight:{
        height:'25px',
        marginTop:'10px'
    },
    rowName:{
        height:'25px',
        marginTop:'9px'
    }
})

class Matchup extends Component{

    render(){
        const {classes} = this.props

        return(
            <Fragment>
                {this.props.left && (
                    <div style={{position:'absolute', top:this.props.margin+40, left:0}}>
                        <HorizontalLine/>
                    </div>
                    
                )}
                {this.props.right && (
                    <div style={{position:'absolute', top:this.props.margin+40, right:0}}>
                        <HorizontalLine/>
                    </div>
                    
                )}
            
            <Card className={classes.card} variant="outlined" style={{position:'absolute', top:this.props.margin}}>
                <CardContent className={classes.content}>
                    <Grid>
                        <Row>
                            <Col size={1.2}>
                                <Row className={classes.rowHeight}>
                                    <img src={this.props.image1} className={classes.teamLogo}/>
                                </Row>
                                <Row className={classes.rowHeight}>
                                    <img src={this.props.image2} className={classes.teamLogo}/>
                                </Row>
                            </Col>
                            <Col style={{marginRight:'6px'}}>
                                <Text fontSize={12} fontWeight={200} color='#222222' className={classes.rowHeight}>
                                    {this.props.seed1}
                                </Text>
                                <Text fontSize={12} fontWeight={200} color='#222222' className={classes.rowHeight}>
                                    {this.props.seed2}
                                </Text>     
                            </Col>
                            <Col size={3}>
                                
                                <Text fontSize={14} className={classes.rowName} fontWeight={this.props.winner===0 ? (600):(300)}>
                                    {this.props.name1}
                                </Text>

                                <Text fontSize={14} className={classes.rowName} fontWeight={this.props.winner===1 ? (600):(300)}>
                                    {this.props.name2}
                                </Text>                  
                            </Col>
                            <Col>
                            <div style={{float:'right', textAlign:'right'}}>
                                <Text fontSize={14} className={classes.rowName} fontWeight={this.props.winner===0 ? (600):(300)}>
                                    {this.props.prob1}
                                </Text>
                                <Text fontSize={14} className={classes.rowName} fontWeight={this.props.winner===1 ? (600):(300)}>
                                    {this.props.prob2}
                                </Text>
                            </div>
                                
                            </Col>
                        </Row>

                    </Grid>

                </CardContent>
            </Card>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Matchup);