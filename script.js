let button = document.getElementById('search');


button.addEventListener('click', function () {

    let state = document.getElementById('state').value;
    let stateName = document.getElementById('stateName');
    let active = document.getElementsByClassName('active')[0];
    let confirmed = document.getElementsByClassName('confirmed')[0];
    let deaths = document.getElementsByClassName('deaths')[0];
    let error = document.getElementById('myp');
    
    console.log("ok")
    fetch('./covid.json')
    .then((response) => {
        if (!response.ok) {
            console.log("error");
        }
        
        return response.json();
    })
    .then((data) => {
        
        let info = data.statewise;
        
        let stateData = info.find(item => item.state.toLowerCase() == state.toLowerCase() || item.statecode.toLowerCase() == state.toLowerCase());
        
        if (stateData) {
            console.log(stateData);
            error.classList.add('err')
            stateName.innerHTML = stateData.state;
            active.innerHTML = stateData.active;
            confirmed.innerHTML = stateData.confirmed;
            deaths.innerHTML = stateData.deaths;
        }
        else {
                error.classList.remove('err');
                console.log("state is not found")
            }

        })
        .catch((err) => {
            console.log(err)
        })
})


