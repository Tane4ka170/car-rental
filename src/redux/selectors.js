export const selectCars = (state) => state.cars.carsInfo;
export const selectAllCars = (state) => state.cars.allCars;
export const selectFilter = (state) => state.cars.filter;
export const selectMorePages = (state) => state.cars.morePages;
export const selectOpenModal = (state) => state.cars.isModalOpen;
export const selectSelectedCar = (state) => state.cars.selectedCar;
export const selectFavorites = (state) => state.favorites.favorite;
export const selectedPrice = (state) => state.cars.filter?.price || 0;
export const selectedMileageFrom = (state) => state.cars.filter?.mileageFrom;
export const selectedMileageTo = (state) => state.cars.filter?.mileageTo;
export const selectsFilteredMake = (state) => state.cars.filter?.make;
export const selectIsLoading = (state) => state.cars.isLoading
