import axios from 'axios';

const instance = axios.create();

instance.defaults.headers.common['Content-Type'] = 'application/json';
instance.defaults.headers.common.Accept = 'application/json';
instance.defaults.headers['accept-company'] = '900a776e-a060-422e-a5e3-979ef669f16b'
instance.defaults.headers['accept-account'] = '961c06eb-7e25-406c-87d5-d0742e09d96c'

export default instance;