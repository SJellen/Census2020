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
        question2f2: false,
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


        question1_3FN: '',
        question1_3MI: '',
        question1_3LN: '',
        question2a3: false,
        question2b3: false,
        question2c3: false,
        question2d3: false,
        question2e3: false,
        question2f3: false,
        question2g3: false,
        question2h3: false,
        question2i3: false,
        question3_3: '',
        question4_3: '',
        question5_3age: '',
        question5_3month: '',
        question5_3day: '',
        question5_3year: '',
        question6_3a: false,
        question6_3b: false,
        question6_3c: false,
        question6_3d: false,
        question6_3e1: false,
        question6_3e2: '',
        question7_3white: false,
        question7_3d1: '',
        question7_3black: false,
        question7_3d2: '',
        question7_3native: false,
        question7_3d3: '',
        question7_3Chinese: false,
        question7_3Vietnamese: false,
        question7_3Hawaiian: false,
        question7_3Filipino: false,
        question7_3Korean: false,
        question7_3Samoan: false,
        question7_3AsianIndian: false,
        question7_3Japanese: false,
        question7_3Chamorro: false,
        question7_3OtherAsian: false,
        question7_3d4: '',
        question7_3OtherPI: false,
        question7_3d5: '',
        question7_3Other: false,
        question7_3d6: '',
        
        question1_4FN: '',
        question1_4MI: '',
        question1_4LN: '',
        question2a4: false,
        question2b4: false,
        question2c4: false,
        question2d4: false,
        question2e4: false,
        question2f4: false,
        question2g4: false,
        question2h4: false,
        question2i4: false,
        question3_4: '',
        question4_4: '',
        question5_4age: '',
        question5_4month: '',
        question5_4day: '',
        question5_4year: '',
        question6_4a: false,
        question6_4b: false,
        question6_4c: false,
        question6_4d: false,
        question6_4e1: false,
        question6_4e2: '',
        question7_4white: false,
        question7_4d1: '',
        question7_4black: false,
        question7_4d2: '',
        question7_4native: false,
        question7_4d3: '',
        question7_4Chinese: false,
        question7_4Vietnamese: false,
        question7_4Hawaiian: false,
        question7_4Filipino: false,
        question7_4Korean: false,
        question7_4Samoan: false,
        question7_4AsianIndian: false,
        question7_4Japanese: false,
        question7_4Chamorro: false,
        question7_4OtherAsian: false,
        question7_4d4: '',
        question7_4OtherPI: false,
        question7_4d5: '',
        question7_4Other: false,
        question7_4d6: '',

        question1_5FN: '',
        question1_5MI: '',
        question1_5LN: '',
        question2a5: false,
        question2b5: false,
        question2c5: false,
        question2d5: false,
        question2e5: false,
        question2f5: false,
        question2g5: false,
        question2h5: false,
        question2i5: false,
        question3_5: '',
        question4_5: '',
        question5_5age: '',
        question5_5month: '',
        question5_5day: '',
        question5_5year: '',
        question6_5a: false,
        question6_5b: false,
        question6_5c: false,
        question6_5d: false,
        question6_5e1: false,
        question6_5e2: '',
        question7_5white: false,
        question7_5d1: '',
        question7_5black: false,
        question7_5d2: '',
        question7_5native: false,
        question7_5d3: '',
        question7_5Chinese: false,
        question7_5Vietnamese: false,
        question7_5Hawaiian: false,
        question7_5Filipino: false,
        question7_5Korean: false,
        question7_5Samoan: false,
        question7_5AsianIndian: false,
        question7_5Japanese: false,
        question7_5Chamorro: false,
        question7_5OtherAsian: false,
        question7_5d4: '',
        question7_5OtherPI: false,
        question7_5d5: '',
        question7_5Other: false,
        question7_5d6: '',

        question1_6FN: '',
        question1_6MI: '',
        question1_6LN: '',
        question2a6: false,
        question2b6: false,
        question2c6: false,
        question2d6: false,
        question2e6: false,
        question2f6: false,
        question2g6: false,
        question2h6: false,
        question2i6: false,
        question3_6: '',
        question4_6: '',
        question5_6age: '',
        question5_6month: '',
        question5_6day: '',
        question5_6year: '',
        question6_6a: false,
        question6_6b: false,
        question6_6c: false,
        question6_6d: false,
        question6_6e1: false,
        question6_6e2: '',
        question7_6white: false,
        question7_6d1: '',
        question7_6black: false,
        question7_6d2: '',
        question7_6native: false,
        question7_6d3: '',
        question7_6Chinese: false,
        question7_6Vietnamese: false,
        question7_6Hawaiian: false,
        question7_6Filipino: false,
        question7_6Korean: false,
        question7_6Samoan: false,
        question7_6AsianIndian: false,
        question7_6Japanese: false,
        question7_6Chamorro: false,
        question7_6OtherAsian: false,
        question7_6d4: '',
        question7_6OtherPI: false,
        question7_6d5: '',
        question7_6Other: false,
        question7_6d6: '',

        question1_7FN: '',
        question1_7MI: '',
        question1_7LN: '',
        question2_7: '',
        question3_7age: '',
        question3_7month: '',
        question3_7day: '',
        question3_7year: '',
        question4_7: '',

        question1_8FN: '',
        question1_8MI: '',
        question1_8LN: '',
        question2_8: '',
        question3_8age: '',
        question3_8month: '',
        question3_8day: '',
        question3_8year: '',
        question4_8: '',

        question1_9FN: '',
        question1_9MI: '',
        question1_9LN: '',
        question2_9: '',
        question3_9age: '',
        question3_9month: '',
        question3_9day: '',
        question3_9year: '',
        question4_9: '',

        question1_10FN: '',
        question1_10MI: '',
        question1_10LN: '',
        question2_10: '',
        question3_10age: '',
        question3_10month: '',
        question3_10day: '',
        question3_10year: '',
        question4_10: '',


        
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
                        name="question3_2"
                        value="Opposite-sex husband/wife/spouse"
                        checked={this.state.question3_2 === "Opposite-sex husband/wife/spouse"}
                        onChange={this.handleChange}
                    /> Opposite-sex husband/wife/spouse
                </label>
                <br/>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3_2"
                        value="Opposite-sex unmarried partner"
                        checked={this.state.question3_2 === "Opposite-sex unmarried partner"}
                        onChange={this.handleChange}
                    /> Opposite-sex unmarried partner
                </label>
                <br/>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3_2"
                        value="Same-sex husband/wife/spouse"
                        checked={this.state.question3_2 === "Same-sex husband/wife/spouse"}
                        onChange={this.handleChange}
                    /> Same-sex husband/wife/spouse
                </label>
                <br/>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3_2"
                        value="Same-sex unmarried partner"
                        checked={this.state.question3_2 === "Same-sex unmarried partner"}
                        onChange={this.handleChange}
                    /> Same-sex unmarried partner
                </label>
                <br/>
                <br/>

            
                <label>
                <input 
                        type="radio" 
                        name="question3_2"
                        value="Biological son or daughter"
                        checked={this.state.question3_2 === "Biological son or daughter"}
                        onChange={this.handleChange}
                    /> Biological son or daughter
                </label>
                <br/>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3_2"
                        value="Adopted son or daughter"
                        checked={this.state.question3_2 === "Adopted son or daughter"}
                        onChange={this.handleChange}
                    /> Adopted son or daughter
                </label>
                <br/>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3_2"
                        value="Stepson or stepdaughter"
                        checked={this.state.question3_2 === "Stepson or stepdaughter"}
                        onChange={this.handleChange}
                    /> Stepson or stepdaughter
                </label>
                <br/>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3_2"
                        value="Brother or sister"
                        checked={this.state.question3_2 === "Brother or sister"}
                        onChange={this.handleChange}
                    /> Brother or sister
                </label>
                <br/>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3_2"
                        value="Father or mother"
                        checked={this.state.question3_2 === "Father or mother"}
                        onChange={this.handleChange}
                    /> Father or mother
                </label>
                <br/>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3_2"
                        value="Grandchild"
                        checked={this.state.question3_2 === "Grandchild"}
                        onChange={this.handleChange}
                    /> Grandchild
                </label>
                <br/>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3_2"
                        value="Parent-in-law"
                        checked={this.state.question3_2 === "Parent-in-law"}
                        onChange={this.handleChange}
                    /> Parent-in-law
                </label>
                <br/>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3_2"
                        value="Son-in-law or daughter-in-law"
                        checked={this.state.question3_2 === "Son-in-law or daughter-in-law"}
                        onChange={this.handleChange}
                    />  Son-in-law or daughter-in-law
                </label>
                <br/>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3_2"
                        value="Other relative"
                        checked={this.state.question3_2 === "Other relative"}
                        onChange={this.handleChange}
                    /> Other relative
                </label>
                <br/>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3_2"
                        value="Roommate or housemate"
                        checked={this.state.question3_2 === "Roommate or housemate"}
                        onChange={this.handleChange}
                    /> Roommate or housemate
                </label>
                <br/>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3_2"
                        value="Foster child"
                        checked={this.state.question3_2 === "Foster child"}
                        onChange={this.handleChange}
                    />  Foster child
                </label>
                <br/>
                <br/>
                <label>
                <input 
                        type="radio" 
                        name="question3_2"
                        value="Other nonrelative"
                        checked={this.state.question3_2 === "Other nonrelative"}
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



                 <h1>Person 3</h1>

