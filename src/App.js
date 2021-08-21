import { useEffect,useState } from 'react'
import axios from 'axios'
import { MDBCard, MDBCardBody, MDBCardTitle,MDBCardHeader,MDBCardText } from 'mdb-react-ui-kit';



function App() {
 const [users,setUsers]=useState([])
 useEffect(()=>{
   axios.get("https://jsonplaceholder.typicode.com/users")
   .then(response=> setUsers(response.data))
   .catch(err=>console.log(err),[])
 })

  return (
    <> <h1 style={{textAlign:"center",marginBottom:"50px"}}>Users List </h1>
    <div className="App" style={{display:"flex",flexWrap:"wrap",marginLeft:"5%"}}>
     {users.map(el=>
 <div key={el.id} style={{ marginTop:"50px",marginLeft:"5%"}}>
<MDBCard  style={{width:"300px"}}>
<MDBCardHeader> <MDBCardTitle>{el.username}</MDBCardTitle> </MDBCardHeader>
<MDBCardBody>
  <MDBCardText><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" style={{ marginRight:"50px"}}>
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg> {el.name}</MDBCardText>
  <MDBCardText><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16" style={{ marginRight:"50px"}}>
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
</svg> {el.email}</MDBCardText>
  <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16" style={{ marginRight:"50px"}}>
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg><span style={{fontSize:"8px"}}>{el.address.street},{ el.address.suite},{ el.address.city},{el.address.geo.lat},{el.address.geo.lng}</span></p> 

</MDBCardBody>

</MDBCard>
       </div> 
)}   
    </div>
    </>
  );
}

export default App;
