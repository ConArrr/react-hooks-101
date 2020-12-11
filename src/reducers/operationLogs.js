import {
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from '../actions'

const operationLogs = (state = [], aciton) => {
  switch(aciton.type) {
    case ADD_OPERATION_LOG:
      const operationLog = {
        description: aciton.description,
        operatedAt: aciton.operatedAt
      }
      return [operationLog, ...state]

    case DELETE_ALL_OPERATION_LOGS:
      return []
      
    default:
      return state
  }
}

export default operationLogs