<br/>
<br/>

<label className="question">1. What is Person 3’s name?</label>
<br/>
<br/>
<input
type="text" 
value={this.state.question1_3FN} 
name="question1_3FN" 
placeholder="First Name" 
onChange={this.handleChange} 

/>
<input
type="text" 
value={this.state.question1_3MI} 
name="question1_3MI" 
placeholder="MI" 
onChange={this.handleChange} 

/>
<input
type="text" 
value={this.state.question1_3LN} 
name="question1_3LN" 
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
          name="question2a3"
          checked={this.state.question2a3}
          onChange={this.handleChange}
            />No
         <br/>
        <br/>
    <input 
          type="checkbox" 
          name="question2b3"
          checked={this.state.question2b3}
          onChange={this.handleChange}
      />Yes, for college
       <br/>
      <br/>
    <input 
          type="checkbox" 
          name="question2c3"
          checked={this.state.question2c3}
          onChange={this.handleChange}
      />Yes, for a military assignment
       <br/>
       <br/>
    <input 
          type="checkbox" 
          name="question2d3"
          checked={this.state.question2d3}
          onChange={this.handleChange}
      />Yes, for a job or business
       <br/>
        <br/>
    <input 
          type="checkbox" 
          name="question2e3"
          checked={this.state.question2e3}
          onChange={this.handleChange}
      />Yes, in a nursing home
          <br/>
        <br/>

      <input 
          type="checkbox" 
          name="question2f3"
          checked={this.state.question2f3}
          onChange={this.handleChange}
            />Yes, with a parent or other relative
         <br/>
        <br/>
    <input 
          type="checkbox" 
          name="question2g3"
          checked={this.state.question2g3}
          onChange={this.handleChange}
      />Yes, at a seasonal or second residence
       <br/>
      <br/>
    <input 
          type="checkbox" 
          name="question2h3"
          checked={this.state.question2h3}
          onChange={this.handleChange}
      />Yes, in a jail or prison
       <br/>
       <br/>
    <input 
          type="checkbox" 
          name="question2i3"
          checked={this.state.question2i3}
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
        name="question3_3"
        value="Opposite-sex husband/wife/spouse"
        checked={this.state.question3_3 === "Opposite-sex husband/wife/spouse"}
        onChange={this.handleChange}
    /> Opposite-sex husband/wife/spouse
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_3"
        value="Opposite-sex unmarried partner"
        checked={this.state.question3_3 === "Opposite-sex unmarried partner"}
        onChange={this.handleChange}
    /> Opposite-sex unmarried partner
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_3"
        value="Same-sex husband/wife/spouse"
        checked={this.state.question3_3 === "Same-sex husband/wife/spouse"}
        onChange={this.handleChange}
    /> Same-sex husband/wife/spouse
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_3"
        value="Same-sex unmarried partner"
        checked={this.state.question3_3 === "Same-sex unmarried partner"}
        onChange={this.handleChange}
    /> Same-sex unmarried partner
</label>
<br/>
<br/>


<label>
<input 
        type="radio" 
        name="question3_3"
        value="Biological son or daughter"
        checked={this.state.question3_3 === "Biological son or daughter"}
        onChange={this.handleChange}
    /> Biological son or daughter
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_3"
        value="Adopted son or daughter"
        checked={this.state.question3_3 === "Adopted son or daughter"}
        onChange={this.handleChange}
    /> Adopted son or daughter
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_3"
        value="Stepson or stepdaughter"
        checked={this.state.question3_3 === "Stepson or stepdaughter"}
        onChange={this.handleChange}
    /> Stepson or stepdaughter
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_3"
        value="Brother or sister"
        checked={this.state.question3_3 === "Brother or sister"}
        onChange={this.handleChange}
    /> Brother or sister
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_3"
        value="Father or mother"
        checked={this.state.question3_3 === "Father or mother"}
        onChange={this.handleChange}
    /> Father or mother
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_3"
        value="Grandchild"
        checked={this.state.question3_3 === "Grandchild"}
        onChange={this.handleChange}
    /> Grandchild
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_3"
        value="Parent-in-law"
        checked={this.state.question3_3 === "Parent-in-law"}
        onChange={this.handleChange}
    /> Parent-in-law
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_3"
        value="Son-in-law or daughter-in-law"
        checked={this.state.question3_3 === "Son-in-law or daughter-in-law"}
        onChange={this.handleChange}
    />  Son-in-law or daughter-in-law
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_3"
        value="Other relative"
        checked={this.state.question3_3 === "Other relative"}
        onChange={this.handleChange}
    /> Other relative
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_3"
        value="Roommate or housemate"
        checked={this.state.question3_3 === "Roommate or housemate"}
        onChange={this.handleChange}
    /> Roommate or housemate
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_3"
        value="Foster child"
        checked={this.state.question3_3 === "Foster child"}
        onChange={this.handleChange}
    />  Foster child
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_3"
        value="Other nonrelative"
        checked={this.state.question3_3 === "Other nonrelative"}
        onChange={this.handleChange}
    />  Other nonrelative
</label>



<br/>
<br/>
<br/>
<br/>

<label className="question">4. What is Person 3’s sex?</label>
<br/>
<br/>
<label>

    <input 
        type="radio" 
        name="question4_3"
        value="male"
        checked={this.state.question4_3 === "male"}
        onChange={this.handleChange}
    /> Male
</label>
<br />
<label>
    <input 
        type="radio" 
        name="question4_3"
        value="female"
        checked={this.state.question4_3 === "female"}
        onChange={this.handleChange}
    /> Female
</label>

<br/>
<br/>
<br/>
<br/>

