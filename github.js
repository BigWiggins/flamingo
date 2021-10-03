global.github = {
    login: (username, password) => {

        console.log('logging in with',username, password)

        github.request('/login', (err, res) => {

            console.log('login response', err, res)

        })

    },

    request: (action, params, callback) => {

        let hostname = 'api.github.com'
    
        const http = new XMLHttpRequest();
        const url=`//${hostname}/${action}`;
    
        http.open("GET", url);
        http.send();
    
        http.onreadystatechange = (e) => {
            debugger;
            switch(e.readyState) {
                case 4 && e.status == 200:
                    console.log('got it')
                    console.log(http.responseText)
                    break;
            }
        }
    
    }

}