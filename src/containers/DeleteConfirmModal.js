import React, { Component } from 'react';
import { Button, Confirm, Icon } from 'semantic-ui-react';

class DeleteConfirmModal extends Component {
  
  state = { open: false };

  show = () => this.setState({ open: true });
  handleConfirm = () => {
    this.props.removePlayer(this.props.player.id);
    this.setState({ open: false });
  };
  handleCancel = () => this.setState({ open: false });

  render() {
    const { last_name, first_name } = this.props.player;
    const contentText = `Do you really want to remove ${first_name} ${last_name}?`
    return (
      <div>
        <Button icon basic compact floated="right" size="mini" onClick={this.show}>
          <Icon name="delete" />
        </Button>
        <Confirm
          open={this.state.open}
          content={contentText}
          confirmButton="Remove"
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
      </div>
    );
  }
}

export default DeleteConfirmModal;