<label className="question">5. What is Person 3’s age and what is Person 3’s date of birth? For babies less than 1 year old, do not write the age in months. Write 0 as the age.</label>
            
            <br/>
            <br/>
      <input
      type="text" 
      value={this.state.question5_3age} 
      name="question5_3age" 
      placeholder="Years old on 4/01/2020" 
      onChange={this.handleChange} 

    />
    <input
      type="text" 
      value={this.state.question5_3month} 
      name="question5_3month" 
      placeholder="Month" 
      onChange={this.handleChange} 

    />
    <input
      type="text" 
      value={this.state.question5_3day} 
      name="question5_3day" 
      placeholder="Day" 
      onChange={this.handleChange} 

    />
    <input
      type="text" 
      value={this.state.question5_3year} 
      name="question5_3year" 
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
          name="question6_3a"
          checked={this.state.question6_3a}
          onChange={this.handleChange}
            />No, not of Hispanic, Latino, or Spanish origin
         <br/>
          <br/>
    <input 
          type="checkbox" 
          name="question6_3b"
          checked={this.state.question6_3b}
          onChange={this.handleChange}
      />Yes, Mexican, Mexican Am., Chicano
       <br/>
          <br/>
    <input 
          type="checkbox" 
          name="question6_3c"
          checked={this.state.question6_3c}
          onChange={this.handleChange}
      />Yes, Puerto Rican
       <br/>
          <br/>
    <input 
          type="checkbox" 
          name="question6_3d"
          checked={this.state.question6_3d}
          onChange={this.handleChange}
      />People staying here temporarily
       <br/>
          <br/>
    <input 
          type="checkbox" 
          name="question6_3e"
          checked={this.state.question6_3e}
          onChange={this.handleChange}
      />Yes, Cuban
       <br/>
          <br/>
      <input 
          type="checkbox" 
          name="question6_3e1"
          checked={this.state.question6_3e1}
          onChange={this.handleChange}
      />Yes, another Hispanic, Latino, or Spanish origin 
       <br/>
      <br/>
      <label className="input-head">Enter, for example, Salvadoran, Dominican, Colombian, Guatemalan, Spaniard, Ecuadorian, etc.</label>
      
       <br/>
          <br/>

    
    
    <input
    type="text" 
    value={this.state.question6_3e2} 
    name="question6_3e2" 
    placeholder="" 
    onChange={this.handleChange} 

  />

        

  <br/>
  <br/>
  <br/>
  <br/>

  <label className="question">7. What is Person 3’s race?</label>
  <br/>
  <br/>

  <label className="marking">Mark one or more boxes AND print origins.</label>
  <br/>
  <br/>
  <input 
          type="checkbox" 
          name="question7_3white"
          checked={this.state.question7_3white}
          onChange={this.handleChange}
      />White
       <br/>
      <br/>

      <label className="input-head">Enter, for example, German, Irish, English, Italian, Lebanese, Egyptian, etc..</label>
      
      <br/>
      <br/>
    <input
    type="text" 
    value={this.state.question7_3d1} 
    name="question7_3d1" 
    placeholder="" 
    onChange={this.handleChange} 

  />

          
 
  <br/>
  <br/>
  <input 
          type="checkbox" 
          name="question7_3black"
          checked={this.state.question7_3black}
          onChange={this.handleChange}
      />Black or African Am.
       <br/>
        <br/>
        <label className="input-head">Enter, for example, African American, Jamaican, Haitian, Nigerian, Ethiopian, Somali, etc.</label>
      
      <br/>
      <br/>
    <input
    type="text" 
    value={this.state.question7_3d2} 
    name="question7_3d2" 
    placeholder="" 
    onChange={this.handleChange} 

  />
        3
  <br/>
  <br/>
  <input 
          type="checkbox" 
          name="question7_3native"
          checked={this.state.question7_3native}
          onChange={this.handleChange}
      />American Indian or Alaska Native 
      <br/>
      <br/>
      <label className="input-head"> Enter name of enrolled or principal tribe(s), for example, Navajo Nation, Blackfeet Tribe, Mayan, Aztec,etc</label>
           
      <br/>
      <br/>      
    <input
    type="text" 
    value={this.state.question7_3d3} 
    name="question7_3d3" 
    placeholder="" 
    onChange={this.handleChange} 

  />


   
    <br/>
    <br/>
  
    <input 
          type="checkbox" 
          name="question7_3chinese"
          checked={this.state.question7_3Chinese}
          onChange={this.handleChange}
      />Chinese
       <br/>
        <br/>
      <input 
          type="checkbox" 
          name="question7_3Vietnamese"
          checked={this.state.question7_3Vietnamese}
          onChange={this.handleChange}
      />Vietnamese
       <br/>
        <br/>
      <input 
          type="checkbox" 
          name="question7_3Hawaiian"
          checked={this.state.question7_3Hawaiian}
          onChange={this.handleChange}
      />Hawaiian
       <br/>
        <br/>
      <input 
          type="checkbox" 
          name="question7_3Filipino"
          checked={this.state.question7_3Filipino}
          onChange={this.handleChange}
      />Filipino
       <br/>
        <br/>
      <input 
          type="checkbox" 
          name="question7_3Korean"
          checked={this.state.question7_3Korean}
          onChange={this.handleChange}
      />Korean
       <br/>
        <br/>
      <input 
          type="checkbox" 
          name="question7_3Samoan"
          checked={this.state.question7_3Samoan}
          onChange={this.handleChange}
      />Samoan
       <br/>
        <br/>
      <input 
          type="checkbox" 
          name="question7_3AsianIndian"
          checked={this.state.question7_3AsianIndian}
          onChange={this.handleChange}
      />Asian Indian
       <br/>
        <br/>
      <input 
          type="checkbox" 
          name="question7_3Japanese"
          checked={this.state.question7_3Japanese}
          onChange={this.handleChange}
      />Japanese
       <br/>
      <br/>
      <input 
          type="checkbox" 
          name="question7_3Chamorro"
          checked={this.state.question7_3Chamorro}
          onChange={this.handleChange}
      />Chamorro
       <br/>
      <br/>

      <input 
          type="checkbox" 
          name="question7_3OtherAsian"
          checked={this.state.question7_3OtherAsian}
          onChange={this.handleChange}
      />Other Asian
       <br/>
      <br/>
      <label className="input-head">Enter for example, Pakistani, Cambodian, Hmong, etc.</label>
      
      <br/>
      <br/>
    <input
    type="text" 
    value={this.state.question7_3d4} 
    name="question7_3d4" 
    placeholder="" 
    onChange={this.handleChange} 

  />
                   
   <br/>
      <br/>
  

      <input 
          type="checkbox" 
          name="question7_3OtherPI"
          checked={this.state.question7_3OtherPI}
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
    value={this.state.question7_3d5} 
    name="question7_3d5" 
    placeholder="" 
    onChange={this.handleChange} 

  />
  
  
   <br/>
      <br/>


    <input 
          type="checkbox" 
          name="question7_3Other"
          checked={this.state.question7_3Other}
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
    value={this.state.question7_3d6} 
    name="question7_3d6" 
    placeholder="" 
    onChange={this.handleChange} 

  />



 <br/>
 <br/>

 <h1>Person 4</h1>

<br/>
<br/>

<label className="question">1. What is Person 4’s name?</label>
<br/>
<br/>
<input
type="text" 
value={this.state.question1_4FN} 
name="question1_4FN" 
placeholder="First Name" 
onChange={this.handleChange} 

/>
<input
type="text" 
value={this.state.question1_4MI} 
name="question1_4MI" 
placeholder="MI" 
onChange={this.handleChange} 

/>
<input
type="text" 
value={this.state.question1_4LN} 
name="question1_4LN" 
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
          name="question2a4"
          checked={this.state.question2a4}
          onChange={this.handleChange}
            />No
         <br/>
        <br/>
    <input 
          type="checkbox" 
          name="question2b4"
          checked={this.state.question2b4}
          onChange={this.handleChange}
      />Yes, for college
       <br/>
      <br/>
    <input 
          type="checkbox" 
          name="question2c4"
          checked={this.state.question2c4}
          onChange={this.handleChange}
      />Yes, for a military assignment
       <br/>
       <br/>
    <input 
          type="checkbox" 
          name="question2d4"
          checked={this.state.question2d4}
          onChange={this.handleChange}
      />Yes, for a job or business
       <br/>
        <br/>
    <input 
          type="checkbox" 
          name="question2e4"
          checked={this.state.question2e4}
          onChange={this.handleChange}
      />Yes, in a nursing home
          <br/>
        <br/>

      <input 
          type="checkbox" 
          name="question2f4"
          checked={this.state.question2f4}
          onChange={this.handleChange}
            />Yes, with a parent or other relative
         <br/>
        <br/>
    <input 
          type="checkbox" 
          name="question2g4"
          checked={this.state.question2g4}
          onChange={this.handleChange}
      />Yes, at a seasonal or second residence
       <br/>
      <br/>
    <input 
          type="checkbox" 
          name="question2h4"
          checked={this.state.question2h4}
          onChange={this.handleChange}
      />Yes, in a jail or prison
       <br/>
       <br/>
    <input 
          type="checkbox" 
          name="question2i4"
          checked={this.state.question2i4}
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
        name="question3_4"
        value="Opposite-sex husband/wife/spouse"
        checked={this.state.question3_4 === "Opposite-sex husband/wife/spouse"}
        onChange={this.handleChange}
    /> Opposite-sex husband/wife/spouse
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_4"
        value="Opposite-sex unmarried partner"
        checked={this.state.question3_4 === "Opposite-sex unmarried partner"}
        onChange={this.handleChange}
    /> Opposite-sex unmarried partner
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_4"
        value="Same-sex husband/wife/spouse"
        checked={this.state.question3_4 === "Same-sex husband/wife/spouse"}
        onChange={this.handleChange}
    /> Same-sex husband/wife/spouse
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_4"
        value="Same-sex unmarried partner"
        checked={this.state.question3_4 === "Same-sex unmarried partner"}
        onChange={this.handleChange}
    /> Same-sex unmarried partner
</label>
<br/>
<br/>


<label>
<input 
        type="radio" 
        name="question3_4"
        value="Biological son or daughter"
        checked={this.state.question3_4 === "Biological son or daughter"}
        onChange={this.handleChange}
    /> Biological son or daughter
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_4"
        value="Adopted son or daughter"
        checked={this.state.question3_4 === "Adopted son or daughter"}
        onChange={this.handleChange}
    /> Adopted son or daughter
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_4"
        value="Stepson or stepdaughter"
        checked={this.state.question3_4 === "Stepson or stepdaughter"}
        onChange={this.handleChange}
    /> Stepson or stepdaughter
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_4"
        value="Brother or sister"
        checked={this.state.question3_4 === "Brother or sister"}
        onChange={this.handleChange}
    /> Brother or sister
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_4"
        value="Father or mother"
        checked={this.state.question3_4 === "Father or mother"}
        onChange={this.handleChange}
    /> Father or mother
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_4"
        value="Grandchild"
        checked={this.state.question3_4 === "Grandchild"}
        onChange={this.handleChange}
    /> Grandchild
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_4"
        value="Parent-in-law"
        checked={this.state.question3_4 === "Parent-in-law"}
        onChange={this.handleChange}
    /> Parent-in-law
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_4"
        value="Son-in-law or daughter-in-law"
        checked={this.state.question3_4 === "Son-in-law or daughter-in-law"}
        onChange={this.handleChange}
    />  Son-in-law or daughter-in-law
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_4"
        value="Other relative"
        checked={this.state.question3_4 === "Other relative"}
        onChange={this.handleChange}
    /> Other relative
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_4"
        value="Roommate or housemate"
        checked={this.state.question3_4 === "Roommate or housemate"}
        onChange={this.handleChange}
    /> Roommate or housemate
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_4"
        value="Foster child"
        checked={this.state.question3_4 === "Foster child"}
        onChange={this.handleChange}
    />  Foster child
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_4"
        value="Other nonrelative"
        checked={this.state.question3_4 === "Other nonrelative"}
        onChange={this.handleChange}
    />  Other nonrelative
