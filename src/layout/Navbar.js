import { Component } from "react"
import AppBar from '@material-ui/core/Appbar'
import { Dialog, DialogContent, DialogContentText, DialogTitle, withStyles } from "@material-ui/core"
import {Row, Col, Grid} from './Flexbox'
import Text from '../components/Text'
import Logo from '../images/jsx/logo'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import { ThreeSixtySharp } from "@material-ui/icons"


const styles = (theme) =>({
    ...theme.spreadThis,
    button:{
        textTransform:'none'
    }
})

class Navbar extends Component{

    state = {
        open:false
    }
    
    handleOpen = ()=>{
        this.setState({open:true})
    }

    handleClose = ()=>{
        this.setState({open:false})
    }

    render(){
        const {classes} = this.props
        const {open} = this.state

        return (
            <AppBar position='relative' elevation={0} style={{backgroundColor:'transparent', height:'80px'}}>
                <div className="center-page">
                    <div style={{marginTop:'20px', marginBottom:'20px'}}>
                        <Row>
                            <Col size={3}>
                                <Logo/>
                            </Col>
                            <Col style={{paddingRight:'40px'}}>
                                <Button className={classes.button} onClick={this.handleOpen}>
                                    <Text fontWeight={400} fontSize={18}>Info</Text>
                                </Button>
                                
                            </Col>
                        </Row>
                    </div>
                </div>

                <Dialog open={open} onClose={this.handleClose}>
                    <DialogTitle style={{paddingBottom:'0px'}}>
                        About ML Madness
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            This website was created by Thomas White as his UVA 2021 Capstone project. The goal is to allow users with limited knowledge of machine learning to create their own NCAA tournament models, based on features that they value. Each model is tested on the past 20 NCAA tournaments, as indicated in the historical accuracy measurement.
                        </DialogContentText>
                        <ul style={{marginLeft:'-10px'}}>
                            <li>
                            PF - Points for per game
                            </li>
                            <li>
                            PA - Points against per game
                            </li>
                            <li>
                            OR - Ovensive rebounds per game
                            </li>
                            <li>
                            DR - Defensive rebounds per game
                            </li>
                            <li>
                            AST - Assists per game
                            </li>
                            <li>
                            FGA - Average field goal percent
                            </li>
                            <li>
                            FGA3 - Average three point percent
                            </li>
                            <li>
                            BLK - Blocks per game
                            </li>
                            <li>
                            TO - Turnovers per game
                            </li>
                            <li>
                            Seed - The seed in the NCAA tournament (1-16)
                            </li>
                        </ul>
                    </DialogContent>
                </Dialog>
                
            </AppBar>
        )
    }
}

export default withStyles(styles)(Navbar)