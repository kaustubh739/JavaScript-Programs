
function CpeckPerfect(no)
{
    let iCnt = 0
    let 
    for(iCnt =1;iCnt<=(no/2);iCnt++)
    {
        if((no % iCnt) == 0)
        {
            iSum =
        }
    }
    if(iSum == 0)
    {

    }
    else
    {
        return false;
    }
}

function main()
{
    let iValue = 20;
    let bRet = false;
    
    bRet = CpeckPerfect(iValue)

    if (bRet == true)
    {
        console.log(`${iValue} is a perfect number`)
    }
    else
    {
        console.log(`${iValue} is not a perfect number`)
    }
   
    DisplayFactors(iValue);
}

main();