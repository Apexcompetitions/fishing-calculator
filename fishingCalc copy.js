const firstPlacePayout = document.querySelector('#top-ten tr td:nth-child(2)')
const secondPlacePayout = document.querySelector('#top-ten tr:nth-child(2) td:nth-child(2)')
const thirdPlacePayout = document.querySelector('#top-ten tr:nth-child(3) td:nth-child(2)')
const fourthPlacePayout = document.querySelector('#top-ten tr:nth-child(4) td:nth-child(2)')
const fifthPlacePayout = document.querySelector('#top-ten tr:nth-child(5) td:nth-child(2)')
const sixthPlacePayout = document.querySelector('#top-ten tr:nth-child(6) td:nth-child(2)')
const seventhPlacePayout = document.querySelector('#top-ten tr:nth-child(7) td:nth-child(2)')
const eighthPlacePayout = document.querySelector('#top-ten tr:nth-child(8) td:nth-child(2)')
const ninthPlacePayout = document.querySelector('#top-ten tr:nth-child(9) td:nth-child(2)')
const tenthPlacePayout = document.querySelector('#top-ten tr:nth-child(10) td:nth-child(2)')

const firstFivePayout = document.querySelector('#outside-top-ten tr td:nth-child(2)')
const firstFive = document.getElementById('11th-15th')
const secondFivePayout = document.querySelector('#outside-top-ten tr:nth-child(2) td:nth-child(2)')
const secondFive = document.getElementById('16th-20th')
const thirdFivePayout = document.querySelector('#outside-top-ten tr:nth-child(3) td:nth-child(2)')
const thirdFive = document.getElementById('21st-25th')
const fourthFivePayout = document.querySelector('#outside-top-ten tr:nth-child(4) td:nth-child(2)')
const fourthFive = document.getElementById('26th-30th')
const fifthFivePayout = document.querySelector('#outside-top-ten tr:nth-child(5) td:nth-child(2)')
const fifthFive = document.getElementById('31st-35th')
const sixthFivePayout = document.querySelector('#outside-top-ten tr:nth-child(6) td:nth-child(2)')
const sixthFive = document.getElementById('36th-40th')
const seventhFivePayout = document.querySelector('#outside-top-ten tr:nth-child(7) td:nth-child(2)')
const seventhFive = document.getElementById('41st-45th')
const eighthFivePayout = document.querySelector('#outside-top-ten tr:nth-child(8) td:nth-child(2)')
const eighthFive = document.getElementById('46th-50th')
const ninthFivePayout = document.querySelector('#outside-top-ten tr:nth-child(9) td:nth-child(2)')
const ninthFive = document.getElementById('51st-55th')
const tenthFivePayout = document.querySelector('#outside-top-ten tr:nth-child(10) td:nth-child(2)')
const tenthFive = document.getElementById('56th-60th')
const eleventhFivePayout = document.querySelector('#outside-top-ten tr:nth-child(11) td:nth-child(2)')
const eleventhFive = document.getElementById('61st-65th')
const twelvethFivePayout = document.querySelector('#outside-top-ten tr:nth-child(12) td:nth-child(2)')
const twelvethFive = document.getElementById('66th-70th')
const lastFivePayout = document.querySelector('#outside-top-ten tr:nth-child(13) td:nth-child(2)')
const lastFive = document.getElementById('71st-75th')

const tenPointPayout = document.querySelector('#special-harvest tr td:nth-child(2)')
const ninePointPayout = document.querySelector('#special-harvest tr:nth-child(2) td:nth-child(2)')
const eightPointPayout = document.querySelector('#special-harvest tr:nth-child(3) td:nth-child(2)')
const sevenPointPayout = document.querySelector('#special-harvest tr:nth-child(4) td:nth-child(2)')
const hundredthPayout = document.querySelector('#special-harvest tr:nth-child(5) td:nth-child(2)')
const twoHundredthPayout = document.querySelector('#special-harvest tr:nth-child(6) td:nth-child(2)')
const threeHundredthPayout = document.querySelector('#special-harvest tr:nth-child(7) td:nth-child(2)')
const fourHundredthPayout = document.querySelector('#special-harvest tr:nth-child(8) td:nth-child(2)')
const fiveHundredthPayout = document.querySelector('#special-harvest tr:nth-child(9) td:nth-child(2)')
const sevenFidyPayout = document.querySelector('#special-harvest tr:nth-child(10) td:nth-child(2)')
const thousandthPayout = document.querySelector('#special-harvest tr:nth-child(11) td:nth-child(2)')
const twelvehunnaFidyPayout = document.querySelector('#special-harvest tr:nth-child(12) td:nth-child(2)')

