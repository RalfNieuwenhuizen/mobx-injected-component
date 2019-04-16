import * as React from "react";
// source: https://medium.com/@prashaantt/strongly-typing-injected-react-props-635a6828acaf
// discussion: https://github.com/mobxjs/mobx-react/issues/256#issuecomment-341419935
// downside: no warning if @inject parameter is forgotten somewhere
export class InjectedComponent extends React.Component {
    get injected() {
        return this.props;
    }
}
