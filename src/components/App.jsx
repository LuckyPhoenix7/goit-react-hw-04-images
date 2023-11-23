import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchImages } from './api';
import { Layout } from './Layout';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { LoadMore } from './LoadMore/LoadMore';
import { ErrorMes } from './ErrorMes/ErrorMes';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    error: false,
  };

  onQuery = value => {
    const currentValue = value.toLowerCase();

    if (currentValue.trim() === '') {
      toast.error('Введите название для поиска!');
    }

    this.setState({
      query: currentValue,
      page: 1,
      images: [],
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onAddImages = async () => {
    try {
      this.setState({ loading: true, error: false });

      const imagesData = await fetchImages(this.state.query, this.state.page);
      if (imagesData.hits.length === 0) {
        toast.error('Картинки не найдены!');
        return;
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...imagesData.hits],
      }));

      toast.success('Картинки успешно загружены!');
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.onAddImages();
    }
  }

  render() {
    const { images, loading, error } = this.state;

    return (
      <Layout>
        <Searchbar onSubmit={this.onQuery} />
        {loading && <Loader />}
        {error && <ErrorMes />}
        <ImageGallery images={images} />
        {this.state.images.length > 0 && (
          <LoadMore onClick={this.onLoadMore}>Load more</LoadMore>
        )}
        <Toaster position="top-right" />
      </Layout>
    );
  }
}
