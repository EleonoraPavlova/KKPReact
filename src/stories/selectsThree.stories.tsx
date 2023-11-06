import React, { useCallback, useEffect, useMemo, useState } from "react";
import SelectComponent from "../components/select/SelectComponent";
import { v1 } from "uuid";
import Box from "@mui/system/Box";
import Button from "@mui/material/Button";
import { SelectChangeEvent } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';

//Select не пересировывается лишние разы!

export default {
  title: "SelectsThree",
  component: SelectComponent,
}

export type regionType = 0 | 1 | 2 | 3

export type citiesType = {
  [x: string]: any;
  id: string
  city: string
  population: number
  region: regionType
}

export type ActiveFilterType = keyof citiesType //сделать ключи строками

const cities: citiesType[] = [
  { id: v1(), city: "All", population: 0, region: 0 },
  { id: v1(), city: "Cambridge", population: 900, region: 1 },
  { id: v1(), city: "Oxford", population: 960, region: 2 },
  { id: v1(), city: "Liverpool", population: 660, region: 2 },
  { id: v1(), city: "St.Davids", population: 60, region: 2 },
  { id: v1(), city: "Oldham", population: 140, region: 3 },
  { id: v1(), city: "Worcester", population: 182, region: 3 },
  { id: v1(), city: "London", population: 1082, region: 1 },
  { id: v1(), city: "Manchester", population: 102, region: 3 },
]

const SelectComponentMemo = React.memo(SelectComponent) //не перезапускает перерендер, если не произошло изменений!


export const SelectsThree = () => {
  console.log("SelectsThree")

  const [counter, setCounter] = useState(0)
  const [m, setM] = useState<string>("")

  const [population, setPopulation] = useState<number | undefined>()
  const [region, setRegion] = useState<number | undefined>()
  const [activeFilter, setActiveFilter] = useState<ActiveFilterType>()
  const [drawCities, setDrawCities] = useState<citiesType[]>(cities)


  const onChangeHandlerCity = useCallback((e: SelectChangeEvent<string>) => {
    setM(e.target.value)
    setActiveFilter('city')
  }, [])

  const onChangeHandlerPopulation = useCallback((e: SelectChangeEvent<string>) => {
    setPopulation(+e.target.value)
    setActiveFilter('population')
  }, [])

  const onChangeHandlerRegion = useCallback((e: SelectChangeEvent<string>) => {
    setRegion(+e.target.value)
    setActiveFilter('region')
  }, [])


  useEffect(() => {
    if (activeFilter) {
      const filteredCities = citiesFilters(activeFilter);
      setDrawCities(filteredCities);
    }
    return () => setDrawCities(cities)
  }, [activeFilter, m, region, population])

  const mappedCities = useMemo(() => {

    return drawCities.map(c => <MenuItem key={c.id} value={c.city} >
      <Box sx={{ paddingRight: "12px" }}><strong>Id: </strong>  {c.id}</Box>
      <Box sx={{ paddingRight: "12px" }}><strong>City:</strong>  {c.city}</Box>
      <Box sx={{ paddingRight: "12px" }}><strong>Population:</strong>  {c.population}</Box>
      <Box sx={{ paddingRight: "12px" }}><strong>Region:</strong>  {c.region}</Box>
    </MenuItem >)
  }, [drawCities])

  const citiesFilters = useCallback((name: ActiveFilterType): citiesType[] => {
    if (name === "city") {
      return cities.filter((c: citiesType) => c.city.toLocaleLowerCase().includes("m"))
    }
    if (name === 'region') {
      return [...cities].sort((a, b) => a.region - b.region).filter(p => p.region === region)
    }
    if (name === 'population' && population) {
      return [...cities].sort((a, b) => a.population - b.population).filter(p => p.population >= population)
    }
    return cities
  }, [cities, activeFilter])

  const searchUniqueRegions = () => {
    return cities.reduce<{ id: string; region: regionType }[]>((acc, curr) => {
      if (!acc.some(item => item.region === curr.region)) {
        acc.push({ id: curr.id, region: curr.region });
      }
      return acc;
    }, []);
  }

  const itemsRenderInSelect = useCallback((name: ActiveFilterType) => {
    if (name === "city") {
      return citiesFilters(name).map(c => <MenuItem key={c.id} value={c.city} > City: {c.city} </MenuItem >)
    }
    if (name === "region") {
      return searchUniqueRegions().map(c => <MenuItem key={c.id} value={c.region} > Region:  {c.region} </MenuItem >)
    }
    if (name === "population") {
      return cities.map(c => <MenuItem key={c.id} value={c.population} > Population :  {c.population} </MenuItem >)
    }
  }, [])


  return (
    <>
      <Box sx={{ p: "5px" }}>
        <Button variant="outlined" color="success" onClick={() => setCounter(counter + 1)} sx={{ margin: "5px" }} >+</Button>
        {counter}
      </Box >
      <Box sx={{ p: "10px" }}>
        All cities: {mappedCities.length} {mappedCities}
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", margin: "10px" }}>
        <SelectComponentMemo value={m} onChange={onChangeHandlerCity} label="hasMletter"
          name="city" itemsRenderInSelect={itemsRenderInSelect} />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", margin: "10px" }}>
        <SelectComponentMemo value={population ? population.toString() : ""} onChange={onChangeHandlerPopulation} label="population"
          name="population" itemsRenderInSelect={itemsRenderInSelect} />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", margin: "10px" }}>
        <SelectComponentMemo value={region ? region.toString() : ""} onChange={onChangeHandlerRegion} label="region"
          name="region" itemsRenderInSelect={itemsRenderInSelect} />
      </Box>
    </>
  )
}