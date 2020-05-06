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


        question1_2FN: '',
        question1_2MI: '',
        question1_2LN: '',
        question2a2: false,
        question2b2: false,
        question2c2: false,
        question2d2: false,
        question2e2: false,
        question2f: false,
        question2g2: false,
        question2h2: false,
        question2i2: false,
        question3_2: '',
        question4_2: '',
        question5_2age: '',
        question5_2month: '',
        question5_2day: '',
        question5_2year: '',
        question6_2a: false,
        question6_2b: false,
        question6_2c: false,
        question6_2d: false,
        question6_2e1: false,
        question6_2e2: '',
        question7_2white: false,
        question7_2d1: '',
        question7_2black: false,
        question7_2d2: '',
        question7_2native: false,
        question7_2d3: '',
        question7_2Chinese: false,
        question7_2Vietnamese: false,
        question7_2Hawaiian: false,
        question7_2Filipino: false,
        question7_2Korean: false,
        question7_2Samoan: false,
        question7_2AsianIndian: false,
        question7_2Japanese: false,
        question7_2Chamorro: false,
        question7_2OtherAsian: false,
        question7_2d4: '',
        question7_2OtherPI: false,
        question7_2d5: '',
        question7_2Other: false,
        question7_2d6: '',
        



       


       
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

      <div>
        <div className="title">
        <h1>The 2020 Census</h1>
        <h4>For informational purposes only.</h4>

        </div>
        
        <br/>
        <br/>
        <div className="instructions">
        <h3>Before you answer Question 1, count the people living in this house, apartment, or mobile home using our guidelines.</h3>
       <ul>
       <li>Count all people, including babies, who live and sleep here most of the time.</li>
        <li>If no one lives and sleeps at this address most of the time, go online at my2020census.gov or call 1-844-330-2020</li>
       </ul>


        <h3>The census must also include people without a permanent place to live, so:</h3>
        <ul>
        <li>If someone who does not have a permanent place to live is staying here on April 1, 2020, count that person.</li>
        
        </ul>


        <h3>The Census Bureau also conducts counts in institutions and other places, so:</h3>
        <ul>
        <li>Do not count anyone living away from here, either at college or in the Armed Forces.</li>
        <li>Do not count anyone in a nursing home, jail, prison, detention facility, etc., on April 1, 2020.</li>
        <li>Leave these people off your questionnaire, even if they will return to live here after they leave college, the nursing home, the military, jail, etc. Otherwise, they may be counted twice.</li>
        </ul>

        </div>
       

      <form>
        <label className="question"> 1. How many people were living or staying in this house, apartment, or mobile home on April 1, 2020?</label>
        <br/>
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

        <br/>
        <br/>

      <label className="question">2. Were there any additional people staying here on April 1, 2020 that you did not include in Question 1? </label>
      <br/>
      <br/>
      <label className="marking">Mark all that apply.</label>
      <br/>
      <br/>
                    <input 
                          type="checkbox" 
                          name="question2a"
                          checked={this.state.question2a}
                          onChange={this.handleChange}
                            />Children, related or unrelated, such as newborn babies, grandchildren, or foster children
                         <br/>
                        <br/>
                    <input 
                          type="checkbox" 
                          name="question2b"
                          checked={this.state.question2b}
                          onChange={this.handleChange}
                      />Relatives, such as adult children, cousins, or in-laws
                       <br/>
                      <br/>
                    <input 
                          type="checkbox" 
                          name="question2c"
                          checked={this.state.question2c}
                          onChange={this.handleChange}
                      />Nonrelatives, such as roommates or live-in babysitters
                       <br/>
                       <br/>
                    <input 
                          type="checkbox" 
                          name="question2d"
                          checked={this.state.question2d}
                          onChange={this.handleChange}
                      />People staying here temporarily
                       <br/>
                        <br/>
                    <input 
                          type="checkbox" 
                          name="question2e"
                          checked={this.state.question2e}
                          onChange={this.handleChange}
                      />No additional people
                      <br/>
                      <br/>
                      <br/>
                      <br/>

                      <label className="question">3. Is this house, apartment, or mobile home</label>
                      <br/>
                      <br/>
                    <label className="marking">Mark ONE box.</label>
                    <br/>
                    <br/>
                   
              
                <label>
                <input 
                        type="radio" 
                        name="question3"
                        value="mortgage"
                        checked={this.state.question3 === "mortgage"}
                        onChange={this.handleChange}
                    />  Owned by you or someone in this household with a mortgage
                    or loan? Include home equity loans.
                </label>
                <br/>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3"
                        value="free and clear"
                        checked={this.state.question3 === "free and clear"}
                        onChange={this.handleChange}
                    /> Owned by you or someone in this household free and clear (without a mortgage or loan)?
                </label>
                <br/>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3"
                        value="rented"
                        checked={this.state.question3 === "rented"}
                        onChange={this.handleChange}
                    />  Rented?
                </label>
                <br/>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3"
                        value="no rent"
                        checked={this.state.question3 === "no rent"}
                        onChange={this.handleChange}
                    />  Occupied without payment of rent?
                </label>
                <br/>
                <br/>
                <br/>
                <br/>



          <label className="question">4. What is your telephone number?</label>
          <br/>
        <br/>
          <label className="marking">We will only contact you if needed for official Census Bureau business.</label>
          <br/>
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

         <br/>
        <br/>

        <label>Please provide information for each person living here. 
          If there is someone living here who pays the rent or owns this residence, start by listing him or her as Person 1. 
          If the owner or the person who pays the rent does not live here, start by listing any adult living here as Person 1.</label>
          <br/>
          <br/>
          <label className="question">5. What is Person 1’s name?</label>
          <br/>
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
       <br/>
        <br/>
       

