# mobx-injected-component
Provides a component that can be used to type your mobx injected component with TypeScript

## Installation
`yarn add mobx-injected-component`

## Usage example
Example.tsx
```
import { InjectedComponent } from "mobx-injected-component";
import { inject, observer } from "mobx-react";
import React from "react";

import { InjectedUIStore, UI_STORE } from "../../stores/uiStore";

interface Props {
    ...
}

interface State {
    ...
}

@inject(UI_STORE)
@observer
export class ExampleScreen extends InjectedComponent<
    InjectedUIStore,
    Props,
    State
> {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle={this.injected.uiStore.showLightStatusBar ? "light-content" : "dark-content"} />
                
                ...
            </View>
        );
    }
}
```

uiStore.ts
```
import { action, observable } from "mobx";

class UIStore {
    @observable
    showLightStatusBar: boolean = false;

    @action
    setShowLightStatusBar(showLightStatusBar: boolean) {
        this.showLightStatusBar = showLightStatusBar;
    }
}

export const uiStore = new UIStore();
export const UI_STORE = "uiStore";

export interface InjectedUIStore {
    uiStore: UIStore;
}
```

And don't forget to make your store available through a mobx `Provider`!
