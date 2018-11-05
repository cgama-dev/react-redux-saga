import { put } from 'redux-saga/effects'
import { loadDataUAResponse } from '../actions';

function* getUa(axios) {
    const dados = yield axios.get('http://httpbin.org/user-agent')
    console.log(dados.data['user-agent'])
    yield put(loadDataUAResponse(dados.data['user-agent']))
}

export default getUa