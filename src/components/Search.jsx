class Search extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value: ''
    };
  }

   searchAction(event) {
    this.props.handleSearchInput(event.target.value);
    this.setState({
      value: event.target.value
    });
  }

  render () {
    return (
    <div className="search-bar form-inline">
      <input
          className="form-control"
          type="text"
          value={this.state.value}
          onChange={this.searchAction.bind(this)}
        />
       <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
 };
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
