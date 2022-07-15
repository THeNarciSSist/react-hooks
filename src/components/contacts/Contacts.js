import React, { useId } from "react"
import "./contacts.css"

function CreateContactsList(props) {
  const id = useId()
  return (
    <>
      <ul className="contacts-list">
        {props.list.map((contact) => {
          return (
            <li id={id + "contact-item"} className="contacts-item">
              <h4 id={id + "name"} className="name">
                {contact.firstName} {contact.lastName}
              </h4>
              <h5 className="number">{contact.phone}</h5>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default CreateContactsList
