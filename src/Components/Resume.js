import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var banking = this.props.data.banking.map(function(banking){
        return <div key={banking.field}><h3>{banking.field}</h3>
        <p className="info"><span>&bull;</span>{banking.details}</p>
        <p>{banking.description}</p></div>
      })
      var sports = this.props.data.sports.map(function(sports){
        return <div key={sports.strategy}><h3>{sports.strategy}</h3>
            <p className="info"><span>&bull;</span>{sports.title} </p>
            <p className="newline">{sports.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
      var projectImage = 'images/tech/'+skills.image;
        return <div key={skills.name} className="columns feature-item">
                  <img className='skill' alt={skills.name} src={projectImage} />
                  <h5>{skills.name}</h5>
                  <p>{skills.description}</p>
               </div>
      })
    }

    return (
      <section id="services">

      <div className="row banking">
         <div className="three columns header-col">
            <h1><span>Financial services</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {banking}
               </div>
            </div>
         </div>
      </div>


      <div className="row sports">

         <div className="three columns header-col">
            <h1><span>Kin sports</span></h1>
         </div>

         <div className="nine columns main-col">
          {sports}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Software development</span></h1>
         </div>

         <div>
           <div className="nine columns main-col"><p className="lead center">{skillmessage}</p></div>
				   <ul className="bgrid-quarters s-bgrid-thirds cf">
					  {skills}
					 </ul>
			  </div>
      </div>
   </section>
    );
  }
}

export default Resume;
