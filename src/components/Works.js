import React from 'react'
import {Card,CardMedia,CardTitle} from 'material-ui/Card';

class Works extends React.Component {
  render () {
    let styles={
      title:{
        padding:'5px'
      }
    }
    return(
      <div className='work-container'>
        <a href="http://newming.github.io/100" className="work-list">
          <Card className="work-card">
            <CardMedia overlay={<CardTitle title="CSS页面样式" subtitle="前端笔记" style={styles.title}/>} >
              <img src="http://7xopqp.com1.z0.glb.clouddn.com/contain1.jpg" />
            </CardMedia>
          </Card>
        </a>

        <a href="http://newming.coding.me/myidoc" className="work-list">
          <Card className="work-card">
            <CardMedia overlay={<CardTitle title="文档手册" subtitle="我的个人博客" style={styles.title}/>} >
              <img src="http://7xopqp.com1.z0.glb.clouddn.com/contain2.jpg" />
            </CardMedia>
          </Card>
        </a>
        <a href="http://newming.coding.me/test/clock/" className="work-list">
          <Card className="work-card">
            <CardMedia overlay={<CardTitle title="自制时钟" subtitle="canvas 小 demo" style={styles.title}/>} >
              <img src="http://7xopqp.com1.z0.glb.clouddn.com/contain3.jpg" />
            </CardMedia>
          </Card>
        </a>    
      </div>
    )
  }
}

export default Works;
