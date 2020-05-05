import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
        question1: '',
        question2a: false,
        question2b: false,
        question2c: false,
        question2d: false,
        question2e: false,
        question3: '',
        question4: '',
        question5FN: '',
        question5MI: '',
        question5LN: '',
        question6: '',
        question7age: '',
        question7month: '',
        question7day: '',
        question7year: '',
        question8a: false,
        question8b: false,
        question8c: false,
        question8d: false,
        question8e1: false,
        question8e2: '',
        question9white: false,
        question9d1: '',
        question9black: false,
        question9d2: '',
        question9native: false,
        question9d3: '',
        question9Chinese: false,
        question9Vietnamese: false,
        question9Hawaiian: false,
        question9Filipino: false,
        question9Korean: false,
        question9Samoan: false,
        question9AsianIndian: false,
        question9Japanese: false,
        question9Chamorro: false,
        question9OtherAsian: false,
        question9d4: '',
        question9OtherPI: false,
        question9d5: '',
        question9Other: false,
        question9d6: '',


       


       
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    return (
      <form>
        <label> 1. How many people were living or staying in this house, apartment, or mobile home on April 1, 2020?</label>
        <br/>
        
        

        <input
          type="text" 
          value={this.state.question1} 
          name="question1" 
          placeholder="Number of people" 
          onChange={this.handleChange} 

        />
         <br/>
        <br/>

      <label>2. Were there any additional people staying here on April 1, 2020 that you did not include in Question 1? </label>
      <br/>
      <label>Mark all that apply.</label>
      <br/>
      <br/>
                    <input 
                          type="checkbox" 
                          name="question2a"
                          checked={this.state.question2a}
                          onChange={this.handleChange}
                            />Children, related or unrelated, such as newborn babies, grandchildren, or foster children
                        <br/>
                    <input 
                          type="checkbox" 
                          name="question2b"
                          checked={this.state.question2b}
                          onChange={this.handleChange}
                      />Relatives, such as adult children, cousins, or in-laws
                      <br/>
                    <input 
                          type="checkbox" 
                          name="question2c"
                          checked={this.state.question2c}
                          onChange={this.handleChange}
                      />Nonrelatives, such as roommates or live-in babysitters
                      <br/>
                    <input 
                          type="checkbox" 
                          name="question2d"
                          checked={this.state.question2d}
                          onChange={this.handleChange}
                      />People staying here temporarily
                      <br/>
                    <input 
                          type="checkbox" 
                          name="question2e"
                          checked={this.state.question2e}
                          onChange={this.handleChange}
                      />No additional people
                      <br/>
                      <br/>


                      <label>3. Is this house, apartment, or mobile home</label>
                    <br/>
                    <label>Mark ONE box.</label>
                    <br/>
                   
              
                <label>
                <input 
                        type="radio" 
                        name="question3"
                        value="m"
                        checked={this.state.question3 === "m"}
                        onChange={this.handleChange}
                    />  Owned by you or someone in this household with a mortgage
                    or loan? Include home equity loans.
                </label>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3"
                        value="a"
                        checked={this.state.question3 === "a"}
                        onChange={this.handleChange}
                    /> Owned by you or someone in this household free and clear (without a mortgage or loan)?
                </label>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3"
                        value="l"
                        checked={this.state.question3 === "l"}
                        onChange={this.handleChange}
                    />  Rented?
                </label>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3"
                        value="e"
                        checked={this.state.question3 === "e"}
                        onChange={this.handleChange}
                    />  Occupied without payment of rent?
                </label>
                <br/>
                <br/>




          <label>4. What is your telephone number?</label>
          <br/>
          <label>We will only contact you if needed for official Census Bureau business.</label>
        <br/>
          <input
          type="text" 
          value={this.state.question4} 
          name="question4" 
          placeholder="Telephone Number" 
          onChange={this.handleChange} 

        />
         <br/>
         <br/>
         <br/>
         <br/>
         <h1>Person 1</h1>

        <label>5. Please provide information for each person living here. 
          If there is someone living here who pays the rent or owns this residence, start by listing him or her as Person 1. 
          If the owner or the person who pays the rent does not live here, start by listing any adult living here as Person 1.</label>
          <br/>
          <br/>
          <label>What is Person 1’s name?</label>
        <br/>
          <input
          type="text" 
          value={this.state.question5FN} 
          name="question5FN" 
          placeholder="First Name" 
          onChange={this.handleChange} 

        />
         <input
          type="text" 
          value={this.state.question5MI} 
          name="question5MI" 
          placeholder="MI" 
          onChange={this.handleChange} 

        />
         <input
          type="text" 
          value={this.state.question5LN} 
          name="question5LN" 
          placeholder="Last Name" 
          onChange={this.handleChange} 

        />

       

<label>
  <br/>
  <br/>
        <label>6. What is Person 1’s sex?</label>
        <br/>


                    <input 
                        type="radio" 
                        name="question6"
                        value="male"
                        checked={this.state.question6 === "male"}
                        onChange={this.handleChange}
                    /> Male
                </label>
                <br />
                <label>
                    <input 
                        type="radio" 
                        name="question6"
                        value="female"
                        checked={this.state.question6 === "female"}
                        onChange={this.handleChange}
                    /> Female
                </label>

                <br/>
                <br/>

    
                <label>7. What is Person 1’s age and what is Person 1’s date of birth? For babies less than 1 year old, do not write the age in months. Write 0 as the age.</label>
          
        <br/>
          <input
          type="text" 
          value={this.state.question7age} 
          name="question7age" 
          placeholder="Years old on 4/01/2020" 
          onChange={this.handleChange} 

        />
         <input
          type="text" 
          value={this.state.question7month} 
          name="question7month" 
          placeholder="Month" 
          onChange={this.handleChange} 

        />
         <input
          type="text" 
          value={this.state.question7day} 
          name="question7day" 
          placeholder="Day" 
          onChange={this.handleChange} 

        />
         <input
          type="text" 
          value={this.state.question7year} 
          name="question7year" 
          placeholder="Year of Birth" 
          onChange={this.handleChange} 

        />

        <br/>
        <br/>


        <label>NOTE: Please answer BOTH Question 6 about Hispanic origin and Question 7 about race. For this census, Hispanic origins are not races.</label>
      <br/>
      <label>8. Is this person of Hispanic, Latino, or Spanish origin?</label>
      <br/>
      <br/>
                    <input 
                          type="checkbox" 
                          name="question8a"
                          checked={this.state.question8a}
                          onChange={this.handleChange}
                            />No, not of Hispanic, Latino, or Spanish origin
                        <br/>
                    <input 
                          type="checkbox" 
                          name="question8b"
                          checked={this.state.question8b}
                          onChange={this.handleChange}
                      />Yes, Mexican, Mexican Am., Chicano
                      <br/>
                    <input 
                          type="checkbox" 
                          name="question8c"
                          checked={this.state.question8c}
                          onChange={this.handleChange}
                      />Yes, Puerto Rican
                      <br/>
                    <input 
                          type="checkbox" 
                          name="question8d"
                          checked={this.state.question8d}
                          onChange={this.handleChange}
                      />People staying here temporarily
                      <br/>
                    <input 
                          type="checkbox" 
                          name="question8e"
                          checked={this.state.question8e}
                          onChange={this.handleChange}
                      />Yes, Cuban
                      <br/>
                      <input 
                          type="checkbox" 
                          name="question8e1"
                          checked={this.state.question8e1}
                          onChange={this.handleChange}
                      />Yes, another Hispanic, Latino, or Spanish origin – Print, for example, Salvadoran, Dominican, Colombian, Guatemalan, Spaniard, Ecuadorian, etc.
                      <br/>


                    
                    <input
                    type="text" 
                    value={this.state.question8e2} 
                    name="question8e2" 
                    placeholder="" 
                    onChange={this.handleChange} 

                  />

                  <br/>
                  <br/>


                  <label>9. What is Person 1’s race?</label>
                  <br/>
                  <br/>

                  <label>Mark one or more boxes AND print origins.</label>
                  <br/>
                  <br/>
                  <input 
                          type="checkbox" 
                          name="question9white"
                          checked={this.state.question9white}
                          onChange={this.handleChange}
                      />White – Print, for example, German, Irish, English, Italian, Lebanese, Egyptian, etc.
                      <br/>
                    <input
                    type="text" 
                    value={this.state.question9d1} 
                    name="question9d1" 
                    placeholder="" 
                    onChange={this.handleChange} 

                  />
                  <br/>
                  <br/>
                  <input 
                          type="checkbox" 
                          name="question9black"
                          checked={this.state.question9black}
                          onChange={this.handleChange}
                      />Black or African Am. – Print, for example, African American, Jamaican, Haitian, Nigerian, Ethiopian, Somali, etc.
                      <br/>
                    <input
                    type="text" 
                    value={this.state.question9d2} 
                    name="question9d2" 
                    placeholder="" 
                    onChange={this.handleChange} 

                  />
                  <br/>
                  <br/>
                  <input 
                          type="checkbox" 
                          name="question9native"
                          checked={this.state.question9native}
                          onChange={this.handleChange}
                      />American Indian or Alaska Native 
                      <br/>
                    <input
                    type="text" 
                    value={this.state.question9d3} 
                    name="question9d3" 
                    placeholder="Print name of enrolled or principal tribe(s), for example, Navajo Nation, Blackfeet Tribe, Mayan, Aztec, Native Village of Barrow Inupiat Traditional Government, Nome Eskimo Community, etc. " 
                    onChange={this.handleChange} 

                  />
                   <br/>
                  
                    <input 
                          type="checkbox" 
                          name="question9chinese"
                          checked={this.state.question9Chinese}
                          onChange={this.handleChange}
                      />Chinese
                      <br/>
                      <input 
                          type="checkbox" 
                          name="question9Vietnamese"
                          checked={this.state.question9Vietnamese}
                          onChange={this.handleChange}
                      />Vietnamese
                      <br/>
                      <input 
                          type="checkbox" 
                          name="question9Hawaiian"
                          checked={this.state.question9Hawaiian}
                          onChange={this.handleChange}
                      />Hawaiian
                      <br/>
                      <input 
                          type="checkbox" 
                          name="question9Filipino"
                          checked={this.state.question9Filipino}
                          onChange={this.handleChange}
                      />Filipino
                      <br/>
                      <input 
                          type="checkbox" 
                          name="question9Korean"
                          checked={this.state.question9Korean}
                          onChange={this.handleChange}
                      />Korean
                      <br/>
                      <input 
                          type="checkbox" 
                          name="question9Samoan"
                          checked={this.state.question9Samoan}
                          onChange={this.handleChange}
                      />Samoan
                      <br/>
                      <input 
                          type="checkbox" 
                          name="question9AsianIndian"
                          checked={this.state.question9AsianIndian}
                          onChange={this.handleChange}
                      />Asian Indian
                      <br/>
                      <input 
                          type="checkbox" 
                          name="question9Japanese"
                          checked={this.state.question9Japanese}
                          onChange={this.handleChange}
                      />Japanese
                      <br/>
                      <input 
                          type="checkbox" 
                          name="question9Chamorro"
                          checked={this.state.question9Chamorro}
                          onChange={this.handleChange}
                      />Chamorro
                      <br/>

                      <input 
                          type="checkbox" 
                          name="question9OtherAsian"
                          checked={this.state.question9OtherAsian}
                          onChange={this.handleChange}
                      />Other Asian
                      <br/>
                    <input
                    type="text" 
                    value={this.state.question9d4} 
                    name="question9d4" 
                    placeholder="Print for example, Pakistani, Cambodian, Hmong, etc." 
                    onChange={this.handleChange} 

                  />
                  <br/>
                  

                      <input 
                          type="checkbox" 
                          name="question9OtherPI"
                          checked={this.state.question9OtherPI}
                          onChange={this.handleChange}
                      />Other Pacific Islander
                      <br/>
                   
                    <input
                    type="text" 
                    value={this.state.question9d5} 
                    name="question9d5" 
                    placeholder="Print, for example, Tongan, Fijian, Marshallese, etc." 
                    onChange={this.handleChange} 

                  />
                  <br/>


                    <input 
                          type="checkbox" 
                          name="question9Other"
                          checked={this.state.question9Other}
                          onChange={this.handleChange}
                      />Some other race 
                       <br/>
                    <input
                    type="text" 
                    value={this.state.question9d6} 
                    name="question9d6" 
                    placeholder="Print race or origin." 
                    onChange={this.handleChange} 

                  />

                 
  
    
    
    
  

      </form>
      
    )
  }
}

export default App;
