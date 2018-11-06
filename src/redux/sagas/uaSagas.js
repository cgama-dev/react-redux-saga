import { put } from 'redux-saga/effects'

import { Creators } from './../actionsCreators';

function* getUa(axios) {
    const dados = yield axios.get('http://httpbin.org/user-agent')
    yield put(Creators.loadDataUaResponse(dados.data['user-agent']))
}

export default getUa