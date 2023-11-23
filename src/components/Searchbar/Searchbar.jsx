import { Formik } from 'formik';
import {
  SearchBox,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
  SearchIcon,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchBox>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values.query);
          resetForm();
        }}
      >
        {() => (
          <SearchForm>
            <SearchFormInput
              type="text"
              name="query"
              placeholder="Search images..."
            />
            <SearchFormBtn type="submit">
              <SearchIcon />
            </SearchFormBtn>
          </SearchForm>
        )}
      </Formik>
    </SearchBox>
  );
};
