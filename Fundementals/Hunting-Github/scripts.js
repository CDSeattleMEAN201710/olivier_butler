$(document).ready(function(){

    var myButton = document.getElementById('theButton')
    $(myButton).click(function(){
        console.log("------> Beginning asychronous code")
        var data = new Promise(function(res,rej){
            getData(res, rej)
        })
        data.then(function(responseData){
            console.log('------> Promise fulfilled')
            displayName(responseData)
        })

        data.catch(function(error = "No data received (not even an error... spooky...)"){
            console.log('------> Promise failure...')
            console.log(error)
        })
    })

    var getData = function(resolveArg, rejectArg){
        var data = $.get("https://api.github.com/users/thisolivier")
        setTimeout(function(){
            if (data !== undefined){
                resolveArg(data)
            } else {
                rejectArg()
            }
        }, 1000)
    }

    function displayName(responseData){
        var theName = $('#theName')
        theName.html(responseData.name + "???")   
    }
})