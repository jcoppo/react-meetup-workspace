var React = require('react');

var App = React.createClass({

  getInitialState: function() {
    return{
      comments: [
        {
          name: 'Koala',
          message: 'Pleasant'
        },
        {
          name: 'Yarrow',
          message: 'What have you?'
        }
      ]
    }
  },

handleFormSubmit: function(comment) {
  var comments = this.state.comments;
  var newComments = comments.concat([comment])

  this.setState({
    comments: newComments

  });
},

render: function() {
  return (

    <div>
      <CommentForm formSubmit={this.handleFormSubmit} />
    <CommentList comments={this.state.comments}/>
    </div>
  )
}
});

var CommentForm = React.createClass({

  getInitialState: function() {
    return {
      name: '',
      message: ''
    }
  },

  handleChange: function(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  },

  handleSubmit: function(e) {
    e.preventDefault();

    this.props.formSubmit(this.state);

    this.setState({
      name: '',
      message: ''
    })
  },


  render: function() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Your Name"
          />
          <input
            type="text"
            name='message'
            value={this.state.message}
            onChange={this.handleChange}
            placeholder='Speak it.'

          />
          <input
            type="submit"
          />

        </form>
    )
  }
});

var CommentList = React.createClass({
  render: function() {
    return (

      <div>
        {this.props.comments.map(function(comment, i) {
              return (
              <Comment name={comment.name} message= {comment.message} key={i} />
              )
            })}
      </div>
    )
  }
});

var Comment = React.createClass({

  render: function() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.message}</p>
      </div>
    )
  }
});

module.exports = App;
