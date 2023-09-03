import {
  addCompaniesUser,
  addNewBooks,
  companyType,
  makeHairStyle,
  moveUser,
  moveUserChangeHouse,
  removeBook,
  updateCompaniesUser,
  updateCompaniesUser2,
  updateJsBookTs,
  upgradeUserLaptop,
  userType,
  userTypeWithBooks,
  userTypeWithLaptop,
  withCompaniesType
} from "./immutability";

//НЕ НУЖНОГ ДЕЛАТЬ КОПИЮ ТОГО, ЧТО МЫ НЕ МЕНЯЕМ!


test("reference type test", () => {
  let user: userType = {
    name: "Eleonora",
    hair: 32,
    address: {
      city: "Kyiv",
      house: 12
    }
  }
  const cutUser = makeHairStyle(user, 2)

  user.address.city = "Spain"

  expect(user.hair).toBe(32)
  expect(cutUser.hair).toBe(16)
  expect(cutUser.address).toBe(user.address)
})


test("change adreess", () => {
  let user: userTypeWithLaptop = {
    name: "Eleonora",
    hair: 32,
    address: {
      city: "Kyiv",
      house: 12
    },
    laptop: {
      title: "Zenbook"
    }
  }
  const movedUser = moveUser(user, "Barselona")

  expect(user).not.toBe(movedUser)
  expect(user.address).not.toBe(movedUser.address)
  expect(user.laptop).toBe(movedUser.laptop)
  expect(movedUser.address.city).toBe("Barselona")
})



test("upgrade laptop to macbook", () => {
  let user: userTypeWithLaptop = {
    name: "Eleonora",
    hair: 32,
    address: {
      city: "Kyiv",
      house: 12
    },
    laptop: {
      title: "Zenbook"
    }
  }
  const upgradeUser = upgradeUserLaptop(user, "macbook")

  expect(user).not.toBe(upgradeUser)
  expect(user.address).toBe(upgradeUser.address)
  expect(user.laptop).not.toBe(upgradeUser.laptop)
  expect(upgradeUser.laptop.title).toBe("macbook")
  expect(user.laptop.title).toBe("Zenbook")
})


test("change house", () => {
  let user: userTypeWithLaptop & userTypeWithBooks = {
    name: "Eleonora",
    hair: 32,
    address: {
      city: "Kyiv",
      house: 12
    },
    laptop: {
      title: "Zenbook"
    },
    books: ["css", "html", "js", "react"]

  }
  const changeHouseUser = moveUserChangeHouse(user, 99)

  expect(user).not.toBe(changeHouseUser)
  expect(user.books).toBe(changeHouseUser.books)
  expect(user.laptop).toBe(changeHouseUser.laptop)
  expect(changeHouseUser.address.house).toBe(99)
})

test("add new books to user", () => {
  let user: userTypeWithLaptop & userTypeWithBooks = {
    name: "Eleonora",
    hair: 32,
    address: {
      city: "Kyiv",
      house: 12
    },
    laptop: {
      title: "Zenbook"
    },
    books: ["css", "html", "js", "react"]

  }
  const addNewBooksUser = addNewBooks(user, ["ts", "rest api"])

  expect(user).not.toBe(addNewBooksUser)
  expect(user.books).not.toBe(addNewBooksUser.books)
  expect(user.laptop).toBe(addNewBooksUser.laptop)
  expect(addNewBooksUser.books[1]).toBe("html")
  expect(addNewBooksUser.books[4]).toBe("ts")
  expect(user.books.length).toBe(4) //исходный массив не был мутирован!!
  expect(addNewBooksUser.books.length).toBe(6)
})

test("update js book to ts", () => {
  let user: userTypeWithLaptop & userTypeWithBooks = {
    name: "Eleonora",
    hair: 32,
    address: {
      city: "Kyiv",
      house: 12
    },
    laptop: {
      title: "Zenbook"
    },
    books: ["css", "html", "js", "react"]
  }
  const updateBook = updateJsBookTs(user, "js", "ts")

  expect(user).not.toBe(updateBook)
  expect(user.books).not.toBe(updateBook.books)
  expect(user.books[2]).not.toBe(updateBook.books[2])
  expect(updateBook.books[2]).toBe("ts")
  expect(user.books.length).toBe(4) //исходный массив не был мутирован!!
  expect(updateBook.books.length).toBe(4)
})

test("remove js book", () => {
  let user: userTypeWithLaptop & userTypeWithBooks = {
    name: "Eleonora",
    hair: 32,
    address: {
      city: "Kyiv",
      house: 12
    },
    laptop: {
      title: "Zenbook"
    },
    books: ["css", "html", "js", "react"]
  }
  const removeBookUser = removeBook(user, "js")

  expect(user).not.toBe(removeBookUser)
  expect(user.books).not.toBe(removeBookUser.books)
  expect(user.books[2]).not.toBe(removeBookUser.books[2])
  expect(removeBookUser.books[2]).toBe("react")
  expect(removeBookUser.books.length).toBe(3)
})

test("companies", () => {
  let user: userTypeWithLaptop & withCompaniesType = {
    name: "Eleonora",
    hair: 32,
    address: {
      city: "Kyiv",
      house: 12
    },
    laptop: {
      title: "Zenbook"
    },
    companies: [{ id: 1, title: "Epam" }, { id: 2, title: "Facebook" }]
  }
  const companiesUser = addCompaniesUser(user, 3, "Google") as userTypeWithLaptop & withCompaniesType

  expect(user).not.toBe(companiesUser)
  expect(user.address).toBe(companiesUser.address)
  expect(user.companies.length).toBe(2)
  expect(user.companies).not.toBe(companiesUser.companies)
  expect(companiesUser.companies.length).toBe(3)
  expect(companiesUser.companies[0].id).toBe(3)
  expect(companiesUser.companies[0].title).toBe("Google")
})

test(" update company", () => {
  let user: userTypeWithLaptop & withCompaniesType = {
    name: "Eleonora",
    hair: 32,
    address: {
      city: "Kyiv",
      house: 12
    },
    laptop: {
      title: "Zenbook"
    },
    companies: [{ id: 1, title: "Epam" }, { id: 2, title: "Facebook" }]
  }
  const updateCompanies = updateCompaniesUser(user, 1, "Nike")

  expect(user).not.toBe(updateCompanies)
  expect(user.companies.length).toBe(2)
  expect(updateCompanies.companies.length).toBe(2)
  expect(user.companies).not.toBe(updateCompanies.companies)
  expect(updateCompanies.companies[0].title).toBe("Nike")
  expect(updateCompanies.companies[1].title).toBe("Facebook")
})




test("update company 2 method", () => {
  let companies: { [key: string]: companyType[] } = {
    "onekey": [{ id: 1, title: "Epam" }, { id: 2, title: "Facebook" }],
    "twokey": [{ id: 1, title: "Reebok" }]
  }

  const updateCompanies2 = updateCompaniesUser2(companies, "onekey", 1, "Nike")


  expect(updateCompanies2["onekey"]).not.toBe(companies["onekey"]) //копия не должна быть как оригинал
  expect(updateCompanies2["twokey"]).toBe(companies["twokey"])
  expect(updateCompanies2["onekey"][0].title).toBe("Nike")
})
