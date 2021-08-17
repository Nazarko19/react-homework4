import {useState} from "react";
import {saveCar} from "../../servis/save.car.servis";


export default function Form() {
    let [model,setModel]=useState('model')
    let [price,setPrice] = useState('price')
    let [year,setYear] = useState('year')
    let [formState,setformState] = useState({model:'',price:'',year:''})



    const onSubmitform = (e) =>{
        e.preventDefault()
        let car = {model,price,year}
        setformState({...car})
        console.log(car)
        saveCar(car);

    }



    let oninputmodel =(e) =>{
       let Model=(e.target.value)
        setModel(Model)
    }
    let oninputprice =(e) =>{
        let Price=(e.target.value)
        setPrice(Price)
    }
    let oninputyear =(e) =>{
        let Year=(e.target.value)
        setYear(Year)
    }


    return (
    <div>
      <form className={'form'} onSubmit={onSubmitform}>
        <input type="model" name={'model'} value={model} onInput={oninputmodel}/>
        <input type="price" name={'price'} value={price} onInput={oninputprice}/>
        <input type="year" name={'year'} value={year} onInput={oninputyear}/>
        <input type="submit"/>
      </form>
        <div className={'car'}>{JSON.stringify(formState)}</div>
    </div>
  );
}