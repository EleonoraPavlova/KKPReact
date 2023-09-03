export type userType = {
  name: string
  hair: number
  address: { city: string, house?: number }
}

export type LaptopType = {
  title: string
}

export type userTypeWithLaptop = userType & {
  laptop: LaptopType
}

export type userTypeWithBooks = userType & {
  books: string[]
}

export type withCompaniesType = {
  companies: companyType[]
}

export type companyType = {
  id: number,
  title: string
}

export function makeHairStyle(u: userType, power: number) {
  const copy = { ...u, hair: u.hair / power }
  // сначала делается копия, потом переопред свойства
  //...u - это поверхностная копия!(все вложенности будут мссылки на оригинал)
  return copy
}

export function moveUser(u: userTypeWithLaptop, city: string) {
  return { ...u, address: { ...u.address, city: city } } //положили старые значения 
  //и потом ПЕРЕЗАТИРАЮ новые
}

export function moveUserChangeHouse(u: userTypeWithLaptop & userTypeWithBooks, house: number) {
  return { ...u, address: { ...u.address, house: house } } //положили старые значения 
  //и потом ПЕРЕЗАТИРАЮ новые
}

export function upgradeUserLaptop(u: userTypeWithLaptop, title: string) {
  return { ...u, laptop: { ...u.laptop, title: title } } //положили старые значения 
}

export function addNewBooks(u: userTypeWithLaptop & userTypeWithBooks, newbooks: string[]) {
  return { ...u, books: [...u.books.concat(newbooks)] } //положили старые значения и новое
}

export function updateJsBookTs(u: userTypeWithLaptop & userTypeWithBooks, oldValue: string, newValue: string) {
  return { ...u, books: u.books.map(b => b === oldValue ? newValue : b) }
}

export function removeBook(u: userTypeWithLaptop & userTypeWithBooks, targetValue: string) {
  return { ...u, books: u.books.filter(b => b !== targetValue) }
}

export function addCompaniesUser(u: withCompaniesType, id: number, title: string) {
  return {
    ...u, companies: [{ id: id, title: title }, ...u.companies]
  }
}

export function updateCompaniesUser(u: withCompaniesType, id: number, title: string) {
  return {
    ...u, companies: u.companies.map(c => c.id === id ? { ...c, title: title } : c)
  }
}

export function updateCompaniesUser2(companies: { [key: string]: companyType[] }, key: string, id: number, title: string) {
  return {
    ...companies, [key]: companies[key].map(c => c.id === id ? { ...c, title: title } : c)
  }
}
