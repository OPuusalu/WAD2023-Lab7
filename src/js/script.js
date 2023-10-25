window.onload = function() {
    /** 
    fetch('/res/json/myjson.json')
        .then((response) => response.json())
        .then(json => {
            console.log(json);

            let parent_div = document.createElement('div');
            json.forEach(post => {
                let postDiv = document.createElement('div');
                let postTitle = document.createElement('h3');
                let postContent = document.createElement('p');
                
                postContent.innerHTML = post.body;
                postTitle.innerHTML = post.title;

                postDiv.appendChild(postTitle);
                postDiv.appendChild(postContent);
                postDiv.classList.add("post");

                parent_div.appendChild(postDiv);
            });
            let body = document.querySelector('body');
            body.appendChild(parent_div);
        }).catch(err => {
            let errDiv = document.createElement("div");
            errDiv.className = 'post';
            errDiv.innerText = err;
            document.body.appendChild(errDiv);
            }).finally(() => {
        let footer = document.createElement("footer");
        date = new Date().toLocaleString()
        footer.innerText = date;
        document.body.appendChild(footer);
        })
    */

        fetch('/res/json/rates.json')
            .then((response) => response.json())
            .then(json => {
                console.log(json);
                let parent_div = document.createElement('div');

                let parentTitle = document.createElement('h3');

                let rates = json.rates;
                console.log(rates);
                // example of rates {"USD": 1, "EUR": 1.1}

                for (let currency in rates) {
                    let rateDiv = document.createElement('div');
                    let rateTitle = document.createElement('h3');
                    let rateConverter = document.createElement('div');
                    
                    let text = document.createElement('span');
                    let text2 = document.createElement('span');
                    let input = document.createElement('input');
                    let curText = document.createElement('span');

                    curText.innerText = " "+currency;

                    input.type = 'number';
                    text2.innerText = "USD converts to ";
                    input.oninput = function() {
                        text.innerText = Math.round(input.value * rates[currency]);
                    }

        
                    rateTitle.innerHTML = "USD to " + currency + " 1:" + rates[currency];

                    rateConverter.appendChild(input);
                    rateConverter.appendChild(text2);
                    rateConverter.appendChild(text);
                    rateConverter.appendChild(curText);
        
                    rateDiv.appendChild(rateTitle);
                    rateDiv.appendChild(rateConverter);
                    rateDiv.classList.add("post");        
                    parent_div.appendChild(rateDiv);
                }
                let body = document.querySelector('body');
                body.appendChild(parent_div);

            })
}