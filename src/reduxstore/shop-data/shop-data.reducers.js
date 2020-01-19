import COLLECTIONS_DATA_MAP from "../../data/collections-datamap";

const INITIAL_STATE = { collections: COLLECTIONS_DATA_MAP };

const shopDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
export default shopDataReducer;
