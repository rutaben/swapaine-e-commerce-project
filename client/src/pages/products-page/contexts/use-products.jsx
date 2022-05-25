import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { createUrlParamObj } from '../../../helpers/url-helpers';
import ApiService from '../../../services/api-service';

const initialProducts = [];

const useProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState(initialProducts);
  const [pagesCount, setPagesCount] = useState(1);
  const [currPage, setCurrPage] = useState(1);

  useEffect(() => {
    (async () => {
      const params = createUrlParamObj(searchParams);
      const getProducts = await ApiService.getProducts(params);
      const totalPagesCount = getProducts.totalPages;
      const productsArr = Object.values(getProducts.data).flat();
      setProducts(productsArr);
      setPagesCount(totalPagesCount);
    })();
  }, [searchParams, pagesCount]);

  const getInitialSearchParams = () => {
    if (!searchParams.get('page')) {
      searchParams.set('page', 1);
      setSearchParams(searchParams);
      return { page: 1 };
    }
    return {
      page: parseInt(searchParams.get('page'), 10),
    };
  };

  useEffect(() => {
    const { page } = getInitialSearchParams();
    setCurrPage(page);
  }, []);

  const setNewSearchParams = (newSearchParams) => {
    newSearchParams.forEach(({ prevKey, key, value }) => {
      if (!prevKey) searchParams.delete(prevKey);
      searchParams.set(key, value);
    });
    setSearchParams(searchParams);
  };

  const handleChange = (_, value) => {
    window.scrollTo(0, 0);
    setCurrPage(value);
    setNewSearchParams([
      { key: 'page', value },
    ]);
  };

  return {
    products, pagesCount, currPage, handleChange,
  };
};

export default useProducts;
