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
  const [currPage, setCurrPage] = useState(1);

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
      const fetchedFilters = await Promise.all([
        ApiService.getBrands(),
        ApiService.getCategories(),
        ApiService.getColors(),
        ApiService.getSizes(),
      ]);
      console.log(fetchedFilters);

      try {
        const initFiltersValues = fetchedFilters.map((filter) => Object.values(filter)).flat();
        const filtersObj = filtersArrToObj(initFiltersValues);

        const urlParams = createUrlParamObj(searchParams);
        const urlParamObjEntries = Object.entries(urlParams);

        const filtersOptionsFromUrl = [];
        urlParamObjEntries.forEach(([filterName, paramValue]) => {
          const urlParamObjValueArr = [].concat(paramValue);
          urlParamObjValueArr.forEach((id) => {
            if (filtersObj[filterName]) {
              const foundOption = filtersObj[filterName].find((x) => x.id === id);
              filtersOptionsFromUrl.push(foundOption);
            }
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
        console.log(filtersOptionsIdsFromUrl);

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
      searchParams.delete(filterName);
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
    if (!foundSelectedOption.selected) {
      foundSelectedOption.selected = true;
    } else { foundSelectedOption.selected = false; }

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
      const productsArr = Object.values(getProducts.data).flat();
      setProducts(productsArr);
      setPagesCount(totalPagesCount);
    })();
  }, [filters, searchParams, pagesCount]);

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

  const providerValue = useMemo(() => ({
    filters,
    handleFilterChange,
    products,
    pagesCount,
    currPage,
    handleChange,
  }), [products, filters]);

  return (
    <ProductContext.Provider value={providerValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