</label>



<br/>
<br/>
<br/>
<br/>

<label className="question">4. What is Person 4’s sex?</label>
<br/>
<br/>
<label>

    <input 
        type="radio" 
        name="question4_4"
        value="male"
        checked={this.state.question4_4 === "male"}
        onChange={this.handleChange}
    /> Male
</label>
<br />
<label>
    <input 
        type="radio" 
        name="question4_4"
        value="female"
        checked={this.state.question4_4 === "female"}
        onChange={this.handleChange}
    /> Female
</label>

<br/>
<br/>
<br/>
<br/>

<label className="question">5. What is Person 4’s age and what is Person 4’s date of birth? For babies less than 1 year old, do not write the age in months. Write 0 as the age.</label>
            
            <br/>
            <br/>
      <input
      type="text" 
      value={this.state.question5_4age} 
      name="question5_4age" 
      placeholder="Years old on 4/01/2020" 
      onChange={this.handleChange} 

    />
    <input
      type="text" 
      value={this.state.question5_4month} 
      name="question5_4month" 
      placeholder="Month" 
      onChange={this.handleChange} 

    />
    <input
      type="text" 
      value={this.state.question5_4day} 
      name="question5_4day" 
      placeholder="Day" 
      onChange={this.handleChange} 

    />
    <input
      type="text" 
      value={this.state.question5_4year} 
      name="question5_4year" 
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
          name="question6_4a"
          checked={this.state.question6_4a}
          onChange={this.handleChange}
            />No, not of Hispanic, Latino, or Spanish origin
         <br/>
          <br/>
    <input 
          type="checkbox" 
          name="question6_4b"
          checked={this.state.question6_4b}
          onChange={this.handleChange}
      />Yes, Mexican, Mexican Am., Chicano
       <br/>
          <br/>
    <input 
          type="checkbox" 
          name="question6_4c"
          checked={this.state.question6_4c}
          onChange={this.handleChange}
      />Yes, Puerto Rican
       <br/>
          <br/>
    <input 
          type="checkbox" 
          name="question6_4d"
          checked={this.state.question6_4d}
          onChange={this.handleChange}
      />People staying here temporarily
       <br/>
          <br/>
    <input 
          type="checkbox" 
          name="question6_4e"
          checked={this.state.question6_4e}
          onChange={this.handleChange}
      />Yes, Cuban
       <br/>
          <br/>
      <input 
          type="checkbox" 
          name="question6_4e1"
          checked={this.state.question6_4e1}
          onChange={this.handleChange}
      />Yes, another Hispanic, Latino, or Spanish origin 
       <br/>
      <br/>
      <label className="input-head">Enter, for example, Salvadoran, Dominican, Colombian, Guatemalan, Spaniard, Ecuadorian, etc.</label>
      
       <br/>
          <br/>


    
    <input
    type="text" 
    value={this.state.question6_4e2} 
    name="question6_4e2" 
    placeholder="" 
    onChange={this.handleChange} 

  />



  <br/>
  <br/>
  <br/>
  <br/>

  <label className="question">7. What is Person 4’s race?</label>
  <br/>
  <br/>

  <label className="marking">Mark one or more boxes AND print origins.</label>
  <br/>
  <br/>
  <input 
          type="checkbox" 
          name="question7_4white"
          checked={this.state.question7_4white}
          onChange={this.handleChange}
      />White
       <br/>
      <br/>

      <label className="input-head">Enter, for example, German, Irish, English, Italian, Lebanese, Egyptian, etc..</label>
      
      <br/>
      <br/>
    <input
    type="text" 
    value={this.state.question7_4d1} 
    name="question7_4d1" 
    placeholder="" 
    onChange={this.handleChange} 

  />


 
  <br/>
  <br/>
  <input 
          type="checkbox" 
          name="question7_4black"
          checked={this.state.question7_4black}
          onChange={this.handleChange}
      />Black or African Am.
       <br/>
        <br/>
        <label className="input-head">Enter, for example, African American, Jamaican, Haitian, Nigerian, Ethiopian, Somali, etc.</label>
      
      <br/>
      <br/>
    <input
    type="text" 
    value={this.state.question7_4d2} 
    name="question7_4d2" 
    placeholder="" 
    onChange={this.handleChange} 

  />
                  
  <br/>
  <br/>
  <input 
          type="checkbox" 
          name="question7_4native"
          checked={this.state.question7_4native}
          onChange={this.handleChange}
      />American Indian or Alaska Native 
      <br/>
      <br/>
      <label className="input-head"> Enter name of enrolled or principal tribe(s), for example, Navajo Nation, Blackfeet Tribe, Mayan, Aztec,etc</label>
           
      <br/>
      <br/>      
    <input
    type="text" 
    value={this.state.question7_4d3} 
    name="question7_4d3" 
    placeholder="" 
    onChange={this.handleChange} 

  />              
   
    <br/>
    <br/>
  
    <input 
          type="checkbox" 
          name="question7_4chinese"
          checked={this.state.question7_4Chinese}
          onChange={this.handleChange}
      />Chinese
       <br/>
        <br/>
      <input 
          type="checkbox" 
          name="question7_4Vietnamese"
          checked={this.state.question7_4Vietnamese}
          onChange={this.handleChange}
      />Vietnamese
       <br/>
        <br/>
      <input 
          type="checkbox" 
          name="question7_4Hawaiian"
          checked={this.state.question7_4Hawaiian}
          onChange={this.handleChange}
      />Hawaiian
       <br/>
        <br/>
      <input 
          type="checkbox" 
          name="question7_4Filipino"
          checked={this.state.question7_4Filipino}
          onChange={this.handleChange}
      />Filipino
       <br/>
        <br/>
      <input 
          type="checkbox" 
          name="question7_4Korean"
          checked={this.state.question7_4Korean}
          onChange={this.handleChange}
      />Korean
       <br/>
        <br/>
      <input 
          type="checkbox" 
          name="question7_4Samoan"
          checked={this.state.question7_4Samoan}
          onChange={this.handleChange}
      />Samoan
       <br/>
        <br/>
      <input 
          type="checkbox" 
          name="question7_4AsianIndian"
          checked={this.state.question7_4AsianIndian}
          onChange={this.handleChange}
      />Asian Indian
       <br/>
        <br/>
      <input 
          type="checkbox" 
          name="question7_4Japanese"
          checked={this.state.question7_4Japanese}
          onChange={this.handleChange}
      />Japanese
       <br/>
      <br/>
      <input 
          type="checkbox" 
          name="question7_4Chamorro"
          checked={this.state.question7_4Chamorro}
          onChange={this.handleChange}
      />Chamorro
       <br/>
      <br/>

      <input 
          type="checkbox" 
          name="question7_4OtherAsian"
          checked={this.state.question7_4OtherAsian}
          onChange={this.handleChange}
      />Other Asian
       <br/>
      <br/>
      <label className="input-head">Enter for example, Pakistani, Cambodian, Hmong, etc.</label>
      
      <br/>
      <br/>
    <input
    type="text" 
    value={this.state.question7_4d4} 
    name="question7_4d4" 
    placeholder="" 
    onChange={this.handleChange} 

  />



 
   <br/>
      <br/>
  

      <input 
          type="checkbox" 
          name="question7_4OtherPI"
          checked={this.state.question7_4OtherPI}
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
    value={this.state.question7_4d5} 
    name="question7_4d5" 
    placeholder="" 
    onChange={this.handleChange} 

  />
        
  
   <br/>
      <br/>


    <input 
          type="checkbox" 
          name="question7_4Other"
          checked={this.state.question7_4Other}
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
    value={this.state.question7_4d6} 
    name="question7_4d6" 
    placeholder="" 
    onChange={this.handleChange} 

  />



 <br/>
 <br/>

 <h1>Person 5</h1>

<br/>
<br/>

