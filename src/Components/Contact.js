import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contact extends Component {

   static defaultProps = {
      center: {
         lat: -0.182588,
         lng: -78.478577
      },
      zoom: 18
   };

   render() {

      if (this.props.data) {
         var name = this.props.data.name
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
      }

      return (
         <section id="contact">
            <div className="row">

               <div className="six columns main-col">
                  <h2>Contact Details</h2>
                  <p className="address">
                     <span>{name}</span><br />
                     <span>City: {city}<br />
                        State: {state}, ZIP: {zip}
                     </span><br />
                     <span>Telephone: {phone}</span><br />
                     <span>Email: <a href="mailto:cris_ldu96@yahoo.es">{email}</a></span>
                  </p>
               </div>
               <div className="six columns" style={{ height: '50vh', width: '50%' }}>
                  <GoogleMapReact
                     defaultCenter={this.props.center}
                     defaultZoom={this.props.zoom}
                  >
                     <AnyReactComponent
                        lat={-0.182588}
                        lng={-78.478577}
                        text="Oficinas"
                     />
                  </GoogleMapReact>
               </div>
            </div>

         </section>
      );
   }
}

export default Contact;
