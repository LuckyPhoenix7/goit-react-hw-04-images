import { GalleryStyled, ItemStyled } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <GalleryStyled>
      {images.map(item => (
        <ItemStyled key={item.id}>
          <ImageGalleryItem image={item} />
        </ItemStyled>
      ))}
    </GalleryStyled>
  );
};
