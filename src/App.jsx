
import './App.css'
import Grandpa from './Components/Grandpa/Grandpa';
import ReusableForm from './Components/ReusableForm/ReusableForm'
// import HookForm from './Components/HookForm/HookForm'
// import RefForms from './Components/RefForms/RefForms'
// import SimpleForm from './Components/SimpleForm/SimpleForm'
// import StatefulForm from './Components/SimpleForm/StatefullForm/StatefulForm'

function App() {

  const handleSignUpSubmit = data => {
    console.log('sign up data', data);
  }

  const handleUpdateProfile = data => {
    console.log('update profile data', data);
  }


  return (
    <>

    <h1>From Master</h1>
    <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForms></RefForms> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm
       formTitle={'Sign Up'} 
       handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>please sign up right now</p>
        </div>
        
       </ReusableForm>

      <ReusableForm
        formTitle={'Profile Update'}
        handleSubmit={handleUpdateProfile}
        submitBtnText={'Update'}>
          <div>
            <h2>Update Profile </h2>
            <p>Always Keep Updated</p>
          </div>

        </ReusableForm> */}


    </>
  )
}

export default App
