import React, { Component } from 'react';
import { Client } from 'espn-fantasy-football-api';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const leagueId = 3928205;
const seasonId = 2019;
const scoringPeriodId = 5;
const myTeamName = 'Team Third Coast';
const SWID = 'YOUR_SWID'
const espnS2 = 'YOUR_ESPN2_TOKEN';

const myClient = new Client({ leagueId });
myClient.setCookies({ espnS2, SWID });

class Popup extends Component {

  state = {
    league: {},
    allTeams: {},
    myTeam: {}
  }

  async componentDidMount() {

    await myClient.getLeagueInfo({ seasonId }).then((league) => {
      this.setState({
        league
      })
    })

    await myClient.getTeamsAtWeek({ seasonId, scoringPeriodId }).then((allTeams) => {
      this.setState({
        allTeams,
        myTeam: allTeams.find((team) => {
          return team.name === myTeamName;
        })
      })
    })

  }

  render() {
    const leagueName = this.state.league.name;
    return (
      <div>
        <h1>This is the Popup Window</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Greetings leagueName={leagueName} />
        </div>
      </div>
    );
  }
}

export default Popup;
