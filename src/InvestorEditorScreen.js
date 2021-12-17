import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import investorService from "./InvestorService";




const InvestorEditorScreen = () => {
  const {iId} = useParams()
  const [investor, setInvestor] = useState([])



  useEffect(() => {
    if(iId !== "new") {
      findInvestorById(iId)
    }

  }, [iId]);

  const createInvestor = (investor) =>
      investorService.createInvestor(investor)
      .then(() => window.history.back())

  const findInvestorById = (iId) =>
      investorService.findInvestorById(iId)
      .then(investor => setInvestor(investor))

  const deleteInvestor = (iId) =>
      investorService.deleteInvestor(iId)
      .then(() => window.history.back())

  const updateInvestor = (iId, newInvestor) =>
      investorService.updateInvestor(iId, newInvestor)
      .then(() => window.history.back())


  return (
      <div>
        <h2>Investor Editor</h2>
        <label>ID</label>
        <input value={iId}/><br/>
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
        <button
            onClick={() => window.history.back()}>
          Cancel
        </button>
        <button
            onClick={() => deleteInvestor(investor.id)}>
          Delete
        </button>
        <button
            onClick={() => createInvestor(investor)}>
          Create
        </button>
        <button
            onClick={() => updateInvestor(investor.id, investor)}>
          Save
        </button>

        <a href = {'/investors/' + iId +'/portfolios'}>
          <button>
            Portfolios For Investor
          </button>
        </a>


      </div>
  )
}

export default InvestorEditorScreen