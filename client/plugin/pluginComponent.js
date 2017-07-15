import React from 'react';
let styles = {
  helpLauncherOpenIcon:{
    height: 60,
    width: 60,
    backgroundColor: '#4A90E2',
    borderRadius: '50%',
    cursor: 'pointer'
  },
  helpBody: {
    height: 540,
    width: 370,
    marginBottom: 20,
    border: '2px solid #4A90E2',
    borderRadius: '20px',
    
  },
  helpLauncherCloseIcon: {
    height: 60,
    width: 60,
    backgroundColor: '#4A90E2',
    borderRadius: '50%',
    alignSelf:'flex-end',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  }
}
export default class PluginComponnet extends React.Component {
  constructor(){
    super();
    this.state = {
      helpBtn: true,
    };
  }
  onHelpBtnClick(){
    if(this.state.helpBtn){
      this.setState({
        helpBtn: false
      })
    }else{
      this.setState({
        helpBtn: true
      })
    }  
  }
  getHelpIcon(){
    if(this.state.helpBtn){
      return(
        <div style={styles.helpLauncherOpenIcon}></div> 
      )
    }
    return(
      <div style={{display: 'flex',flexDirection: 'column'}}>
         <div style={styles.helpBody}>
            <iframe name='iframe1' id="iframe1" src="https://montoc.github.io/Goonj-mini/#/?_k=2q828p"
              style={{width:'100%',height: '100%',borderWidth:0,backgroundColor:'pink'}}>
          </iframe>

         </div>
         <div 
           style={styles.helpLauncherCloseIcon}>
           <div className='close'></div>
         </div>
      </div>
    )
  }
  render(){
    console.log('here',this.state);
    return(
      <div onClick={this.onHelpBtnClick.bind(this)}>
        {this.getHelpIcon()}
      </div>
    )
  }
}
