import React, { useState, useContext, useMemo } from "react"
import "./search.css"
import { ContactsContext } from "../../App.js"
import CreateContactsList from "../contacts/Contacts.js"

let searchList
function SearchUser() {
  const [value, setValue] = useState("")
  const [checkMale, setCheckMale] = useState(true)
  const [checkFemale, setCheckFemale] = useState(true)
  const [checkUndef, setCheckUndef] = useState(true)
  const contacts = useContext(ContactsContext)

  useMemo(() => {
    searchList = []

    const checkboxContactsObj = {
      male: checkMale,
      female: checkFemale,
    }

    for (let gender in checkboxContactsObj) {
      if (checkboxContactsObj[gender]) {
        searchList.push(
          ...contacts.filter((contact) => {
            return contact.gender === gender
          })
        )
      }
    }

    if (checkUndef) {
      searchList.push(
        ...contacts.filter((contact) => {
          return contact.gender === undefined
        })
      )
    }

    if (value) {
      searchList = searchList.filter((contact) => {
        return (
          contact.firstName.includes(value[0].toUpperCase() + value.slice(1)) ||
          contact.lastName.includes(value[0].toUpperCase() + value.slice(1)) ||
          contact.phone.includes(value)
        )
      })
    }
  }, [value, contacts, checkMale, checkFemale, checkUndef])

  return (
    <>
      <div className="search-box">
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          placeholder="type contact name or num"
          className="search"
        ></input>
        <div className="checkbox-block">
          <div>
            <input
              defaultChecked={checkMale}
              onChange={() => setCheckMale(!checkMale)}
              type="checkbox"
              id="male"
              name="male"
            ></input>
            <label htmlFor="male">male</label>
          </div>
          <div>
            <input
              defaultChecked={checkFemale}
              onChange={() => setCheckFemale(!checkFemale)}
              type="checkbox"
              id="female"
              name="female"
            ></input>
            <label htmlFor="female">female</label>
          </div>
          <div>
            <input
              defaultChecked={checkUndef}
              onChange={() => setCheckUndef(!checkUndef)}
              type="checkbox"
              id="not specified"
              name="not specified"
            ></input>
            <label htmlFor="not specified">not specified</label>
          </div>
        </div>
      </div>

      <CreateContactsList list={searchList} />
    </>
  )
}

export default SearchUser