<label className="question">1. What is Person 5’s name?</label>
<br/>
<br/>
                <input
                type="text" 
                value={this.state.question1_5FN} 
                name="question1_5FN" 
                placeholder="First Name" 
                onChange={this.handleChange} 

                />
                <input
                type="text" 
                value={this.state.question1_5MI} 
                name="question1_5MI" 
                placeholder="MI" 
                onChange={this.handleChange} 

                />
                <input
                type="text" 
                value={this.state.question1_5LN} 
                name="question1_5LN" 
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
          name="question2a5"
          checked={this.state.question2a5}
          onChange={this.handleChange}
            />No
         <br/>
        <br/>
    <input 
          type="checkbox" 
          name="question2b5"
          checked={this.state.question2b5}
          onChange={this.handleChange}
      />Yes, for college
       <br/>
      <br/>
    <input 
          type="checkbox" 
          name="question2c5"
          checked={this.state.question2c5}
          onChange={this.handleChange}
      />Yes, for a military assignment
       <br/>
       <br/>
    <input 
          type="checkbox" 
          name="question2d5"
          checked={this.state.question2d5}
          onChange={this.handleChange}
      />Yes, for a job or business
       <br/>
        <br/>
    <input 
          type="checkbox" 
          name="question2e5"
          checked={this.state.question2e5}
          onChange={this.handleChange}
      />Yes, in a nursing home
          <br/>
        <br/>

      <input 
          type="checkbox" 
          name="question2f5"
          checked={this.state.question2f5}
          onChange={this.handleChange}
            />Yes, with a parent or other relative
         <br/>
        <br/>
    <input 
          type="checkbox" 
          name="question2g5"
          checked={this.state.question2g5}
          onChange={this.handleChange}
      />Yes, at a seasonal or second residence
       <br/>
      <br/>
    <input 
          type="checkbox" 
          name="question2h5"
          checked={this.state.question2h5}
          onChange={this.handleChange}
      />Yes, in a jail or prison
       <br/>
       <br/>
    <input 
          type="checkbox" 
          name="question2i5"
          checked={this.state.question2i5}
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
        name="question3_5"
        value="Opposite-sex husband/wife/spouse"
        checked={this.state.question3_5 === "Opposite-sex husband/wife/spouse"}
        onChange={this.handleChange}
    /> Opposite-sex husband/wife/spouse
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_5"
        value="Opposite-sex unmarried partner"
        checked={this.state.question3_5 === "Opposite-sex unmarried partner"}
        onChange={this.handleChange}
    /> Opposite-sex unmarried partner
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_5"
        value="Same-sex husband/wife/spouse"
        checked={this.state.question3_5 === "Same-sex husband/wife/spouse"}
        onChange={this.handleChange}
    /> Same-sex husband/wife/spouse
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_5"
        value="Same-sex unmarried partner"
        checked={this.state.question3_5 === "Same-sex unmarried partner"}
        onChange={this.handleChange}
    /> Same-sex unmarried partner
</label>
<br/>
<br/>


<label>
<input 
        type="radio" 
        name="question3_5"
        value="Biological son or daughter"
        checked={this.state.question3_5 === "Biological son or daughter"}
        onChange={this.handleChange}
    /> Biological son or daughter
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_5"
        value="Adopted son or daughter"
        checked={this.state.question3_5 === "Adopted son or daughter"}
        onChange={this.handleChange}
    /> Adopted son or daughter
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_5"
        value="Stepson or stepdaughter"
        checked={this.state.question3_5 === "Stepson or stepdaughter"}
        onChange={this.handleChange}
    /> Stepson or stepdaughter
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_5"
        value="Brother or sister"
        checked={this.state.question3_5 === "Brother or sister"}
        onChange={this.handleChange}
    /> Brother or sister
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_5"
        value="Father or mother"
        checked={this.state.question3_5 === "Father or mother"}
        onChange={this.handleChange}
    /> Father or mother
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_5"
        value="Grandchild"
        checked={this.state.question3_5 === "Grandchild"}
        onChange={this.handleChange}
    /> Grandchild
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_5"
        value="Parent-in-law"
        checked={this.state.question3_5 === "Parent-in-law"}
        onChange={this.handleChange}
    /> Parent-in-law
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_5"
        value="Son-in-law or daughter-in-law"
        checked={this.state.question3_5 === "Son-in-law or daughter-in-law"}
        onChange={this.handleChange}
    />  Son-in-law or daughter-in-law
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_5"
        value="Other relative"
        checked={this.state.question3_5 === "Other relative"}
        onChange={this.handleChange}
    /> Other relative
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_5"
        value="Roommate or housemate"
        checked={this.state.question3_5 === "Roommate or housemate"}
        onChange={this.handleChange}
    /> Roommate or housemate
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_5"
        value="Foster child"
        checked={this.state.question3_5 === "Foster child"}
        onChange={this.handleChange}
    />  Foster child
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_5"
        value="Other nonrelative"
        checked={this.state.question3_5 === "Other nonrelative"}
        onChange={this.handleChange}
    />  Other nonrelative
</label>



<br/>
<br/>
<br/>
<br/>

<label className="question">4. What is Person 5’s sex?</label>
<br/>
<br/>
<label>

    <input 
        type="radio" 
        name="question4_5"
        value="male"
        checked={this.state.question4_5 === "male"}
        onChange={this.handleChange}
    /> Male
</label>
<br />
<label>
    <input 
        type="radio" 
        name="question4_5"
        value="female"
        checked={this.state.question4_5 === "female"}
        onChange={this.handleChange}
    /> Female
</label>

<br/>
<br/>
<br/>
<br/>

<label className="question">5. What is Person 5’s age and what is Person 5’s date of birth? For babies less than 1 year old, do not write the age in months. Write 0 as the age.</label>
            
            <br/>
            <br/>
      <input
      type="text" 
      value={this.state.question5_5age} 
      name="question5_5age" 
      placeholder="Years old on 4/01/2020" 
      onChange={this.handleChange} 

    />
    <input
      type="text" 
      value={this.state.question5_5month} 
      name="question5_5month" 
      placeholder="Month" 
      onChange={this.handleChange} 

    />
    <input
      type="text" 
      value={this.state.question5_5day} 
      name="question5_5day" 
      placeholder="Day" 
      onChange={this.handleChange} 

    />
    <input
      type="text" 
      value={this.state.question5_5year} 
      name="question5_5year" 
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
          name="question6_5a"
          checked={this.state.question6_5a}
          onChange={this.handleChange}
            />No, not of Hispanic, Latino, or Spanish origin
         <br/>
          <br/>
    <input 
          type="checkbox" 
          name="question6_5b"
          checked={this.state.question6_5b}
          onChange={this.handleChange}
      />Yes, Mexican, Mexican Am., Chicano
       <br/>
          <br/>
    <input 
          type="checkbox" 
          name="question6_5c"
          checked={this.state.question6_5c}
          onChange={this.handleChange}
      />Yes, Puerto Rican
       <br/>
          <br/>
    <input 
          type="checkbox" 
          name="question6_5d"
          checked={this.state.question6_5d}
          onChange={this.handleChange}
      />People staying here temporarily
       <br/>
          <br/>
    <input 
          type="checkbox" 
          name="question6_5e"
          checked={this.state.question6_5e}
          onChange={this.handleChange}
      />Yes, Cuban
       <br/>
          <br/>
      <input 
          type="checkbox" 
          name="question6_5e1"
          checked={this.state.question6_5e1}
          onChange={this.handleChange}
      />Yes, another Hispanic, Latino, or Spanish origin 
       <br/>
      <br/>
      <label className="input-head">Enter, for example, Salvadoran, Dominican, Colombian, Guatemalan, Spaniard, Ecuadorian, etc.</label>
      
       <br/>
          <br/>


    
    <input
    type="text" 
    value={this.state.question6_5e2} 
    name="question6_5e2" 
    placeholder="" 
    onChange={this.handleChange} 

  />
     
        

  <br/>
  <br/>
  <br/>
  <br/>

  <label className="question">7. What is Person 5’s race?</label>
  <br/>
  <br/>

  <label className="marking">Mark one or more boxes AND print origins.</label>
  <br/>
  <br/>
  <input 
          type="checkbox" 
          name="question7_5white"
          checked={this.state.question7_5white}
          onChange={this.handleChange}
      />White
       <br/>
      <br/>

      <label className="input-head">Enter, for example, German, Irish, English, Italian, Lebanese, Egyptian, etc..</label>
      
      <br/>
      <br/>
    <input
    type="text" 
    value={this.state.question7_5d1} 
    name="question7_5d1" 
    placeholder="" 
    onChange={this.handleChange} 

  />
   
 
  <br/>
  <br/>
  <input 
          type="checkbox" 
          name="question7_5black"
          checked={this.state.question7_5black}
          onChange={this.handleChange}
      />Black or African Am.
       <br/>
        <br/>
        <label className="input-head">Enter, for example, African American, Jamaican, Haitian, Nigerian, Ethiopian, Somali, etc.</label>
      
      <br/>
      <br/>
    <input
    type="text" 
    value={this.state.question7_5d2} 
    name="question7_5d2" 
    placeholder="" 
    onChange={this.handleChange} 

  />
       
  <br/>
  <br/>
  <input 
          type="checkbox" 
          name="question7_5native"
          checked={this.state.question7_5native}
          onChange={this.handleChange}
      />American Indian or Alaska Native 
      <br/>
      <br/>
      <label className="input-head"> Enter name of enrolled or principal tribe(s), for example, Navajo Nation, Blackfeet Tribe, Mayan, Aztec,etc</label>
           
      <br/>
      <br/>      
    <input
    type="text" 
    value={this.state.question7_5d3} 
    name="question7_5d3" 
    placeholder="" 
    onChange={this.handleChange} 

  />


   
    <br/>
    <br/>
  
    <input 
          type="checkbox" 
          name="question7_5chinese"
          checked={this.state.question7_5Chinese}
          onChange={this.handleChange}
      />Chinese
       <br/>
        <br/>
      <input 
          type="checkbox" 
          name="question7_5Vietnamese"
          checked={this.state.question7_5Vietnamese}
          onChange={this.handleChange}
      />Vietnamese
       <br/>
        <br/>
      <input 
          type="checkbox" 
          name="question7_5Hawaiian"
          checked={this.state.question7_5Hawaiian}
          onChange={this.handleChange}
      />Hawaiian
       <br/>
        <br/>
      <input 
          type="checkbox" 
          name="question7_5Filipino"
          checked={this.state.question7_5Filipino}
          onChange={this.handleChange}
      />Filipino
       <br/>
        <br/>
      <input 
          type="checkbox" 
          name="question7_5Korean"
          checked={this.state.question7_5Korean}
          onChange={this.handleChange}
      />Korean
       <br/>
        <br/>
      <input 
          type="checkbox" 
          name="question7_5Samoan"
          checked={this.state.question7_5Samoan}
          onChange={this.handleChange}
      />Samoan
       <br/>
        <br/>
      <input 
          type="checkbox" 
          name="question7_5AsianIndian"
          checked={this.state.question7_5AsianIndian}
          onChange={this.handleChange}
      />Asian Indian
       <br/>
        <br/>
      <input 
          type="checkbox" 
          name="question7_5Japanese"
          checked={this.state.question7_5Japanese}
          onChange={this.handleChange}
      />Japanese
       <br/>
      <br/>
      <input 
          type="checkbox" 
          name="question7_5Chamorro"
          checked={this.state.question7_5Chamorro}
          onChange={this.handleChange}
      />Chamorro
       <br/>
      <br/>

      <input 
          type="checkbox" 
          name="question7_5OtherAsian"
          checked={this.state.question7_5OtherAsian}
          onChange={this.handleChange}
      />Other Asian
       <br/>
      <br/>
      <label className="input-head">Enter for example, Pakistani, Cambodian, Hmong, etc.</label>
      
      <br/>
      <br/>
    <input
    type="text" 
    value={this.state.question7_5d4} 
    name="question7_5d4" 
    placeholder="" 
    onChange={this.handleChange} 

  />                
 
   <br/>
      <br/>
  

      <input 
          type="checkbox" 
          name="question7_5OtherPI"
          checked={this.state.question7_5OtherPI}
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
    value={this.state.question7_5d5} 
    name="question7_5d5" 
    placeholder="" 
    onChange={this.handleChange} 

  />
          
  
   <br/>
      <br/>


    <input 
          type="checkbox" 
          name="question7_5Other"
          checked={this.state.question7_5Other}
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
    value={this.state.question7_5d6} 
    name="question7_5d6" 
    placeholder="" 
    onChange={this.handleChange} 

  />



 <br/>
 <br/>


 <h1>Person 6</h1>

