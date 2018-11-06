import { put } from 'redux-saga/effects'
import { Creators } from './../actionsCreators';

function* getIp(axios) {
    const dados = yield axios.get('http://httpbin.org/ip')
    yield put(Creators.loadDataResponse(dados.data.origin))
}

export default getIp