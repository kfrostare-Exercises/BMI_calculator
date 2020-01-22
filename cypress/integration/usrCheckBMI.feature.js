describe('User can check their Bmi', () => {
	it('user can enter weight and height', () => 
	{
		cy.visit('http://localhost:3001')
		cy.contains('BMI Calculator')
		cy.get('#weight').type(99)
		cy.get('#height').type(186)
		cy.get('#Calculate').click()
	})

	it('displays a BMI value', () => 
	{
		cy.get('#results').should('contain', '28.62')
	})
})