<br/>
<br/>

                    <label className="question">1. What is Person 6’s name?</label>
                    <br/>
                    <br/>
                    <input
                    type="text" 
                    value={this.state.question1_6FN} 
                    name="question1_6FN" 
                    placeholder="First Name" 
                    onChange={this.handleChange} 

                    />
                    <input
                    type="text" 
                    value={this.state.question1_6MI} 
                    name="question1_6MI" 
                    placeholder="MI" 
                    onChange={this.handleChange} 

                    />
                    <input
                    type="text" 
                    value={this.state.question1_6LN} 
                    name="question1_6LN" 
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
          name="question2a6"
          checked={this.state.question2a6}
          onChange={this.handleChange}
            />No
         <br/>
        <br/>
    <input 
          type="checkbox" 
          name="question2b6"
          checked={this.state.question2b6}
          onChange={this.handleChange}
      />Yes, for college
       <br/>
      <br/>
    <input 
          type="checkbox" 
          name="question2c6"
          checked={this.state.question2c6}
          onChange={this.handleChange}
      />Yes, for a military assignment
       <br/>
       <br/>
    <input 
          type="checkbox" 
          name="question2d6"
          checked={this.state.question2d6}
          onChange={this.handleChange}
      />Yes, for a job or business
       <br/>
        <br/>
    <input 
          type="checkbox" 
          name="question2e6"
          checked={this.state.question2e6}
          onChange={this.handleChange}
      />Yes, in a nursing home
          <br/>
        <br/>

      <input 
          type="checkbox" 
          name="question2f6"
          checked={this.state.question2f6}
          onChange={this.handleChange}
            />Yes, with a parent or other relative
         <br/>
        <br/>
    <input 
          type="checkbox" 
          name="question2g6"
          checked={this.state.question2g6}
          onChange={this.handleChange}
      />Yes, at a seasonal or second residence
       <br/>
      <br/>
    <input 
          type="checkbox" 
          name="question2h6"
          checked={this.state.question2h6}
          onChange={this.handleChange}
      />Yes, in a jail or prison
       <br/>
       <br/>
    <input 
          type="checkbox" 
          name="question2i6"
          checked={this.state.question2i6}
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
        name="question3_6"
        value="Opposite-sex husband/wife/spouse"
        checked={this.state.question3_6 === "Opposite-sex husband/wife/spouse"}
        onChange={this.handleChange}
    /> Opposite-sex husband/wife/spouse
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_6"
        value="Opposite-sex unmarried partner"
        checked={this.state.question3_6 === "Opposite-sex unmarried partner"}
        onChange={this.handleChange}
    /> Opposite-sex unmarried partner
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_6"
        value="Same-sex husband/wife/spouse"
        checked={this.state.question3_6 === "Same-sex husband/wife/spouse"}
        onChange={this.handleChange}
    /> Same-sex husband/wife/spouse
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_6"
        value="Same-sex unmarried partner"
        checked={this.state.question3_6 === "Same-sex unmarried partner"}
        onChange={this.handleChange}
    /> Same-sex unmarried partner
</label>
<br/>
<br/>


<label>
<input 
        type="radio" 
        name="question3_6"
        value="Biological son or daughter"
        checked={this.state.question3_6 === "Biological son or daughter"}
        onChange={this.handleChange}
    /> Biological son or daughter
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_6"
        value="Adopted son or daughter"
        checked={this.state.question3_6 === "Adopted son or daughter"}
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
        name="question3_6"
        value="Brother or sister"
        checked={this.state.question3_6 === "Brother or sister"}
        onChange={this.handleChange}
    /> Brother or sister
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_6"
        value="Father or mother"
        checked={this.state.question3_6 === "Father or mother"}
        onChange={this.handleChange}
    /> Father or mother
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_6"
        value="Grandchild"
        checked={this.state.question3_6 === "Grandchild"}
        onChange={this.handleChange}
    /> Grandchild
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_6"
        value="Parent-in-law"
        checked={this.state.question3_6 === "Parent-in-law"}
        onChange={this.handleChange}
    /> Parent-in-law
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_6"
        value="Son-in-law or daughter-in-law"
        checked={this.state.question3_6 === "Son-in-law or daughter-in-law"}
        onChange={this.handleChange}
    />  Son-in-law or daughter-in-law
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_6"
        value="Other relative"
        checked={this.state.question3_6 === "Other relative"}
        onChange={this.handleChange}
    /> Other relative
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_6"
        value="Roommate or housemate"
        checked={this.state.question3_6 === "Roommate or housemate"}
        onChange={this.handleChange}
    /> Roommate or housemate
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_6"
        value="Foster child"
        checked={this.state.question3_6 === "Foster child"}
        onChange={this.handleChange}
    />  Foster child
</label>
<br/>
<br/>
<label>
<input 
        type="radio" 
        name="question3_6"
        value="Other nonrelative"
        checked={this.state.question3_6 === "Other nonrelative"}
        onChange={this.handleChange}
    />  Other nonrelative
</label>



<br/>
<br/>
<br/>
<br/>

<label className="question">4. What is Person 6’s sex?</label>
<br/>
<br/>
<label>

    <input 
        type="radio" 
        name="question4_6"
        value="male"
        checked={this.state.question4_6 === "male"}
        onChange={this.handleChange}
    /> Male
</label>
<br />
<label>
    <input 
        type="radio" 
        name="question4_6"
        value="female"
        checked={this.state.question4_6 === "female"}
        onChange={this.handleChange}
    /> Female
</label>

<br/>
<br/>
<br/>
<br/>

