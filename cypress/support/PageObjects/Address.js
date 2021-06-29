class Address
{
getAddName()
{
    return cy.get('#customer_address > .row > :nth-child(2) > .form-control')
}
getProvince()
{
    return cy.get("div select[name='customer_province']")
}
getSubProvince()
{
    return cy.get('#customer_district > :nth-child(2) > .form-control')

}
getDistrict()
{
    return cy.get('#customer_subdistrict > :nth-child(2) > .form-control')
}
getPinCode()
{
    return cy.get('#customer_postcode > :nth-child(2) > .form-control')
}
clickAfterPolicyAddr()
{
    return cy.get(':nth-child(6) > .col-12 > .btn')
}
getBillingAddr()
{
    return cy.get('#customer_billing_same > :nth-child(2) > .row > :nth-child(1) > .form-check > .form-check-label')
}
getShippingAddr()
{
    return cy.get('#customer_shipping_same > :nth-child(2) > .row > :nth-child(1) > .form-check > .form-check-label')
}
clickAfterAddress()
{
    return cy.get('.col-lg-4 > .btn')
}
clickAfterAcceptTC()
{
    return cy.get('.SummaryCard_summary-card__button__1Psp8 > .btn')
}
}

export default Address