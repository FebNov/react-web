import React from "react";
import Styled from "styled-components";
const DisplayWrapper = Styled.div`
    height: 30em;
    width: 100vw;
`;
const DisplayText = Styled.div`
position: relative;
width: 30em;
height: 20em;`
;

.show {
    position: absolute;
    left: -30em;
    width: 30em;
    height: 20em;
    -webkit-animation: slide-in 1s forwards;
    animation: slide-in 1s forwards;
 }
@-webkit-keyframes slide-in {
        100% { left: 0 }
      }
@keyframes slide-in {
        100% { left: 0 }
}  
;
const Action = ({ className, children }) => (
    <DisplayWrapper>
    <DisplayText>
        <div className={className}>{children}</div> 
    </DisplayText>
    </DisplayWrapper>
);
export default Action;
