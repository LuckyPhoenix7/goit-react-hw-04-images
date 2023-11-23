import { useState } from 'react';
import { ImageStyled } from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';

export const ImageGalleryItem = ({
  image: { webformatURL, tags, largeImageURL },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ImageStyled src={webformatURL} alt={tags} onClick={openModal} />

      {isModalOpen && (
        <Modal
          largeImageURL={largeImageURL}
          alt={tags}
          isOpen={isModalOpen}
          onCloseModal={closeModal}
        />
      )}
    </>
  );
};