<label className="question">5. What is Person 6’s age and what is Person 6’s date of birth? For babies less than 1 year old, do not write the age in months. Write 0 as the age.</label>
            
            <br/>
            <br/>
      <input
      type="text" 
      value={this.state.question5_6age} 
      name="question5_6age" 
      placeholder="Years old on 4/01/2020" 
      onChange={this.handleChange} 

    />
    <input
      type="text" 
      value={this.state.question5_6month} 
      name="question5_6month" 
      placeholder="Month" 
      onChange={this.handleChange} 

    />
    <input
      type="text" 
      value={this.state.question5_6day} 
      name="question5_6day" 
      placeholder="Day" 
      onChange={this.handleChange} 

    />
    <input
      type="text" 
      value={this.state.question5_6year} 
      name="question5_6year" 
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
          name="question6_6a"
          checked={this.state.question6_6a}
          onChange={this.handleChange}
            />No, not of Hispanic, Latino, or Spanish origin
         <br/>
          <br/>
    <input 
          type="checkbox" 
          name="question6_6b"
          checked={this.state.question6_6b}
          onChange={this.handleChange}
      />Yes, Mexican, Mexican Am., Chicano
       <br/>
          <br/>
    <input 
          type="checkbox" 
          name="question6_6c"
          checked={this.state.question6_6c}
          onChange={this.handleChange}
      />Yes, Puerto Rican
       <br/>
          <br/>
    <input 
          type="checkbox" 
          name="question6_6d"
          checked={this.state.question6_6d}
          onChange={this.handleChange}
      />People staying here temporarily
       <br/>
          <br/>
    <input 
          type="checkbox" 
          name="question6_6e"
          checked={this.state.question6_6e}
          onChange={this.handleChange}
      />Yes, Cuban
       <br/>
          <br/>
      <input 
          type="checkbox" 
          name="question6_6e1"
          checked={this.state.question6_6e1}
          onChange={this.handleChange}
      />Yes, another Hispanic, Latino, or Spanish origin 
       <br/>
      <br/>
      <label className="input-head">Enter, for example, Salvadoran, Dominican, Colombian, Guatemalan, Spaniard, Ecuadorian, etc.</label>
      
       <br/>
          <br/>


    
    <input
    type="text" 
    value={this.state.question6_6e2} 
    name="question6_6e2" 
    placeholder="" 
    onChange={this.handleChange} 

    />

        

  <br/>
  <br/>
  <br/>
  <br/>

  <label className="question">7. What is Person 6’s race?</label>
  <br/>
  <br/>

  <label className="marking">Mark one or more boxes AND print origins.</label>
  <br/>
  <br/>
  <input 
          type="checkbox" 
          name="question7_6white"
          checked={this.state.question7_6white}
          onChange={this.handleChange}
      />White
       <br/>
      <br/>

      <label className="input-head">Enter, for example, German, Irish, English, Italian, Lebanese, Egyptian, etc..</label>
      
      <br/>
      <br/>
    <input
    type="text" 
    value={this.state.question7_6d1} 
    name="question7_6d1" 
    placeholder="" 
    onChange={this.handleChange} 

  />
                        
  <br/>
  <br/>
  <input 
          type="checkbox" 
          name="question7_6black"
          checked={this.state.question7_6black}
          onChange={this.handleChange}
      />Black or African Am.
       <br/>
        <br/>
        <label className="input-head">Enter, for example, African American, Jamaican, Haitian, Nigerian, Ethiopian, Somali, etc.</label>
      
      <br/>
      <br/>
    <input
    type="text" 
    value={this.state.question7_6d2} 
    name="question7_6d2" 
    placeholder="" 
    onChange={this.handleChange} 

  />
                    
  <br/>
  <br/>
  <input 
          type="checkbox" 
          name="question7_6native"
          checked={this.state.question7_6native}
          onChange={this.handleChange}
      />American Indian or Alaska Native 
      <br/>
      <br/>
      <label className="input-head"> Enter name of enrolled or principal tribe(s), for example, Navajo Nation, Blackfeet Tribe, Mayan, Aztec,etc</label>
           
      <br/>
      <br/>      
    <input
    type="text" 
    value={this.state.question7_6d3} 
    name="question7_6d3" 
    placeholder="" 
    onChange={this.handleChange} 

  />             
   
    <br/>
    <br/>
  
    <input 
          type="checkbox" 
          name="question7_6chinese"
          checked={this.state.question7_6Chinese}
          onChange={this.handleChange}
      />Chinese
       <br/>
        <br/>
      <input 
          type="checkbox" 
          name="question7_6Vietnamese"
          checked={this.state.question7_6Vietnamese}
          onChange={this.handleChange}
      />Vietnamese
       <br/>
        <br/>
      <input 
          type="checkbox" 
          name="question7_6Hawaiian"
          checked={this.state.question7_6Hawaiian}
          onChange={this.handleChange}
      />Hawaiian
       <br/>
        <br/>
      <input 
          type="checkbox" 
          name="question7_6Filipino"
          checked={this.state.question7_6Filipino}
          onChange={this.handleChange}
      />Filipino
       <br/>
        <br/>
      <input 
          type="checkbox" 
          name="question7_6Korean"
          checked={this.state.question7_6Korean}
          onChange={this.handleChange}
      />Korean
       <br/>
        <br/>
      <input 
          type="checkbox" 
          name="question7_6Samoan"
          checked={this.state.question7_6Samoan}
          onChange={this.handleChange}
      />Samoan
       <br/>
        <br/>
      <input 
          type="checkbox" 
          name="question7_6AsianIndian"
          checked={this.state.question7_6AsianIndian}
          onChange={this.handleChange}
      />Asian Indian
       <br/>
        <br/>
      <input 
          type="checkbox" 
          name="question7_6Japanese"
          checked={this.state.question7_6Japanese}
          onChange={this.handleChange}
      />Japanese
       <br/>
      <br/>
      <input 
          type="checkbox" 
          name="question7_6Chamorro"
          checked={this.state.question7_6Chamorro}
          onChange={this.handleChange}
      />Chamorro
       <br/>
      <br/>

      <input 
          type="checkbox" 
          name="question7_6OtherAsian"
          checked={this.state.question7_6OtherAsian}
          onChange={this.handleChange}
      />Other Asian
       <br/>
      <br/>
      <label className="input-head">Enter for example, Pakistani, Cambodian, Hmong, etc.</label>
      
      <br/>
      <br/>
    <input
    type="text" 
    value={this.state.question7_6d4} 
    name="question7_6d4" 
    placeholder="" 
    onChange={this.handleChange} 

  />
 
   <br/>                  
      <br/>
  

      <input 
          type="checkbox" 
          name="question7_6OtherPI"
          checked={this.state.question7_6OtherPI}
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
    value={this.state.question7_6d5} 
    name="question7_6d5" 
    placeholder="" 
    onChange={this.handleChange} 

  />
                     
  
   <br/>
      <br/>


    <input 
          type="checkbox" 
          name="question7_6Other"
          checked={this.state.question7_6Other}
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
    value={this.state.question7_6d6} 
    name="question7_6d6" 
    placeholder="" 
    onChange={this.handleChange} 

  />



 <br/>
 <br/>





                   

 <h1>Person 7</h1>

<br/>
<br/>

<label className="question">1. What is Person 7’s name?</label>
<br/>
<br/>
                <input
                type="text" 
                value={this.state.question1_7FN} 
                name="question1_7FN" 
                placeholder="First Name" 
                onChange={this.handleChange} 

                />
                <input
                type="text" 
                value={this.state.question1_7MI} 
                name="question1_7MI" 
                placeholder="MI" 
                onChange={this.handleChange} 

                />
                <input
                type="text" 
                value={this.state.question1_7LN} 
                name="question1_7LN" 
                placeholder="Last Name" 
                onChange={this.handleChange} 

                />
         

               
<br/>
<br/>
<br/>
<br/>  

<label className="question">2. What is Person 7’s sex?</label>
<br/>
<br/>
<label>

    <input 
        type="radio" 
        name="question2_7"
        value="male"
        checked={this.state.question2_7 === "male"}
        onChange={this.handleChange}
    /> Male
</label>
<br />
<label>
    <input 
        type="radio" 
        name="question2_7"
        value="female"
        checked={this.state.question2_7 === "female"}
        onChange={this.handleChange}
    /> Female
</label>

<br/>
<br/>
<br/>
<br/>


<label className="question">3. What is Person 7’s age and what is Person 7’s date of birth? For babies less than 1 year old, do not write the age in months. Write 0 as the age.</label>
            
            <br/>
            <br/>
      <input
      type="text" 
      value={this.state.question3_7age} 
      name="question3_7age" 
      placeholder="Years old on 4/01/2020" 
      onChange={this.handleChange} 

    />
    <input
      type="text" 
      value={this.state.question3_7month} 
      name="question3_7month" 
      placeholder="Month" 
      onChange={this.handleChange} 

    />
    <input
      type="text" 
      value={this.state.question3_7day} 
      name="question3_7day" 
      placeholder="Day" 
      onChange={this.handleChange} 

    />
    <input
      type="text" 
      value={this.state.question3_7year} 
      name="question3_7year" 
      placeholder="Year of Birth" 
      onChange={this.handleChange} 

    />

    
                
    <br/>
    <br/>
    <br/>
    <br/>
    

