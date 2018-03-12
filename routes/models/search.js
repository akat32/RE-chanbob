module.exports = (router, fs)=>{
  router.post('/', (req,res)=>{
    console.log('시작')
    var data = fs.readFileSync('./restaurants.json')// DB전체 탐색 미친거 아니냐;; 40개 음식점, 7개 메뉴
    var result = JSON.parse(data);
    var order = req.body;
    var ress = new Array();
    if(typeof(order.category) == string){
      for(var j=0;j<40;j++){
        if(result[j].minPrice < order.maxPrice + order.pm && result[j].minPrice > order.minPrice - order.pm && result[j].category == order.category){
          ress = ress.concat(result[j]);
        }
      }
    }
    else{
      for(var i=0;;i++){
        if(order.category[i] == null) break;
        for(var j=0;j<40;j++){
          if(result[j].minPrice < order.maxPrice + order.pm && result[j].minPrice > order.minPrice - order.pm && result[j].category == order.category[i]){
            ress = ress.concat(result[j]);
          }
        }
      }
    }
    if(ress[0] == null)
      res.status(404).json({message : "Hos not found!"})
    else
      res.status(200).json({result : ress});
    console.log(order.category);
  })
  return router;
}
