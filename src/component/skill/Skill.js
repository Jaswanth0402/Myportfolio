import './Skill.css'

function Skill() {
   
 
  return (
    <div className='' id ='body'>
       
   <div className='container pt-4 pb-3  glass'>
   <h2 className='text-center  text-white'>My Skill</h2>
  <div className='show  row pt-5 pb-2'>
      <div className='col-6 col-md-3 skillbar'>
      <div className="progress-bar1 ">
      <progress1 className='progress1' value="0" min="0" max="100" style={{visibility:'hidden',height:'0',width:'0'}}>90%</progress1>
      </div>
      <div >
      <h6 className=' text-white' >HTML</h6>
      </div>
     
     </div>
     <div className='col-6 col-md-3 skillbar' >
     <div className="progress-bar2 ">
      <progress2 value="78" min="0" max="100" style={{visibility:'hidden',height:'0',width:'0'}}>75%</progress2>
      </div>
      <div >
      <h6  className=' text-white'>CSS</h6>
      </div>
      </div>
      <div className='col-6 col-md-3 skillbar' >
     <div className="progress-bar3">
      <progress3 value="58" min="0" max="100" style={{visibility:'hidden',height:'0',width:'0'}}>75%</progress3>
     </div>
     <div >
      <h6 className=' text-white'>Bootstrap</h6>
      </div>
     </div>
     <div className='col-6 col-md-3 skillbar' >
     <div className="progress-bar4 ">
     <progress4 value="75" min="0" max="100" style={{visibility:'hidden',height:'0',width:'0'}}>75%</progress4>
     </div>
     <div >
     <h6 className=' text-white'>JavaScript</h6>
     </div>
    
    </div>
    
     </div>
     <div className='show  align row pt-5 pb-5'>
    
    <div className='col-6 col-md-4 skillbar'  >
    <div className="progress-bar5">
     <progress5 value="75" min="0" max="100" style={{visibility:'hidden',height:'0',width:'0'}}>75%</progress5>
     </div>
     <div >
     <h6 className=' text-white'>React JS</h6>
     </div>
     </div>
     <div className='col-6 col-md-4 skillbar' >
    <div className="progress-bar6">
     <progress6 value="75" min="0" max="100" style={{visibility:'hidden',height:'0',width:'0'}}>75%</progress6>
    </div>
    <div >
    <h6 className=' text-white'>Java</h6>
     </div>
    </div>
    <div className='col-12 col-md-4 skillbar'>
    <div className="progress-bar7">
     <progress7 value="75" min="0" max="100" style={{visibility:'hidden',height:'0',width:'0'}}>75%</progress7>
    </div>
    <div >
    <h6 className=' text-white'>SQL</h6>
     </div>
    </div>

    </div>

    </div>
    </div>
  );
}
export default Skill;