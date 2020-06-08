import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var clients = this.props.data.clients.map(function(clients){
        var clientImage = 'images/portfolio/'+clients.image;
        return <div key={clients.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={clients.url} title={clients.title}>
               <img alt={clients.title} src={clientImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{clients.title}</h5>
                     <p>{clients.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h2>Our clients</h2>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {clients}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
