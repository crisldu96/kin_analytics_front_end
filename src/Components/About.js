import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.history;
      }

      return (
         <section id="about">
            <div className="row">

               <div className="four columns">
                  <h2>About Us</h2>
                  <p>{bio}</p>
               </div>
               <div className="eigth columns main-col">
                  <div className="row item">
                     <div className="twelve columns">
                        <img className="pic" src={profilepic} alt="logo 3 Pic" />
                     </div>

                  </div>
               </div>
            </div>
         </section>
      );
   }
}

export default About;
