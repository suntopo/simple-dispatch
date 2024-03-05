/**
 * Created by suntopo on 17-1-10.
 */
import Dispatcher from '../lib/index'

var dispatcher = new Dispatcher();

dispatcher.when('test', async function() {
    return new Promise((resolve, reject) => {
        resolve('welcome to you');
    })
})

dispatcher.dispatch('test').then(function (data) {
    console.log(data)
}).catch(function (err) {
    console.log(err)
})

dispatcher.dispatch('test1').then(function (data) {
    console.log(data)
}).catch(function (err) {
    console.log(err)
})