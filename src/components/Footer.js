import React from 'react'

class Footer extends React.Component {
  render () {
    let styles={
      root:{
        backgroundColor:'#212121',
        textAlign:'center'
      },
      text:{
        color:'#ccc',
        lineHeight:'80px'
      },
      img:{
        maxWidth:'200px'
      },
      wchat:{
        lineHeight:'40px',
        color:'#ccc'
      }
    }
    return(
      <div style={styles.root}>
        <h1 style={styles.text}>Man proposes and God disposes</h1>
        <p style={styles.wchat}>欢迎添加微信：dayshiyang</p>
      </div>
    )
  }
}

export default Footer;
