import { withStyles } from "@material-ui/core";
import { Component } from "react";
import Matchup from './Matchup';
import {Row, Col } from '../layout/Flexbox';
import LineTo from 'react-lineto';
import VerticalLine from '../images/jsx/verticalLine'
import HorizontalLine from '../images/jsx/horizontalLine'

const styles=(theme)=>({
    ...theme.spreadThis,
    roundCol:{
        position:'relative', 
        width:'260px',
        paddingBottom:'100px'
    }
})

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

class MatchupManager extends Component{
    state={
        teams:['Gonzaga', 'Appalachian St', 'Oklahoma', 'Missouri', 'Creighton', 'UCSB', 'Virginia', 'Ohio', 'USC', 'Drake', 'Kansas', 'E Washington', 'Oregon', 'VCU', 'Iowa', 'Grand Canyon', 'Michigan', 'Mt St Mary', 'LSU', 'St Bonaventure', 'Colorado', 'Georgetown', 'Florida St', 'UNC Greensboro', 'BYU', 'UCLA', 'Texas', 'Abil Christian', 'Connecticut', 'Maryland', 'Alabama', 'Iona', 'Baylor', 'Hartford', 'North Carolina', 'Wisconsin', 'Villanova', 'Winthrop', 'Purdue', 'North Texas', 'Texas Tech', 'Utah St', 'Arkansas', 'Colgate', 'Florida', 'Virginia Tech', 'Ohio St', 'Oral Roberts', 'Illinois', 'Drexel', 'Loyola-Chicago', 'Georgia Tech', 'Tennessee', 'Oregon St', 'Oklahoma St', 'Liberty', 'San Diego St', 'Syracuse', 'West Virginia', 'Morehead St', 'Clemson', 'Rutgers', 'Houston', 'Cleveland St'],
        images:['https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2250.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2450.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/201.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/142.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/156.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2540.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/258.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/195.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/30.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2181.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2305.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/331.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2483.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2670.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2294.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2253.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/130.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2640.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/99.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/179.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/38.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/46.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/52.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2430.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/252.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/26.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/251.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2000.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/41.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/120.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/333.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/314.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/239.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/42.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/153.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/275.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/222.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2737.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2509.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/249.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2641.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/328.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/8.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2142.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/57.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/259.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/194.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/198.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/356.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2182.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2350.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/59.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2633.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/204.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/197.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2335.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/21.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/183.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/277.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2413.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/228.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/164.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/248.png&w=36&h=36&scale=crop', 'https://secure.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/325.png&w=36&h=36&scale=crop'],
        seeding:[1, 16, 8, 9, 5, 12, 4, 13, 6, 11, 3, 14, 7, 10, 2, 15, 1, 16, 8, 9, 5, 12, 4, 13, 6, 11, 3, 14, 7, 10, 2, 15, 1, 16, 8, 9, 5, 12, 4, 13, 6, 11, 3, 14, 7, 10, 2, 15, 1, 16, 8, 9, 5, 12, 4, 13, 6, 11, 3, 14, 7, 10, 2, 15],
        round1:[],
        round2:[],
        round3:[],
        round4:[],
        round5:[],
        round6:[],
        errorMessage: ''
    }

