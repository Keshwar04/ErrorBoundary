import React, { Component } from 'react'

export default class ErrorBounday extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false
    }
  }
  static getDerivedStateFromError() {
    return {
      hasError: true
    }
  }
  componentDidCatch(error,errorInfo){
    console.log('error>>>',error,'errorInfo>>>',errorInfo);
  }
  render() {
    if(this.state.hasError){
      return(
        <div>
          <h3>Error caught and displayed Fallback UI</h3>
        </div>
      )
    }
    return this.props.children
  }
}
