constructor(props) {
    super(props)
    this.state = {
      messages: [],
    }
  }

  async componentDidMount() {
    const response = await fetch(`${API}/messages`)
    const json = await response.json()
    this.setState({...this.state, messages: json})
  }

  handleNewMessage = (text) => {
      this.setState({
        messages: [...this.state.messages, { me: true, author: "Me", body: text }],
      })
    }
    <Route path="/MessageForm"
                component={()=>
                  <MessageList
                    MessageForm onMessageSend={this.handleNewMessage}
                  />}
              />
