import React from "react"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {withStyles } from '@material-ui/core/styles';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import InfoIcon from '@material-ui/icons/Info';
import SettingsIcon from '@material-ui/icons/Settings';
import Tooltip from '@material-ui/core/Tooltip';
import "./list.css"

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 400,
    width: 600,
    padding: 3
  },
  control: {
    padding: theme.spacing(2),
  },
});

class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message : "ABCDEFG"
    }
  }
  
  onClickTest = () => {
    this.setState({
      message : "HIJKLMNOP"
    });
  }

  render() {
    const {classes} = this.props;

    return (
      <Grid
        container justify="center"
        spacing={3}
        direction="column"
        alignItems="center"
      >
        {[0, 1, 2].map(value => (
          <Grid key={value} item>
            <Paper className={classes.paper}>
              <div className="EggTitle"> 할 일 목록 </div>
              <div className="Deadline"> 마감까지 N일 남음 </div>
              <div className="List">
                <ul>
                  <li>동해물과 백두산이 마르고 닳도록<input type="button" value={this.state.message} id="btn" onClick={this.onClickTest}></input></li>
                  <li>울릉도 동남쪽 뱃길따라 이백리<input type="button" value={this.state.message} id="btn" onClick={this.onClickTest}></input></li>
                  <li>아름다운 이 땅에 금수강산에<input type="button" value={this.state.message} id="btn" onClick={this.onClickTest}></input></li>
                </ul>
              </div>
              <div className="Group"> GROUP
                <AccountCircleRoundedIcon />
                <AccountCircleRoundedIcon />
              </div>
              <div className="Penalty"> 벌칙 : 미정 </div>
              <div className="IconButton">
                <Tooltip title="상세정보" placement="top-start"><InfoIcon /></Tooltip>
                <Tooltip title="설정" placement="top-start"><SettingsIcon /></Tooltip>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    )
  }
}
export default withStyles(styles)(List);