class InsurancePlan
{
getChosePlan()
{
    return cy.get('#product_category > :nth-child(2) > .row > :nth-child(3) > .form-check > .form-check-label')
    
}
getChoseSubplan()
{
    return cy.get('#product_accident_subcategory > :nth-child(2) > .row > :nth-child(1) > .form-check > .form-check-label')
}
getBasicCusmobileDetails()
{
    return cy.get('#customer_phone > .form-group > .row > :nth-child(2) > .form-control')
}
clickAfterMobileNo()
{
    return cy.get('#customer_phone > :nth-child(2) > .col-12 > .btn')
}
getBasicCusFNameDetails()
{
    return cy.get('#customer_first_name > .row > :nth-child(2) > .form-control')
}
getBasicCusLNameDetails()
{
    return  cy.get('#customer_last_name > .row > :nth-child(2) > .form-control')
}
clickAfterName()
{
    return cy.get(':nth-child(3) > .col-12 > .btn')
}
getEmail()
{
    return cy.get('#email')
}
clickAfterEmail()
{
    return cy.get('#customer_email > :nth-child(2) > .col-12 > .btn')
}
getGender()
{
    return cy.get('#customer_gender > :nth-child(2) > .row > :nth-child(1) > .form-check > .form-check-label')
}
getDOB()
{
    return cy.get('#customer_dob > .form-group > .row > :nth-child(2) > .form-control')
}
clickAfterDOB()
{
    return cy.get('#customer_dob > :nth-child(2) > .col-12 > .btn')
}
getFormCheck()
{
    return cy.get('.mx-auto > .row > :nth-child(1) > .form-check > .form-check-label')
}
getFinalSubmit()
{
    return cy.get('#btn-marketing-consent')
}
}
export default InsurancePlan