import React, { useId } from "react"
import "./contacts.css"
import maleImg from "../../img/male.png"
import femaleImg from "../../img/female.png"

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
              {contact.gender === "male" ? (
                <img alt="male" src={maleImg} className="gender-img"></img>
              ) : contact.gender === "female" ? (
                <img alt="female" src={femaleImg} className="gender-img"></img>
              ) : (
                <h5>Unknown</h5>
              )}
              <h5 className="number">{contact.phone}</h5>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default CreateContactsList
