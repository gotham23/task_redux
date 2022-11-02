import axios from 'axios';

export const Get_List_Car = 'Get_List_Car';

export const getListCar = () => {
  console.log('2.masuk action');
  return (dispatch) => {
    //loading
    dispatch({
      type: Get_List_Car,
      payload: {
        loading: true,
        data: false,
        errorMassage: false,
      },
    });

    //get api
    axios({
      method: 'GET',
      url: 'https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json',
      timeout: 120000,
    })
      .then((response) => {
        console.log('3.berhasil dapat data:', response);
        dispatch({
          type: Get_List_Car,
          payload: {
            loading: false,
            data: response.data,
            errorMassage: false,
          },
        });
      })
      .catch((error) => {
        //gagal get api
        dispatch({
          type: Get_List_Car,
          payload: {
            loading: false,
            data: false,
            errorMassage: error.massage,
          },
        });
      });
  };
};
