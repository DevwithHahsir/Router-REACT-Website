import { useParams } from "react-router-dom"

function User() {
  const {UserId}= useParams()  // we use hook  to use parameter  Dynamic value added
 

  return (
   <>
   UserName {UserId}.......................i learn dynamic routing
   </>
  )
}

export default User
