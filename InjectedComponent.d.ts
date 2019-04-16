import React from "react";
export declare class InjectedComponent<InjectedProps = {}, Props = {}, State = {}> extends React.Component<Props & {
    ref?: (ref: null | WrappedComponent<any, Props>) => void;
}, State> {
    readonly injected: InjectedProps;
}
export declare type WrappedComponent<Component, Props> = {
    wrappedComponent: React.ComponentClass<Props>;
    wrappedInstance: Component;
};
