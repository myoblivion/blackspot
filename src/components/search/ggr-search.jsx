import React, { useState, useEffect, useRef, LinkProps } from "react";




const CONTACTS = [
  {
     id: 1,
     name: "Game Guide",
     to: "/ggr-guide-list",
     span: "New to Gogo Racing? Here is everything you need to know about the game!",
     image: "../images/gogoracingbackground/catto.png",
   },
   {
     id: 2,
     name: "Game Guide",
     to: "/gogoracing-guide",
     span: "New to Gogo Racing? Here is everything you need to know about the game!",
     image: "../images/gogoracingbackground/catto.png",
   },
   {
     id: 3,
     name: "Account Linking",
     to: "/ggr-account-linking",
     span: "Here's a guide about how you can link your account.",
     image: "../images/gogoracingbackground/catto.png",
   },
   {
     id: 4,
     name: "Purchase & Linking Guide",
     to: "/ggr-purchase-guide",
     span: "This will guide you on how to purchase items in GoGo Racing using different types of payment method.",
     image: "../images/gogoracingbackground/catto.png",
   },
   {
     id: 5,
     name: "Updates",
     to: "/ggr-update-list",
     span: "Keep updated with Gogo Racing!",
     image: "../images/gogoracingbackground/catto.png",
   },
   {
     name: "1.0.3 Patch Note",
     to: "/ggr-patch3",
     span: "04.04.2022",
     image: "../images/gogoracingbackground/catto.png",
   },
   {
     id: 6,
     name: "1.0.2 Patch Note",
     to: "/ggr-patch2",
     span: "03.25.2022",
     image: "../images/gogoracingbackground/catto.png",
   },
   {
     id: 7,
     name: "1.0.1 Patch Note",
     to: "/ggr-updates",
     span: "03.23.2022",
     image: "../images/gogoracingbackground/catto.png",
   },
 ];

const GogoRacingSearch = ({ props, ref, currentRoute }) => {
  class Contact extends React.Component {
    render() {
      return <li className='Contact'>
              <img className='Contact_image' src={this.props.image} />
              <div className='Contact_info'>
                <div className='Contact_name'>{this.props.name}</div> 
                <div className='Contact_number'>{this.props.span}</div> 
              </div>           
             </li> 
    }
  }
  return (
    

     class ContactsList extends React.Component {
       constructor(props) {
         super(props);
         this.handleSearch = this.handleSearch.bind(this);
         this.state = {displayedContacts: CONTACTS};
       }
       handleSearch(e) {
         // console.log(e.target.value);
         var searchQuery = e.target.value.toLowerCase();
         var displayedContacts = CONTACTS.filter(function(el) {
           var searchValue = el.name.toLowerCase();
           return searchValue.indexOf(searchQuery) !== -1;
         });
         this.setState({displayedContacts: displayedContacts});
       }
       render() {
         return (
           <div className='ContactsList'>
             <input className='ContactsList_search' type='text' placeholder="Search..." onChange={this.handleSearch} />
             <ul className='ContactsList_ul'>
               {
                 this.state.displayedContacts.map(function(el) {
                   return <Contact 
                            key={el.id} 
                            name={el.name}
                            span={el.span}
                            image={el.image}
                            />;
                 })
               }
             </ul>
           </div>
         ); 
       }
     }
  )
}
export default GogoRacingSearch;