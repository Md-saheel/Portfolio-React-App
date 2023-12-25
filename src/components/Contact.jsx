/* eslint-disable react/no-unescaped-entities */
export default function Contact() {
  return (
    <section id='contact'>
      <div className='container'>
        <h1>Let's work together...</h1>
        <p>Need help with your project? Just ask!</p>
        <div className='social'>
          <div>
            <a
              id='profile-link'
              target='_blank'
              href='https://github.com/Md-saheel'
              rel='noreferrer'
            >
              <i className='fab fa-github fa-1x'></i>
              Github
            </a>
            <a href='mailto:smohamedsaheel@outlook.com'>
              <i className='fas fa-envelope-open-text fa-1x'></i>
              Mail
            </a>
            <a href='tel: +919597453576#'>
              <i className='fas fa-phone fa-1x'></i>
              Call Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
