/*Have the function StarRating(str) take the str parameter being passed which will be an average rating between 0.00 and 5.00. 
Ratings should be rounded up to the nearest half. For example: if str is "2.36" then this should be the output:  
"full full half empty empty". */

(function StarRating(str) { 
    var rating = str.split('.')
    var beforeDec = (Number(rating[0]) >= 5) ? 5 : Number(rating[0]),
    stars = []
    var dec = str.indexOf('.'),
    afterDec = Number(str.slice(dec))

    for(var i = 0; i< beforeDec; i++){
      stars.push('full')
    }
    
    if(stars.length < 5){
      if(afterDec > 0.24 && afterDec < 0.75){
        stars.push('half')
       }else if(afterDec >= 0.75){
         stars.push('full')
       }
    }
    
    while(stars.length < 5){
      stars.push('empty')
    }
    return stars.join(' ')
}
)('2.75') // 'full full full empty empty'
