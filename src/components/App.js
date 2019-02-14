import React from 'react';
import Header from './Header';


class App extends React.Component {


    render() {
        const {children} = this.props

        
        return (
            <div>
                <Header/>
                {children}
            </div>
        )
    }
}

export default App;

// export default ({children}) => {
//     return (
//         <div>
//             <Header/>
//             {children}
//         </div>
//     )
// }