import React from "react";
import InfoBox from "./infoPannel";
import '../css/WhoUses.css';
import EducationPannel from "./EducationPannel";
import { AnimatePresence, motion } from "framer-motion";
import ProjectPannel from "./ProjectPannel";
import MainPannel from "./MainPannel";
import OtherPannel from "./OtherPannel";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: 100 },
}

class Con extends React.Component {
  state = {
    activeIndex: 4,
    animating: false
  }
    handleClick = (index) => {
      if(this.state.activeIndex === index) {

        this.setState({activeIndex: 4})
      }
      else  {
        this.setState({ activeIndex: index })
      }
    }
  
    render() {
      return (
      
        <>
          <div className='rowC' >
            Check out my&nbsp; 
            <ClickSkills name="Skills" index={0} isActive={ this.state.activeIndex===0 } onClick={ this.handleClick }/> 
            ,&nbsp;  
            <ClickProjects name="Projects" index={1} isActive={ this.state.activeIndex===1 } onClick={ this.handleClick }/> 
            ,&nbsp; 
            <ClickEducation name="Education" index={2} isActive={ this.state.activeIndex===2 } onClick={ this.handleClick }/> 
            , and&nbsp; 
            <ClickOther name="Other" index={3} isActive={ this.state.activeIndex===3 } onClick={ this.handleClick }/>
          </div>
          <div className="center">
            <AnimatePresence>
              {(this.state.activeIndex===0) && (<motion.div
                    initial={{ x:"-120%" }}
                    animate={{ x:0 }}
                    exit={{x:"120%"}}
                    transition={{ duration: 1 }}
                  >
                <InfoBox />
              </motion.div>)}
            </AnimatePresence>
            <AnimatePresence>
              {(this.state.activeIndex===1) && (<motion.div
                     initial={{ x:"-120%" }}
                     animate={{ x:0 }}
                     exit={{x:"120%"}}
                     transition={{duration: 1}}
                     
                  >
                <ProjectPannel />
              </motion.div>)}
            </AnimatePresence>
            <AnimatePresence>
              {(this.state.activeIndex===2) && (<motion.div
                    initial={{ x:"-120%" }}
                    animate={{ x:0 }}
                    exit={{x:"120%"}}
                    transition={{ duration: 1 }}
                  >
                <EducationPannel />
              </motion.div>)}
            </AnimatePresence>
            <AnimatePresence>
              {(this.state.activeIndex===3) && (<motion.div
                    initial={{ x:"-120%" }}
                    animate={{ x:0 }}
                    exit={{x:"120%"}}
                    transition={{ duration: 1 }}
                  >
                <OtherPannel/>
              </motion.div>)}
            </AnimatePresence>
            <AnimatePresence>
              {(this.state.activeIndex===4) && (<motion.div
                    initial={{ x:"-120%" }}
                    animate={{ x:0 }}
                    exit={{x:"120%"}}
                    transition={{ duration: 1 }}
                  >
                <MainPannel/>
              </motion.div>)}
            </AnimatePresence>
          </div>
        </>
      
     
        
      
      
      );
        
    }
  }
  /*
  <Row>
        <Col><MyClickable name="a" index={0} isActive={ this.state.activeIndex===0 } onClick={ this.handleClick } /></Col>
        <Col><MyClickable name="b" index={1} isActive={ this.state.activeIndex===1 } onClick={ this.handleClick }/></Col>
        <Col><MyClickable name="c" index={2} isActive={ this.state.activeIndex===2 } onClick={ this.handleClick }/></Col>
        </Row>
  */
  
  class ClickSkills extends React.Component {
    handleClick = () => this.props.onClick(this.props.index)
    
    render() {
      return <div
        type='skills'
        className={
          this.props.isActive ? 'activeskills' : 'skills'
        }
        onClick={ this.handleClick }
      >
        <span>{ this.props.name }</span>
      </div>


    }
  }
  class ClickProjects extends React.Component {
    handleClick = () => this.props.onClick(this.props.index)
    
    render() {
      return <div
        type='projects'
        className={
          this.props.isActive ? 'activeprojects' : 'projects'
        }
        onClick={ this.handleClick }
      >
        <span>{ this.props.name }</span>
      </div>


    }
  }
  class ClickEducation extends React.Component {
    handleClick = () => this.props.onClick(this.props.index)
    
    render() {
      return <div
        type='education'
        className={
          this.props.isActive ? 'activeeducation' : 'education'
        }
        onClick={ this.handleClick }
      >
        <span>{ this.props.name }</span>
      </div>


    }
  }
  class ClickOther extends React.Component {
    handleClick = () => this.props.onClick(this.props.index)
    
    render() {
      return <div
        type='other'
        className={
          this.props.isActive ? 'activeother' : 'other'
        }
        onClick={ this.handleClick }
      >
        <span>{ this.props.name }</span>
      </div>


    }
  }

export default Con