import positionService from "./PositionService"
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const PositionEditorScreen = () => {
  const {pId} = useParams()
  const [position, setPosition] = useState({})

  useEffect(() => {
    if(pId !== "new") {
      findPositionById(pId)
    }
  }, [pId]);

  const createPosition = (position) =>
      positionService.createPortfolio(position)
      .then(() => window.history.back())

  const findPositionById = (pId) =>
      positionService.findPositionById(pId)
      .then(position => setPosition(position))

  const deletePosition = (pId) =>
      positionService.deletePosition(pId)
      .then(() => window.history.back())

  const updatePosition = (pId, newPosition) =>
      positionService.updatePosition(pId, newPosition)
      .then(() => window.history.back())


  return (
      <div>
        <h2>Position Editor</h2>
        <label>ID</label>
        <input value={pId}/><br/>
        <label>Position Type</label>
        <select id="mySelect"
                onChange={(e) =>
                    setPosition(position =>
                        ({...position, positionType: e.target.value}))}>
          <option>{position.positionType}</option>
          <option>LONG</option>
          <option>SHORT</option>
          <option>CALL</option>
          <option>PUT</option>
        </select><br/>
        <label>Amount</label>
        <input
            onChange={(e) =>
                setPosition(position =>
                    ({...position, amount: e.target.value}))}
            value={position.amount}/><br/>
        <label>Value</label>
        <input
            onChange={(e) =>
                setPosition(position =>
                    ({...position, value: e.target.value}))}
            value={position.value}/><br/>
        <button
            onClick={() => {
              window.history.back()}}>
          Cancel
        </button>
        <button
            onClick={() => deletePosition(pId)}>
          Delete
        </button>
        <button
            onClick={() => createPosition(position)}>
          Create
        </button>
        <button
            onClick={() => updatePosition(pId, position)}>
          Save
        </button>

      </div>
  )
}

export default PositionEditorScreen