const hunterEntries = document.querySelector('#payout-nums tr td:nth-child(1)');
const payoutModel = document.querySelector('#payout-nums tr td:nth-child(2)');
const grossRevenue = document.querySelector('#payout-nums tr:nth-child(4) td:nth-child(1)');
const hunterPayout = document.querySelector('#payout-nums tr:nth-child(4) td:nth-child(2)');
const grossMargin = document.getElementById('gross-margin')

const entriesForm = document.querySelector('#hunter-entries');
const entryFeeForm = document.querySelector('#entry-fee');

// Master Payouts Object to update with new calculations and reference for UI / DOM manipulation
const payouts = {
   'topScores':[],
   'topRandoms': [],
   'completeRandoms': []
}

// Set default hunter entries value and calculate 
let hEntries = 100;
// Set default entry fee value and calculate 
let entryFee = 25;
calcNewPayout(hEntries, entryFee)
// Event listener for new Hunter Entries submissions
entriesForm.addEventListener('submit', function(e){
    console.log('submit')
    e.preventDefault();

        hEntries = document.querySelector('input[id ="hunter-entries"]').value;
//    If there were additional 'deep payouts' added to the DOM 
// remove them prior to a new payout calculation
   if (document.querySelectorAll('#new-payout')){
        let oldPayouts = (document.querySelectorAll('#new-payout'));
        oldPayouts.forEach(payout => payout.remove());
}
     
    calcNewPayout(hEntries, entryFee);

})

entryFeeForm.addEventListener('submit', function(e){
    e.preventDefault()

    entryFee = document.querySelector('input[id ="entry-fee"]').value;
    hEntries = document.querySelector('input[id ="hunter-entries"]').value;
    !hEntries? hEntries=100 : undefined 

    if (document.querySelectorAll('#new-payout')){
        let oldPayouts = (document.querySelectorAll('#new-payout'));
        oldPayouts.forEach(payout => payout.remove());
    }

    calcNewPayout(hEntries, entryFee)
})

function roundTwoFidy(num){
    num = num - num % 250;
    return num;
};

function roundOneTwentyFive(num){
    num = num - num % 125;
    return num;
};

function roundToNearestHundred(num){
    num = num - num%100
    return num
}
function roundToNearestFiddy(num){
    num = num - num%50
    return num
}
function roundToNearestFive(num){
    num = num - num%5
    return num
}
function roundToNearestOne(num){
    num = num - num%1
    return num
}

