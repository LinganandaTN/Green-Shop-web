import React, { useState } from 'react'

const  CandForm = () =>{
    const [add_degree, set_degree ] = useState(false)
    const [add_project, set_project ] = useState(false)

    return<div>
         <label htmlFor="user">
                        <h4 >Candidate Name</h4>
                        <input type="text" name= 'user' id ='user' placeholder='Candidate name'/>
        </label>
        <br></br>
        Contact Details
        <br></br>
        <label htmlFor="Contact_no">
                        <h4 >Contact number</h4>
                        <input type="text" name= 'user' id ='Contact_no' placeholder='Contact number'/>
        </label>
        <label htmlFor="email">
                        <h4 >email id</h4>
                        <input type="email" name= 'user' id ='email' placeholder='email'/>
        </label>
        <label htmlFor="Address">
                        <h4 >Address</h4>
                        <textarea name= 'user' id ='adress' placeholder='address'/>
        </label>

<br></br>
        Academics Details
        <br></br>
        Highest Degree
        <label htmlFor="college">
                        <h4 >College Name</h4>
                        <input type="text" name= 'user' id ='college' placeholder='College name'/>
        </label>
        <label htmlFor="degree">
                        <h4 > Degree</h4>
                        <input type="text" name= 'user' id ='degree' placeholder=' degree'/>
        </label>
        <label htmlFor="CGPa">
                        <h4 > CGPA</h4>
                        <input type="text" name= 'user' id ='CGPa' placeholder=' CGPa'/>
        </label>
        <br/>
        <button type ='submit' onClick={ () => set_degree(!add_degree)} >{ (!add_degree) ? 'add another degree' : 'remove degree'}</button>

        { (add_degree) && <div>
            <label htmlFor="college">
                        <h4 >College Name</h4>
                        <input type="text" name= 'user' id ='college' placeholder='College name'/>
        </label>
        <label htmlFor="degree">
                        <h4 > Degree</h4>
                        <input type="text" name= 'user' id ='degree' placeholder=' degree'/>
        </label>
        <label  htmlFor="CGPa">
                        <h4 > CGPA</h4>
                        <input type="text" name= 'user' id ='CGPa' placeholder=' CGPa'/>
        </label>
        </div>}
        <br></br>
        Projects
        <br></br>
        main project 1
        <div>
            <label htmlFor="project_title">
                        <h4 >Project title</h4>
                        <input type="text" name= 'user' id ='project_title' placeholder=' project_title'/>
        </label>
        <label htmlFor="project_Desc">
                        <h4 > Degree</h4>
                        <input type="text-area" name= 'user' id ='project_Desc' placeholder=' project_Description'/>
        </label>
        <label  htmlFor="tools">
                        <h4 > tools</h4>
                        <input type="text" name= 'user' id ='tools' placeholder=' tools used'/>
        </label>
        <br/>
        <button type ='submit' onClick={ () => set_project(!add_project)} >{ (!add_project) ? 'add another project' : 'remove project'}</button>
</div>
        { (add_project) && <div>
            <label htmlFor="project_title">
                        <h4 >Project title</h4>
                        <input type="text" name= 'user' id ='project_title' placeholder=' project_title'/>
        </label>
        <label htmlFor="project_Desc">
                        <h4 > Degree</h4>
                        <input type="text-area" name= 'user' id ='project_Desc' placeholder=' project_Description'/>
        </label>
        <label  htmlFor="tools">
                        <h4 > tools</h4>
                        <textarea name= 'user' id ='tools' placeholder=' tools used'/>
        </label>
        </div>



        }
        <br/>
        InternShip Details
        <label  htmlFor="i_company">
                        <h4 > company name</h4>
                        <input type="text" name= 'user' id ='i_company' placeholder='company name'/>
        </label>
        <label  htmlFor="role">
                        <h4 > role </h4>
                        <input type="text" name= 'user' id ='role' placeholder='role name'/>
        </label>    
        <label  htmlFor="projects">
                        <h4 > overall experience </h4>
                        <textarea name= 'user' id ='projects' placeholder='enter about projects and what skills you upgraded'/>
        </label> 
        <label  htmlFor="skills">
                        <h4 > skills</h4>
                        <br></br>java<input type='checkbox' id='java'/> 
                        C<input type='checkbox' id='c'/>
                        Python<input type='checkbox' id='Python'/>
                        Mysql<input type='checkbox' id='Mysql'/>
                        javascript<input type='checkbox' id='javascript'/>
                        react<input type='checkbox' id='react'/>                     
     </label> 
     <label htmlFor="about">
                        <h4 >about you</h4>
                        <textarea name= 'user' id ='about' placeholder='express about yourself'/>
        </label>
        <label  htmlFor="photo">
        <h4 >choose your image </h4>

        <input type='file' name= 'user' id ='photo' placeholder='upload urs'/>
        </label> 
        <label  htmlFor="resume">
        <h4 >upload updated resume </h4>

        <input type='file' name= 'user' id ='resume' placeholder='upload urs'/>
        </label> 

    </div>
}

export default CandForm;