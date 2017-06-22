import React, { PropTypes } from 'react';
import Works from '../components/Works.js';

class Home extends React.Component {
  render () {
    let styles={
      root:{
        width:'100%',
        height:'100vh',
        background: 'url("http://pic.qiantucdn.com/58pic/17/06/86/47n58PICq5w_1024.jpg!/fw/780/watermark/url/L3dhdGVybWFyay12MS4zLnBuZw==/align/center") no-repeat fixed center bottom/cover'
      },
      title:{
        color:'#fff',
        textAlign:'center',
        paddingTop:'40vh',
        fontSize:'48px'
      },
      span:{
        color:'#00BCD4',
        fontSize:'36px'
      },
      cover:{
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(0,0,0,0.5)'
      }
    }
    return(
      <div>
        <div style={styles.root}>
          <div style={styles.cover}>
            <h1 style={styles.title}>欢迎光临<br/><span style={styles.span}>Lucifer's cottage</span></h1>
          </div>
        </div>
        <h1 style={{color:'#777',textAlign:'center',lineHeight:'90px'}}>我的个人作品</h1>
        <Works />
      </div>
    )
  }
}

export default Home;
