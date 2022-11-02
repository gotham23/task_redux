import { Get_List_Car } from '../../actions/carAction';

const initialState = {
  getListCarResult: false,
  getListCarLoading: false,
  getListCarError: false,
};

const car = (state = initialState, action) => {
  switch (action.type) {
    case Get_List_Car:
      return {
        ...state,
        getListCarResult: action.payload.data,
        getListCarLoading: action.payload.loading,
        etListCarError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default car;
