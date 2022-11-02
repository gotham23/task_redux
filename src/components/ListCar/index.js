import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListCar } from '../../actions/carAction';
import car from '../../reducers/car';

function ListCar() {
  const { getListCarResult, getListCarLoading, getListCarError } = useSelector((state) => state.CarReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    //panggil action getcar
    console.log('1.use effect');
    dispatch(getListCar());
  }, [dispatch]);
  return (
    <div>
      <h4>ListCar</h4>
      {getListCarResult ? (
        getListCarResult.map((car) => {
          return (
            <p key={car.id}>
              <img src={car.image} /> {car.manufacture}- {car.year}
            </p>
          );
        })
      ) : getListCarLoading ? (
        <p>Loading....</p>
      ) : (
        <p>{getListCarError ? getListCarError : 'Data Kosong'}</p>
      )}
    </div>
  );
}
export default ListCar;
