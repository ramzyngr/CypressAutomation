class Payment
{
getCardNo()
{
    return cy.get('#credit_card_number')
}
getExpiryMonth()
{
return cy.get('#credit_card_expiry_month')
}
getExpirtYear()
{
return cy.get('#credit_card_expiry_year')
}

getCVV()
{

}
getcardholderName()
{
    return cy.get('#credit_card_holder_name')
}
getCreditcardissuingbankCountry()
{
    return cy.get('#credit_card_issuing_bank_country')
}
getCreditcardissuingbank()
{
    return cy.get('#credit_card_issuing_bank_ddl')
}
getcardHolderEmail()
{
    return cy.get('#cardholder_email')
}
clickFinalSubmit()
{
    return cy.get('#btnCCSubmit')
}
getPaymentSuccess()
{
    return cy.get('.success')
}
}
export default Payment