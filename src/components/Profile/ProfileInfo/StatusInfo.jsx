import React from "react";

class StatusInfo extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  activeEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status)
  };
  
  editStatus = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activeEditMode}>{this.props.status || "-----"}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              type="text"
              value={this.state.status}
              onBlur={this.deactivateEditMode}
              autoFocus={true}
              onChange={this.editStatus}
            />
          </div>
        )}
      </>
    );
  }
}

export default StatusInfo;
