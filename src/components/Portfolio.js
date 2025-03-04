import React, { Component } from 'react';
import './Portfolio.css';

export default class Portfolio extends Component {
  handleClick = (images, projectName, description, githubUrl) => {
    const projectDetails = `
      <html>
        <head>
          <title>${projectName}</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              margin: 0;
              background: #0a192f;
              color: #8892b0;
            }
            .container { 
              max-width: 1000px; 
              margin: 0 auto;
              padding: 40px 20px;
            }
            .project-title {
              color: #ccd6f6;
              margin-bottom: 20px;
            }
            .project-description {
              margin-bottom: 30px;
              line-height: 1.5;
            }
            .image-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 20px;
              margin-bottom: 30px;
            }
            .project-image { 
              width: 100%;
              border-radius: 4px;
              transition: transform 0.3s ease;
            }
            .project-image:hover {
              transform: scale(1.02);
            }
            .github-link { 
              display: inline-flex;
              align-items: center;
              text-decoration: none;
              color: #64ffda;
              padding: 10px 20px;
              border: 1px solid #64ffda;
              border-radius: 4px;
              transition: background-color 0.3s ease;
            }
            .github-link:hover {
              background-color: rgba(100, 255, 218, 0.1);
            }
            .github-icon {
              width: 24px;
              height: 24px;
              margin-right: 10px;
              filter: invert(91%) sepia(14%) saturate(2094%) hue-rotate(95deg) brightness(97%) contrast(97%);
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1 class="project-title">${projectName}</h1>
            <p class="project-description">${description}</p>
            <div class="image-grid">
              ${images.map(img => `
                <img src="${img}" alt="Project Preview" class="project-image"/>
              `).join('')}
            </div>
            <a href="${githubUrl}" target="_blank" class="github-link">
              <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
                   class="github-icon" alt="GitHub"/>
              View Project on GitHub
            </a>
          </div>
        </body>
      </html>
    `;

    const newWindow = window.open();
    newWindow.document.write(projectDetails);
  };

  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              
              {/* Card 1 */}
              <div className="columns portfolio-item">
                <div className="item-wrap" 
                     onClick={() => this.handleClick(
                       [
                         "/images/portfolio/project-1.jpg",
                         "/images/portfolio/project1-2.png",
                        //  "/images/portfolio/project-1-3.jpg"
                       ],
                       "Simple Login Page",
                       "A login page using Spring Boot and PostgreSQL for database management. Features secure authentication and RESTful API endpoints.",
                       "https://github.com/ben-24-0/spring-boot-login"
                     )}>
                  <div className="portfolio-item-content">
                    <img src="/images/portfolio/project-1.jpg" alt="Login Page" className="item-img"/>
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Simple Login Page</h5>
                        <p>Click to view details</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="columns portfolio-item">
                <div className="item-wrap" 
                     onClick={() => this.handleClick(
                       [
                         "/images/portfolio/project2-1.jpg",
                         "/images/portfolio/project2-2.jpg",
                       
                       ],
                       " Vending Machine App",
                       "A collabarator of a Vending Machine App using Flutter .Features Upi payment and inventory Managment.",
                       "https://github.com/NASA-0007/FISAT-Vending-Machine"
                     )}>
                  <div className="portfolio-item-content">
                    <img src="/images/portfolio/project2-1.jpg" alt="Login Vending" className="item-img"/>
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>A Vending Machine App</h5>
                        <p>Click to view details</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
              {/* Card 3 */}
              <div className="columns portfolio-item">
                <div className="item-wrap" 
                     onClick={() => this.handleClick(
                       [
                         "/images/portfolio/project-3-1.png",
                         "/images/portfolio/project-3-2.png",
                         "/images/portfolio/project-3-3.png",
                       
                       ],
                       " Waste Reporting/Management WebApp",
                       "A collabarator of a  Waste Reporting/Management WebApp using  React for frontend and supabase for authentication and database .",
                       "https://github.com/ben-24-0/codeEdge-sys32"
                     )}>
                  <div className="portfolio-item-content">
                    <img src="/images/portfolio/project-3-3.png" alt="Waste" className="item-img"/>
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Waste Reporting/Management WebApp</h5>
                        <p>Click to view details</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
              
            </div>
          </div>
        </div>
      </section>
    );
  }
}