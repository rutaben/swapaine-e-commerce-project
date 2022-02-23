/* eslint-disable */

import React, {
  useState, useEffect, createContext, useMemo,
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
  const [products, setProducts] = useState(initialProducts);
  const [filters, setFilters] = useState(initialFilters);
  //console.log(filters)

  //console.log(searchParams)

  useEffect(() => {
    (async () => {
      const params = createUrlParamObj(searchParams);
      const getProducts = await ApiService.getProducts(params);
      const productsArr = Object.values(getProducts);
      setProducts(productsArr[0]);
    })();
  }, [filters]);

  const filtersArrToObj = ([
    brand, category, color, size,
  ]) => ({
    brand,
    category,
    color,
    size,
  });


  //1) parsisiunciau filtrus is serverio
  useEffect(() => {
    (async () => {
      const getFilters = await Promise.all([
        ApiService.getBrands(),
        ApiService.getCategories(),
        ApiService.getColors(),
        ApiService.getSizes(),
      ]);
      try {
        const initFiltersValues = getFilters.map(filter => Object.values(filter)).flat()
        const filtersObj = filtersArrToObj(initFiltersValues);

        const queryParams = createUrlParamObj(searchParams);
        //console.log(queryParams);

        const koreikia = Object.entries(queryParams);
        const options = [];
        koreikia.forEach(([filterName, paramValue]) => {
          const ids = [].concat(paramValue);
          ids.forEach((id) => {
            const foundOption = filtersObj[filterName].find((x) => x.id === id)
            options.push(foundOption);
          })
        })
        const onlyIds = options.map(({id}) => id);

          const aha = Object.entries(filtersObj)
            .map(([key, value]) => ({
              [key]: value.map((filter) => {
              if(onlyIds.indexOf(filter.id) !== -1) {
              return ({
                ...filter, 
                selected: true 
              })
            } else {
              return ({
                ...filter, 
                selected: false 
              })
            }
            })
            }));
  
            const syncedFiltersValues = aha.map(filter => Object.values(filter)).flat()
            const syncedFiltersObj = filtersArrToObj(syncedFiltersValues);

        //console.log(syncedFiltersObj)

  //3 nustaciau pradinius filtrus
        setFilters(syncedFiltersObj);
      } catch (err) {
        throw new Error(err);
      }
    })();
  }, []);

  const updateQueryParamsWithNewFilters = (newFilters) => {
    let values = [];
    Object.entries(newFilters).forEach(([filterName, valueArr]) => 
      values.push(valueArr.map((obj) => ({ ...obj, filterName})))
    );

  // 8) pakeiciu filtrus taip, kad galeciau su jais sukurti nauja urlParam objekta
    

    const transformedVals = values.flat().filter((obj) => obj.selected).map(({id, filterName}) => ({
      key: filterName,
      value: id
    }));

    const newQueryParams = createUrlParamObj(searchParams, transformedVals);
  // 9) nustatau url parametrus pagal naujus filtrus
    setSearchParams(newQueryParams);
    
  };

  // 4) pasirinkus filtra vykdosi filtro pakeitimas
  const handleFilterChange = (e, selectedOptions, filterName) => {
    // 5) istrinu filtra is paramsu, jei jau buvo (ir nekursiu naujo)
    searchParams.delete(filterName);
    //console.log(e)

    console.log('--------------------------');
    console.log('--------------------------');
    console.log(filters[filterName]);
    console.log({ selectedOptions , e});
    console.log('--------------------------');

  
    const changeSelected = selectedOptions.map((option) => ({...option, selected: true}));
    
    //console.log(selectedOptions)
    
    
    const updatedFilter = filters[filterName]
    .map((obj) => changeSelected.find((o) => o.id === obj.id) || obj)

    let newFilters;
    newFilters = {...filters, [filterName]: updatedFilter};
  
  // 6) nustatau naujus filtrus
    setFilters(newFilters);
  //7) pagal atnaujintis filtrus pakeiciu url parametrus
    updateQueryParamsWithNewFilters(newFilters);
  };

  const providerValue = useMemo(() => ({
    products,
    filters,
    handleFilterChange,
  }), [products, filters]);

  return (
    <ProductContext.Provider value={providerValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
