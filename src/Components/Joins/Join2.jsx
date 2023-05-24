import React,{useState} from 'react'
import './Join2.css'

export default function Join2() {
    const [emaile, setEmaile] = useState("");
  const [passworde, setPassworde] = useState("");
  return (
    <>
    <div className='jmain2'>
        <div className='jchl'>
    <div className="projic"><img src="Frame 2.png" alt="logo"/></div>
<div className="tex">Join Projex as<br/> A?</div>
<div className="pics"><img src="pic6.png" alt="picture"/></div>
</div>

<div className='che2'>

    <div className='create'>Create your Workspace!</div>
    <div className='enter'>Enter Details About your organization</div> 

<form>
<label className="pas">Company Name*</label><br/>
           <input
            type="password"
            placeholder="Enter Name"
            value={passworde}
            onChange={(e) => setPassworde(e.target.value)}
          />
          <br/>

          <label className="pas">Members Email*</label><br/>
           <input
            type="password"
            placeholder="Email here"
            value={emaile}
            onChange={(e) => setEmaile(e.target.value)}
          />
          <br/>
</form>

<div className='ba3'>
<div className='mea'>
<div className='abc'>abc@xyz.com</div>
<div className='ices'><img src="ple.png" alt="" /></div>
</div>

<div className='mea'>
<div className='abc'>abc@xyz.com</div>
<div className='ices'><img src="ple.png" alt="" /></div>
</div>

<div className='mea'>
<div className='abc'>abc@xyz.com</div>
<div className='ices'><img src="ple.png" alt="" /></div>
</div>

<div className='mea'>
<div className='abc'>abc@xyz.com</div>
<div className='ices'><img src="ple.png" alt="" /></div>
</div>

</div>

<div className='but3'><button type='submit'>Let’s Go</button></div>
</div>

</div>
    </>
  )
}
