import React from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaLocationArrow,
  FaCog,
  FaJsSquare,
  FaReact,
  FaNode,
  FaAmazon,
  FaPython,
} from 'react-icons/fa'
import {
  DiMongodb,
  DiPhp,
  DiSass,
  DiBootstrap,
  DiDjango,
  DiJava,
  DiMysql,
  DiHeroku,
  DiPostgresql,
  DiCss3,
} from 'react-icons/di'
import Header from './Header'

const About = () => {
  const styleForIcon = {
    fontSize: '5rem',
    marginRight: '1.2rem',
    padding: '.5rem',
    color: 'ff7730',
  }
  return (
    <div>
      <Header title='About Developer' />
      <div className='about'>
        <h2>
          {' '}
          <FaUser style={{ fontSize: '2rem', marginRight: '1rem' }} />
          Amrit Regmi
        </h2>
        <div className='about__detail'>
          <p>
            <FaEnvelope style={{ fontSize: '1.3rem', marginRight: '1rem' }} />
            crazyregmi@gmail.com
          </p>
          <p>
            <FaPhoneAlt style={{ fontSize: '1.3rem', marginRight: '1rem' }} />
            0451805969
          </p>
          <p>
            <FaLocationArrow
              style={{ fontSize: '1.3rem', marginRight: '1rem' }}
            />
            Gungahlin, ACT Canberra
          </p>
        </div>
        <h2>
          {' '}
          <FaCog style={{ fontSize: '2rem', marginRight: '1rem' }} />
          Skills
        </h2>
        <div className='about__skills'>
          <div>
            <DiCss3 style={styleForIcon} />
            <DiBootstrap style={styleForIcon} />
            <DiSass style={styleForIcon} />
            <FaJsSquare style={styleForIcon} />
            <FaReact style={styleForIcon} />
            <FaNode style={styleForIcon} />
            <FaPython style={styleForIcon} />
            <DiDjango style={styleForIcon} />
            <DiJava style={styleForIcon} />
            <DiPhp style={styleForIcon} />
            <DiMongodb style={styleForIcon} />
            <DiMysql style={styleForIcon} />
            <DiPostgresql style={styleForIcon} />
            <DiHeroku style={styleForIcon} />

            <FaAmazon style={styleForIcon} />
          </div>
        </div>
        <h2>
          {' '}
          <FaCog style={{ fontSize: '2rem', marginRight: '1rem' }} />
          Projects
        </h2>
        <div className='about__projects'>
          <a href='https://github.com/amritregmi/socialawareness'>
            <li>
              <span>nodeJs expressJs App - github</span>
            </li>
          </a>
          <a href='https://github.com/amritregmi/shopping-cart'>
            <li>
              <span>ReactJS App - github</span>
            </li>
          </a>
          <a href='https://amrit-app.herokuapp.com/'>
            <li>
              <span>
                LiveApp (Enable ContentSecurityPolicy, add extension in google
                chrome )
              </span>
            </li>
          </a>
          <a href='https://github.com/amritregmi/python_automation'>
            <li>
              <span>Python Selenium Automation - github</span>
            </li>
          </a>
        </div>
        <div className='about__links'>
          <a href='https://github.com/amritregmi'>
            <FaGithub className='about__git' />
          </a>
          <a href='https://au.linkedin.com/in/amrit-regmi-852815b9'>
            <FaLinkedin className='about__li' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
