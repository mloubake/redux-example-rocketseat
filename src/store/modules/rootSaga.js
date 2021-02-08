import { all } from "redux-saga/effects";

import cart from "./cart/sagas";

//O * se chama generator é igual ao async. No final das contas, o async vira um generator
export default function* rootSaga() {
  return yield all([cart]);
}
