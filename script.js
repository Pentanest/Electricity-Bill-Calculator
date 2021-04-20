
let oldUnit = $('#oldUnit')
let newUnit = $('#newUnit')
let calcBtn = $('#Btn1')
let totalMainUnits = $('#totalMainUnits')
let totalMainUnitsCost = $('#totalMainUnitsCost')


let oldUnitInv = $('#oldUnitInv')
let newUnitInv = $('#newUnitInv')
let totalInvUnits = $('#totalInvUnits')
let totalInvUnitsCost = $('#totalInvUnitsCost')

let totalUnits = $('#totalUnits')
let totalUnitsCost = $('#totalUnitsCost')

calcBtn.click(() => {

    let mainUnits = newUnit.val() - oldUnit.val()
    totalMainUnits.val(`${mainUnits} units`)
    let tMU = parseInt(totalMainUnits.val())


    totalMainUnitsCost.val(`Rs. ${mainUnits*9}`)



    let InvUnits = newUnitInv.val() - oldUnitInv.val()
    totalInvUnits.val(`${InvUnits} units`)
    let tIU = parseInt(totalInvUnits.val())

    totalInvUnitsCost.val(`Rs. ${InvUnits*9}`)



    totalUnits.val(`${tMU + tIU} units`)
    let tU=parseInt(totalUnits.val())
    totalUnitsCost.val(`Rs. ${tU*9}`)
    
})




