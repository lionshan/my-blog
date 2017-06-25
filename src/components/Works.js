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
        <a href="https://github.com/lionshan?tab=repositories" className="work-list">
          <Card className="work-card">
            <CardMedia overlay={<CardTitle title="简单样式" subtitle="前端笔记" style={styles.title}/>} >
              <img src="http://7xopqp.com1.z0.glb.clouddn.com/contain1.jpg" />
            </CardMedia>
          </Card>
        </a>

        <a href="https://lionshan.github.io/note/" className="work-list">
          <Card className="work-card">
            <CardMedia overlay={<CardTitle title="My Gitbook" subtitle="个人笔记" style={styles.title}/>} >
              <img src="http://7xopqp.com1.z0.glb.clouddn.com/contain2.jpg" />
            </CardMedia>
          </Card>
        </a>
        <a href="https://haoqicat.com/" className="work-list">
          <Card className="work-card">
            <CardMedia overlay={<CardTitle title="网站项目" subtitle="基于React的单页面网站" style={styles.title}/>} >
              <img src="http://7xopqp.com1.z0.glb.clouddn.com/contain3.jpg" />
            </CardMedia>
          </Card>
        </a>
      </div>
    )
  }
}

export default Works;
