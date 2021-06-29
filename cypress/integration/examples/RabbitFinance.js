/// <reference types="Cypress" />

import InsurancePlan from '../../support/PageObjects/InsurancePlan'
import Purchaseplan from  '../../support/PageObjects/Purchaseplan'
import Address from  '../../support/PageObjects/Address'
import Payment from  '../../support/PageObjects/Payment'

describe('My First Test Suites',function()
{
 
  before(function() {


    cy.fixture('example').then(function(data){

     this.data=data
    })
  })
it ('My First Test case',function()
{     
  const plan=new InsurancePlan
  const purchase=new Purchaseplan
  const addr=new Address
  const payment=new Payment

    cy.visit(Cypress.env('BaseURL'))
    
    plan.getChosePlan().click({force: true})
    plan.getChoseSubplan().click({force: true})
    plan.getBasicCusmobileDetails().type(this.data.MobileNo)
    plan.clickAfterMobileNo().click()
    plan.getBasicCusFNameDetails().type(this.data.Fname)
    plan.getBasicCusLNameDetails().type(this.data.Lname)
    plan.clickAfterName().click()
    plan.getEmail().type(this.data.Email)
    plan.clickAfterEmail().click()
    plan.getGender().click()
    plan.getDOB().type(this.data.DOB)
    cy.waitUntil(() =>plan.clickAfterDOB().click({force: true}))
    plan.getFormCheck().click()
    cy.waitUntil(() => plan.getFinalSubmit().click({force: true}) )
    //cy.wait(4000)
    
    cy.waitUntil(() => purchase.choseInsurance().click({force: true}) )
    
    cy.wait(4000)
    
    purchase.getUserPreFName().should('have.value',this.data.Fname)   
    purchase.getuserPreLName().should('have.value',this.data.Lname)      
    purchase.clickAfterUserDetailsValidate().click({force: true})
    purchase.getUserPreMobileNo().should('have.value',this.data.MobileNo)  
    purchase.clickAftervalidateMobileNo().click({force: true})
    purchase.getEmailValidate().should('have.value',this.data.Email) 
    purchase.clickAfterValidateEmail().click({force: true})
    purchase.getNationality().click({force: true} )
    purchase.getIDCardNo().type(this.data.ID_No,{force: true})
    cy.waitUntil(() => purchase.clickAfterIDCard().click({force: true}) )
    cy.wait(3000)
    
    addr.getAddName().type(this.data.Address,{force: true})
    addr.getProvince().select(this.data.Province,{force: true})
    addr.getSubProvince().select(this.data.SubProvince,{force: true})
    addr.getDistrict().select(this.data.District,{force: true})
    addr.getPinCode().select(this.data.PinCode,{force: true})
    addr.clickAfterPolicyAddr().click({force: true})
    addr.getBillingAddr().click({force: true})
    addr.getShippingAddr().click({force: true})
    addr.clickAfterAddress().click({force: true})
    cy.waitUntil(() => addr.clickAfterAcceptTC().click({force: true})  )
  //  cy.wait(3000)
    payment.getCardNo().type(this.data.cardNo)
    payment.getcardholderName().type(this.data.Fname +" " + this.data.Lname)
    payment.getExpiryMonth().select(this.data.Month)
    payment.getExpirtYear().select(this.data.Year)
    payment.getCreditcardissuingbankCountry().select(this.data.Country)
    payment.getCreditcardissuingbank().select(this.data.BankName)
    payment.getcardHolderEmail().should('have.value',this.data.Email)
    payment.clickFinalSubmit().click({force: true})
    cy.wait(3000)
    payment.getPaymentSuccess().should('have.class','success')
    cy.wait(20000)
    cy.get('[data-testid=text-value]').then(function(el){
    const amount=el.text()
    expect(amount).to.equal('360')

    })
    
})

})