import React, { useId, useContext } from "react"
import "./contacts.css"
import { searchListContext } from "../search/Search"

function CreateContactsList() {
  let searchList = useContext(searchListContext)
  console.log(searchList)
  const id = useId()
  return (
    <>
      <ul className="contacts-list">
        {searchList.map((contact) => {
          return (
            <li id={id + "contact-item"} className="contacts-item">
              <h4 id={id + "name"} className="name">
                {contact.firstName} {contact.lastName}
              </h4>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default CreateContactsList
