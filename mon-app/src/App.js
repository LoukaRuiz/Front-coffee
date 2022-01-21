import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'

class Test extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    this.setState({
      result: data,
    })
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      position: 'relative',
      height: '100vh',
      width: '100%',
      background : 'black',
    }

    const defineQr = {
      position: 'absolute',
      zIndex: 1,
      display: 'flex',
      justifyContent: 'center',
      opacity: 0.5,
      left : '5%',
      top: '30%'
    }

  

    return(
      <div >
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
          <div style = {defineQr}>
            <img src = "https://img.freepik.com/free-vector/qr-code-vector-icon-black-qr-code-with-red-frame-isolated-vector-eps-10_532800-402.jpg?size=338&ext=jpg&ga=GA1.2.1696091912.1641772800"></img>
          </div>
        <p>{this.state.result}</p>
      </div>
    )
  }
}

export default Test;