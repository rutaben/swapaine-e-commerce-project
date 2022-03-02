import React, {
  useState,
  useEffect,
  createContext,
  useMemo,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import { createUrlParamObj } from '../../../helpers/url-helpers';
import ApiService from '../../../services/api-service';

const initialProducts = [];
const initialFilters = {
  brand: [],
  category: [],
  color: [],
  size: [],
};

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState(initialFilters);
  const [products, setProducts] = useState(initialProducts);
  const [pagesCount, setPagesCount] = useState(1);
  const [productGridPage, setProductGridPage] = useState(1);

  // filters

  const filtersArrToObj = ([
    brand, category, color, size,
  ]) => ({
    brand,
    category,
    color,
    size,
  });

  useEffect(() => {
    (async () => {
      const getFilters = await Promise.all([
        ApiService.getBrands(),
        ApiService.getCategories(),
        ApiService.getColors(),
        ApiService.getSizes(),
      ]);
      try {
        const initFiltersValues = getFilters.map((filter) => Object.values(filter)).flat();
        const filtersObj = filtersArrToObj(initFiltersValues);

        // jeigu imu search paramsus su page savybe, susigadina filtrai;
        if (searchParams.get('page')) {
          searchParams.delete('page');
        }

        const urlParams = createUrlParamObj(searchParams);
        const urlParamObjEntries = Object.entries(urlParams);
        const filtersOptionsFromUrl = [];
        urlParamObjEntries.forEach(([filterName, paramValue]) => {
          const urlParamObjValueArr = [].concat(paramValue);
          urlParamObjValueArr.forEach((id) => {
            const foundOption = filtersObj[filterName].find((x) => x.id === id);
            filtersOptionsFromUrl.push(foundOption);
          });
        });
        const filtersOptionsIdsFromUrl = filtersOptionsFromUrl.map(({ id }) => id);

        const setSelectedOptionsFromUrl = Object.entries(filtersObj)
          .map(([key, value]) => ({
            [key]: value.map((filter) => {
              if (filtersOptionsIdsFromUrl.indexOf(filter.id) !== -1) {
                return ({
                  ...filter,
                  selected: true,
                });
              }
              return ({
                ...filter,
                selected: false,
              });
            }),
          }));

        const syncedFiltersValues = setSelectedOptionsFromUrl
          .map((filter) => Object.values(filter))
          .flat();
        const syncedFiltersObj = filtersArrToObj(syncedFiltersValues);

        setFilters(syncedFiltersObj);
      } catch (err) {
        throw new Error(err);
      }
    })();
  }, []);

  const updateUrlParamsWithNewFilters = (newFilters) => {
    const newValuesArr = [];
    Object.entries(newFilters).forEach(([filterName, valueArr]) => {
      newValuesArr.push(valueArr.map((obj) => ({ ...obj, filterName })));
    });
    const transformedValues = newValuesArr
      .flat()
      .filter((obj) => obj.selected)
      .map(({ id, filterName }) => ({
        key: filterName,
        value: id,
      }));

    const newUrlParams = createUrlParamObj(searchParams, transformedValues);
    setSearchParams(newUrlParams);
  };

  const handleFilterChange = (selectedOption, filterName) => {
    const newFilter = [...filters[filterName]];
    const foundSelectedOption = newFilter.find((x) => x.id === selectedOption.id);
    if (foundSelectedOption) {
      foundSelectedOption.selected = true;
    }

    const newFilters = {
      ...filters,
      [filterName]: newFilter,
    };

    setFilters(newFilters);
    updateUrlParamsWithNewFilters(newFilters);
  };

  // products

  useEffect(() => {
    (async () => {
      const params = createUrlParamObj(searchParams);
      const getProducts = await ApiService.getProducts(params);
      const totalPagesCount = getProducts.totalPages;
      const currPage = getProducts.currentPage;
      const productsArr = Object.values(getProducts.data).flat();
      setProducts(productsArr);
      setPagesCount(totalPagesCount);
      setProductGridPage(currPage);
    })();
  }, [filters, searchParams, pagesCount]);

  const getInitialSearchParams = () => {
    if (!searchParams.get('page')) {
      searchParams.set('page', { productGridPage });
      setSearchParams(searchParams);
      return { page: { productGridPage } };
    }
    return {
      page: parseInt(searchParams.get('page'), 10),
    };
  };

  useEffect(() => {
    const { page } = getInitialSearchParams();
    setProductGridPage(page);
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
    setProductGridPage(value);
    setNewSearchParams([
      { key: 'page', value },
    ]);
  };

  const providerValue = useMemo(() => ({
    filters,
    handleFilterChange,
    products,
    pagesCount,
    productGridPage,
    handleChange,
  }), [products, filters]);

  return (
    <ProductContext.Provider value={providerValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
