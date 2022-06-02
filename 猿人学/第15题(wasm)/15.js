
function my(){
            t1 = parseInt(Date.parse(new Date())/1000/2);
            t2 = parseInt(Date.parse(new Date())/1000/2 - Math.floor(Math.random() * (50) + 1));
            return{t1,t2}
    // window.q(t1, t2).toString() + '|' + t1 + '|' + t2;
        }
console.log(my())