import { Component } from 'react';
import ReactModal from 'react-modal';

const modalStyles = {
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    borderRadius: '10px',
    outline: 'none',
    padding: '20px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
};

ReactModal.setAppElement('#root');

export class Modal extends Component {
  render() {
    const { largeImageURL, tags, isOpen, onCloseModal } = this.props;

    return (
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onCloseModal}
        style={modalStyles}
        contentLabel="Image Modal"
      >
        <img src={largeImageURL} alt={tags} />
      </ReactModal>
    );
  }
}
