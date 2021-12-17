import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import investorService from "./InvestorService";




const CreateInvestorScreen = () => {
  const {newId} = useParams()
  const [investor, setInvestor] = useState([])



  useEffect(() => {
    if(newId !== "new") {
      findInvestorById(newId)
    }
  }, [newId]);

  const createInvestor = (investor) =>
      investorService.createInvestor(investor)
      .then(() => window.history.back())

  const findInvestorById = (newId) =>
      investorService.findInvestorById(newId)
      .then(investor => setInvestor(investor))


  return (
      <div>
        <h2>Create Investor</h2>
        <label>ID</label>
        <input value={newId}/><br/>
        <label>First Name</label>
        <input
            onChange={(e) =>
                setInvestor(investor =>
                    ({...investor, firstName: e.target.value}))}
            value={investor.firstName}/><br/>
        <label>Last Name</label>
        <input
            onChange={(e) =>
                setInvestor(investor =>
                    ({...investor, lastName: e.target.value}))}
            value={investor.lastName}/><br/>
        <label>Username</label>
        <input
            onChange={(e) =>
                setInvestor(investor =>
                    ({...investor, username: e.target.value}))}
            value={investor.username}/><br/>
        <label>Password</label>
        <input
            onChange={(e) =>
                setInvestor(investor =>
                    ({...investor, password: e.target.value}))}
            value={investor.password}/><br/>
        <label>Email</label>
        <input
            onChange={(e) =>
                setInvestor(investor =>
                    ({...investor, email: e.target.value}))}
            value={investor.email}/><br/>
        <label>Date of Birth</label>
        <input
            onChange={(e) =>
                setInvestor(investor =>
                    ({...investor, dateOfBirth: e.target.value}))}
            value={investor.dateOfBirth}/><br/>
        <button
            onClick={() => window.history.back()}>
          Cancel
        </button>
        <button
            onClick={() => createInvestor(investor)}>
          Create
        </button>

        <a href = {'/investors/' + newId +'/portfolios'}>
          <button>
            Portfolios
          </button>
        </a>


      </div>
  )
}

export default CreateInvestorScreen