class Purchaseplan
{
 choseInsurance()
 {
     return cy.get(':nth-child(2) > .p-3 > .text-center > .SummaryCard_summary-card__block-buttons__2bIwm > :nth-child(2) > .btn:visible')
 }   
getUserPreFName()
{
    return cy.get('#customer_first_name > .row > :nth-child(2) > .form-control')
}
getuserPreLName()
{
    return cy.get('#customer_last_name > .row > :nth-child(2) > .form-control')
}
clickAfterUserDetailsValidate()
{
    return cy.get(':nth-child(3) > .col-12 > .btn')
}
getUserPreMobileNo()
{
    return cy.get('#customer_phone > .form-group > .row > :nth-child(2) > .form-control')
}
clickAftervalidateMobileNo()
{
    return cy.get('#customer_phone > :nth-child(2) > .col-12 > .btn')
}
getEmailValidate()
{
    return cy.get('#email')
}
clickAfterValidateEmail()
{
    return cy.get('#customer_email > :nth-child(2) > .col-12 > .btn')
}
getNationality()
{
    return cy.get('#customer_nationality > :nth-child(2) > .row > :nth-child(1) > .form-check > .form-check-label')
}
getIDCardNo()
{
    return cy.get('#customer_id_card > .row > :nth-child(2) > .form-control')
}
clickAfterIDCard()
{
    return cy.get(':nth-child(4) > .col-12 > .btn')
}

}
export default Purchaseplan