    getSeeding = (name)=>{
        var i = this.state.teams.indexOf(name)
        return this.state.seeding[i]
    }
    
    
    render(){
        const {classes, data} = this.props
        const {teams, images, seeding} = this.state

        let matchups1 = []
        let matchups2 = []
        let matchups3 = []
        let matchups4 = []
        let matchups5 = []
        let matchups6 = []
        let lines1 = []
        let lines2 = []
        let lines3 = []
        let lines4 = []
        let lines5 = []
        let lines6 = []
        let final = [matchups1, matchups2, matchups3, matchups4, matchups5, matchups6]
        let finalLines = [lines1, lines2, lines3, lines4, lines5, lines6]
        let rounds = ['Round of 64', 'Round of 32', 'Round of 16', 'Round of 8', 'Round of 4', 'Finals']


        !isEmpty(data.round1) ? (
            data.round1.map((t, index)=> {
                matchups1.push(
                    <Matchup className={'matchup_1_'+index} seed1={t.Seed1} seed2={t.Seed2} winner={t.Winner}  name1={t.Team1} name2={t.Team2} image1={t.Image1} image2={t.Image2} prob1={t.Prob1} prob2={t.Prob2} margin={2*50*(index+.5)+20} left={false} right={true}/>
                )
                })
        ):(
            teams.map((t, index)=> {
                if(index%2==0){
                    matchups1.push(
                        <div className={'matchup_1_'+index} style={{width:'100px', height:'40px'}}>
                        <Matchup name1={teams[index]} seed1={seeding[index]} seed2={seeding[index+1]} name2={teams[index+1]} image1={images[index]} win0='' win1='' winner={t.Winner} image2={images[index+1]} margin={50*(index+1)+20} left={false} right={true}/>
                        </div>
                    )
                }
            }
            )
        )
        
        //this is teh lines
        teams.map((t, index)=> {
            if(index%4==0){
                lines1.push(
                    <div style={{position:'absolute', top: 50*(index+2)+23, left:'257px'}}>
                        <VerticalLine height='100px' />
                    </div>
                    
                )
            }
            if(index%8==0){
                lines2.push(
                    <div style={{position:'absolute', top: 50*(index+3)+23, left:'257px'}}>
                        <VerticalLine height='200px' />
                    </div>
                    
                )
            }
            if(index%16==0){
                lines3.push(
                    <div style={{position:'absolute', top: 50*(index+5)+23, left:'257px'}}>
                        <VerticalLine height='400px' />
                    </div>
                    
                )
            }
            if(index%32==0){
                lines4.push(
                    <div style={{position:'absolute', top: 50*(index+9)+23, left:'257px'}}>
                        <VerticalLine height='800px' />
                    </div>
                    
                )
            }
            if(index%64==0){
                lines5.push(
                    <div style={{position:'absolute', top: 50*(index+17)+23, left:'257px'}}>
                        <VerticalLine height='1600px' />
                    </div>
                    
                )
            }
        }
        )

        !isEmpty(data.round2) ? (
            data.round2.map((t, index)=> {
                matchups2.push(
                    <Matchup className={'matchup_2_'+index} seed1={this.getSeeding(t.Team1)} seed2={this.getSeeding(t.Team2)}  name1={t.Team1} name2={t.Team2} image1={t.Image1} winner={t.Winner} image2={t.Image2} prob1={t.Prob1} prob2={t.Prob2}  margin={4*50*(index+.5)+20} left={true} right={true}/>
                )
                })
        ):(
            teams.map((t, index)=> {
                if(index%4==0){
                    matchups2.push(
                        <Matchup className={'matchup_2_'+index}  name1="" name2="" image1="" image2="" margin={50*(index+2)+20} left={true} right={true}/>
                    )
                }
            }
            )
        )

        !isEmpty(data.round3) ? (
            data.round3.map((t, index)=> {
                matchups3.push(
                    <Matchup className={'matchup_3_'+index} seed1={this.getSeeding(t.Team1)} seed2={this.getSeeding(t.Team2)}  name1={t.Team1} name2={t.Team2} image1={t.Image1} winner={t.Winner} image2={t.Image2} prob1={t.Prob1} prob2={t.Prob2}  margin={8*50*(index+.5)+20} left={true} right={true}/>
                )
                })
        ):(
            teams.map((t, index)=> {
                if(index%8==0){
                    matchups3.push(
                        <Matchup className={'matchup_3_'+index} name1="" name2="" image1="" image2="" margin={50*(index+4)+20} left={true} right={true}/>
                    )
                }
                }
            )
        )
            

        !isEmpty(data.round4) ? (
            data.round4.map((t, index)=> {
                matchups4.push(
                    <Matchup className={'matchup_4_'+index} seed1={this.getSeeding(t.Team1)} seed2={this.getSeeding(t.Team2)}  name1={t.Team1} name2={t.Team2} winner={t.Winner} image1={t.Image1} image2={t.Image2} prob1={t.Prob1} prob2={t.Prob2}  margin={16*50*(index+.5)+20} left={true} right={true}/>
                )
                })
        ):(
            teams.map((t, index)=> {
                if(index%16==0){
                    matchups4.push(
                        <Matchup className={'matchup_4_'+index}  name1="" name2="" image1="" image2="" margin={50*(index+8)+20} left={true} right={true}/>
                    )
                }
                }
            )
        )

        !isEmpty(data.round5) ? (
            data.round5.map((t, index)=> {
                matchups5.push(
                    <Matchup className={'matchup_5_'+index} seed1={this.getSeeding(t.Team1)} seed2={this.getSeeding(t.Team2)}  name1={t.Team1} name2={t.Team2} winner={t.Winner} image1={t.Image1} image2={t.Image2} prob1={t.Prob1} prob2={t.Prob2}  margin={32*50*(index+.5)+20} left={true} right={true}/>
                )
                })
        ):(
            teams.map((t, index)=> {
                if(index%32==0){
                    matchups5.push(
                        <Matchup className={'matchup_5_'+index} name1="" name2="" image1="" image2="" margin={50*(index+16)+20} left={true} right={false}/>
                    )
                }}
            
            )
        )

        !isEmpty(data.round6) ? (
            data.round6.map((t, index)=> {
                matchups6.push(
                    <Matchup className={'matchup_6_'+index} seed1={this.getSeeding(t.Team1)} seed2={this.getSeeding(t.Team2)}  name1={t.Team1} name2={t.Team2} winner={t.Winner} image1={t.Image1} image2={t.Image2} prob1={t.Prob1} prob2={t.Prob2}  margin={64*50*(index+.5)+20} left={true} right={false}/>
                )
                })
        ):(
            teams.map((t, index)=> {
                if(index%32==0){
                    matchups5.push(
                        <Matchup className={'matchup_6_'+index} name1="" name2="" image1="" image2="" margin={50*(index+32)+20} left={true} right={false}/>
                    )
                }}
            
            )
        )
        
        

        

        let cols = (
            rounds.map((round, index)=>(
                <Col className={classes.roundCol}>
                    <h1 style={{textAlign:'center'}}>{round}</h1>
                    {final[index]}
                    {finalLines[index]}
                </Col>
            ))
        )

        return(
            <Row style={{marginTop:'30px'}}>
                {cols}
                
            </Row>
                
        )
    }
}

export default withStyles(styles)(MatchupManager)