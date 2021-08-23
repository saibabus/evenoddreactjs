// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, mode: 'Even'}

  onclickis = () => {
    const {count} = this.state
    const randomNum = Math.ceil(Math.random() * 100)
    console.log(randomNum)
    this.setState(prevstate => ({count: prevstate.count + randomNum}))
    console.log(count)
  }

  render() {
    const {count, mode} = this.state
    let modeis = mode
    console.log(count)
    if (count % 2 === 0) {
      modeis = 'Even'
    } else {
      modeis = 'Odd'
    }

    return (
      <div className="mainBg">
        <div className="countcontainer">
          <h1 className="heading">Count {count}</h1>
          <p className="modedescription">Count is {modeis}</p>
          <button type="button" className="button" onClick={this.onclickis}>
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