function calcNewPayout(num, entryFee) {

    // ************************Algorithm Rules*********************************

        // Round the Payout Model either down nearest 10
        num -= num % 10;
        
        // clear previous payout model
        payouts['topScores'] = []
        payouts['topRandoms'] = []
        payouts['completeRandoms'] = []
        // for (let p of Object.keys(payouts)) {
        //     payouts[p] = 0
        // }

    //    desired hunter purse to dispearse prior to rounding
    //    let apexHunterPurse = (num * entryFee) * .65
    //     console.log("Entry Fee===", entryFee)
    //     console.log("apexHunterPurse===", apexHunterPurse)
        console.log("payouts===", payouts)
    // If Entries are less than 20, the top Ten Purse gets all of the apexHunter Purse 
    //    let topTenPurse = 0  
    //     if (num > 19){
    //         topTenPurse += apexHunterPurse * .45
    //     }else {
    //         apexHunterPurse = num * entryFee
    //         topTenPurse += apexHunterPurse
    //     }

       
        // const topTenPayouts = [
        //     '1st',
        //     '2nd',
        //     '3rd',
        //     '4th',
        //     '5th',
        //     '6th',
        //     '7th',
        //     '8th',
        //     '9th',
        //     '10th'
        // ]

        // const outsideTopTenPayouts = [
        //     '11th-15th',
        //     '16th-20th',
        //     '21st-25th',
        //     '26th-30th',
        //     '31st-35th',
        //     '36th-40th',
        //     '41st-45th',
        //     '46th-50th',
        //     '51st-55th',
        //     '56th-60th',
        //     '61st-65th',
        //     '66th-70th',
        //     '71st-75th'
        // ]
        
        // const specialHarvestPayouts = [
        //     '10PT Drawing',
        //     '9PT Drawing',
        //     '8PT Drawing',
        //     '7PT Drawing',
        //     '100th',
        //     '200th',
        //     '300th',
        //     '400th',
        //     '500th',
        //     '750th',
        //     '1000th',
        //     '1250th',
        // ]

        // Calculating the TOP PLACE PAYOUTS
        let topPlaces = Math.max(Math.ceil(num / 10),3)
        let topPlacesPurse =  num *.75 * 25 * .5
        console.log("topPlacesPurse === ",topPlacesPurse)

        // if(num <= 100)
            for (let i = 0; i < topPlaces; i++) {
                // console.log("1 topScores===",payouts['topScores'])
                // console.log("i ===", i)
                    if (i === 0) {
                        payouts['topScores'].push(Math.max(roundToNearestFive(topPlacesPurse * .30), entryFee * 6))
                    } else {
                       
                        let remainingPurse = topPlacesPurse - payouts['topScores'].reduce((a,b)=>a+b)
                        console.log("remainingPurseBefore=====",remainingPurse)
                        
                        if (i <= 10) {
                            payouts['topScores'].push(Math.max(roundToNearestFive(remainingPurse * .3), entryFee * 2))
                        } 
                        else if (i <= 20) {
                            payouts['topScores'].push(Math.max(roundToNearestFive(remainingPurse * .3), entryFee * 3))
                        }
                        else if (i <= 40) {
                            payouts['topScores'].push(Math.max(roundToNearestFive(remainingPurse * .3), entryFee * 2))
                        } 
                        else if (i <= 60) {
                            payouts['topScores'].push(Math.max(roundToNearestFive(remainingPurse * .3), entryFee * 1.5))
                        } 
                        else if (i <= 80) {
                            payouts['topScores'].push(Math.max(roundToNearestFive(remainingPurse * .3), entryFee * 1.25))
                        } 
                        else {
                            payouts['topScores'].push(Math.max(roundToNearestFive(remainingPurse * .3), entryFee * 2))
                        }
                        remainingPurse = topPlacesPurse - payouts['topScores'].reduce((a,b)=>a+b)
                        console.log("remainingPurseAfter=====",remainingPurse)
                    }
            }
        // if(num > 100)
        //     for (let i = 0; i < topPlaces; i++) {
        //             if (i === 0) {
        //                 payouts['topScores'].push(Math.max(roundToNearestFive(topPlacesPurse * .20)), entryFee * 6)
        //             } else {
        //                 let remainingPurse = topPlacesPurse - payouts['topScores'].reduce((a,b)=>a+b)
        //                 payouts['topScores'].push(Math.max(roundToNearestFive(remainingPurse * .2), entryFee * 3))
        //             }
        //     }
           
        // Minimum Payouts is 3
        // if (topPlaces < 3) topPlaces = 3
        // if (topPlaces > 10) topPlaces = 10

        let topRandomsPurse = num *.75 * 25 * .225
        let topRandoms
        topRandoms = Math.ceil(num / 20)
            for (let i = 0; i < topRandoms; i++) {
                const payout = roundToNearestFive(Math.max(topRandomsPurse / topRandoms, entryFee * 2))
                console.log(payout, 100)
                payouts['topRandoms'].push(Math.min(payout, 100))
               
            }

        let completeRandomsPurse = num *.75 * 25 * .225
        let completeRandoms
        completeRandoms = Math.ceil(num / 20)
            for (let i = 0; i < completeRandoms; i++) {
                    
                payouts['completeRandoms'].push(roundToNearestFive(Math.max(completeRandomsPurse / completeRandoms, entryFee * 2)))
               
            }
      
        payouts['hunterPayout'] = payouts['topScores'].reduce((a,b) => a+b) + payouts['topRandoms'].reduce((a,b) => a+b) + payouts['completeRandoms'].reduce((a,b) => a+b)
        payouts['grossRevenue'] = hEntries * entryFee
        payouts['grossMargin'] = payouts['grossRevenue'] - payouts['hunterPayout']
        payouts['marginPercent'] = Math.round(payouts['grossMargin'] / payouts['grossRevenue'] * 100)
        payouts['payoutModel'] = num
        console.log(payouts)

        // Now manipulating html for front end display for the default 500 entry model
        for (let [i, payout] of payouts['topScores'].entries()) {
            newTr = document.createElement('tr');
            newTr.id = 'new-payout'
            newPlaceTd = document.createElement('td');
            newPlaceTd.innerText = `${i+1}`;
            newTr.append(newPlaceTd);

            newPayoutTd = document.createElement('td');
            newPayoutTd.innerText = `$${payout}`;
            newTr.append(newPayoutTd);

            document.querySelector('#top-ten tbody').append(newTr);

        }
        for (let [i, payout] of payouts['topRandoms'].entries()) {
            newTr = document.createElement('tr');
            newTr.id = 'new-payout'
            newPlaceTd = document.createElement('td');
            newPlaceTd.innerText = `${i+1}`;
            newTr.append(newPlaceTd);

            newPayoutTd = document.createElement('td');
            newPayoutTd.innerText = `$${payout}`;
            newTr.append(newPayoutTd);

            document.querySelector('#outside-top-ten tbody').append(newTr);

        }

        for (let [i, payout] of payouts['completeRandoms'].entries()) {
            newTr = document.createElement('tr');
            newTr.id = 'new-payout'
            newPlaceTd = document.createElement('td');
            newPlaceTd.innerText = `${i+1}`;
            newTr.append(newPlaceTd);

            newPayoutTd = document.createElement('td');
            newPayoutTd.innerText = `$${payout}`;
            newTr.append(newPayoutTd);

            document.querySelector('#special-harvest tbody').append(newTr);

        }
           
        // firstPlacePayout.innerText = `$${payouts['1st']}`
        // secondPlacePayout.innerText = `$${payouts['2nd']}`
        // thirdPlacePayout.innerText = `$${payouts['3rd']}`
        // fourthPlacePayout.innerText = `$${payouts['4th']}`
        // fifthPlacePayout.innerText = `$${payouts['5th']}`
        // sixthPlacePayout.innerText = `$${payouts['6th']}`
        // seventhPlacePayout.innerText = `$${payouts['7th']}`
        // eighthPlacePayout.innerText = `$${payouts['8th']}`
        // ninthPlacePayout.innerText = `$${payouts['9th']}`
        // tenthPlacePayout.innerText = `$${payouts['10th']}`
  
        // firstFivePayout.innerText = `$${payouts['11th-15th']}`                               
        // secondFivePayout.innerText = `$${payouts['16th-20th']}`
        // thirdFivePayout.innerText = `$${payouts['21st-25th']}`
        // fourthFivePayout.innerText = `$${payouts['26th-30th']}`
        // fifthFivePayout.innerText = `$${payouts['31st-35th']}`
        // sixthFivePayout.innerText = `$${payouts['36th-40th']}`
        // seventhFivePayout.innerText = `$${payouts['41st-45th']}`
        // eighthFivePayout.innerText = `$${payouts['46th-50th']}`
        // ninthFivePayout.innerText = `$${payouts['51st-55th']}`
        // tenthFivePayout.innerText = `$${payouts['56th-60th']}`
        // eleventhFivePayout.innerText = `$${payouts['61st-65th']}`
        // twelvethFivePayout.innerText = `$${payouts['66th-70th']}`
        // lastFivePayout.innerText = `$${payouts['71st-75th']}`

        // Apply special harvest payouts to the DOM
        // tenPointPayout.innerText = `$${payouts['10PT Drawing']}`
        // ninePointPayout.innerText = `$${payouts['9PT Drawing']}`
        // eightPointPayout.innerText = `$${payouts['8PT Drawing']}`
        // sevenPointPayout.innerText = `$${payouts['7PT Drawing']}`
        // hundredthPayout.innerText = `$${payouts['100th']}`
        // twoHundredthPayout.innerText = `$${payouts['200th']}`
        // threeHundredthPayout.innerText = `$${payouts['300th']}`
        // fourHundredthPayout.innerText = `$${payouts['400th']}`
        // fiveHundredthPayout.innerText = `$${payouts['500th']}`
        // sevenFidyPayout.innerText = `$${payouts['750th']}`
        // thousandthPayout.innerText = `$${payouts['1000th']}`
        // twelvehunnaFidyPayout.innerText = `$${payouts['1250th']}`
        // Apply Payout info to the DOM
        hunterEntries.innerText = `${hEntries}`
        payoutModel.innerText = `${payouts['payoutModel']}`
        grossRevenue.innerText = `$${payouts['grossRevenue']}`
        hunterPayout.innerText = `$${payouts['hunterPayout']}`
        grossMargin.innerText = `$${payouts['grossMargin']} (${payouts['marginPercent']}%)`



    

}