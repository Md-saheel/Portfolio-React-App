/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
import Project from './Project';
import { projects } from '../assets/data';

export default function Projects() {
  return (
    <div id='work'>
    <section id='projects'>
      <div className='project-tile'>
        <h1 id='caption'>{'These are some of my projects'}</h1>
        <br />
        <div id='bottom-line' />
        <div className='projects js-projects'>
          {projects.map((project) => (
            <Project projectObj={project} />
          ))}
          {/* <Project
            name='Survey Form'
            photoName='pro1.png'
            link='https://inspiring-biscotti-e5f330.netlify.app/'
          />
          <Project
            name='Tribute Page'
            photoName='pro2.png'
            link='https://md-saheel.github.io/Tribute-page/'
          />
          <Project
            name='Web Design Agency Project'
            photoName='pro7.png'
            link='https://md-saheel.github.io/Web-design-agency-projects/'
          />
          <Project
            name='Pricing Table Project'
            photoName='pro8.png'
            link='https://md-saheel.github.io/Pricing-Table-Project/'
          />
          <Project
            name='Landing Page'
            photoName='pro4.png'
            link='https://reliable-churros-22246b.netlify.app/'
          />
          <Project
            name='Documentation Page'
            photoName='pro3.png'
            link='https://eloquent-cassata-bfd435.netlify.app/'
          />
          <Project
            name='Bootstrap Project'
            photoName='pro6.png'
            link='https://md-saheel.github.io/Bootstrap-Project/'
          />
          <Project name='Personal Portfolio' photoName='pro5.png' link='' />
          <Project
            name='Dice Game'
            photoName='pro9.png'
            link='https://md-saheel.github.io/Dice-Game/'
          />
          <Project
            name='Rock-Paper-Scissors Game'
            photoName='pro12.png'
            link='https://md-saheel.github.io/Rock-Paper-Scissors-Game/'
          />
          <Project
            name='Calculator Project'
            photoName='pro11.png'
            link='https://md-saheel.github.io/Calculator-project/'
          />
          <Project
            name='Simon Game'
            photoName='pro10.png'
            link='https://md-saheel.github.io/Simon-Game/'
          />
          <Project
            name='Amazon Website'
            photoName='pro13.png'
            link='https://md-saheel.github.io/javascript-amazon-project-main/'
          /> */}
        </div>
        <a href='https://github.com/Md-saheel' className='btn'>
          Show More &gt;
        </a>
        <a href='src\assets\myresume.pdf' className='btn' download>
          Resume &gt;
        </a>
      </div>
    </section>
   </div>
  );
}
