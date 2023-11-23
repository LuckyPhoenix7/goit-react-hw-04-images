import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchImages } from './api';
import { Layout } from './Layout';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { LoadMore } from './LoadMore/LoadMore';
import { ErrorMes } from './ErrorMes/ErrorMes';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onQuery = value => {
    const currentValue = value.toLowerCase();

    if (currentValue.trim() === '') {
      toast.error('Введите название для поиска!');
    }

    setQuery(currentValue);
    setPage(1);
    setImages([]);
  };

  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function onAddImages() {
      try {
        setLoading(true);
        setError(false);

        const imagesData = await fetchImages(query, page);
        if (imagesData.hits.length === 0) {
          toast.error('Картинки не найдены!');
          return;
        }

        setImages(prevState => [...prevState, ...imagesData.hits]);

        toast.success('Картинки успешно загружены!');
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    onAddImages();
  }, [query, page]);

  return (
    <Layout>
      <Searchbar onSubmit={onQuery} />
      {loading && <Loader />}
      {error && <ErrorMes />}
      <ImageGallery images={images} />
      {images.length > 0 && <LoadMore onClick={onLoadMore}>Load more</LoadMore>}
      <Toaster position="top-right" />
    </Layout>
  );
};
