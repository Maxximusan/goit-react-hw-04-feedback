import React from 'react';
import '../Counter/Counter.css'

class Counter extends React.Component{

    // старая запись. Под капотом у creatReactApp используется babel (транспилятор)
    // constructor() {
    //     super();

    //     this.state = {
    //         value: 7,
    //     };
    // }
    static defaultProps = {
        initialValue: 0,
//         дефолтное значение, если не передавать initalValue - в App в компоненте
}
    static propTypes = {
    // здесь пишем свои пропсы
    }
    
// аналог, который бабелом превращает запись выше
    state = {
        value: this.props.initialValue,
    };
    
    // метод перезаписывающий первоначальное значение state - через объект.
    //  this.setState({})

    // если нужно от предыдущего обновить- то функцию пишем а не объект.

    // handleIncrement = () => {
    //     this.setState((prevState) => {
    //         return {
    //             value: prevState.value + 1
    //         }
    //     })

    // вариант проще (аналогичен тому что выше)
 handleIncrement = ( ) => {
     this.setState(prevState => ({
         value: prevState.value + 1,
     }));

       this.setState(prevState => ({
         value: prevState.value + 1,
     }));

       
//         console.log('FUCK')

//         // const target = event.target или { target } = event
//         setTimeout(() => {
//             console.log(event.target);
// }, 1000);
    }
       

    handleDecrement = (event) => {
        // console.log('NO FUCK')
        // console.log(event.type);

        this.setState(prevState => ({
            value: prevState.value -1 
        }))
    }

    render() {
        return (
    <div className='Counter'>
          <span className='Counter__value'>{this.state.value}</span>
                
         <div className="Counter__controls">
                    <button type="button"
                        onClick={this.handleIncrement
                        }>Увеличить на 1</button>
                    
                    <button type="button" onClick={
                        this.handleDecrement
                                      }
                    >Уменьшить на 1</button>
        </div>
    </div>
      );
    }
}




export default Counter;