<label>
  <br/>
  <br/>
        <label className="question">6. What is Person 1’s sex?</label>
        <br/>
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
                <br/>
                <br/>
    
                <label className="question">7. What is Person 1’s age and what is Person 1’s date of birth? For babies less than 1 year old, do not write the age in months. Write 0 as the age.</label>
          
                <br/>
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
        <br/>
        <br/>

        <label>NOTE: Please answer BOTH Question 8 about Hispanic origin and Question 9 about race. For this census, Hispanic origins are not races.</label>
        <br/>
        <br/>
      <label className="question">8. Is this person of Hispanic, Latino, or Spanish origin?</label>
      <br/>
      <br/>
                    <input 
                          type="checkbox" 
                          name="question8a"
                          checked={this.state.question8a}
                          onChange={this.handleChange}
                            />No, not of Hispanic, Latino, or Spanish origin
                         <br/>
                          <br/>
                    <input 
                          type="checkbox" 
                          name="question8b"
                          checked={this.state.question8b}
                          onChange={this.handleChange}
                      />Yes, Mexican, Mexican Am., Chicano
                       <br/>
                          <br/>
                    <input 
                          type="checkbox" 
                          name="question8c"
                          checked={this.state.question8c}
                          onChange={this.handleChange}
                      />Yes, Puerto Rican
                       <br/>
                          <br/>
                    <input 
                          type="checkbox" 
                          name="question8d"
                          checked={this.state.question8d}
                          onChange={this.handleChange}
                      />People staying here temporarily
                       <br/>
                          <br/>
                    <input 
                          type="checkbox" 
                          name="question8e"
                          checked={this.state.question8e}
                          onChange={this.handleChange}
                      />Yes, Cuban
                       <br/>
                          <br/>
                      <input 
                          type="checkbox" 
                          name="question8e1"
                          checked={this.state.question8e1}
                          onChange={this.handleChange}
                      />Yes, another Hispanic, Latino, or Spanish origin 
                       <br/>
                      <br/>
                      <label className="input-head">Enter, for example, Salvadoran, Dominican, Colombian, Guatemalan, Spaniard, Ecuadorian, etc.</label>
                      
                       <br/>
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
                  <br/>
                  <br/>

                  <label className="question">9. What is Person 1’s race?</label>
                  <br/>
                  <br/>

                  <label className="marking">Mark one or more boxes AND print origins.</label>
                  <br/>
                  <br/>
                  <input 
                          type="checkbox" 
                          name="question9white"
                          checked={this.state.question9white}
                          onChange={this.handleChange}
                      />White
                       <br/>
                      <br/>

                      <label className="input-head">Enter, for example, German, Irish, English, Italian, Lebanese, Egyptian, etc..</label>
                      
                      <br/>
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
                      />Black or African Am.
                       <br/>
                        <br/>
                        <label className="input-head">Enter, for example, African American, Jamaican, Haitian, Nigerian, Ethiopian, Somali, etc.</label>
                      
                      <br/>
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
                      <br/>
                      <label className="input-head"> Enter name of enrolled or principal tribe(s), for example, Navajo Nation, Blackfeet Tribe, Mayan, Aztec,etc</label>
                           
                      <br/>
                      <br/>      
                    <input
                    type="text" 
                    value={this.state.question9d3} 
                    name="question9d3" 
                    placeholder="" 
                    onChange={this.handleChange} 

                  />
                    <br/>
                    <br/>
                  
                    <input 
                          type="checkbox" 
                          name="question9chinese"
                          checked={this.state.question9Chinese}
                          onChange={this.handleChange}
                      />Chinese
                       <br/>
                        <br/>
                      <input 
                          type="checkbox" 
                          name="question9Vietnamese"
                          checked={this.state.question9Vietnamese}
                          onChange={this.handleChange}
                      />Vietnamese
                       <br/>
                        <br/>
                      <input 
                          type="checkbox" 
                          name="question9Hawaiian"
                          checked={this.state.question9Hawaiian}
                          onChange={this.handleChange}
                      />Hawaiian
                       <br/>
                        <br/>
                      <input 
                          type="checkbox" 
                          name="question9Filipino"
                          checked={this.state.question9Filipino}
                          onChange={this.handleChange}
                      />Filipino
                       <br/>
                        <br/>
                      <input 
                          type="checkbox" 
                          name="question9Korean"
                          checked={this.state.question9Korean}
                          onChange={this.handleChange}
                      />Korean
                       <br/>
                        <br/>
                      <input 
                          type="checkbox" 
                          name="question9Samoan"
                          checked={this.state.question9Samoan}
                          onChange={this.handleChange}
                      />Samoan
                       <br/>
                        <br/>
                      <input 
                          type="checkbox" 
                          name="question9AsianIndian"
                          checked={this.state.question9AsianIndian}
                          onChange={this.handleChange}
                      />Asian Indian
                       <br/>
                        <br/>
                      <input 
                          type="checkbox" 
                          name="question9Japanese"
                          checked={this.state.question9Japanese}
                          onChange={this.handleChange}
                      />Japanese
                       <br/>
                      <br/>
                      <input 
                          type="checkbox" 
                          name="question9Chamorro"
                          checked={this.state.question9Chamorro}
                          onChange={this.handleChange}
                      />Chamorro
                       <br/>
                      <br/>

                      <input 
                          type="checkbox" 
                          name="question9OtherAsian"
                          checked={this.state.question9OtherAsian}
                          onChange={this.handleChange}
                      />Other Asian
                       <br/>
                      <br/>
                      <label className="input-head">Enter for example, Pakistani, Cambodian, Hmong, etc.</label>
                      
                      <br/>
                      <br/>
                    <input
                    type="text" 
                    value={this.state.question9d4} 
                    name="question9d4" 
                    placeholder="" 
                    onChange={this.handleChange} 

                  />
                   <br/>
                      <br/>
                  

                      <input 
                          type="checkbox" 
                          name="question9OtherPI"
                          checked={this.state.question9OtherPI}
                          onChange={this.handleChange}
                      />
                     
                      Other Pacific Islander
                       <br/>
                      <br/>
                      <label className="input-head">Enter, for example, Tongan, Fijian, Marshallese, etc.</label>
                      
                      <br/>
                      <br/>
                    <input
                    type="text" 
                    value={this.state.question9d5} 
                    name="question9d5" 
                    placeholder="" 
                    onChange={this.handleChange} 

                  />
                  
                   <br/>
                      <br/>


                    <input 
                          type="checkbox" 
                          name="question9Other"
                          checked={this.state.question9Other}
                          onChange={this.handleChange}
                      />
                      Some other race 
                        <br/>
                      <br/>
                      <label className="input-head">Enter race or origin.</label>
                      
                      <br/>
                      <br/>

                    <input
                    type="text" 
                    value={this.state.question9d6} 
                    name="question9d6" 
                    placeholder="" 
                    onChange={this.handleChange} 

                  />

                 <br/>
                 <br/>



                 <h1>Person 2</h1>

                <br/>
                <br/>

                <label className="question">1. What is Person 2’s name?</label>
          <br/>
        <br/>
          <input
          type="text" 
          value={this.state.question1_2FN} 
          name="question1_2FN" 
          placeholder="First Name" 
          onChange={this.handleChange} 

        />
         <input
          type="text" 
          value={this.state.question1_2MI} 
          name="question1_2MI" 
          placeholder="MI" 
          onChange={this.handleChange} 

        />
         <input
          type="text" 
          value={this.state.question1_2LN} 
          name="question1_2LN" 
          placeholder="Last Name" 
          onChange={this.handleChange} 

        />
       <br/>
        <br/>
        <br/>
        <br/>

        <label className="question">2. Does this person usually live or stay somewhere else?</label>
        <br/>
        <br/>
        <label className="marking">Mark all that apply</label>

                        <br/>
                        <br/>
                       
        <input 
                          type="checkbox" 
                          name="question2a2"
                          checked={this.state.question2a2}
                          onChange={this.handleChange}
                            />No
                         <br/>
                        <br/>
                    <input 
                          type="checkbox" 
                          name="question2b2"
                          checked={this.state.question2b2}
                          onChange={this.handleChange}
                      />Yes, for college
                       <br/>
                      <br/>
                    <input 
                          type="checkbox" 
                          name="question2c2"
                          checked={this.state.question2c2}
                          onChange={this.handleChange}
                      />Yes, for a military assignment
                       <br/>
                       <br/>
                    <input 
                          type="checkbox" 
                          name="question2d2"
                          checked={this.state.question2d2}
                          onChange={this.handleChange}
                      />Yes, for a job or business
                       <br/>
                        <br/>
                    <input 
                          type="checkbox" 
                          name="question2e2"
                          checked={this.state.question2e2}
                          onChange={this.handleChange}
                      />Yes, in a nursing home
                          <br/>
                        <br/>

                      <input 
                          type="checkbox" 
                          name="question2f2"
                          checked={this.state.question2f2}
                          onChange={this.handleChange}
                            />Yes, with a parent or other relative
                         <br/>
                        <br/>
                    <input 
                          type="checkbox" 
                          name="question2g2"
                          checked={this.state.question2g2}
                          onChange={this.handleChange}
                      />Yes, at a seasonal or second residence
                       <br/>
                      <br/>
                    <input 
                          type="checkbox" 
                          name="question2h2"
                          checked={this.state.question2h2}
                          onChange={this.handleChange}
                      />Yes, in a jail or prison
                       <br/>
                       <br/>
                    <input 
                          type="checkbox" 
                          name="question2i2"
                          checked={this.state.question2i2}
                          onChange={this.handleChange}
                      />Yes, for another reason
                       <br/>
                        <br/>
                        <br/>
                        <br/>

                        <label className="question">3. How is this person related to Person 1?</label>
                      <br/>
                      <br/>
                    <label className="marking">Mark ONE box.</label>
                    <br/>
                    <br/>
                   
              
                <label>
                <input 
                        type="radio" 
                        name="question3"
                        value="Opposite-sex husband/wife/spouse"
                        checked={this.state.question3 === "Opposite-sex husband/wife/spouse"}
                        onChange={this.handleChange}
                    /> Opposite-sex husband/wife/spouse
                </label>
                <br/>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3"
                        value="Opposite-sex unmarried partner"
                        checked={this.state.question3 === "Opposite-sex unmarried partner"}
                        onChange={this.handleChange}
                    /> Opposite-sex unmarried partner
                </label>
                <br/>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3"
                        value="Same-sex husband/wife/spouse"
                        checked={this.state.question3 === "Same-sex husband/wife/spouse"}
                        onChange={this.handleChange}
                    /> Same-sex husband/wife/spouse
                </label>
                <br/>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3"
                        value="Same-sex unmarried partner"
                        checked={this.state.question3 === "Same-sex unmarried partner"}
                        onChange={this.handleChange}
                    /> Same-sex unmarried partner
                </label>
                <br/>
                <br/>

            
                <label>
                <input 
                        type="radio" 
                        name="question3"
                        value="Biological son or daughter"
                        checked={this.state.question3 === "Biological son or daughter"}
                        onChange={this.handleChange}
                    /> Biological son or daughter
                </label>
                <br/>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3"
                        value="Adopted son or daughter"
                        checked={this.state.question3 === "Adopted son or daughter"}
                        onChange={this.handleChange}
                    /> Adopted son or daughter
                </label>
                <br/>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3"
                        value="Stepson or stepdaughter"
                        checked={this.state.question3 === "Stepson or stepdaughter"}
                        onChange={this.handleChange}
                    /> Stepson or stepdaughter
                </label>
                <br/>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3"
                        value="Brother or sister"
                        checked={this.state.question3 === "Brother or sister"}
                        onChange={this.handleChange}
                    /> Brother or sister
                </label>
                <br/>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3"
                        value="Father or mother"
                        checked={this.state.question3 === "Father or mother"}
                        onChange={this.handleChange}
                    /> Father or mother
                </label>
                <br/>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3"
                        value="Grandchild"
                        checked={this.state.question3 === "Grandchild"}
                        onChange={this.handleChange}
                    /> Grandchild
                </label>
                <br/>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3"
                        value="Parent-in-law"
                        checked={this.state.question3 === "Parent-in-law"}
                        onChange={this.handleChange}
                    /> Parent-in-law
                </label>
                <br/>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3"
                        value="Son-in-law or daughter-in-law"
                        checked={this.state.question3 === "Son-in-law or daughter-in-law"}
                        onChange={this.handleChange}
                    />  Son-in-law or daughter-in-law
                </label>
                <br/>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3"
                        value="Other relative"
                        checked={this.state.question3 === "Other relative"}
                        onChange={this.handleChange}
                    /> Other relative
                </label>
                <br/>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3"
                        value="Roommate or housemate"
                        checked={this.state.question3 === "Roommate or housemate"}
                        onChange={this.handleChange}
                    /> Roommate or housemate
                </label>
                <br/>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3"
                        value="Foster child"
                        checked={this.state.question3 === "Foster child"}
                        onChange={this.handleChange}
                    />  Foster child
                </label>
                <br/>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3"
                        value="Other nonrelative"
                        checked={this.state.question3 === "Other nonrelative"}
                        onChange={this.handleChange}
                    />  Other nonrelative
                </label>



                <br/>
                <br/>
                <br/>
                <br/>

                <label className="question">4. What is Person 2’s sex?</label>
        <br/>
        <br/>
        <label>

                    <input 
                        type="radio" 
                        name="question4_2"
                        value="male"
                        checked={this.state.question4_2 === "male"}
                        onChange={this.handleChange}
                    /> Male
                </label>
                <br />
                <label>
                    <input 
                        type="radio" 
                        name="question4_2"
                        value="female"
                        checked={this.state.question4_2 === "female"}
                        onChange={this.handleChange}
                    /> Female
                </label>

                <br/>
                <br/>
                <br/>
                <br/>

                <label className="question">5. What is Person 2’s age and what is Person 2’s date of birth? For babies less than 1 year old, do not write the age in months. Write 0 as the age.</label>
                            
                            <br/>
                            <br/>
                      <input
                      type="text" 
                      value={this.state.question5_2age} 
                      name="question5_2age" 
                      placeholder="Years old on 4/01/2020" 
                      onChange={this.handleChange} 

                    />
                    <input
                      type="text" 
                      value={this.state.question5_2month} 
                      name="question5_2month" 
                      placeholder="Month" 
                      onChange={this.handleChange} 

                    />
                    <input
                      type="text" 
                      value={this.state.question5_2day} 
                      name="question5_2day" 
                      placeholder="Day" 
                      onChange={this.handleChange} 

                    />
                    <input
                      type="text" 
                      value={this.state.question5_2year} 
                      name="question5_2year" 
                      placeholder="Year of Birth" 
                      onChange={this.handleChange} 

                    />

                        

                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <label>NOTE: Please answer BOTH Question 6 about Hispanic origin and Question 7 about race. For this census, Hispanic origins are not races.</label>
        <br/>
        <br/>
      <label className="question">6. Is this person of Hispanic, Latino, or Spanish origin?</label>
      <br/>
      <br/>
                    <input 
                          type="checkbox" 
                          name="question6_2a"
                          checked={this.state.question6_2a}
                          onChange={this.handleChange}
                            />No, not of Hispanic, Latino, or Spanish origin
                         <br/>
                          <br/>
                    <input 
                          type="checkbox" 
                          name="question6_2b"
                          checked={this.state.question6_2b}
                          onChange={this.handleChange}
                      />Yes, Mexican, Mexican Am., Chicano
                       <br/>
                          <br/>
                    <input 
                          type="checkbox" 
                          name="question6_2c"
                          checked={this.state.question6_2c}
                          onChange={this.handleChange}
                      />Yes, Puerto Rican
                       <br/>
                          <br/>
                    <input 
                          type="checkbox" 
                          name="question6_2d"
                          checked={this.state.question6_2d}
                          onChange={this.handleChange}
                      />People staying here temporarily
                       <br/>
                          <br/>
                    <input 
                          type="checkbox" 
                          name="question6_2e"
                          checked={this.state.question6_2e}
                          onChange={this.handleChange}
                      />Yes, Cuban
                       <br/>
                          <br/>
                      <input 
                          type="checkbox" 
                          name="question6_2e1"
                          checked={this.state.question6_2e1}
                          onChange={this.handleChange}
                      />Yes, another Hispanic, Latino, or Spanish origin 
                       <br/>
                      <br/>
                      <label className="input-head">Enter, for example, Salvadoran, Dominican, Colombian, Guatemalan, Spaniard, Ecuadorian, etc.</label>
                      
                       <br/>
                          <br/>


                    
                    <input
                    type="text" 
                    value={this.state.question6_2e2} 
                    name="question6_2e2" 
                    placeholder="" 
                    onChange={this.handleChange} 

                  />

                        <h1>{this.state.question6_2e2}</h1>

                  <br/>
                  <br/>
                  <br/>
                  <br/>

                  <label className="question">7. What is Person 2’s race?</label>
                  <br/>
                  <br/>

                  <label className="marking">Mark one or more boxes AND print origins.</label>
                  <br/>
                  <br/>
                  <input 
                          type="checkbox" 
                          name="question7_2white"
                          checked={this.state.question7_2white}
                          onChange={this.handleChange}
                      />White
                       <br/>
                      <br/>

                      <label className="input-head">Enter, for example, German, Irish, English, Italian, Lebanese, Egyptian, etc..</label>
                      
                      <br/>
                      <br/>
                    <input
                    type="text" 
                    value={this.state.question7_2d1} 
                    name="question7_2d1" 
                    placeholder="" 
                    onChange={this.handleChange} 

                  />
                  <br/>
                  <br/>
                  <input 
                          type="checkbox" 
                          name="question7_2black"
                          checked={this.state.question7_2black}
                          onChange={this.handleChange}
                      />Black or African Am.
                       <br/>
                        <br/>
                        <label className="input-head">Enter, for example, African American, Jamaican, Haitian, Nigerian, Ethiopian, Somali, etc.</label>
                      
                      <br/>
                      <br/>
                    <input
                    type="text" 
                    value={this.state.question7_2d2} 
                    name="question7_2d2" 
                    placeholder="" 
                    onChange={this.handleChange} 

                  />
                  <br/>
                  <br/>
                  <input 
                          type="checkbox" 
                          name="question7_2native"
                          checked={this.state.question7_2native}
                          onChange={this.handleChange}
                      />American Indian or Alaska Native 
                      <br/>
                      <br/>
                      <label className="input-head"> Enter name of enrolled or principal tribe(s), for example, Navajo Nation, Blackfeet Tribe, Mayan, Aztec,etc</label>
                           
                      <br/>
                      <br/>      
                    <input
                    type="text" 
                    value={this.state.question7_2d3} 
                    name="question7_2d3" 
                    placeholder="" 
                    onChange={this.handleChange} 

                  />
                    <br/>
                    <br/>
                  
                    <input 
                          type="checkbox" 
                          name="question7_2chinese"
                          checked={this.state.question7_2Chinese}
                          onChange={this.handleChange}
                      />Chinese
                       <br/>
                        <br/>
                      <input 
                          type="checkbox" 
                          name="question7_2Vietnamese"
                          checked={this.state.question7_2Vietnamese}
                          onChange={this.handleChange}
                      />Vietnamese
                       <br/>
                        <br/>
                      <input 
                          type="checkbox" 
                          name="question7_2Hawaiian"
                          checked={this.state.question7_2Hawaiian}
                          onChange={this.handleChange}
                      />Hawaiian
                       <br/>
                        <br/>
                      <input 
                          type="checkbox" 
                          name="question7_2Filipino"
                          checked={this.state.question7_2Filipino}
                          onChange={this.handleChange}
                      />Filipino
                       <br/>
                        <br/>
                      <input 
                          type="checkbox" 
                          name="question7_2Korean"
                          checked={this.state.question7_2Korean}
                          onChange={this.handleChange}
                      />Korean
                       <br/>
                        <br/>
                      <input 
                          type="checkbox" 
                          name="question7_2Samoan"
                          checked={this.state.question7_2Samoan}
                          onChange={this.handleChange}
                      />Samoan
                       <br/>
                        <br/>
                      <input 
                          type="checkbox" 
                          name="question7_2AsianIndian"
                          checked={this.state.question7_2AsianIndian}
                          onChange={this.handleChange}
                      />Asian Indian
                       <br/>
                        <br/>
                      <input 
                          type="checkbox" 
                          name="question7_2Japanese"
                          checked={this.state.question7_2Japanese}
                          onChange={this.handleChange}
                      />Japanese
                       <br/>
                      <br/>
                      <input 
                          type="checkbox" 
                          name="question7_2Chamorro"
                          checked={this.state.question7_2Chamorro}
                          onChange={this.handleChange}
                      />Chamorro
                       <br/>
                      <br/>

                      <input 
                          type="checkbox" 
                          name="question7_2OtherAsian"
                          checked={this.state.question7_2OtherAsian}
                          onChange={this.handleChange}
                      />Other Asian
                       <br/>
                      <br/>
                      <label className="input-head">Enter for example, Pakistani, Cambodian, Hmong, etc.</label>
                      
                      <br/>
                      <br/>
                    <input
                    type="text" 
                    value={this.state.question7_2d4} 
                    name="question7_2d4" 
                    placeholder="" 
                    onChange={this.handleChange} 

                  />
                   <br/>
                      <br/>
                  

                      <input 
                          type="checkbox" 
                          name="question7_2OtherPI"
                          checked={this.state.question7_2OtherPI}
                          onChange={this.handleChange}
                      />
                     
                      Other Pacific Islander
                       <br/>
                      <br/>
                      <label className="input-head">Enter, for example, Tongan, Fijian, Marshallese, etc.</label>
                      
                      <br/>
                      <br/>
                    <input
                    type="text" 
                    value={this.state.question7_2d5} 
                    name="question7_2d5" 
                    placeholder="" 
                    onChange={this.handleChange} 

                  />
                  
                   <br/>
                      <br/>


                    <input 
                          type="checkbox" 
                          name="question7_2Other"
                          checked={this.state.question7_2Other}
                          onChange={this.handleChange}
                      />
                      Some other race 
                        <br/>
                      <br/>
                      <label className="input-head">Enter race or origin.</label>
                      
                      <br/>
                      <br/>
                    <input
                    type="text" 
                    value={this.state.question7_2d6} 
                    name="question7_2d6" 
                    placeholder="" 
                    onChange={this.handleChange} 

                  />

                 <br/>
                 <br/>

                   

                   












        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
                 <button type="submit" value="Submit">Submit </button>



    
    
    

      </form>

      <h3  className="disclaimer">This is for practicing React and state in React. This is not connected and does not save data. Still, do not enter sensitive information.</h3>
      </div>
    )
  }
}

export default App;
