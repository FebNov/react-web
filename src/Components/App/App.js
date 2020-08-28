import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Page from "../Page";
import "./App.css";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       className: "hidden",
//     };
//   }
//   handleScroll() {
//     if (document.documentElement.scrollTop > 230) {
//       this.setState({
//         className: "show",
//       });
//     }
//   }

//   componentDidMount() {
//     window.onscroll = () => this.handleScroll();
//   }
//   render() {
//     return (
//       <div className="layout">
//         <div className="layout__header">
//           <Header />
//         </div>
//         <div className="layout__page">
//           <Page className={this.state.className} />
//         </div>
//         <div className="layout__footer">
//           <Footer />
//         </div>
//       </div>
//     );
//   }
// }
// export default App;
function App() {
  return (
    <div className="layout">
      <div className="layout__header">
        <Header />
      </div>
      <div className="layout__page">
        <Page />
      </div>
      <div className="layout__footer">
        <Footer />
      </div>
    </div>
  );
}
export default App;
// console.log(document.documentElement.scrollTop);
