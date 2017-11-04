import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class DialogSimple extends React.Component {
    constructor() {
        super() 
        this.state = {
            open: false,
          }
    }

    openDialog() {
        handleOpen = () => {
            this.setState({open: true});
        };
    }

    closeDialog() {
        handleClose = () => {
            this.setState({open: false});
          };
    }


  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.closeDialog}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.closeDialog}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Dialog" onClick={this.openDialog} />
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.closeDialog}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
      </div>
    );
  }
}