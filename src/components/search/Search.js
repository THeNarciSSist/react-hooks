import React, { useState, useContext, useMemo } from "react"
import "./search.css"
import { ContactsContext } from "../../App.js"
import CreateContactsList from "../contacts/Contacts.js"

export const searchListContext = React.createContext()
let searchList = []

function SearchUser() {
  const [value, setValue] = useState("")
  const contacts = useContext(ContactsContext)

  const newList = useMemo(() => {
    if (!value) searchList = contacts
    else if (value) {
      searchList = contacts.filter((contact) => {
        return (
          contact.firstName.includes(value[0].toUpperCase() + value.slice(1)) ||
          contact.lastName.includes(value[0].toUpperCase() + value.slice(1)) ||
          contact.phone.includes(value)
        )
      })
    }
  }, [value, contacts])

  return (
    <>
      <searchListContext.Provider value={searchList}>
        <div className="search-box">
          <input
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="text"
            placeholder="type contact name or num"
            className="search"
          ></input>
        </div>
        <h1>{newList}</h1>
        <CreateContactsList />
      </searchListContext.Provider>
    </>
  )
}

export default SearchUser
