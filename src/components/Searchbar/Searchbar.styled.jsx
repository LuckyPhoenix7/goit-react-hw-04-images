import styled from 'styled-components';
import { IoSearchOutline } from 'react-icons/io5';
import { Form, Field } from 'formik';

export const SearchBox = styled.div`
  background-color: #3f51b5;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 12px 24px;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const SearchForm = styled(Form)`
  position: relative;
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 600px;

  border-radius: 3px;
`;

export const SearchFormInput = styled(Field)`
  flex-grow: 1;
  padding: 8px 12px;
  padding-left: 40px;

  border: 1px solid #ddd;
  border-radius: 3px;
  outline: none;

  &::placeholder {
    color: #9e9e9e;
  }
`;

export const SearchFormBtn = styled.button`
  background: transparent;

  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);

  width: 30px;
  height: 100%;
  padding: 0;

  border: none;
  cursor: pointer;
`;

export const SearchIcon = styled(IoSearchOutline)`
  color: #9e9e9e;

  width: 20px;
  height: 20px;
`;
