import { Component } from 'react';
import { ImageStyled } from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const {
      image: { webformatURL, tags, largeImageURL },
    } = this.props;
    const { isModalOpen } = this.state;

    return (
      <>
        <ImageStyled src={webformatURL} alt={tags} onClick={this.openModal} />

        {isModalOpen && (
          <Modal
            largeImageURL={largeImageURL}
            alt={tags}
            isOpen={isModalOpen}
            onCloseModal={this.closeModal}
          />
        )}
      </>
    );
  }
}
