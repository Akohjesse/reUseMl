class ReUseMl{
   render(path,placement){
        var insert = document.querySelector(placement);
       fetch(path).then((res)=>{return res.text()}).then((data)=>{
         insert.innerHTML = data;
       }).catch(err => console.log(err))
   }
}