<label className="question">4. Related to Person 1?</label>
<br/>
<br/>
<label>

    <input 
        type="radio" 
        name="question4_7"
        value="Yes"
        checked={this.state.question4_7 === "Yes"}
        onChange={this.handleChange}
    /> Yes
</label>
<br />
<label>
    <input 
        type="radio" 
        name="question4_7"
        value="No"
        checked={this.state.question4_7 === "No"}
        onChange={this.handleChange}
    /> No
</label>

<br/>
<br/>
<br/>
<br/>


<h1>Person 8</h1>

<br/>
<br/>

<label className="question">1. What is Person 8’s name?</label>
<br/>
<br/>
                <input
                type="text" 
                value={this.state.question1_8FN} 
                name="question1_8FN" 
                placeholder="First Name" 
                onChange={this.handleChange} 

                />
                <input
                type="text" 
                value={this.state.question1_8MI} 
                name="question1_8MI" 
                placeholder="MI" 
                onChange={this.handleChange} 

                />
                <input
                type="text" 
                value={this.state.question1_8LN} 
                name="question1_8LN" 
                placeholder="Last Name" 
                onChange={this.handleChange} 

                />
         

   
<br/>
<br/>
<br/>
<br/>  

<label className="question">2. What is Person 8’s sex?</label>
<br/>
<br/>
<label>

    <input 
        type="radio" 
        name="question2_8"
        value="male"
        checked={this.state.question2_8 === "male"}
        onChange={this.handleChange}
    /> Male
</label>
<br />
<label>
    <input 
        type="radio" 
        name="question2_8"
        value="female"
        checked={this.state.question2_8 === "female"}
        onChange={this.handleChange}
    /> Female
</label>

<br/>
<br/>
<br/>
<br/>


<label className="question">3. What is Person 8’s age and what is Person 8’s date of birth? For babies less than 1 year old, do not write the age in months. Write 0 as the age.</label>
            
            <br/>
            <br/>
      <input
      type="text" 
      value={this.state.question3_8age} 
      name="question3_8age" 
      placeholder="Years old on 4/01/2020" 
      onChange={this.handleChange} 

    />
    <input
      type="text" 
      value={this.state.question3_8month} 
      name="question3_8month" 
      placeholder="Month" 
      onChange={this.handleChange} 

    />
    <input
      type="text" 
      value={this.state.question3_8day} 
      name="question3_8day" 
      placeholder="Day" 
      onChange={this.handleChange} 

    />
    <input
      type="text" 
      value={this.state.question3_8year} 
      name="question3_8year" 
      placeholder="Year of Birth" 
      onChange={this.handleChange} 

    />

    

    <br/>
    <br/>
    <br/>
    <br/>
    

<label className="question">4. Related to Person 1?</label>
<br/>
<br/>
<label>

    <input 
        type="radio" 
        name="question4_8"
        value="Yes"
        checked={this.state.question4_8 === "Yes"}
        onChange={this.handleChange}
    /> Yes
</label>
<br />
<label>
    <input 
        type="radio" 
        name="question4_8"
        value="No"
        checked={this.state.question4_8 === "No"}
        onChange={this.handleChange}
    /> No
</label>

<br/>
<br/>
<br/>
<br/>



<h1>Person 9</h1>

<br/>
<br/>

<label className="question">1. What is Person 9’s name?</label>
<br/>
<br/>
                <input
                type="text" 
                value={this.state.question1_9FN} 
                name="question1_9FN" 
                placeholder="First Name" 
                onChange={this.handleChange} 

                />
                <input
                type="text" 
                value={this.state.question1_9MI} 
                name="question1_9MI" 
                placeholder="MI" 
                onChange={this.handleChange} 

                />
                <input
                type="text" 
                value={this.state.question1_9LN} 
                name="question1_9LN" 
                placeholder="Last Name" 
                onChange={this.handleChange} 

                />
         

        
<br/>
<br/>
<br/>
<br/>  

<label className="question">2. What is Person 9’s sex?</label>
<br/>
<br/>
<label>

    <input 
        type="radio" 
        name="question2_9"
        value="male"
        checked={this.state.question2_9 === "male"}
        onChange={this.handleChange}
    /> Male
</label>
<br />
<label>
    <input 
        type="radio" 
        name="question2_9"
        value="female"
        checked={this.state.question2_9 === "female"}
        onChange={this.handleChange}
    /> Female
</label>

<br/>
<br/>
<br/>
<br/>


<label className="question">3. What is Person 9’s age and what is Person 9’s date of birth? For babies less than 1 year old, do not write the age in months. Write 0 as the age.</label>
            
            <br/>
            <br/>
      <input
      type="text" 
      value={this.state.question3_9age} 
      name="question3_9age" 
      placeholder="Years old on 4/01/2020" 
      onChange={this.handleChange} 

    />
    <input
      type="text" 
      value={this.state.question3_9month} 
      name="question3_9month" 
      placeholder="Month" 
      onChange={this.handleChange} 

    />
    <input
      type="text" 
      value={this.state.question7_9day} 
      name="question3_9day" 
      placeholder="Day" 
      onChange={this.handleChange} 

    />
    <input
      type="text" 
      value={this.state.question3_9year} 
      name="question3_9year" 
      placeholder="Year of Birth" 
      onChange={this.handleChange} 

    />

       
                
    <br/>
    <br/>
    <br/>
    <br/>
    

<label className="question">4. Related to Person 1?</label>
<br/>
<br/>
<label>

    <input 
        type="radio" 
        name="question4_9"
        value="Yes"
        checked={this.state.question4_9 === "Yes"}
        onChange={this.handleChange}
    /> Yes
</label>
<br />
<label>
    <input 
        type="radio" 
        name="question4_9"
        value="No"
        checked={this.state.question4_9 === "No"}
        onChange={this.handleChange}
    /> No
</label>

<br/>
<br/>
<br/>
<br/>



<h1>Person 10</h1>

<br/>
<br/>

<label className="question">1. What is Person 10’s name?</label>
<br/>
<br/>
                <input
                type="text" 
                value={this.state.question1_10FN} 
                name="question1_10FN" 
                placeholder="First Name" 
                onChange={this.handleChange} 

                />
                <input
                type="text" 
                value={this.state.question1_10MI} 
                name="question1_10MI" 
                placeholder="MI" 
                onChange={this.handleChange} 

                />
                <input
                type="text" 
                value={this.state.question1_10LN} 
                name="question1_10LN" 
                placeholder="Last Name" 
                onChange={this.handleChange} 

                />
         
    
               
<br/>
<br/>
<br/>
<br/>  

<label className="question">2. What is Person 10’s sex?</label>
<br/>
<br/>
<label>

    <input 
        type="radio" 
        name="question2_10"
        value="male"
        checked={this.state.question2_10 === "male"}
        onChange={this.handleChange}
    /> Male
</label>
<br />
<label>
    <input 
        type="radio" 
        name="question2_10"
        value="female"
        checked={this.state.question2_10 === "female"}
        onChange={this.handleChange}
    /> Female
</label>

<br/>
<br/>
<br/>
<br/>

    


<label className="question">3. What is Person 10’s age and what is Person 10’s date of birth? For babies less than 1 year old, do not write the age in months. Write 0 as the age.</label>
            
            <br/>
            <br/>
      <input
      type="text" 
      value={this.state.question3_10age} 
      name="question3_10age" 
      placeholder="Years old on 4/01/2020" 
      onChange={this.handleChange} 

    />
    <input
      type="text" 
      value={this.state.question3_10month} 
      name="question3_10month" 
      placeholder="Month" 
      onChange={this.handleChange} 

    />
    <input
      type="text" 
      value={this.state.question3_10day} 
      name="question3_10day" 
      placeholder="Day" 
      onChange={this.handleChange} 

    />
    <input
      type="text" 
      value={this.state.question3_10year} 
      name="question3_10year" 
      placeholder="Year of Birth" 
      onChange={this.handleChange} 

    />
          
     
                
    <br/>
    <br/>
    <br/>
    <br/>
    

<label className="question">4. Related to Person 1?</label>
<br/>
<br/>
<label>

    <input 
        type="radio" 
        name="question4_10"
        value="Yes"
        checked={this.state.question4_10 === "Yes"}
        onChange={this.handleChange}
    /> Yes
</label>
<br />
<label>
    <input 
        type="radio" 
        name="question4_10"
        value="No"
        checked={this.state.question4_10 === "No"}
        onChange={this.handleChange}
    /> No
</label>

<br/>
<br/>
<br/>
<br/>






              <h1 className="thanks">Thank you for completing the 2020 Census questionnaire.</h1>





     
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
