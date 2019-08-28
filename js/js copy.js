




/*Here's the function that produces 1-1000*/
function theList() {
    let bigList="";
    for(let j = 0; j <=1000; j++)   {
    /*declarations and initiations*/
        let yourCard = j;
        let places = [""," thousand"," million"," billion"," trillion"," quadrillion"," quintillion"," sextillion"," septillion"," octillion"," nonillion"," decillion"," undecidillion"," duidecillion"," quattuordecillion"," quindecillion"," sexdecillion"," sepdecillion"," duodeviginillion"," unodeviginillion"," viginillion"," "];
        let tens = ["","","twenty", "thirty", "forty","fifty","sixty","seventy","eighty","ninety"];
        let oneses = ["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]
        let palmedCard = yourCard;
        let words = "";
        let wordsWordsWords = ""; 
        let topLength = palmedCard.length/3;

        /*get zero out of the way*/
        if (yourCard == 0)   {
            wordsWordsWords = "zero"
        } 
        else{
        /*break it down now*/
        for(let i = 0; i <= topLength; i++){
            let words = "";
            let thirdCard = palmedCard;
            if (palmedCard.length > 2)  {
                thirdCard = palmedCard.slice(-3); /*taking the last hundred*/}
            let thirdCardCheck = thirdCard; 
            

            if(thirdCard > 99)  {
                hunPlace = thirdCard.slice(0,1);
                words = oneses[hunPlace] + " hundred ";
                thirdCard = thirdCard.slice (-2);
            }
            if(thirdCard.length == 3)    {
                thirdCard = thirdCard.slice(-2);}

            if(thirdCard > 19)  {
                tenPlace = thirdCard.slice(0,1);
                words = words + " " +tens[tenPlace];
                if(thirdCard % 10 != 0) {
                    words = words + "-";
                }
                thirdCard = thirdCard.slice(-1);
            } else if (thirdCard <10)   {
                thirdCard = thirdCard.slice(-1);
            }
            if(thirdCard > 0)   {
            words = words + oneses[thirdCard];}
            if(thirdCardCheck > 0)  {
                words = words + places[i];
                }
            wordsWordsWords = words + " "+ wordsWordsWords;
            palmedCard = palmedCard.slice(0,-3);
        
        }
        console.log(wordsWordsWords);
    }

   /*print the answer*/
    bigList = bigList + wordsWordsWords;
    console.log(bigList);
}
}

